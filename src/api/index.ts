import {AxiosInstance, AxiosResponse} from "axios";
import * as dotenv from "dotenv";
import {CreateProposalRequest} from "./types";

const axios = require('axios').default;

dotenv.config();

console.log(`Using api token: ${process.env.API_TOKEN}`);
console.log(`Using api host: ${process.env.API_HOST}`);

console.log('API: proposal list');

export class CacheflowApi {

    url: string;
    headers: any;

    constructor() {
        this.url = `${process.env.API_HOST}`;
        this.headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.API_TOKEN}`,
            'Host': `${process.env.API_HOST_HEADER}`
        };
    }

    client(): AxiosInstance {
        return axios.create({
            baseURL: this.url,
            headers: this.headers
        });
    }

    createProposal(body: CreateProposalRequest): Promise<any> {
        let responseObj: Promise<any> = this.client()
            .post('/api/latest/proposals', body)
            .then((response: AxiosResponse) => {
                return response.data;
            }).catch(error=>{
                console.log(error.response.data);
            });
        return responseObj;
    }


    activateProposal(id: string): Promise<any> {
        let responseObj: Promise<any> = this.client()
            .post(`/api/latest/proposals/${id}/activate`)
            .then((response: AxiosResponse) => {
                return response.data;
            }).catch(error=>{
                console.log(error.response.data);
            })
        return responseObj;
    }

    getProposals(): Promise<any[]> {
        return this.client()
            .get('/api/latest/proposals')
            .then((response: AxiosResponse) => {
                return response.data;
            }).catch(error=>{
                console.log(error.response.data);
            })
    }
}