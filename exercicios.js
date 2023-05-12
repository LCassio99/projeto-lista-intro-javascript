// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo(altura, largura) {
  // implemente sua lógica aqui
  
  const areaRetangulo = altura * largura

  return areaRetangulo

}

console.log(calculaAreaRetangulo(8,5))

// EXERCÍCIO 02
function imprimeIdade(anoAtual, anoNascimento) {
  // implemente sua lógica aqui
  
  const idade = anoAtual - anoNascimento

  return idade

}

console.log(imprimeIdade(2023,2001))

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui

  const resultadoIMC = peso / (altura * altura)

  return resultadoIMC

}

console.log(calculaIMC(87,1.7))

// EXERCÍCIO 04
function imprimeInformacoesUsuario(nome, idade, email) {
  // implemente sua lógica aqui

  const nomeUsuario = 'Luciano'
  const idadeUsuario = '21'
  const emailUsuario = 'lucianocassio66@gmail.com'


  return `Meu nome é ${nomeUsuario}, tenho ${idadeUsuario} anos, e o meu email é ${email}.`

}

console.log(imprimeInformacoesUsuario('Luciano','21','lucianocassio66@gmail.com'))

// EXERCÍCIO 05
function imprimeTresCoresFavoritas(cor1, cor2, cor3) {
  // implemente sua lógica aqui

  const listaCores = ['Preto', 'Branco', 'Cinza']

  return listaCores

}

console.log(imprimeTresCoresFavoritas('Preto','Branco','Cinza'))

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui

  const palavra = 'minúsculo'

  return palavra.toUpperCase()

}

console.log(retornaStringEmMaiuscula('minúsculo'))

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui

  const lucro = custo / valorIngresso

  return lucro

}

console.log(calculaIngressosEspetaculo(8000,80))

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

  const comparacao = string1 > string2

  return comparacao

}

console.log(checaStringsMesmoTamanho('Luciano','Lucius'))

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

  return array[0]

}

console.log(retornaPrimeiroElemento(['água', 'suco', 'refri']))

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

  return array[array.length - 1]
}

console.log(retornaUltimoElemento(['Preto', 'Branco', 'Cinza', 'azul', 'rosa']))

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

  return array.reverse()

}

console.log(trocaPrimeiroEUltimo(['inicio','meio','fim']))

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

  let checagem = string1 === string2

  return checagem

}

console.log(checaIgualdadeDesconsiderandoCase('ola'.toLowerCase(),'OLA'.toLowerCase()))

// EXERCÍCIO 13
function checaRenovacaoRG(atual, nascimento, emissao) {
  // implemente sua lógica aqui

  const idade = atual - nascimento
  const renova5Anos = idade <= 20 && atual - emissao >= 5 && atual - emissao <= 9
  const renova10Anos = idade > 20 && idade < 50 && atual - emissao >= 10 && atual - emissao <= 14
  const renova15Anos = idade > 50 && atual - emissao >= 15

  return `Renovação 5 anos: ${renova5Anos} \nRenovação 10 anos: ${renova10Anos} \nRenovação 15 anos: ${renova15Anos} `

}

console.log(checaRenovacaoRG(2023,1972,2008))

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

  const anoBissexto = ano % 400 === 0 || ano % 4 === 0

  return anoBissexto

}

console.log(checaAnoBissexto(2012))

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu(idade,ensinoMedio,disponibilidade) {
  // implemente sua lógica aqui

  const validade = idade === 'sim' && ensinoMedio === 'sim' && disponibilidade === 'sim'

  return validade

}

console.log(checaValidadeInscricaoLabenu('sim','sim','sim'))