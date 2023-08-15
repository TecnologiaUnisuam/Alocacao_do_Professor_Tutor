function buscar() {
    var matricula = document.getElementById('matricula').value.replace(".","").replace("-","");
    var validacoes = document.getElementById('validacoes');
    var disciplinas = document.getElementById('disciplinas');

    
    if(matricula =="") {
        window.alert("CPF NÃO ENCONTRADA! \n\nVerifique se a matrícula inserida está correta.");
    }
    else if( matricula.length != 11){
        window.alert("Verifique o CPF! \n\nA quantidade de caracteres para matrícula está incorreto.\n Exemplo:\n  \t1234567891");
    }
    else{    
        var i;
        var matriculaAtiva = document.getElementById('U'+ matricula).className.replace('U','').replace(' displayNone','');
        var curso = document.getElementById('U'+ matricula).className.replace('descricaoCodigo ','');
        
        if( matricula == matriculaAtiva ){
            validacoes.classList.add('displayNone');
            disciplinas.classList.remove('displayNone');

                for (i=0; i< document.getElementsByClassName('U'+ matricula).length; i++)
            document.getElementsByClassName('U'+ matricula)[i].classList.remove('displayNone');
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

/* 
    window.scrollTo(0, 9999); */
}

