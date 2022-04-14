exports.handler = async event => {
if (event.headers.referrer.includes('mydomain.com')) {
 // process the function
}
}
