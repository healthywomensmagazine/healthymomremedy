exports.handler = async event => {
  if (event.headers.referrer && event.headers.referrer.includes("pinterest")) {
    return {
      statusCode: 301,
      headers: {
        
      }
    }
  } else {
    let pathName = location.pathname.split('/')[2].split('-')
    return {
      statusCode: 301,
      headers: {
        
      }
    }
  }
}
