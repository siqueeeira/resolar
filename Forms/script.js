let etapaImg =  document.getElementById("imgEtapa");
let formPessoal = document.getElementById("formPessoal");
let formPainel =  document.getElementById("formPainel");
let formPainel2 = document.getElementById("formPainel2");
let formData =  document.getElementById("formData");
let resumoFinal = document.getElementById("resumoFinal");
let formCompleto = document.getElementById("completo");

let btnAvancar = document.getElementById("avançar");
let btnVoltar =  document.getElementById("voltar");
let inputColeta = document.getElementById("endereçoColeta");
let inputData =  document.getElementById("inputDateColeta");
let inputHora =  document.getElementById("inputTimeColeta");
let inputMesmoEndereco = document.getElementById("mesmoEndereço");
let inputEndereco = document.getElementById("endereço");

let inputs = document.querySelectorAll("input");
let selects = document.querySelectorAll("select");

function abrirHomepage() {
    const win = window.open("../HomePage/homepage.html", "_self", );
    win.focus()
}

document.addEventListener("DOMContentLoaded", function() {
    // Data máxima atual

    let inputDate = document.getElementById("inputDateColeta");
    let today = new Date();
    let minDate = today.toISOString().split('T')[0];
    let nextYear = new Date();
    nextYear.setFullYear(today.getFullYear() + 1);
    let maxDate = nextYear.toISOString().split('T')[0];
    inputDate.setAttribute("min", minDate);
    inputDate.setAttribute("max", maxDate);

    // Voltar o checkbox para o padrão

    inputMesmoEndereco.checked = false
});

let etapaI = 1;

function submitForm(event) {
    event.preventDefault();
}

