const {
    soma,
    ehPar,
    paraMaiusculas,
    filtrarMaioresQue,
    obterTemperatura,
    obterUsuario,
    contarOcorrencias
} = require('./functions')

describe('Testes de soma', () => {
    test('Positivo mais Positivo', () => {
        expect(soma(10, 10)).toBe(20)
    })
    
    test('Positivo mais Negativo', () => {
        expect(soma(10, -10)).toBe(0)
    })

    test('Negativo mais Negativo', () => {
        expect(soma(-10, -10)).toBe(-20)
    })
})

describe('Teste de números pares', () => {
    test('Número é par', () => {
        expect(ehPar(10)).toBeTruthy()
    })

    test('Número é ímpar', () => {
        expect(ehPar(11)).toBeFalsy()
    })
})

describe('Teste de conversão de strings para maiúscula', () => {
    test('Converter letras minúsculas para maiúsculas', () => {
        expect(paraMaiusculas('hello world!')).toBe('HELLO WORLD!')
    })
})

describe('Teste de filtro de números', () => {
    test('Filtrar números maiores que o limite', () => {
        const vector = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        const limit = 5

        expect(filtrarMaioresQue(vector, limit)).toEqual([6, 7, 8, 9])
    })
})

describe('Teste de busca de usuário', () => {
    test('Busca do usuário pelo ID', () => {
        const dbMock = [{ user: 'Pedro Alan', id: '2006Pedro' }, { user: 'Luiz Henrique', id: '2010Luiz' }, { user: 'Adam Vinícius', id: '2019Adam' }] 
        const user = obterUsuario('2006Pedro', dbMock)

        expect(user).toEqual({ user: 'Pedro Alan', id: '2006Pedro' })
    })

    test('Busca com resultado nulo', () => {
        const dbMock = [{ user: 'Pedro Alan', id: '2006Pedro' }, { user: 'Luiz Henrique', id: '2010Luiz' }, { user: 'Adam Vinícius', id: '2019Adam' }] 
        const user = obterUsuario(null, dbMock)

        expect(user).toEqual(null)
    })
})

describe('Teste de busca de temperatura por API', () => {
    test('Verificação da temperatura pela cidade', async () => {
        const apiMock = { getTemperatura: jest.fn().mockResolvedValue(20) }
        const temp = await obterTemperatura('Salvador', apiMock)

        expect(apiMock.getTemperatura).toHaveBeenCalledWith('Salvador')
        expect(temp).toBe(20)
    })
})

describe('Teste de contagem de ocorrências', () => {
    test('Contagem de ocorrências num texto', () => {
        const text = 'ser arrogante é como ser um elefante na África, se você tomar um tiro de bazuca você MORRE'
        const word = 'ser'

        expect(contarOcorrencias(text, word)).toBe(2)
    })

    test('Contagem de ocorrência sem resultado', () => {
        const text = 'ser arrogante é como ser um elefante na África, se você tomar um tiro de bazuca você MORRE'
        const word = 'não'

        expect(contarOcorrencias(text, word)).toBe(0)
    })
})