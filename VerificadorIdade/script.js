
function verificar() {

    var fano = document.getElementById('txtano').value.split('-')
    var dia = fano[2]
    var mes = fano[1]
    var ano = fano[0]
    var anoAtual = new Date().getUTCFullYear();
    var res = document.querySelector('div#res')

    if (dia < 1 || mes < 1 || ano < 1920) {
        mostrarAlerta('ERRO: Verifique os dados e tente novamente!');
    } else if (dia > 31 || mes > 12 || ano > anoAtual) {
        mostrarAlerta('ERRO: Verifique os dados e tente novamente!');
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = anoAtual - ano

        var dataNascimento = new Date(ano, mes - 1, dia);
        var dataAtual = new Date();
        var mesAtual = new Date().getUTCMonth();
        var diaAtual = new Date().getUTCDate();

        if (dataAtual.getUTCMonth() < dataNascimento.getUTCMonth() ||
            (dataAtual.getUTCMonth() === dataNascimento.getUTCMonth() && dataAtual.getUTCDate() < dataNascimento.getUTCDate())) {
            idade--; // Se o aniversário ainda não aconteceu, subtrai um ano
        }

        var meses = mesAtual - (mes - 1); // A diferença de meses entre o mês atual e o mês de nascimento
        if (meses < 0) {
            meses += 12; // Se o mês atual é anterior ao mês de nascimento, ajusta os meses
        }

        if (diaAtual < dia) {
            meses--; // Se o dia atual ainda não chegou, não conta o mês completo
        }

        // Corrige caso a diferença de meses seja negativa (ano ainda não começou)
        if (meses < 0) {
            meses += 12;
        }

        var res = document.querySelector('div#res')
        res.innerHTML = `idade calculada: ${idade} anos e ${meses} meses`
    }
}

function mostrarAlerta(mensagem) {
    const alerta = document.createElement('div');
    alerta.classList.add('alerta');
    alerta.textContent = mensagem;
    document.body.appendChild(alerta);

    setTimeout(() => {
        alerta.remove();
    }, 3000);
}