function avancar() {
    let podeAvancar = true;
    switch (etapaI) {
        case 1:
            podeAvancar = formPessoal.checkValidity();
            break;
        case 2:
            podeAvancar = formPainel.checkValidity();
            break;
        case 3:
            podeAvancar = formPainel2.checkValidity();
            break;
        case 4:
            podeAvancar = formData.checkValidity();
            break;
        default:
            podeAvancar = true;
    }

    if (!podeAvancar) {
        let formAtual = [formPessoal, formPainel, formPainel2, formData][etapaI-1];
        if (formAtual) formAtual.reportValidity();
        return;
    }

    if (inputEndereco.addEventListener('input', function() {
        if (inputMesmoEndereco.checked) {
            inputColeta.value = inputEndereco.value;
            atualizarResumo();
        }
    }));

    inputMesmoEndereco.addEventListener('change', function() {
        pegarEndereço();
        atualizarResumo();
    });
    
    if (etapaI < 6 && etapaI > 0) {
        etapaI++;
        etapaImg.src =  "../imgs/Forms/Etapa_" + etapaI + ".svg"
    }

    switch (etapaI) {
        case 1: 
            formPessoal.style.display = "flex";
            formPainel.style.display = "none";
            formPainel2.style.display = "none";
            formData.style.display = "none";
            resumoFinal.style.display = "none";
            formCompleto.style.display = "none";
            btnAvancar.querySelector("i").classList.remove("fa-check");
            btnAvancar.querySelector("i").classList.remove("fa-floppy-disk");
            btnAvancar.querySelector("i").classList.add("fa-angle-right");
            btnAvancar.style.backgroundColor = "#0f70d4"
            btnVoltar.style.backgroundColor = "#7E7E7E"
            btnVoltar.style.cursor = "not-allowed"
            break;
        case 2:
            formPessoal.style.display = "none";
            formPainel.style.display = "flex";
            formPainel2.style.display = "none";
            formData.style.display = "none";
            resumoFinal.style.display = "none";
            formCompleto.style.display = "none";
            btnAvancar.querySelector("i").classList.remove("fa-check");
            btnAvancar.querySelector("i").classList.remove("fa-floppy-disk");
            btnAvancar.querySelector("i").classList.add("fa-angle-right");
            btnAvancar.style.backgroundColor = "#0f70d4"
            btnVoltar.style.backgroundColor = "#0f70d4"
            btnVoltar.style.cursor = "pointer"
            break;
        case 3:
            formPessoal.style.display = "none";
            formPainel.style.display = "none";
            formPainel2.style.display = "flex";
            formData.style.display = "none";
            resumoFinal.style.display = "none";
            formCompleto.style.display = "none";
            btnAvancar.querySelector("i").classList.remove("fa-check");
            btnAvancar.querySelector("i").classList.remove("fa-floppy-disk");
            btnAvancar.querySelector("i").classList.add("fa-angle-right");
            btnAvancar.style.backgroundColor = "#0f70d4"
            btnVoltar.style.backgroundColor = "#0f70d4"
            btnVoltar.style.cursor = "pointer"
            break;
        case 4:
            formPessoal.style.display = "none";
            formPainel.style.display = "none";
            formPainel2.style.display = "none";
            formData.style.display = "flex";
            resumoFinal.style.display = "none";
            formCompleto.style.display = "none";
            btnAvancar.querySelector("i").classList.remove("fa-check");
            btnAvancar.querySelector("i").classList.remove("fa-floppy-disk");
            btnAvancar.querySelector("i").classList.add("fa-angle-right");
            btnAvancar.style.backgroundColor = "#0f70d4"
            btnVoltar.style.backgroundColor = "#0f70d4"
            btnVoltar.style.cursor = "pointer"
            break;
        case 5:
            resumoAtualizar();
            codigoPedido();


            formPessoal.style.display = "none";
            formPainel.style.display = "none";
            formPainel2.style.display = "none";
            formData.style.display = "none";
            resumoFinal.style.display = "flex";
            formCompleto.style.display = "none";
            btnAvancar.querySelector("i").classList.remove("fa-check");
            btnAvancar.querySelector("i").classList.add("fa-floppy-disk");
            btnAvancar.querySelector("i").classList.remove("fa-angle-right");
            btnAvancar.style.backgroundColor = "#0f70d4"
            btnVoltar.style.backgroundColor = "#0f70d4"
            btnVoltar.style.cursor = "pointer"

            break;
        case 6:
            formPessoal.style.display = "none";
            formPainel.style.display = "none";
            formPainel2.style.display = "none";
            formData.style.display = "none";
            resumoFinal.style.display = "none";
            formCompleto.style.display = "flex";
            btnAvancar.querySelector("i").classList.add("fa-check");
            btnAvancar.querySelector("i").classList.remove("fa-floppy-disk");
            btnAvancar.querySelector("i").classList.remove("fa-angle-right");
            btnAvancar.style.backgroundColor = "#049a2c";
            btnVoltar.style.backgroundColor = "#7E7E7E"
            btnVoltar.onclick = ""
            btnAvancar.onclick = abrirHomepage
            btnVoltar.style.cursor = "not-allowed";

            for (var i = 0; i < inputs.length; i++) {
                inputs[i].value = "";
            }

            for (var i = 0; i < selects.length; i++) {
                selects[i].selectedIndex = 0;
            }

            break;
        default:
            formPessoal.style.display = "flex";
            formPainel.style.display = "none";
            formPainel2.style.display = "none";
            formData.style.display = "none";
            resumoFinal.style.display = "none";
            btnAvancar.querySelector("i").classList.remove("fa-check");
            btnAvancar.querySelector("i").classList.remove("fa-floppy-disk");
            btnAvancar.querySelector("i").classList.add("fa-angle-right");
            btnAvancar.style.backgroundColor = "#0f70d4"
            btnVoltar.style.backgroundColor = "#7E7E7E"
            btnVoltar.style.cursor = "not-allowed"
            break;
    }
}

