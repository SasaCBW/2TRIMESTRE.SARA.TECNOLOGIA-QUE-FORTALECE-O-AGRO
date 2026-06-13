// ==============================
// CONTADORES ANIMADOS
// ==============================

function animarContador(id, valorFinal, velocidade) {

    let contador = 0;

    const elemento = document.getElementById(id);

    const intervalo = setInterval(() => {

        contador += Math.ceil(valorFinal / 100);

        if (contador >= valorFinal) {

            contador = valorFinal;

            clearInterval(intervalo);

        }

        elemento.innerText = contador.toLocaleString();

    }, velocidade);

}

animarContador("contador1", 5000, 20);
animarContador("contador2", 120, 30);
animarContador("contador3", 300, 25);
animarContador("contador4", 1000000, 1);

// ==============================
// QUIZ
// ==============================

function respostaQuiz(correta) {

    const resultado = document.getElementById("resultado");

    if (correta) {

        resultado.innerHTML =
            "✅ Correto! Os drones são amplamente utilizados para monitorar plantações.";

        resultado.style.color = "green";

    } else {

        resultado.innerHTML =
            "❌ Resposta incorreta. A resposta certa é Drone.";

        resultado.style.color = "red";

    }

}

// ==============================
// MODO ESCURO
// ==============================

const botaoDark = document.getElementById("darkMode");

botaoDark.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        botaoDark.innerHTML = "☀️";

    } else {

        botaoDark.innerHTML = "🌙";

    }

});

// ==============================
// ACESSIBILIDADE
// AUMENTAR FONTE
// ==============================

let tamanhoFonte = 16;

document.getElementById("aumentarFonte")
.addEventListener("click", () => {

    tamanhoFonte += 2;

    document.body.style.fontSize =
        tamanhoFonte + "px";

});

// ==============================
// DIMINUIR FONTE
// ==============================

document.getElementById("diminuirFonte")
.addEventListener("click", () => {

    if (tamanhoFonte > 12) {

        tamanhoFonte -= 2;

        document.body.style.fontSize =
            tamanhoFonte + "px";

    }

});

// ==============================
// ANIMAÇÃO AO ROLAR
// ==============================

const observador = new IntersectionObserver(

(entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform =
                "translateY(0px)";

        }

    });

},

{
    threshold: 0.1
}

);

const elementos =
document.querySelectorAll(
    "section, .card, .numero-card, .linha div, .sust-grid div"
);

elementos.forEach(elemento => {

    elemento.style.opacity = "0";

    elemento.style.transform =
        "translateY(50px)";

    elemento.style.transition =
        "all 0.8s ease";

    observador.observe(elemento);

});

// ==============================
// MENU ATIVO AO ROLAR
// ==============================

const secoes =
document.querySelectorAll("section");

const links =
document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let atual = "";

    secoes.forEach(secao => {

        const topo =
            secao.offsetTop - 150;

        const altura =
            secao.clientHeight;

        if (
            pageYOffset >= topo &&
            pageYOffset < topo + altura
        ) {

            atual = secao.getAttribute("id");

        }

    });

    links.forEach(link => {

        link.classList.remove("ativo");

        if (
            link.getAttribute("href") ===
            "#" + atual
        ) {

            link.classList.add("ativo");

        }

    });

});

// ==============================
// FORMULÁRIO
// ==============================

const formulario =
document.querySelector("form");

if (formulario) {

    formulario.addEventListener(
        "submit",
        function (e) {

            e.preventDefault();

            alert(
                "Mensagem enviada com sucesso! 🌱"
            );

            formulario.reset();

        }
    );

}

// ==============================
// BOTÃO VOLTAR AO TOPO
// ==============================

const botaoTopo =
document.createElement("button");

botaoTopo.innerHTML = "⬆";

botaoTopo.id = "topo";

document.body.appendChild(botaoTopo);

botaoTopo.style.position = "fixed";
botaoTopo.style.bottom = "20px";
botaoTopo.style.right = "20px";
botaoTopo.style.padding = "15px";
botaoTopo.style.border = "none";
botaoTopo.style.borderRadius = "50%";
botaoTopo.style.cursor = "pointer";
botaoTopo.style.background = "#2e7d32";
botaoTopo.style.color = "white";
botaoTopo.style.display = "none";
botaoTopo.style.zIndex = "9999";

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        botaoTopo.style.display = "block";

    } else {

        botaoTopo.style.display = "none";

    }

});

botaoTopo.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});

// ==============================
// MENSAGEM DE BOAS-VINDAS
// ==============================

window.addEventListener("load", () => {

    setTimeout(() => {

        console.log(
            "🌱 Bem-vindo ao projeto Agrinho 2026 - Agro Forte!"
        );

    }, 1000);

});
