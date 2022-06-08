const http = require('http');
const url = require('url');
const queryString = require('query-string');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {

  // Pegar a pergunta na url
  const params = queryString.parse(url.parse(req.url, true).search);
  
  // verificar a pergunta e escolher uma reposta
  let resposta = '';
  if(params.pergunta === 'melhor-filme') {
    resposta = 'star wars';
  } else if(params.pergunta === 'melhor-tecnologia-backend') {
    resposta = 'nodejs';
  } else {
    resposta = 'não sei, desculpe :(';
  }

  // retorna a resposta escolhida
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(resposta);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});