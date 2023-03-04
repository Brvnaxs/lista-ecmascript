const {alunos} = require('./alunos')

const alunosNovo = alunos.filter(i =>{
    if(i.curso == "LICENCIATURA EM CIÊNCIAS BIOLÓGICAS"){
        return {'id': i.id, 'curso': i.curso, 'entrada': i.entrada, 'status': i.status}
    }
})
alunosNovo.forEach(i => console.log(i.id, i.curso))