const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
   ];

//Crie uma variável que contenha todas idades dos usuários: [23, 15, 30]
const idades = usuarios.map(item => item.idade);
console.log(idades);

/*Crie uma variáveis que tenha apenas os usuários que trabalham na Rocketseat e com mais de 18
anos: [{ nome: 'Diego', idade: 23, empresa: 'Rocketseat' }]*/
const filter = usuarios.filter(item => item.idade>18 && item.empresa=="Rocketseat"? item : null);
console.log(filter);

//Crie uma variável que procura por um usuário que trabalhe na empresa Google: undefined
const find = usuarios.find(item => item.empresa === 'Google');
console.log(find);

/*Multiplique a idade de todos usuários por dois e depois realize um filtro nos usuários que possuem
no máximo 50 anos*/
const old = usuarios.map(item => ({...item, idade: item.idade*2}));
const findOld = old.filter(item => item.idade<50 ? item : null);
console.log(findOld);
