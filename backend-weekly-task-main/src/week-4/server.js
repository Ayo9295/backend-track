const http = require('http');
const fs = require('fs');
const hostname = '127.0.0.1';
const port = 3050
const server = http.createServer((req, res) => {
console.log(req.url, req.method);
res.setHeader('Content-Type', 'text/html');
fs.readFile('C:/Users/Isinyemeze/Documents/ICT-YEP/backend-weekly-task-main/week-4/index.html', (err, data) => {
if (err) {
console.log(err)
res.end()
} else {
res.end(data);
}
})
})
server.listen(port, hostname, () => {
console.log('listening for request on port 3050');
})