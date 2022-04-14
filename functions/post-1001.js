exports.handler = async event => {
  if (event.headers.referrer.includes('pinterest.com')) {
    return {
      statusCode: 301,
      headers: {
        location: 'https://www.google.com/'
      }
    }
  } 
}
