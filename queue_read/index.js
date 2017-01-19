module.exports = function (context, myTimer) {
    var timeStamp = new Date().toISOString();

    context.log('Node.js timer trigger function ran!', timeStamp);   
    context.log(GetEnvironmentVariable("AzureWebJobsStorage"));
    context.log(GetEnvironmentVariable("WEBSITE_SITE_NAME"));
    context.log(GetEnvironmentVariable("AzureWebJobsEndpoint"));
	var message = 'Service Bus queue message created at ' + timeStamp;
	context.log('Node.js queue trigger function processed work item', context.bindings.myQueue)
	context.log('queueTrigger = ', context.bindingData.queueTrigger);
	context.bindings.myQueue = message;	

    context.done();
};

function GetEnvironmentVariable(name)
{
    return name + ": " + process.env[name];
}
