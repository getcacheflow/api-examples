export interface CreateProposalRequest {
    name?: string;
    description?: string;
  
    /** @format int64 */
    amount?: number;
  
    /** @format date */
    startDate?: string;
  
    /** @format date */
    expiresAt?: string;
    orderNumber?: string;
  
    /** @format uuid */
    paymentPlanSetId?: string;
    contactIds?: string[];
    itemIds?: string[];
    contacts?: Contact[];
    termType?: "month" | "quarter" | "year";
  
    /** @format int32 */
    termQty?: number;
    status?: "draft" | "active" | "accepted" | "expired" | "cancelled";
    customTerms?: string;
  
    /** @format uuid */
    customerId?: string;
    customer?: Customer;
  }


export interface Product {
    /** @format uuid */
    id?: string;
  
    /** @format date-time */
    createdAt?: string;
    createdBy?: string;
  
    /** @format date-time */
    updatedAt?: string;
    updatedBy?: string;
    name?: string;
    description?: string;
    info?: string;
    url?: string;
    status?: "pending" | "active" | "inactive";
  }


  export interface PaymentMethod {
    /** @format uuid */
    id?: string;
  
    /** @format date-time */
    createdAt?: string;
    createdBy?: string;
  
    /** @format date-time */
    updatedAt?: string;
    updatedBy?: string;
    name?: string;
    description?: string;
  
    /** @format int32 */
    displayOrder?: number;
    active?: boolean;
    paymentType?: "ach" | "direct_debit" | "wire" | "cc" | "check" | "manual";
  }

  export interface ProposalItem {
    /** @format uuid */
    id?: string;
  
    /** @format date-time */
    createdAt?: string;
    createdBy?: string;
  
    /** @format date-time */
    updatedAt?: string;
    updatedBy?: string;
    product?: Product;
  }

  export interface ContractItem {
    /** @format uuid */
    id?: string;
  
    /** @format date-time */
    createdAt?: string;
    createdBy?: string;
  
    /** @format date-time */
    updatedAt?: string;
    updatedBy?: string;
    product?: Product;
  }
  
  export interface Customer {
    /** @format uuid */
    id?: string;
  
    /** @format date-time */
    createdAt?: string;
    createdBy?: string;
  
    /** @format date-time */
    updatedAt?: string;
    updatedBy?: string;
    name?: string;
    externalId?: string;
    source?: string;
    address?: string;
    tin?: string;
  }

  export interface Contact {
    /** @format uuid */
    id?: string;
  
    /** @format date-time */
    createdAt?: string;
    createdBy?: string;
  
    /** @format date-time */
    updatedAt?: string;
    updatedBy?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    role?: string;
    customer?: Customer;
    externalId?: string;
    source?: string;
  }

  export interface ProposalContact {
    /** @format uuid */
    id?: string;
  
    /** @format date-time */
    createdAt?: string;
    createdBy?: string;
  
    /** @format date-time */
    updatedAt?: string;
    updatedBy?: string;
    contact?: Contact;
  }

  export interface BillingMethod {
    /** @format uuid */
    id?: string;
  
    /** @format date-time */
    createdAt?: string;
    createdBy?: string;
  
    /** @format date-time */
    updatedAt?: string;
    updatedBy?: string;
    name?: string;
    status?: "pending" | "active" | "inactive";
    paymentType?: "ach" | "direct_debit" | "wire" | "cc" | "check" | "manual";
    customer?: Customer;
    
  }

  export interface BillingSchedule {
    /** @format uuid */
    id?: string;
  
    /** @format date-time */
    createdAt?: string;
    createdBy?: string;
  
    /** @format date-time */
    updatedAt?: string;
    updatedBy?: string;
  
    /** @format date */
    dueDate?: string;
  
    /** @format int64 */
    amountDue?: number;
  
    /** @format int64 */
    amountRemaining?: number;
    status?: "pending" | "paid";
    referenceType?:
      | "advance"
      | "advanceprofile"
      | "account"
      | "apitoken"
      | "apiwebhook"
      | "contact"
      | "contract"
      | "customer"
      | "invite"
      | "paymentPlanSet"
      | "proposal"
      | "repayment"
      | "transfer"
      | "transferevent"
      | "organization"
      | "billingschedule"
      | "unknown"
      | "product"
      | "user";
  }
  
  export interface Contract {
    /** @format uuid */
    id?: string;
  
    /** @format date-time */
    createdAt?: string;
    createdBy?: string;
  
    /** @format date-time */
    updatedAt?: string;
    updatedBy?: string;
    buyer?: Customer;
  
    /** @format int32 */
    displayId?: number;
  
    /** @format date-time */
    startDate?: string;
  
    /** @format date-time */
    endDate?: string;
    name?: string;
    termType?: "month" | "quarter" | "year";
  
    /** @format int32 */
    termQty?: number;
    externalId?: string;
    source?: "quickbooks" | "manual" | "netsuite";
  
    /** @format int64 */
    outstandingAmount?: number;
  
    /** @format int64 */
    totalAmount?: number;
    orderNumber?: string;
    status?: "pending" | "active" | "past_due" | "canceled" | "unpaid";
    billingMethod?: BillingMethod;
    contractItems?: ContractItem[];
    billingSchedules?: BillingSchedule[];
    nextPaymentDue?: BillingSchedule;
    eligible?: boolean;
  }

  export interface PaymentPlan {
    /** @format uuid */
    id?: string;
  
    /** @format date-time */
    createdAt?: string;
    createdBy?: string;
  
    /** @format date-time */
    updatedAt?: string;
    updatedBy?: string;
    name?: string;
    description?: string;
  
    /** @format int32 */
    displayOrder?: number;
    active?: boolean;
    paymentMethods?: PaymentMethod[];
    paymentSchedules?: PaymentSchedule[];
  }
  
  export interface PaymentPlanSet {
    /** @format uuid */
    id?: string;
  
    /** @format date-time */
    createdAt?: string;
    createdBy?: string;
  
    /** @format date-time */
    updatedAt?: string;
    updatedBy?: string;
    name?: string;
    description?: string;
    active?: boolean;
    paymentPlans?: PaymentPlan[];
    hidden?: boolean;
  
    /** @format uuid */
    parentId?: string;
  }
  

  export interface Payment {
    /** @format int32 */
    order?: number;
  
    /** @format date */
    dueDate?: string;
  
    /** @format int64 */
    amount?: number;
  }

  export interface PaymentSchedule {
    /** @format uuid */
    id?: string;
  
    /** @format date-time */
    createdAt?: string;
    createdBy?: string;
  
    /** @format date-time */
    updatedAt?: string;
    updatedBy?: string;
    name?: string;
    description?: string;
  
    /** @format int32 */
    displayOrder?: number;
    active?: boolean;
  
    /** @format int32 */
    fee?: number;
    feeType?: "percent" | "fixed";
    timeunit?: "month" | "quarter" | "year";
  
    /** @format int32 */
    numDeferments?: number;
  
    /** @format int64 */
    total?: number;
    payments?: Payment[];
  }

  export interface ProposalEvent {
    /** @format uuid */
    id?: string;
  
    /** @format date-time */
    createdAt?: string;
    createdBy?: string;
    contact?: Contact;
    recipient?: Contact;
    eventType?: "created" | "updated" | "activated" | "viewed" | "accepted" | "invited" | "cancelled";
  }

export interface Proposal {
    /** @format uuid */
    id?: string;
  
    /** @format date-time */
    createdAt?: string;
    createdBy?: string;
  
    /** @format date-time */
    updatedAt?: string;
    updatedBy?: string;
    name?: string;
    description?: string;
  
    /** @format int64 */
    amount?: number;
  
    /** @format date */
    startDate?: string;
    termType?: "month" | "quarter" | "year";
  
    /** @format int32 */
    termQty?: number;
  
    /** @format date */
    expiresAt?: string;
    orderNumber?: string;
    status?: "draft" | "active" | "accepted" | "expired" | "cancelled";
    customTerms?: string;
  
    /** @format uuid */
    acceptedScheduleId?: string;
  
    /** @format date-time */
    acceptedAt?: string;
    proposalItems?: ProposalItem[];
    proposalContacts?: ProposalContact[];
    customer?: Customer;
    paymentPlanSet?: PaymentPlanSet;
    contract?: Contract;
    lastEvent?: ProposalEvent;
  
    /** @format date */
    endDate?: string;
  }
  