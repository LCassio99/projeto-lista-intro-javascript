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
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  altura = Number(prompt('Digite a altura do retangulo:'))
  largura = Number(prompt('Digite a largura do retangulo:'))

  areaRetangulo = altura * largura

  console.log(areaRetangulo)

  return
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  anoAtual = Number(prompt('Qual nosso ano atual?'))
  anoNascimento = Number(prompt('Qual seu ano de nascimento?'))

  idade = anoAtual - anoNascimento

  console.log(idade)

  return
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui

  const resultadoIMC = peso / (altura * altura)

  return resultadoIMC

}

console.log(calculaIMC(87, 1.7))

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  let nome = prompt('Digite seu nome:')
  let idade = prompt('Digite sua idade:')
  let email = prompt('Digite seu e-mail:')
  let mensagem = `Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`
  console.log(mensagem)

  return
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  let coresFavoritas = []

  for (let i = 1; i <= 3; i++) {
    let cores = prompt(`Digite as suas 3 cores favoritas ${i}:`)
    coresFavoritas.push(cores)
  }

  console.log(coresFavoritas)

  return
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  let letraMaiuscula = string.toUpperCase()

  return letraMaiuscula
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui

  const lucro = custo / valorIngresso

  return lucro

}

console.log(calculaIngressosEspetaculo(8000, 80))

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

  const comparacao = string1 > string2

  return comparacao

}

console.log(checaStringsMesmoTamanho('Luciano', 'Lucius'))

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
  let primeiroArray = array[0]
  let ultimoArray = array[array.length - 1]

  array[0] = ultimoArray
  array[array.length - 1] = primeiroArray

  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  let primeiraString = string1.toLowerCase()
  let segundaString = string2.toLowerCase()

  return primeiraString === segundaString
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  let anoAtual = prompt('Digite o ano atual')
  let anoNascimento = prompt('Digite o ano de nascimento:')
  let emissaoRG = prompt('Digite o ano de emissão do RG:')

  let idade = anoAtual - anoNascimento
  let periodoDaEmissao = anoAtual - emissaoRG

  let vaiRenovar = false

  if (idade <= 20){
    if (periodoDaEmissao >= 5){
      vaiRenovar = true
    }
  }else if (idade <= 50){
    if (periodoDaEmissao >= 10){
      vaiRenovar = true
    }
  }else {
    if (periodoDaEmissao >= 15){
      vaiRenovar = true
    }
  }

  console.log(vaiRenovar)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  if ((ano % 400 === 0) || (ano % 4 === 0 && ano % 100 !== 0)){
    return true
  } else {
    return false
  }
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  let idade = prompt('Você tem mais de 18 anos? (sim/nao)')
  let ensinoMedio = prompt('Possui ensino medio completo? (sim/nao)')
  let disponibilidade = prompt('Você possui disponibilidade exclusiva durante os horários do curso?')

  let valida = false

  if (idade.toLowerCase() === 'sim' && ensinoMedio.toLowerCase() === 'sim' && disponibilidade.toLowerCase() === 'sim'){
    valida = true
  }

  console.log(valida)
}
