"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const url = __importStar(require("url"));
const query_string_1 = require("query-string");
const fs_1 = require("fs");
// definição de porta
const port = 5000;
const server = (0, http_1.createServer)((request, response) => {
    const urlparse = url.parse(request.url ? request.url : '', true);
    let resposta;
    // Receber informacoes do usuario
    const params = (0, query_string_1.parse)(urlparse.search ? urlparse.search : '');
    // Criar um usuario - Atualizar um usuario
    if (urlparse.pathname === '/criar-usuario') {
        // Salvar as informacoes
        (0, fs_1.writeFile)(`users/${params.id}.json`, JSON.stringify(params), function (err) {
            if (err)
                throw err;
            resposta = 'Usuario criado com sucesso !!!';
            response.statusCode = 200;
            response.setHeader('Content-Type', 'text/plain');
            response.end(resposta);
        });
    }
    // Selecionar usuario
    else if (urlparse.pathname === '/selecionar-usuario') {
        (0, fs_1.readFile)(`users/${params.id}.json`, function (err, data) {
            resposta = data;
            response.statusCode = 200;
            response.setHeader('Content-Type', 'application/json');
            response.end(resposta);
        });
    }
    // Remover o usuario
    else if (urlparse.pathname === '/deletar-usuario') {
        (0, fs_1.unlink)(`users/${params.id}.json`, function (err) {
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
