<h1> Plataforma de Perguntas e Respostas</h1>
<p align="right">
  <a href="https://www.linkedin.com/in/marcos-vinicius-dos-santos-rodrigues-1a2b39195/" target="_blank"><img alt="LinkedIn"
                src="https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white" />
  </a>
</p>

<h4> Este é um repositório com o objetivo de aprofundar os estudos em Node.JS, e nele foi desenvolvida uma plataforma de perguntas e respostas(estilo Yahoo e ask.fm) responsiva. Este projeto desenvolvido com base no protótipo da Formação NodeJS, do instrutor Victor Lima, do canal Guia do Programador. </h4>


  
  ### Tecnologias usadas:
 <div align="center">
  <img align="center" alt="Victor-Souza" height="50" width="50" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg">
  <img align="center" alt="Victor-Souza" height="50" width="50" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg">  
  <img align="center" alt="Victor-Souza" height="50" width="50" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg">
  <img align="center" alt="Victor-Souza" height="50" width="50" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-plain.svg">
  <img align="center" alt="Victor-Souza" height="50" width="50" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sequelize/sequelize-plain.svg">
  <img align="center" alt="Victor-Souza" height="50" width="50" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-plain.svg">
  <img align="center" alt="Victor-Souza" height="50" width="50" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain.svg">
</div><br>

<h2> Projeto </h2>
 <br>

> Desktop
>

![perguntas - inicial](https://github.com/Mvsrodri/plataforma-de-perguntas-e-respostas/assets/38968106/150da46e-f107-45f4-b21e-45f3f9e8db86)
![perguntas - form](https://github.com/Mvsrodri/plataforma-de-perguntas-e-respostas/assets/38968106/3edd8eb8-44c4-4359-8f40-9985e3964f1c)
![respostas](https://github.com/Mvsrodri/plataforma-de-perguntas-e-respostas/assets/38968106/6e659217-294d-401d-9ee4-56f9ef977d77)

<br><br>

> Mobile
> 

![perguntas - inicial - mobile](https://github.com/Mvsrodri/plataforma-de-perguntas-e-respostas/assets/38968106/c31ca449-b3f9-4333-9bf8-a0307524e39b)
![perguntas - form - mobile](https://github.com/Mvsrodri/plataforma-de-perguntas-e-respostas/assets/38968106/92378599-afb2-4c8f-8b1e-ea30939afbce)
![respostas - mobile](https://github.com/Mvsrodri/plataforma-de-perguntas-e-respostas/assets/38968106/d726ab88-8cb6-4c7a-9eeb-60230edc39a4)
    
##

<div align="left">
  O foco do projeto foi no back-end, com o objetivo de obter um maior conhecimento dos conceitos do Node.JS, na aplicação foram implementados alguns conceitos além do material de referencia da Formação NodeJS. Nessa aplicação foi realizada a utilização do express no qual foi possivel entender o conceito de rotas.Para realizar a conexão com o banco de dados utilizamos o ORM Sequelize, que possibilita a utilização da sintaxe do JavaScript para realizar as operações e comunicação com o Banco de Dados. Além disso, foram desenvolvidas algumas implementações, que tornaram o projeto exclusivo, e uma versão melhorada do protótipo original, foram elas:
<br><br>
  
 - **Express Router:** No protótipo original, todas as rotas estavam organizadas no arquivo js raiz(index.js), o que torna o código poluido e de dificil entendimento. Através do Express Router, foi configurado no diretório router, uma parte exclusivamente para tratar as rotas do projeto.
 - **Verificação de campos de formulário:** No protótipo original, não existia a validação dos campos de formulário, logo o usuário conseguia enviar sua pergunta sem nenhum campo preenchido, isso foi resolvido com o atributo <code>required</code> dentro dos inputs.
 - **Estilização personalizada:** Buscando obter um projeto exclusivo, foi feita uma estilização das páginas de forma personalizada, com cores diferentes do projeto original.
 - **Inserir data de publicação na pergunta e resposta:** Para tornar as perguntas e respostas mais amigáveis e organizadas, foi inserido o campo de data e hora da pergunta/resposta indicando o momento que foi realizado o comentario.
 - **Dotenv:** Para facilitar o gerenciamento das variáveis de ambiente do projeto foi configurado o arquivo <code>.env</code>. 
</div>

### :information_source: Como Usar
 <br>
### Instalar Projeto

```bash
# Clone o repositório
$ git clone https://github.com/Mvsrodri/plataforma-de-perguntas-e-respostas.git

# Entre no repositório
$ cd plataforma-de-perguntas-e-respostas

# Instale as bibliotecas e dependências
$ npm install

# É recomendado ter o nodemon instalado na sua máquina, caso não tenha, pode instalar globalmente
$ npm install -g nodemon

# Antes de inciar o projeto atulizar o arquivo .env com as informações referente ao seu ambiente de desenvolvimento

# Iniciar projeto
$ nodemon index.js

Rodando na porta 8080
```

### :speech_balloon: Contato

**Linkedin**: [Marcos Vinicius](https://www.linkedin.com/in/marcos-vinicius-dos-santos-rodrigues-1a2b39195/)

**Email**: mvsrodri00@gmail.com
