import { createServer, IncomingMessage, ServerResponse } from 'http';
import * as url from 'url';
import { parse } from 'query-string';
import { writeFile, readFile, unlink } from 'fs';

// definição de porta
const port: Number = 5000;

const server = createServer((request: IncomingMessage, response: ServerResponse) => {
    const urlparse = url.parse(request.url ? request.url : '', true);
    
    let resposta;

    // Receber informacoes do usuario
    const params = parse(urlparse.search ? urlparse.search  : '');

    // Criar um usuario - Atualizar um usuario
    if(urlparse.pathname === '/criar-usuario') {
        // Salvar as informacoes
        writeFile(`users/${params.id}.json`, JSON.stringify(params), function (err: any) {
            if (err) throw err;
            resposta = 'Usuario criado com sucesso !!!';
            response.statusCode = 200;
            response.setHeader('Content-Type', 'text/plain');
            response.end(resposta);
        });
    }
    // Selecionar usuario
    else if(urlparse.pathname === '/selecionar-usuario') { 
        readFile(`users/${params.id}.json`, function(err, data) {
            resposta = data;
            response.statusCode = 200;
            response.setHeader('Content-Type', 'application/json');
            response.end(resposta);
        });
    }
    // Remover o usuario
    else if(urlparse.pathname === '/deletar-usuario') { 
        unlink(`users/${params.id}.json`, function (err) {
            resposta = err ? 'Usuario nao encontrado.' : 'Usuario deletado com sucesso !!!';
            response.statusCode = 200;
            response.setHeader('Content-Type', 'text/plain');
            response.end(resposta);
        });
    }
});

server.listen(port, () => {
    console.log(`Server running at ${port}`);
});

// http://localhost:5000/criar-usuario?nome=erik&idade=80&id=1
// http://localhost:5000/selecionar-usuario?id=1
// http://localhost:5000/deletar-usuario?nome=erik&idade=80&id=1