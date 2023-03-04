const {cursos} = require('./cursos')

cursosAtualizado = cursos.map(curso =>{
    if(curso.duracao <= 8 && curso.duracao != 0){
        curso.duracao = 1
    }else if(curso.duracao > 8){
        curso.duracao = 2
    }
    return {"curso": curso.curso, "duracao": curso.duracao}
})

cursosAtualizado.forEach(i => {
    console.log(i.curso, i.duracao)
});