function voltar() {
    if (etapaI < 7 && etapaI > 1) {
        etapaI--;
        etapaImg.src =  "../imgs/Forms/Etapa_" + etapaI + ".svg"
    }

    switch (etapaI) {
        case 1: 
            formPessoal.style.display = "flex";
            formPainel.style.display = "none";
            formPainel2.style.display = "none";
            formData.style.display = "none";
            resumoFinal.style.display = "none";
            formCompleto.style.display = "none";
            btnAvancar.querySelector("i").classList.remove("fa-check");
            btnAvancar.querySelector("i").classList.remove("fa-floppy-disk");
            btnAvancar.querySelector("i").classList.add("fa-angle-right");
            btnAvancar.style.backgroundColor = "#0f70d4"
            btnVoltar.style.backgroundColor = "#7E7E7E"
            btnVoltar.style.cursor = "not-allowed"
            break;
        case 2:
            formPessoal.style.display = "none";
            formPainel.style.display = "flex";
            formPainel2.style.display = "none";
            formData.style.display = "none";
            resumoFinal.style.display = "none";
            formCompleto.style.display = "none";
            btnAvancar.querySelector("i").classList.remove("fa-check");
            btnAvancar.querySelector("i").classList.remove("fa-floppy-disk");
            btnAvancar.querySelector("i").classList.add("fa-angle-right");
            btnAvancar.style.backgroundColor = "#0f70d4"
            btnVoltar.style.backgroundColor = "#0f70d4"
            btnVoltar.style.cursor = "pointer"
            break;
        case 3:
            formPessoal.style.display = "none";
            formPainel.style.display = "none";
            formPainel2.style.display = "flex";
            formData.style.display = "none";
            resumoFinal.style.display = "none";
            formCompleto.style.display = "none";
            btnAvancar.querySelector("i").classList.remove("fa-check");
            btnAvancar.querySelector("i").classList.remove("fa-floppy-disk");
            btnAvancar.querySelector("i").classList.add("fa-angle-right");
            btnAvancar.style.backgroundColor = "#0f70d4"
            btnVoltar.style.backgroundColor = "#0f70d4"
            btnVoltar.style.cursor = "pointer"
            break;
        case 4:
            formPessoal.style.display = "none";
            formPainel.style.display = "none";
            formPainel2.style.display = "none";
            formData.style.display = "flex";
            resumoFinal.style.display = "none";
            formCompleto.style.display = "none";
            btnAvancar.querySelector("i").classList.remove("fa-check");
            btnAvancar.querySelector("i").classList.remove("fa-floppy-disk");
            btnAvancar.querySelector("i").classList.add("fa-angle-right");
            btnAvancar.style.backgroundColor = "#0f70d4"
            btnVoltar.style.backgroundColor = "#0f70d4"
            btnVoltar.style.cursor = "pointer"
            break;
        case 5:
            resumoAtualizar();
            codigoPedido();


            formPessoal.style.display = "none";
            formPainel.style.display = "none";
            formPainel2.style.display = "none";
            formData.style.display = "none";
            resumoFinal.style.display = "flex";
            formCompleto.style.display = "none";
            btnAvancar.querySelector("i").classList.remove("fa-check");
            btnAvancar.querySelector("i").classList.add("fa-floppy-disk");
            btnAvancar.querySelector("i").classList.remove("fa-angle-right");
            btnAvancar.style.backgroundColor = "#0f70d4"
            btnVoltar.style.backgroundColor = "#0f70d4"
            btnVoltar.style.cursor = "pointer"

            break;
        case 6:
            formPessoal.style.display = "none";
            formPainel.style.display = "none";
            formPainel2.style.display = "none";
            formData.style.display = "none";
            resumoFinal.style.display = "none";
            formCompleto.style.display = "flex";
            btnAvancar.querySelector("i").classList.add("fa-check");
            btnAvancar.querySelector("i").classList.remove("fa-floppy-disk");
            btnAvancar.querySelector("i").classList.remove("fa-angle-right");
            btnAvancar.style.backgroundColor = "#049a2c";
            btnVoltar.style.backgroundColor = "#7E7E7E"
            btnVoltar.style.cursor = "not-allowed"

            for (var i = 0; i < inputs.length; i++) {
                inputs[i].value = "";
            }

            for (var i = 0; i < selects.length; i++) {
                selects[i].selectedIndex = 0;
            }

            break;
        default:
            formPessoal.style.display = "flex";
            formPainel.style.display = "none";
            formPainel2.style.display = "none";
            formData.style.display = "none";
            resumoFinal.style.display = "none";
            btnAvancar.querySelector("i").classList.remove("fa-check");
            btnAvancar.querySelector("i").classList.remove("fa-floppy-disk");
            btnAvancar.querySelector("i").classList.add("fa-angle-right");
            btnAvancar.style.backgroundColor = "#0f70d4"
            btnVoltar.style.backgroundColor = "#7E7E7E"
            btnVoltar.style.cursor = "not-allowed"
            break;
    }
}

function pegarEndereço() {
    if (inputMesmoEndereco.checked) {
        inputColeta.value = inputEndereco.value
    } else {
        inputColeta.value = ""
    }
}

