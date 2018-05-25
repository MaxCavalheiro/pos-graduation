var http = require('http');

var server = http.createServer(function(request, response) {
	response.writeHead(200, 
		{"Content-Type" : "text/html"}
);

	if (request.url === '/') {
		response.write('<h1>Meu App js </h1>')
	} else if (request.url === '/pos') {
		response.write('<h1>Senac</h1>')
	} else {
		response.write('Essa rota não existe')
	}
response.end();
});

server.listen(3000, function() {
	console.log('Servidor rodando! Acesse http://localhost:3000')
});
