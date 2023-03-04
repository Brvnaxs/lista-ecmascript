const {cursos} = require("./cursos")


cursos.forEach(i => {
    const {curso, duracao} = i
    console.log(`O curso ${curso.toLowerCase()} tem duração de ${duracao} semestres.`)
});