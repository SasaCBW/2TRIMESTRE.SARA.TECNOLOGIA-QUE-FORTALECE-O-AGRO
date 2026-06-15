// =====================
// VERIFICAÇÃO DE LOGIN
// =====================

if (
    window.location.pathname.includes("dashboard.html") &&
    localStorage.getItem("logado") !== "true"
) {
    window.location.href = "login.html";
}

// =====================
// MODO ESCURO
// =====================

function alternarTema() {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        localStorage.setItem(
            "tema",
            "dark"
        );

    }else{

        localStorage.setItem(
            "tema",
            "light"
        );

    }

}

if(localStorage.getItem("tema")==="dark"){

    document.body.classList.add("dark");

}

// =====================
// QUIZ COMPLETO
// =====================

let pontuacao = 0;

function responder(correta){

    if(correta){

        pontuacao++;

    }

    document.getElementById(
        "pontuacao"
    ).innerText = pontuacao;

}

// =====================
// CERTIFICADO
// =====================

function gerarCertificado(){

    const certificado =
    document.getElementById(
        "certificado"
    );

    certificado.style.display =
    "block";

}

// =====================
// CARROSSEL
// =====================

let slideAtual = 0;

const slides =
document.querySelector(".slides");

if(slides){

    setInterval(()=>{

        slideAtual++;

        if(slideAtual > 4){

            slideAtual = 0;

        }

        slides.style.transform =
        `translateX(-${slideAtual*20}%)`;

    },3000);

}

// =====================
// BOTÃO SAIR
// =====================

function sair(){

    localStorage.removeItem(
        "logado"
    );

    window.location.href =
    "login.html";

}
