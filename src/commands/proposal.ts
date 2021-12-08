import {Command, flags} from '@oclif/command'
import { CacheflowApi } from '../api'
import { CreateProposalRequest } from "../api/types";
import {cli} from 'cli-ux';
import * as faker from 'faker';

export default class ProposalCommand extends Command {
  static description = 'describe the command here'
  
  static examples = [
    `$ cacheflow proposal list`,
    `$ cacheflow proposal activate -i <id>`,
    `$ cacheflow proposal create`,
  ]

  static flags = {
    help: flags.help({char: 'h'}),
    // flag with a value (-n, --name=VALUE)
    pid: flags.string({char: 'p', description: 'id to activate'}),
  }

  static args = [{name: 'subcommand'}]

  async run() {
    const {args, flags} = this.parse(ProposalCommand)
    
    this.log(`Running proposal command ${args.subcommand}`);

    switch ( args.subcommand ) { 
        case 'list':
            this.list();
            break;
        case 'create':
            this.create();
            break;
        case 'activate':
            this.activate(flags.pid!);
            break;
        default:
            this.warn(`Command not found ${args.subcommand}`);
            break;

    }    
  }

  activate(id:string) {
    const apiClient = new CacheflowApi();
    const response: Promise<any> = apiClient.activateProposal(id);
    response.then( data => {
        this.log(`Proposal status is now ${data.status}`);
    })
  }

  create() {
    const body:CreateProposalRequest = {
        name: "My proposal",
        orderNumber: "1234ABCD",
        startDate: "2022-01-09",
        termType: "month",
        termQty: 12,
        amount: 700000,
        status: "draft",
        customTerms: "Some more info on bananas",
        contacts: [ {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            role: "buyer",
            customer: {
                name: faker.company.companyName(),
                address: faker.address.streetAddress(),
                tin: faker.datatype.number(100000).toString()
            }
        }],
        paymentPlanSetId: process.env.PLAN_SET_ID,
        itemIds: [process.env.PRODUCT_ID!]
    };

    const apiClient = new CacheflowApi();
    const response: Promise<any> = apiClient.createProposal(body);
    response.then( data => {
        this.log(`Proposal created  ${data.id}`);
    })
  }

  list() {
    const apiClient = new CacheflowApi();
    const proposals:Promise<any[]> = apiClient.getProposals();
    proposals.then(data => {
        cli.table(data, {
            id: {
            },
            name: {
            minWidth: 7,
            },
            customer: {
            get: row => row.customer?.name
            },
            amount: {
            },
            status: {
            }

        }, {
            printLine: this.log,
            ...flags, // parsed flags
        });
    });
  }
}
