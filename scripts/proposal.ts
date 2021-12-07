import { AxiosResponse } from "axios";
import * as dotenv from "dotenv";
const axios = require('axios').default;

dotenv.config();

console.log(`Using api token: ${process.env.API_TOKEN}`);
console.log(`Using api host: ${process.env.API_HOST}`);

console.log('API: proposal list');
const url = `${process.env.API_HOST}`
const headers: any = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.API_TOKEN}`,
    'Host': `${process.env.API_HOST_HEADER}`
  }

const instance = axios.create({
    baseURL: url,
    headers: headers
  });

instance.get('/api/latest/proposals').then((response:AxiosResponse) => {
    console.log(response.status);
    console.log(response.data);    
  });


console.log("posting proposal");  
const body = {
    "name": "Lucille Bluths House",
    "orderNumber" : "1234ABCD",
    "startDate": "2022-01-09",
    "termType": "quarter",
    "termQty": "12",
    "amount": 800000,
    "status": "draft",
    "contacts": [ {
        "firstName": "Buster",
        "lastName": "Bluth",
        "email": "buster@juicebox.test",
        "role": "buyer",
        "customer": {
            "name": "Balboa Bay Window",
            "address": "1221 West Coast Highway",
            "tin": "456123"
        }
    }],
    "paymentPlanSetId": process.env.PLAN_SET_ID,
    "itemIds": [process.env.PRODUCT_ID]
}


instance.post('/api/latest/proposals', body).then((response:AxiosResponse) => {
console.log(response.status);
console.log(response.data);
});
