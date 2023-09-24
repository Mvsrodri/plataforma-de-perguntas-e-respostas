const express =  require("express"); // importando express
const app = express(); // iniciando o express

app.set('view engine','ejs'); //Definindo a View Engine que será utilizada
app.use(express.static('public'));

app.get("/",(req,res)=>{
    res.render("index")
});

app.get("/perguntar",(req,res)=>{
    res.render("perguntar")
});

app.listen(8080, ()=>{
    console.log("Running...");
})