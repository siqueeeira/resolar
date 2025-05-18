console.log("Carregado com sucesso!");

// O que rodará assim que o site terminar de carregar 

document.addEventListener("DOMContentLoaded", function() {
    let primeiroH3 = document.getElementById("primeiroH3")

    comoFunciona(primeiroH3);
    op1();
})

// Efeito da barra de escrita

let typeBar = document.getElementById("typeBar");
let visible = true;

setInterval(function() {
    typeBar.style.opacity = visible ? "1" : "0";
    visible = !visible;
}, 600);

// Botão de ler mais no sobre nós

let lerMaisEnabled = false;

function lerMudar(event) {
    event.preventDefault();
    if (lerMaisEnabled == false) {
        let moreText = document.getElementById("moreText");
        let readMore =  document.getElementById("lerMaisBtn");

        moreText.style.display = "block";
        
        readMore.innerHTML = "Ler menos"

        lerMaisEnabled = true;
    } else {
        let moreText = document.getElementById("moreText");
        let readMore =  document.getElementById("lerMaisBtn");

        moreText.style.display = "none";
        
        readMore.innerHTML = "Ler mais"

        lerMaisEnabled = false;
    }
}

// Botões do como funciona

function comoFunciona(element) {
    let pai = document.getElementById("coisas");
    let todos = pai.querySelectorAll("h3");

    todos.forEach((h3) => {
        // Reseta todos os botões quando clica em outro

        h3.style.backgroundColor = "white";
        h3.style.color = "black";
        h3.style.border = "2px black solid";

        // Efeito de hover
        h3.onmouseover = () => {
            h3.style.backgroundColor = "#1689fe";
            h3.style.color = "white";
            h3.style.border = "none";
            h3.style.cursor = "pointer";
            h3.style.border = "2px #1689fe solid";
        };

        h3.onmouseout = () => {
            h3.style.backgroundColor = "white";
            h3.style.color = "black";
            h3.style.border = "2px black solid";
            h3.style.cursor = "pointer";
        };
    });

    element.style.backgroundColor = "#0f70d4";
    element.style.color = "white";
    element.style.border = "2px #0f70d4 solid";

    element.onmouseover = null;
    element.onmouseout = null;

    let comoTable = document.getElementById("comoContent");

    comoTable.style.display = "flex";
}

// Textos do como funciona

let comoText = document.getElementById("comoText");
let comoImg = document.getElementById("comoImg");
let comoFuncionaTextos = new Array(6);

comoFuncionaTextos[0] = "O processo começa com o registro completo das informações do painel solar que será destinado à reciclagem. O usuário acessa a plataforma e insere dados como o modelo do painel, fabricante, ano de aquisição, estado atual de funcionamento e histórico de manutenção, se houver. Além disso, são solicitadas algumas informações pessoais básicas, como nome, endereço e forma de contato, para que a equipe responsável possa dar continuidade ao processo de forma segura e eficiente. Esse cadastro detalhado é essencial para garantir e facilitar a coleta do painel, além de permitir a análise adequada das condições do equipamento. Com esses dados, é possível avaliar a viabilidade de reaproveitamento, garantindo mais segurança e eficácia no processo."
comoFuncionaTextos[1] = "Após o registro completo das informações do painel solar e dos dados do usuário, o usuário escolha uma data e horário disponível para a coleta do equipamento, com base na disponibilidade logística e localização do solicitante. Uma equipe especializada se dirige até o local indicado para realizar o transporte adequado, seguindo normas de segurança tanto para o equipamento quanto para o meio ambiente. Essa etapa garante que o painel chegue em boas condições ao centro de reciclagem, permitindo uma avaliação técnica mais precisa. O agendamento dá liberdade ao usuário, que não precisa se preocupar com o deslocamento do equipamento, e agiliza todo o processo de reutilização ou descarte correto dos materiais envolvidos."
comoFuncionaTextos[2] = "Quando o painel solar chega ao centro de reciclagem, ele passa por uma análise técnica feita por profissionais especializados. Nessa avaliação, são verificados o estado físico do painel, sua capacidade de geração de energia, possíveis falhas estruturais ou elétricas, desgaste dos materiais e a presença de componentes danificados. O objetivo é determinar se o equipamento ainda possui potencial de uso, mesmo que com performance reduzida. Esse processo é importante porque, sempre que possível, o reaproveitamento do painel é priorizado antes de se considerar o descarte. Com essa triagem, é possível evitar o desperdício de materiais e reduzir a geração de resíduos, otimizando o ciclo de vida útil do painel solar."
comoFuncionaTextos[3] = "Se após a análise técnica for constatado que o painel solar ainda apresenta boas condições de funcionamento, ele passa por uma etapa de manutenção básica, onde recebe pequenos reparos para restaurar sua eficiência e segurança. Em seguida, é disponibilizado para revenda a um preço acessível, promovendo a reutilização e evitando o descarte prematuro. No entanto, caso o painel esteja danificado de forma irreversível ou ineficiente para uso, ele é cuidadosamente desmontado. Seus componentes, como o vidro, silício e metais pesados (como chumbo), são separados de forma técnica e segura, seguindo os protocolos ambientais. Isso garante que nenhum material perigoso seja descartado de forma incorreta, promovendo um ciclo de reciclagem responsável."
comoFuncionaTextos[4] = "Os materiais obtidos a partir da desmontagem dos painéis solares, como vidro, silício, alumínio e metais pesados como chumbo, passam por processos de separação e purificação, sendo preparados para reaproveitamento industrial. Após essa etapa, eles são direcionados para empresas especializadas que utilizam essas matérias-primas em sua linha de produção. Esses materiais podem ser aplicados em novos painéis solares, baterias, eletrônicos ou outros produtos industriais. Com isso, promove-se a economia circular, reduzindo a necessidade de extração de novos recursos da natureza. O reaproveitamento adequado também evita a contaminação do solo e da água, além de gerar receita para o sistema, tornando o ciclo financeiramente sustentável e ambientalmente correto."
comoFuncionaTextos[5] = "Depois de concluídas as etapas de coleta, avaliação e reaproveitamento ou reciclagem dos materiais, o usuário que realizou o descarte correto do painel solar recebe créditos como forma de recompensa. Esses créditos são calculados com base em fatores como o estado do painel, o valor dos materiais recuperados e a possibilidade de revenda do equipamento. Os créditos podem ser utilizados como descontos na compra de novos painéis solares em empresas parceiras da plataforma, incentivando a troca por tecnologias mais eficientes e sustentáveis. Além disso, esse sistema de bonificação reforça a responsabilidade ambiental, ao transformar o descarte consciente em benefício direto para o usuário, promovendo engajamento e adesão à causa."

