# Rate Limiter

## Introduction
A rate limiter is a mechanism that controls the amount of incoming requests to a server within a specified time frame. This helps prevent abuse and ensures fair usage of resources.

## Implementation Logic
In this implementation, we initialize an empty object called `requestLogs` to keep track of user requests.

### Handling Requests
1. We add the user's IP address to the `userIP` variable.
2. We check if the user exists in the `requestLogs` object:
   ```javascript
   if (!requestLogs[userIP]) {
       requestLogs[userIP] = { count: 0, timeStamp: Date.now() };
   }
   ```
   If the user does not exist, we create a dynamic object with nested key-value pairs:
   ```javascript
   {
       count: 0,
       timeStamp: Date.now()
   }
   ```
3. We increment the count by 1. If the count exceeds the defined limit, we send a `429` status code indicating too many requests.

## Potential Issues
Consider the scenario where a user exhausts all their requests just before the reset time. For example, if the limit is set to 5 requests per 10 seconds, and a user makes their 5th request at the 9th second, they will be blocked until the 10th second when their request count resets.

## Conclusion
This rate limiter implementation provides a basic structure for controlling user requests. Further improvements could include more sophisticated handling of edge cases and better logging for monitoring purposes.



