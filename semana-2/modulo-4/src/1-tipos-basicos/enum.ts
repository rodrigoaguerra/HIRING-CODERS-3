enum Permissoes {
    admin = 'ADMIN',
    editor = 'EDITOR',
    comum = 'COMUM',
}

enum Cores {
    red = '#FF0000',
    black = '#000',
}

const usuario = {
    perfil: Cores.black,
    nivel: Permissoes.admin
}

console.log(usuario);
