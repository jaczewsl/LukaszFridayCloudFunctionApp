const figlet = require("figlet");

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const name = (req.query.name || (req.body && req.body.name));

    let responseMessage = "Enter a name";

    if(name) {
        figlet(name, (err, data)=>{
            if(err){
                responseMessage = "error";
            }else{
                responseMessage = data;
            }
        });
    }

    // const responseMessage = name
    //     ? "Hello, " + name + ". This HTTP triggered function executed successfully."
    //     : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}