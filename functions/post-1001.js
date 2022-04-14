exports.handler = async (event, context) => {
  if (event.headers.referrer && event.headers.referrer.includes('mydomain.com')) {
   return {
      statusCode: 301,
      headers: {
        location: 'https://www.google.com/'
      }
    }
} else {
  let pathName = location.pathname.split('/')[2].split('-')
    return {
      
      }
    }
}
}
