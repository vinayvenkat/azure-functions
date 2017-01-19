module.exports = function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    context.log('This is where it all starts this is where it gets good')
    context.log('some data: ' + context.bindings.req.version)
    context.log('req data: ' + req.body.context.resourceGroupName)
    context.log('Details: ' + req.body.context.details)
    context.log('Old Capacity' + req.body.context.oldCapacity)
    context.log('New Capacity' + req.body.context.newCapacity)
    if (req.query.name || (req.body && req.body.name)) {
        res = {
            // status: 200, /* Defaults to 200 */
            body: "Hello " + (req.query.name || req.body.name)
        };
    }
    else {
        res = {
            status: 400,
            body: "Please pass a name on the query string or in the request body"
        };
    }
    context.done(null, res);
};
