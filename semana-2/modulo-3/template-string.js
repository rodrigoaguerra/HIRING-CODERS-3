let meuNome = 'JC';
let meuSobrenome = 'Bombardelli';
let minhaProfissao = 'Blockchain Developer';

// sem template string
console.log(
    'Olá, eu sou ' +
    meuNome + 
    ' ' +
    meuSobrenome +
    ' minha profissão é : ' +
    minhaProfissao
);

console.log(`Olá, eu sou ${meuNome} ${meuSobrenome} e minha pofissão é: ${minhaProfissao}`);

console.log(`O resultado da soma de  1 + 1 = ${1 + 1}`);

console.log(`O objeto json ${{ chave : 'valor'}}`);

let meuObjeto =  {
    chave: 'novo valor',
}
