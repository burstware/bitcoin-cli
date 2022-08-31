const http = require("http")
const {promisify} = require('util')
const fetch = promisify(http.get)

// CLI: https://nodejs.org/en/knowledge/command-line/how-to-parse-command-line-arguments/

// HTTP: https://nodejs.org/api/http.html

// fetch(url)

const port = 8332
const user = 'jbaczuk'
const password = 'throe-POTOMAC-escape'

const data = JSON.stringify({"jsonrpc": "1.0", "id": "curltest", "method": "getblockcount", "params": []})
  
  const options = {
    hostname: 'server.local',
    port,
    auth: `${user}:${password}`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': data.length
    }
  }
  
  const req = http.request(options, res => {
    console.log(`statusCode: ${res.statusCode}`)
  
    res.on('data', d => {
      process.stdout.write(d)
    })
  })
  
  req.on('error', error => {
    console.error(error)
  })
  
  req.write(data)
  req.end()