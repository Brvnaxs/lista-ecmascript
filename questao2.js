const {alunos} = require("./alunos")
const {cursos} = require("./cursos")
//Percorrendo as listas, porém usando o 'forEach'.

alunos.forEach(element => {
    console.log(element);
});

cursos.forEach(element => {
    console.log(element);
});