function op1() {
    comoText.innerHTML = comoFuncionaTextos[0];
    comoImg.src = "../imgs/Etapas/etapa1.svg";
    comoImg.style.width = "80%";
}

function op2() {
    comoText.innerHTML = comoFuncionaTextos[1];
    comoImg.src = "../imgs/Etapas/etapa2.svg";
    comoImg.style.width = "90%";
}

function op3() {
    comoImg.src = "../imgs/Etapas/etapa3.svg";
    comoText.innerHTML = comoFuncionaTextos[2];
    comoImg.style.width = "80%";
}

function op4() {
    comoText.innerHTML = comoFuncionaTextos[3];
    comoImg.src = "../imgs/Etapas/etapa4.svg";
    comoImg.style.width = "95%";
}

function op5() {
    comoText.innerHTML = comoFuncionaTextos[4];
    comoImg.src = "../imgs/Etapas/etapa5.svg";
    comoImg.style.width = "80%";
}

function op6() {
    comoText.innerHTML = comoFuncionaTextos[5];
    comoImg.src = "../imgs/Etapas/etapa6.svg";
    comoImg.style.width = "75%";
}

//Expandir perguntas frequentes

let aberta = false;

function expand(element) {
    let resposta =  element.nextElementSibling;
    let setaAtual =  element.querySelector(".setaExpandir");

    if (aberta == false) {
        resposta.classList.remove("respostaFechada");
        resposta.classList.add("respostaAberta")
        element.classList.add("perguntaAberta");
        setaAtual.style.transform = "rotate(180deg)";
        setaAtual.style.transition = "transform 0.5s";


        aberta = !aberta;
    } else {
        resposta.classList.remove("respostaAberta")
        resposta.classList.add("respostaFechada");
        element.classList.remove("perguntaAberta");
        setaAtual.style.transform = "rotate(0deg)";
        setaAtual.style.transition = "transform 0.5s";

        
        aberta = !aberta;
    }
}

//Botão que leva de volta para o topo da página

let topBtn = document.getElementById("backTop");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topBtn.style.opacity = "1";
    topBtn.style.transition = "opacity 0.5s";
    topBtn.style.width = "50px;"
    topBtn.style.width = "50px;"
  } else {
    topBtn.style.opacity = "0";
    topBtn.style.transition = "opacity 0.5s";
    topBtn.style.width = "0px;"
    topBtn.style.width = "0px;"
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0; 
} 

const url = "../Forms/forms.html";

function abrirReciclar(url) {
    const win = window.open(url, "_self", );
    win.focus()
}

