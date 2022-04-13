exports.handler = async event => {
  if (event.headers.referer.includes('pinterest')) {
    return {
      statusCode: 301,
      headers: {
        'cache-control': 'public, max-age=0, must-revalidate',
        location: decodeURIComponent(event.queryStringParameters.url)
      }
    }
  } else {
    return {
      statusCode: 301,
      headers: {
        'cache-control': 'public, max-age=0, must-revalidate',
        location: process.env.URL + '/' + decodeURIComponent(event.queryStringParameters.url).split('/')[3] + '/'
      }
    }
  }
}
