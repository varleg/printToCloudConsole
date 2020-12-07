const df = require("durable-functions");
module.exports = async function (context, req) {
    context.log(process.env.LETS_TEST);
}
