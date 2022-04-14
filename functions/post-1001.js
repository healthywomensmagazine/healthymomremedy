exports.handler = async event => {
  if (event.headers.referer.includes('pinterest')) {
    return {
      statusCode: 301,
      headers: {
        location: 'https://www.google.com/'
      }
    }
  } 
}
