const read = require("readline-sync")
var axios = require("axios");
function armazenar(nome, idade, telefone, email){
    axios.post('https://sheetdb.io/api/v1/6jr3jbl1xwk88', {
        "data": {
            "NOME": nome,
            "IDADE": idade,
            "TELEFONE": telefone,
            "EMAIL": email
        }
    },{
        "auth": {
            "username": "ozpu926g",
            "password": "vhrsnn6eq3bg7hx8i1qs"
        }
    })
}
function coletar(){
    axios.get('https://sheetdb.io/api/v1/6jr3jbl1xwk88',{
        "auth": {
            "username": "ozpu926g",
            "password": "vhrsnn6eq3bg7hx8i1qs"
        
        }
    })
    .then( response => {
        console.log(response.data)
    });
}
var escolha = ""
while(escolha != "1"){
    var escolha = read.question("deseja cadastrar?")
    var nome = read.question("nome: ")
    var idade = read.question("idade: ")
    var telefone = read.question("telefone: ")
    var email = read.question("email: ")
    armazenar(nome, idade, telefone, email)

}

