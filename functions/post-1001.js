import {useRouter} from "next/router";
exports.handler = async event => {
  const router = useRouter();
  if (event.headers.referrer && event.headers.referrer.includes('pinterest')) {
    return {
      statusCode: 301,
      headers: {
        location: 'https://www.google.com/'
      }
    }
  } else {
    let pathName = location.pathname.split('/')[2].split('-')
    return {
      statusCode: 301,
      headers: {
        location: process.env.URL + pathName[0] + '/' + pathName[1]
      }
    }
  }
}
