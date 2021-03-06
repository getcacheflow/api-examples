
This project contains an olif implementation to illustrate how to use the cacheflow api.

The commands represent different calls and can be used as an example of the calls.

## Setup

See [./SETUP.md](./SETUP.md) for setting up your API key and webhooks

## Using examples

To build:
* `yarn` - to install dependencies
* `yarn prepack` - to setup the olif files 

Create a file called `.env` with the following variables:

```
API_TOKEN=567fde7b94ff711111111111111111111111
API_HOST=https://api.sandbox.getcacheflow.com | https://api.getcacheflow.com
API_HOST_HEADER=bananastand.api.sandbox.getcacheflow.com | bananastand.api.getcacheflow.com
PRODUCT_ID=c7cb9e42-0277-111111111
PLAN_SET_ID=4193b599-111111111
```

## Running examples

To run without installing globally:
* `./bin/run -h` - to see list of commands 

For proposals:
* `./bin/run proposal create`
* `./bin/run proposal activate -i <id of proposal>` - activate proposal
* `./bin/run proposal list` - list proposals

## Proposal fields

See [./src/api/types.ts](./src/api/types.ts) for type information

### Proposal check out experience will be at
https://{domain}.checkout.{env}.getcacheflow.com/p/{id}?email=bob@avengers.com