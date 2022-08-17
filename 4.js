const {cursos} = require("./cursos")


cursos.forEach(element => {
    const {curso, duracao} = element
    console.log("O curso ",curso," tem duração de ",duracao," semestres." )
});