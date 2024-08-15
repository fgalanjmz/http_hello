// Importar el modulo http
const http = require('http');

// Crear el servidor
const server = http.createServer((req, res) => {
    // Verificar la ruta y el método
    if (req.url === '/hello' && req.method === 'GET') {
        // Establecer el encabezado de respuesta
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        // Enviar la respuesta
        res.end('Hello world');
    } else {
        // Responder con un 404 si la ruta no es /hello
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

// Escuchar en el puerto 3000
server.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});
