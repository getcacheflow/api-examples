export interface CreateProposalRequest {
    name: string;             // required

    /** @format int64 */
    amount: number;           // the amount in cents
  
    /** @format date */
    startDate?: string;       // if not supplied the start date will be the accept date of the proposal
  
    /** @format date */
    expiresAt?: string;       // if not set it will never expire
    orderNumber?: string;     // an external identifier, invoice or order number
  
    /** @format uuid */
    paymentPlanSetId?: string; // required to activate
    contactIds?: string[];     // a list of preexisting contacts
    itemIds?: string[];        // a list of products
    contacts?: Contact[];      // the contacts that have access to this proposal
    termType: "month" | "quarter" | "year";
    termQty: number;           // the number of months, quarters, years for this proposal
    status?: "draft" | "active";
    customTerms?: string;      // anything else you want to add in this proposal
  
    /** @format uuid */
    customerId?: string;       // a preexisting customer id
    customer?: Customer;
  }

export interface Customer {
    /** @format uuid */
    id?: string;               // a preexisting id
    name?: string;             // first and last name of the customer
    externalId?: string;       // a unique identifier from another system
    source?: string;           // the source system for this customer. ex: Salesforce
    address?: string;          // optional
    tin?: string;              // optional
}

export interface Contact {
    /** @format uuid */
    id?: string;                // a preexisting id

    firstName: string;
    lastName: string;
    email: string;              // unique email for this contact for this customer
    role?: string;
    customer?: Customer;        // the customer this contact is associated with
    externalId?: string;        // a unique identifier from another system
    source?: string;            // the source system for this customer. ex: Salesforce
}
