// 1 - crie uma função que exiba uma mensagem no console
function mensagem() {
    console.log('Trabalhando com Funções');
}
mensagem()

// 2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console
function meuNome(nome) {
    console.log(`Meu nome é ${nome}`)
}
meuNome('Aline')

// 3 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console
function info(apelido, idade, musical) {
    console.log(`Meu nome é ${apelido}, minha idade é ${idade} e meu estilo musical preferido é ${musical}`);
}
info('Aline', 30, 'Pagode')

// 4 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console
function info(filme, musica) {
    console.log(`Meu filme preferido é ${filme} e minha música preferida é ${musica}`);
}
info('"Como se Fosse a Primeira Vez"', '"Melhor eu Ir do Pericles"')

// *Bônus:
// 5 - crie uma função que retorne o triplo do número recebido no parâmetro da função
function double(number) {
    return number * 3
}
console.log(double(5))