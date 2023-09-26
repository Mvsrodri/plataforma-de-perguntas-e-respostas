const express = require('express');
const router = express.Router();

const Pergunta = require("../database/Pergunta");
const Resposta = require("../database/Resposta");
const formatarData = require("../public/js/data");

router.get("/",(req,res)=>{
    res.locals.formatarData = formatarData;
   
    Pergunta.findAll({raw:true, order:[
        ['id','DESC']
    ]}).then(perguntas =>{
        res.render("index",{
            perguntas: perguntas
        });
    })
    
});

router.get("/perguntar",(req,res)=>{
    res.render("perguntar");
});

router.post("/salvarpergunta",(req,res)=>{
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

router.get("/pergunta/:id",(req,res)=>{
    res.locals.formatarData = formatarData;
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

router.post("/responder",(req,res)=>{
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

module.exports = router;