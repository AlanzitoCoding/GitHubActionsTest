// 1. Soma dois números
function soma(a, b) {
    return a + b;
}

// 2. Verifica se um número é par
function ehPar(numero) {
    return numero % 2 === 0;
}

// 3. Converte uma string para maiúsculas
function paraMaiusculas(texto) {
    return texto.toUpperCase();
}

// 4. Filtra números maiores que um certo valor
function filtrarMaioresQue(lista, limite) {
    return lista.filter(num => num > limite);
}

// 5. Obtém dados de um usuário pelo ID (mockável)
function obterUsuario(id, db) {
    return db.find(user => user.id === id) || null;
}

// 6. Chama uma API externa para obter temperatura (mockável)
async function obterTemperatura(cidade, api) {
    return await api.getTemperatura(cidade);
}

// 7. Conta a ocorrência de uma palavra em um texto
function contarOcorrencias(texto, palavra) {
    const regex = new RegExp(`\\b${palavra}\\b`, "gi");
    return (texto.match(regex) || []).length;
}

module.exports = {
    soma,
    ehPar,
    paraMaiusculas,
    filtrarMaioresQue,
    obterUsuario,
    obterTemperatura,
    contarOcorrencias
}