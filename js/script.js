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
        janela.classList.add("hidden");

        setTimeout(function () {
            janela.classList.remove("hidden");
        }, 10);
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

        document.getElementById("bootScreen").style.display = "none";

        document
            .querySelector(".desktop")
            .classList.remove("hidden-desktop");

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

    navigator.clipboard.writeText("seuemail@email.com");

    if (mensagem) {
        mensagem.textContent = "E-mail copiado para a área de transferência.";
    }
}
function toggleMenu() {
    const menu = document.getElementById("startMenu");
    menu.classList.toggle("hidden");
}

function abrirEntrevista() {
    alert("ENTREVISTA.EXE em desenvolvimento");
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
    document.getElementById("resultadoEntrevista").innerHTML =
        "<br><strong>RESULTADO:</strong><br><br>APROVADA PARA A PRÓXIMA ETAPA ✔";
}

function mostrarMobile(secao) {
    const conteudo = document.getElementById("mobileContent");

    const textos = {
        perfil: `
            <h3>PERFIL.EXE</h3>
            <p>Sou Tatiana Battistini Teixeira, estudante de Engenharia de Software, em transição para a área de tecnologia.</p>
            <p>Tenho interesse em desenvolvimento, banco de dados, lógica de programação e criação de soluções digitais.</p>
        `,

        projetos: `
            <h3>PROJETOS.EXE</h3>
            <p><strong>BATTISTINI.EXE</strong></p>
            <p>Portfólio interativo inspirado no Windows 95, desenvolvido com HTML, CSS e JavaScript.</p>
        `,

        data: `
            <h3>DATA_CORE.EXE</h3>
            <p>Interesse em banco de dados, organização de informações, análise de dados e construção de soluções orientadas por dados.</p>
        `,

        stack: `
            <h3>STACK.EXE</h3>
            <p>HTML, CSS, JavaScript, C, Git, GitHub, lógica de programação e banco de dados.</p>
        `,

        contato: `
            <h3>CONTATO.EXE</h3>
            <p>E-mail: battistini.t@gmail.com</p>
            <p>GitHub: TatianaBattistini</p>
        `,

        contratacao: `
            <h3>CONTRATACAO.EXE</h3>
            <p>Processo analisado.</p>
            <p><strong>CONTRATAÇÃO RECOMENDADA.</strong></p>
        `
    };

    conteudo.innerHTML = textos[secao];
}