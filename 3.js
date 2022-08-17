const {alunos} = require("./alunos")

alunos.forEach(aluno => {
    const {id, curso, entrada, status} = aluno
    console.log("O aluno de id", id, "é do curso", curso, "ingressou na universidade no semestre letivo de", entrada, "e atualmente está", status)
});