const fs = require('fs')
const MarkdownIt = require('markdown-it')
   
exports.handler = async (event) => {
	if (event.headers.referer && event.headers.referer.includes("pinterest")) {
    return {
      statusCode: 301,
      headers: {
        location: 'https://www.google.com/'
      }
    }
  }
    else {
    const { postId } = event.queryStringParameters;
    const fileContents = fs.readFileSync(`./posts/post-${postId}.md`, 'utf8')
    const md = new MarkdownIt();
    const result = md.render(fileContents);
    

	return {
        statusCode: 200,
        headers: {
            "Content-Type": "text/html",
        },
        body: result,
    }
	}
}
