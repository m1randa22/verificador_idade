
function verificar() {

    var fano = document.getElementById('txtano').value.split('-')
    var dia = fano[2]
    var mes = fano[1]
    var ano = fano[0]
    var data = new Date()
    var anoAtual = data.getUTCFullYear()
    var res = document.querySelector('div#res')

    if (dia < 1 || mes < 1 || ano < 1925) {
        mostrarAlerta('ERRO: Verifique os dados e tente novamente!');
    } else if (dia > 31 || mes > 12 || ano > anoAtual) {
        mostrarAlerta('ERRO: Verifique os dados e tente novamente!');
    } else {
        var fsex = document.getElementsByName('radsex')

        var dataNascimento = new Date(ano, mes - 1, dia);
        var dataAtual = new Date();

        // Calcula a diferença em milissegundos
        var diferencaEmMilissegundos = dataAtual - dataNascimento;

        // Converte a diferença para meses (aproximado)
        var mesesTotais = diferencaEmMilissegundos / (1000 * 60 * 60 * 24 * 30.44);

        // Calcula a parte inteira dos anos
        var anosCompletos = Math.floor(mesesTotais / 12);

        // Calcula os meses restantes
        var mesesRestantes = Math.round(mesesTotais % 12);
        var res = document.querySelector('div#res')
        res.innerHTML = `idade calculada: ${anosCompletos} anos e ${mesesRestantes} meses`
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

// Ajustar a idade em meses se o dia atual for menor que o dia de nascimento
