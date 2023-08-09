function buscar() {
    var matricula = document.getElementById('matricula').value;
    var validacoes = document.getElementById('validacoes');
    var disciplinas = document.getElementById('disciplinas');

    
    if(matricula =="") {
        window.alert("MATRICULA NÃO ENCONTRADA! \n\nVerifique se a matrícula inserida está correta.");
    }
    else{    
        var i;
        var matriculaAtiva = document.getElementById('CPF'+ matricula).className.replace('CPF','').replace(' displayNone','');
        var curso = document.getElementById('CPF'+ matricula).className.replace('descricaoCodigo ','');
        
        if( matricula == matriculaAtiva ){
            validacoes.classList.add('displayNone');
            disciplinas.classList.remove('displayNone');

                for (i=0; i< document.getElementsByClassName('CPF'+ matricula).length; i++)
            document.getElementsByClassName('CPF'+ matricula)[i].classList.remove('displayNone');
                for (i=0; i< document.getElementsByClassName(curso).length; i++)
            document.getElementsByClassName(curso)[i].classList.remove('displayNone');
        }
        var linhas = document.querySelectorAll("table tr:not(.displayNone)");
        for (var i = 1; i < linhas.length; i++) {
            if (i % 2 === 0) {
              linhas[i].classList.add("par");
            } else {
              linhas[i].classList.add("impar");
            }
        }
    }


    window.scrollTo(0, 9999);
}

