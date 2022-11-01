//unknow é diferente de any
let user: unknown;
let userName: string;

//unkow é qnd a gente n sabe o que o "usuario" vai digitar, se vai ser number, string, boolean, etc
user = "davi";
user = 10;

//unknow nao desabilitar o typecheking q nem o any
//nao consigo atribuir o unkow a uma variavel de um outro tipo, por exemplo, string, se fosse any, daria
//userName = user; nao tem como

if(typeof user === 'string') {
    userName = user;
}
//este if demonstra que ainda existe typechecking no unkown

//type never
function generateError(message: string, code: number): never {
    throw {message: message, errorCode: code}
}
//o tipo never é usado em funcoes de utilidade que nunca retornam nada pois elas crasham, tem um break, ou catch
// é uma boa pratica utilziar para deixar claro a outros programadores que esta função NUNCA retornará nada!
generateError("An error ocurried", 500);