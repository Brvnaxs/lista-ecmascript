const {alunos} = require('./alunos')

var i = 0
alunos.forEach(aluno =>{
    if(aluno.curso == 'MEDICINA VETERINÁRIA' && aluno.status == 'MATRICULADO'){
        i +=1
    }
})
console.log(`Atualmente a universidade possui ${i} alunos matriculados no curso de medicina veterinária.`)