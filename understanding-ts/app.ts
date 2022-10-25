function add(n1: number, n2: number, showResult: boolean, phrase: string) {
    
    //fazer o calculo ficar em uma variável antes de concatenar, assim ele não se tornará uma string! ex: 'resultado é: ' + n1 + n2 (vai concatenar tudo)
    let result = n1 + n2;
    if(showResult) {
        console.log(phrase + result)
    } else {
        return n1 + n2;
    }
  }
  
    //só existe number, string, boolean (todos com letra minuscula)

  //não há diferença entre 5 ou 5.0, no typescript todos os números são floats
  //não precisa colocar o tipo aqui ao criar a variavel pois o typescript possui o type inference, que entende o tipo da variável
  const number1 = 5;
  //é uma bad practice declarar a variavel tipando ela caso voce inicialize -> let number1: number = 123
  //se vc nao inicializa uma variavel, o ideal é declara-la let number1: number;
  const number2 = 2.8;
  const validation = true;
  const resultPhrase = 'O resultado é: ';

  add(number1, number2, validation, resultPhrase);