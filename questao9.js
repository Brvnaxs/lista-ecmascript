const {alunos} = require('./alunos')
var i = 0
alunos.forEach(aluno =>{
    if(aluno.status == 'TRANCAMENTO'){
        i +=1
    }
})
console.log(`Atualmente a universidade possui ${i} alunos com o curso trancado.`)