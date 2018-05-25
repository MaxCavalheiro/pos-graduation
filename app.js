var http = require('http');

var server = http.createServer(function(request, response) {
	response.writeHead(200, 
		{"Content-Type" : "text/plain"}
);
response.end("Meu app JS");
});

server.listen(3000, function() {
	console.log('Servidor rodando! Acesse http://localhost:3000')
});
