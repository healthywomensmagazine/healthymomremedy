if (event.headers.referrer.includes('mydomain.com')) {
 // process the function
} else {
  return {
    statusCode: 401,
    body: JSON.stringify('Unauthorized')
  }
}
