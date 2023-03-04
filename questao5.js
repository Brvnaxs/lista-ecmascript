const {cursos} = require("./cursos")

cursosNovo = cursos.map(json =>{
   return {"curso": json.curso.toLowerCase(), "duracao": json.duracao}
})

cursosNovo.forEach(i =>{
   console.log(i.curso, i.duracao)
})