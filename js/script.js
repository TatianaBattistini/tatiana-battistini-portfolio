const clock = document.querySelector(".clock");

function updateClock() {
    const now = new Date();

    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");

    if (clock) {
        clock.textContent = hours + ":" + minutes;
    }
}

updateClock();
setInterval(updateClock, 1000);

function abrirPerfil() {
    abrirJanela("perfilWindow");
}

function fecharPerfil() {
    fecharJanela("perfilWindow");
}

function abrirProjetos() {
    abrirJanela("projetosWindow");
}

function fecharProjetos() {
    fecharJanela("projetosWindow");
}

function abrirDataCore() {
    abrirJanela("dataCoreWindow");
}

function fecharDataCore() {
    fecharJanela("dataCoreWindow");
}

function abrirStack() {
    abrirJanela("stackWindow");
}

function fecharStack() {
    fecharJanela("stackWindow");
}

function tocarSom() {
    const som = document.getElementById("clickSound");
    if (som) {
        som.currentTime = 0; // Zera o tempo para permitir cliques rápidos seguidos
        som.play();
    }
}

function abrirJanela(id) {
    tocarSom();

    const janela = document.getElementById(id);

    if (janela) {
        janela.classList.remove("hidden");
        trazerParaFrente(janela);
    }
}

function fecharJanela(id) {
    const janela = document.getElementById(id);

    if (janela) {
        janela.classList.add("hidden");
    }
}

let zIndexAtual = 10;

function trazerParaFrente(janela) {
    zIndexAtual++;
    janela.style.zIndex = zIndexAtual;
}

const janelas = document.querySelectorAll(".window");

janelas.forEach(function (janela) {
    const barraTitulo = janela.querySelector(".title-bar");

    if (!barraTitulo) {
        return;
    }

    barraTitulo.addEventListener("mousedown", function (event) {
        trazerParaFrente(janela);

        let deslocamentoX = event.clientX - janela.offsetLeft;
        let deslocamentoY = event.clientY - janela.offsetTop;

        function moverJanela(event) {
            janela.style.left = event.clientX - deslocamentoX + "px";
            janela.style.top = event.clientY - deslocamentoY + "px";
            janela.style.position = "absolute";
        }

        function pararMovimento() {
            document.removeEventListener("mousemove", moverJanela);
            document.removeEventListener("mouseup", pararMovimento);
        }

        document.addEventListener("mousemove", moverJanela);
        document.addEventListener("mouseup", pararMovimento);
    });
});

window.addEventListener("load", () => {
    setTimeout(() => {
        const bootScreen = document.getElementById("bootScreen");
        if (bootScreen) {
            bootScreen.style.display = "none";
        }

        const desktop = document.querySelector(".desktop");
        if (desktop) {
            desktop.classList.remove("hidden-desktop");
        }
    }, 3000);
});

const terminalText = document.getElementById("terminal-text");

const mensagens = [
    "C:\\> inicializando sistema...",
    "C:\\> carregando perfil...",
    "C:\\> carregando projetos...",
    "C:\\> conectando data core...",
    "C:\\> verificando stack...",
    "C:\\> build 1988 carregada",
    "C:\\> sistema online"
];

let linhaAtual = 0;

function escreverTerminal() {
    if (!terminalText) return;

    terminalText.innerHTML = "";
    linhaAtual = 0;

    const intervalo = setInterval(() => {
        terminalText.innerHTML += mensagens[linhaAtual] + "<br>";
        linhaAtual++;

        if (linhaAtual >= mensagens.length) {
            clearInterval(intervalo);
        }
    }, 600);
}

window.addEventListener("load", () => {
    setTimeout(() => {
        escreverTerminal();
    }, 3200);
});

function abrirContato() {
    abrirJanela("contatoWindow");
}

function fecharContato() {
    fecharJanela("contatoWindow");
}

function copiarEmail() {
    const mensagem = document.getElementById("copyMessage");
    navigator.clipboard.writeText("battistini.t@gmail.com");

    if (mensagem) {
        mensagem.textContent = "E-mail copiado para a área de transferência.";
    }
}

function toggleMenu() {
    const menu = document.getElementById("startMenu");
    if (menu) {
        menu.classList.toggle("hidden");
    }
}

function abrirContratacao() {
    abrirJanela("contratacaoWindow");
}

function fecharContratacao() {
    fecharJanela("contratacaoWindow");
}

function abrirEntrevista() {
    abrirJanela("entrevistaWindow");
}

function fecharEntrevista() {
    fecharJanela("entrevistaWindow");
}

function mostrarResultadoEntrevista() {
    const res = document.getElementById("resultadoEntrevista");
    if (res) {
        res.innerHTML = "<br><strong>RESULTADO:</strong><br><br>APROVADA PARA A PRÓXIMA ETAPA ✔️";
    }
}