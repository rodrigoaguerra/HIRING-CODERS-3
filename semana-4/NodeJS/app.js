const http = require('http');
const url = require('url');
const queryString = require('query-string');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {

  let resposta;
  const urlparse = url.parse(req.url, true);

  // Receber informacoes do usuario
  const params = queryString.parse(urlparse.search);
  
  // localhost:3000/criar-usuario?nome=erik&idade=80&id=1


  // Criar um usuario - Atualizar um usuario
  if(urlparse.pathname === '/criar-usuario') {
    // Salvar as informacoes
    fs.writeFile(`users/${params.id}.json`, JSON.stringify(params), function (err) {
      if (err) throw err;
      resposta = 'Usuario criado com sucesso !!!';
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end(resposta);
    });

  
  } 
  // Selecionar usuario
  else if(urlparse.pathname === '/selecionar-usuario') { 
    fs.readFile(`users/${params.id}.json`, function(err, data) {
      resposta = data;
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(resposta);
    });
  }
  // Remover o usuario
  else if(urlparse.pathname === '/deletar-usuario') { 
    fs.unlink(`users/${params.id}.json`, function (err) {
      resposta = err ? 'Usuario nao encontrado.' : 'Usuario deletado com sucesso !!!';
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end(resposta);
    });
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// http://localhost:3000/criar-usuario?nome=erik&idade=80&id=1
// http://localhost:3000/selecionar-usuario?id=1
// http://localhost:3000/deletar-usuario?nome=erik&idade=80&id=1