
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

        var fsex = document.getElementsByName('radsex')
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {

            if (idade >= 0 && idade < 12) {
                genero = 'menino'
                img.setAttribute('src', './img/menino.jpg')
            } else if (idade < 20) {
                genero = 'jovem homem'
                img.setAttribute('src', './img/jovemhomem.jpg')
            } else if (idade < 50) {
                genero = 'adulto'
                img.setAttribute('src', './img/homemadulto.jpg')
            } else {
                genero = 'idoso'
                img.setAttribute('src', './img/idoso.jpg')
            }

        } else if (fsex[1].checked) {

            if (idade >= 0 && idade < 12) {
                genero = 'menina'
                img.setAttribute('src', './img/menina.jpg')
            } else if (idade < 20) {
                genero = 'jovem mulher'
                img.setAttribute('src', './img/jovemmulher.jpg')
            } else if (idade < 50) {
                genero = 'adulta'
                img.setAttribute('src', './img/mulheradulta.jpg')
            } else {
                genero = 'idosa'
                img.setAttribute('src', './img/idosa.jpg')
            }
        }

        res.innerHTML = `Você é um(a) ${genero} com ${idade} anos e ${meses} meses`
        res.appendChild(img)

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
