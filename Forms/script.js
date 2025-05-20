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
    const win = window.open("../index.html", "_self", );
    win.focus()
}

document.addEventListener("DOMContentLoaded", function() {   
    // Aviso
    window.alert("Nesta fase de teste, as perguntas não são obrigatórias, diferentemente de uma versão definitiva. \n\n Assim, é possível avançar sem preencher todos os campos.");
    
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


    document.getElementById("nomeCompleto").value == "" ? tableNome.innerHTML = "------" : tableNome.innerHTML = nome.value;
    document.getElementById("email").value == "" ? tableEmail.innerHTML = "------" : tableEmail.innerHTML = email.value;
    document.getElementById("endereço").value == "" ? tableEndereco.innerHTML = "------" : tableEndereco.innerHTML = endereco.value;
    document.getElementById("telefone").value == "" ? tableTelefone.innerHTML = "------" : tableTelefone.innerHTML = telefone.value;
    document.getElementById("tipoPessoa").value == "" ? tableTipoPessoa.innerHTML = "------" : tableTipoPessoa.innerHTML = document.getElementById("tipoPessoa").value;
    document.getElementById("marca").value == "" ? tableMarca.innerHTML = "------" : tableMarca.innerHTML = document.getElementById("marca").value;
    document.getElementById("modelo").value == "" ? tableModelo.innerHTML = "------" : tableModelo.innerHTML = document.getElementById("modelo").value;
    document.getElementById("potência").value == "" ? tablePotencia.innerHTML = "------" : tablePotencia.innerHTML = document.getElementById("potência").value;
    document.getElementById("dataFabri").value == "" ? tableDataFabricacao.innerHTML = "------" : tableDataFabricacao.innerHTML = document.getElementById("dataFabri").value.split("-").reverse().join("/");
    document.getElementById("dataInst").value == "" ? tableDataInstalacao.innerHTML = "------" : tableDataInstalacao.innerHTML = document.getElementById("dataInst").value.split("-").reverse().join("/");
    document.getElementById("inversor").value == "" ? tableTipoInversor.innerHTML = "------" : tableTipoInversor.innerHTML = document.getElementById("inversor").value;
    document.getElementById("tipo").value == "" ? tableTipoPainel.innerHTML = "------" : tableTipoPainel.innerHTML = document.getElementById("tipo").value;
    document.getElementById("funcionamento").value == "" ? tableEstadoFuncionalidade.innerHTML = "------" : tableEstadoFuncionalidade.innerHTML = document.getElementById("funcionamento").value;
    document.getElementById("estado").value == "" ? tableEstadoFisico.innerHTML = "------" : tableEstadoFisico.innerHTML = document.getElementById("estado").value;
    document.getElementById("motivo").value == "" ? tableMotivoDescarte.innerHTML = "------" : tableMotivoDescarte.innerHTML = document.getElementById("motivo").value;
    document.getElementById("quantidade").value == "" ? tableQuantidadePaineis.innerHTML = "------" : tableQuantidadePaineis.innerHTML = document.getElementById("quantidade").value;
    document.getElementById("inputDateColeta").value == "" ? tableDataColeta.innerHTML = "------" : tableDataColeta.innerHTML = document.getElementById("inputDateColeta").value.split("-").reverse().join("/");
    document.getElementById("inputTimeColeta").value == "" ? tableHorarioColeta.innerHTML = "------" : tableHorarioColeta.innerHTML = document.getElementById("inputTimeColeta").value;
    document.getElementById("endereçoColeta").value == "" ? tableEnderecoColeta.innerHTML = "------" : tableEnderecoColeta.innerHTML = document.getElementById("endereçoColeta").value;
    }

let codigoPedidoText = document.getElementById("códigoPedido");

function codigoPedido() {
    let random = Math.random()
    let code = String(random).split(".")[1];
    
    document.getElementById("email").value == "" ? codigoPedidoText.innerHTML = "O código do seu pedido é <b>" + code + "</b>" : codigoPedidoText.innerHTML = "O código do seu pedido é <b>" + code + "</b> <br> e foi enviado para o e-mail <b>" + document.getElementById("email").value; + "</b>"

}
