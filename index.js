const express =  require("express"); // importando express
const app = express(); // iniciando o express
const bodyParser = require("body-parser");
const connection = require("./database/database");
const Pergunta = require("./database/Pergunta");
const Resposta = require("./database/Resposta");
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
//Rotas
app.get("/",(req,res)=>{

    Pergunta.findAll({raw:true, order:[
        ['id','DESC']
    ]}).then(perguntas =>{
        res.render("index",{
            perguntas: perguntas
        });
    })
    
});

app.get("/perguntar",(req,res)=>{
    res.render("perguntar");
});

app.post("/salvarpergunta",(req,res)=>{
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;
    Pergunta.create({
        titulo: titulo,
        descricao: descricao
    }).then(()=>{
        console.log("Pergunta registrada com sucesso!!")
        res.redirect("/");
    });
});

app.get("/pergunta/:id",(req,res)=>{
    var id = req.params.id;

    Pergunta.findOne({
        where: {id:id}
    }).then(pergunta =>{
        if(pergunta != undefined){
            Resposta.findAll({
                where:{perguntaId: pergunta.id},
                order:[
                    ['id','DESC']
                ]
            }).then(respostas =>{
                res.render("pergunta",{
                    pergunta:pergunta,
                    respostas:respostas
                });
            });    
        }else{
            res.redirect("/");
        }
    });
});

app.post("/responder",(req,res)=>{
    var corpo = req.body.corpo;
    var perguntaId = req.body.idPergunta;
    Resposta.create({
        corpo: corpo,
        perguntaId: perguntaId
    }).then(()=>{
        console.log("Resposta registrada com sucesso!!")
        res.redirect("/pergunta/"+perguntaId);
    });
});

app.listen(8080, ()=>{
    console.log("Running...");
})