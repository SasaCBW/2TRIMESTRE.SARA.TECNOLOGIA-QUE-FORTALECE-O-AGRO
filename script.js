// ====================================
// AGRINHO 2026 PREMIUM+
// ====================================

// MODO ESCURO

const darkBtn =
document.getElementById("darkMode");

if(darkBtn){

    darkBtn.addEventListener("click",()=>{

        document.body.classList.toggle("dark");

        if(document.body.classList.contains("dark")){

            darkBtn.innerHTML = "☀️";

        }else{

            darkBtn.innerHTML = "🌙";

        }

    });

}

// ====================================
// ACESSIBILIDADE
// ====================================

let tamanhoFonte = 16;

const aumentar =
document.getElementById("aumentarFonte");

const diminuir =
document.getElementById("diminuirFonte");

if(aumentar){

    aumentar.addEventListener("click",()=>{

        tamanhoFonte += 2;

        document.body.style.fontSize =
        tamanhoFonte + "px";

    });

}

if(diminuir){

    diminuir.addEventListener("click",()=>{

        if(tamanhoFonte > 12){

            tamanhoFonte -= 2;

            document.body.style.fontSize =
            tamanhoFonte + "px";

        }

    });

}

// ====================================
// CONTADORES
// ====================================

function animarContador(id, valor){

    let atual = 0;

    const elemento =
    document.getElementById(id);

    if(!elemento) return;

    const intervalo = setInterval(()=>{

        atual += Math.ceil(valor / 100);

        if(atual >= valor){

            atual = valor;

            clearInterval(intervalo);

        }

        elemento.innerText =
        atual.toLocaleString();

    },20);

}

animarContador("contador1",5000);
animarContador("contador2",120);
animarContador("contador3",300);
animarContador("contador4",1000000);

// ====================================
// CARROSSEL AUTOMÁTICO
// ====================================

const slides =
document.querySelector(".slides");

let slideAtual = 0;

if(slides){

    setInterval(()=>{

        slideAtual++;

        if(slideAtual > 4){

            slideAtual = 0;

        }

        slides.style.transform =
        `translateX(-${slideAtual * 20}%)`;

    },3500);

}

// ====================================
// QUIZ PREMIUM
// ====================================

let pontos = 0;
let respondidas = 0;

function responder(botao, correta){

    const card =
    botao.parentElement;

    if(card.classList.contains("respondido")){

        return;

    }

    card.classList.add("respondido");

    respondidas++;

    if(correta){

        pontos++;

        botao.style.background =
        "#2e7d32";

    }else{

        botao.style.background =
        "#c62828";

    }

    const placar =
    document.getElementById("pontuacao");

    if(placar){

        placar.innerText = pontos;

    }

    if(respondidas === 10){

        gerarCertificado();

    }

}

// ====================================
// CERTIFICADO FINAL
// ====================================

function gerarCertificado(){

    let nivel = "";

    if(pontos >= 9){

        nivel =
        "🏆 Especialista do Agro";

    }else if(pontos >= 7){

        nivel =
        "🌱 Conhecedor do Agro";

    }else if(pontos >= 5){

        nivel =
        "🚜 Aprendiz do Agro";

    }else{

        nivel =
        "📚 Continue estudando";

    }

    alert(
        "Resultado Final\n\n" +
        "Pontuação: " + pontos + "/10\n\n" +
        nivel
    );

}

// ====================================
// ANIMAÇÕES
// ====================================

const observer =
new IntersectionObserver(

(entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},

{
    threshold:0.1
}

);

document
.querySelectorAll(
".card,.numero-card,.linha div,.regioes div,.quiz-card"
)
.forEach(el=>{

    el.classList.add("fade-up");

    observer.observe(el);

});

// ====================================
// MENU ATIVO
// ====================================

const secoes =
document.querySelectorAll("section");

const links =
document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

    let atual = "";

    secoes.forEach(secao=>{

        const topo =
        secao.offsetTop - 150;

        const altura =
        secao.clientHeight;

        if(

            pageYOffset >= topo &&
            pageYOffset < topo + altura

        ){

            atual =
            secao.getAttribute("id");

        }

    });

    links.forEach(link=>{

        link.classList.remove("ativo");

        if(

            link.getAttribute("href") ===
            "#" + atual

        ){

            link.classList.add("ativo");

        }

    });

});

// ====================================
// FORMULÁRIO
// ====================================

const form =
document.querySelector("form");

if(form){

    form.addEventListener(

        "submit",

        function(e){

            e.preventDefault();

            alert(
                "🌱 Mensagem enviada com sucesso!"
            );

            form.reset();

        }

    );

}

// ====================================
// BOTÃO TOPO
// ====================================

const topo =
document.createElement("button");

topo.innerHTML = "⬆";

topo.id = "btnTopo";

document.body.appendChild(topo);

topo.style.position = "fixed";
topo.style.bottom = "20px";
topo.style.right = "20px";
topo.style.padding = "15px";
topo.style.border = "none";
topo.style.borderRadius = "50%";
topo.style.background = "#2e7d32";
topo.style.color = "white";
topo.style.cursor = "pointer";
topo.style.display = "none";
topo.style.zIndex = "9999";

window.addEventListener("scroll",()=>{

    if(window.scrollY > 500){

        topo.style.display =
        "block";

    }else{

        topo.style.display =
        "none";

    }

});

topo.addEventListener("click",()=>{

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});

// ====================================
// BOAS-VINDAS
// ====================================

window.addEventListener("load",()=>{

    console.log(
        "🌱 Agrinho 2026 Premium+ carregado!"
    );

});
