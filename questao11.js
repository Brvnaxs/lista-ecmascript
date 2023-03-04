const {alunos} = require('./alunos')

var i = 0
alunos.forEach(aluno =>{
    if(aluno.entrada == '2018.1' && aluno.status == 'MATRICULADO'){
        i +=1
    }
})
console.log(`Atualmente ${i} alunos que ingressaram no primeiro semestre de 2018 ainda estão matriculados na universidade.`)