inputEndereco.addEventListener('input', function() {
    if (inputMesmoEndereco.checked) {
        inputColeta.value = inputEndereco.value;
        atualizarResumo();
    }
});
inputMesmoEndereco.addEventListener('change', function() {
    pegarEndereço();
    atualizarResumo();
});

function atualizarResumo() {
    let resumo = document.getElementById("resumoAgendamento");
    let resumoEndereco = inputColeta.value;
    let dataResumo = inputData.value;
    let horaResumo = inputHora.value;
    let dataResumoFormat = dataResumo ? dataResumo.split("-").reverse().join("/") : "____";
    if (!resumoEndereco) resumoEndereco = "____";
    if (!horaResumo) horaResumo = "____";
    resumo.innerHTML = "A coleta será marcada para o dia <b>" + dataResumoFormat + "</b> às <b>" + horaResumo + "</b> no endereço <b>" + resumoEndereco + "</b>";
}


function resumoAtualizar() {
    let tableNome = document.getElementById("tableNome");
    let tableEmail = document.getElementById("tableEmail");
    let tableEndereco = document.getElementById("tableEndereco");
    let tableTelefone = document.getElementById("tableTelefone");
    let tableTipoPessoa = document.getElementById("tableTipoPessoa");
    let tableMarca = document.getElementById("tableMarca");
    let tableModelo = document.getElementById("tableModelo");
    let tablePotencia = document.getElementById("tablePotencia");
    let tableDataFabricacao = document.getElementById("tableDataFabricacao");
    let tableDataInstalacao = document.getElementById("tableDataInstalacao");
    let tableTipoInversor = document.getElementById("tableTipoInversor");
    let tableTipoPainel = document.getElementById("tableTipoPainel");
    let tableEstadoFuncionalidade = document.getElementById("tableEstadoFuncionalidade");
    let tableEstadoFisico = document.getElementById("tableEstadoFisico");
    let tableMotivoDescarte = document.getElementById("tableMotivoDescarte");
    let tableQuantidadePaineis = document.getElementById("tableQuantidadePaineis");
    let tableDataColeta = document.getElementById("tableDataColeta");
    let tableHorarioColeta = document.getElementById("tableHorarioColeta");
    let tableEnderecoColeta = document.getElementById("tableEnderecoColeta");

    tableNome.innerHTML = document.getElementById("nomeCompleto").value;
    tableEmail.innerHTML = document.getElementById("email").value;
    tableEndereco.innerHTML = document.getElementById("endereço").value;

    if (document.getElementById("telefone").value == "") {
        tableTelefone.innerHTML = "------";
    } else {
        tableTelefone.innerHTML = document.getElementById("telefone").value;
    }

    tableTipoPessoa.innerHTML = document.getElementById("tipoPessoa").value;
    tableMarca.innerHTML = document.getElementById("marca").value;
    tableModelo.innerHTML = document.getElementById("modelo").value;
    tablePotencia.innerHTML = document.getElementById("potência").value;
    tableDataFabricacao.innerHTML = document.getElementById("dataFabri").value.split("-").reverse().join("/");
    tableDataInstalacao.innerHTML = document.getElementById("dataInst").value.split("-").reverse().join("/");
    tableTipoInversor.innerHTML = document.getElementById("inversor").value;
    tableTipoPainel.innerHTML = document.getElementById("tipo").value;
    tableEstadoFuncionalidade.innerHTML = document.getElementById("funcionamento").value;
    tableEstadoFisico.innerHTML = document.getElementById("estado").value;
    tableMotivoDescarte.innerHTML = document.getElementById("motivo").value;
    tableQuantidadePaineis.innerHTML = document.getElementById("quantidade").value;
    tableDataColeta.innerHTML = document.getElementById("inputDateColeta").value.split("-").reverse().join("/");
    tableHorarioColeta.innerHTML = document.getElementById("inputTimeColeta").value;
    tableEnderecoColeta.innerHTML = document.getElementById("endereçoColeta").value;
}

let codigoPedidoText = document.getElementById("códigoPedido");

function codigoPedido() {
    let random = Math.random()
    let code = String(random).split(".")[1];
    
    codigoPedidoText.innerHTML = "O código do seu pedido é <b>" + code + "</b> <br> e foi enviado para o e-mail <b>" + document.getElementById("email").value; + "</b>"
}