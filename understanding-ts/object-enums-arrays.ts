//enums
//por convençao os tipos enums tem que começar com letra maiúscula pq são "custom types"
//enum enumera automaticamente, o admin como 0, read_only como 1, author como 2
enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR
};
//tbm pode declarar assim
// enum Role {
//   ADMIN = 5,
//   READ_ONLY = 300,
//   AUTHOR = 'Name'
// };

// const person: {
//   name: string;
//   age: number;
// } = {
const person = {
  name: 'Maximilian',
  age: 30,
  hobbies: ['Cooking', 'Dancing'],
  role: Role.ADMIN,
};

let favoriteActivities: string[];
favoriteActivities = ['Cooking']


//any = faça o que vc quiser
//ts nao vai indicar erro nenhum de tipagem
let favoriteArray: any[];
favoriteArray= ['Cooking', 1, true]

//ts dá acesso a qualquer método de string pq ele detecta q é um array de strings
for(const hobby of person.hobbies) {
  console.log(hobby.toUpperCase)
}

console.log(person.name);

//tupla (como se fosse uma tupla de uma tabela sql)
const tuple = [1, "oi"]

