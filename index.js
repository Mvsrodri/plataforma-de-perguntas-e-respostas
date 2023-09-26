const express =  require("express"); // importando express
const app = express(); // iniciando o express
const bodyParser = require("body-parser");
const connection = require("./database/database");

//Database

connection
    .authenticate()
    .then(()=>{
        console.log("conexão com o banco realizada com sucesso!!")
    })
    .catch((msgErro)=>{
        console.log(msgErro)
    })

app.set('view engine','ejs'); //Definindo a View Engine que será utilizada
app.use(express.static('public'));
//body Parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//apontando as rotas
app.use('/', require("./routes/routes"));

app.listen(8080, ()=>{
    console.log("Running...");
})