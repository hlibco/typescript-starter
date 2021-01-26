import http from 'http'
import { config } from './config'
import { sum } from './helpers/math'

export const server = http.createServer(requestListner)
server.listen(config.port, () => {
  console.log(`Server is running on http://0.0.0.0:${config.port}`)
})

async function requestListner(request, response) {
  const visitors = sum(2, 8)
  const data = { message: `${visitors} visitors at ${request.url}` }

  response.writeHead(200, {
    'Content-Type': 'application/json'
  })
  response.end(JSON.stringify(data))
}
