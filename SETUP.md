

## API Token
In order to use the api, you must setup an api token by signing in to your environment and going to `Settings` at the bottom of the screen.
In [settings](https://app.sandbox.getcacheflow.com/settings), go to `API` and create an API token. Copy the token and use it as an `Authorization Bearer <apitoken>` header.


The API calls go to your personal domain which follows `<org flow domain>.api.getcacheflow.com`, this plus the API Token header are required to support API calls.

## API Webhook

After creating an API Token, you can also register a webhook that is put in via the `Webhooks` tab in settings. 

Pick the event to listen for and the resource to listen at, and then enter the url to point to your webhook endpoint.

When a status change for instance happens on a proposal, we will send you a notification that that occurred via a `PUT` in the format:

```
{ 
    "event_type":"status_changed", 
    "reference_type":"proposal", 
    "id":"<id of object>"
}
```
