function buscar() {
    var matricula = document.getElementById('matricula').value.replace(".", "").replace("-", "");
    var validacoes = document.getElementById('validacoes');
    var disciplinas = document.getElementById('disciplinas');
    var divVoltar = document.getElementById('divVoltar');


    if (matricula == "") {
        window.alert("CPF NÃO ENCONTRADA! \n\nVerifique se a matrícula inserida está correta.");
    }
    else if (matricula.length != 11) {
        window.alert("Verifique o CPF! \n\nA quantidade de caracteres para matrícula está incorreto.\n Exemplo:\n  \t1234567891");
    }
    else {
        var i;
        var matriculaAtiva = document.getElementById('U' + matricula).className.replace('U', '').replace(' displayNone', '');
        var curso = document.getElementById('U' + matricula).className.replace('descricaoCodigo ', '');

        if (matricula == matriculaAtiva) {
            validacoes.classList.add('displayNone');
            disciplinas.classList.remove('displayNone');
            divVoltar.classList.remove('displayNone');

            for (i = 0; i < document.getElementsByClassName('U' + matricula).length; i++)
                document.getElementsByClassName('U' + matricula)[i].classList.remove('displayNone');
            for (i = 0; i < document.getElementsByClassName(curso).length; i++)
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
    if (matricula == '97734411720') {
        nomeTopo.innerHTML = '<sapn style="font-weight: 100;">Alocação do Professor Tutor</span><sapn style="font-weight: bold;"> - Maria Aparecida dos Santos Siqueira</span>';
    }
    else if (matricula == '01330406745') {
        nomeTopo.innerHTML = '<sapn style="font-weight: 100;">Alocação do Professor Tutor</span><sapn style="font-weight: bold;"> - Lidia Alice Medeiros</span>';
    }
    else if (matricula == '96337508734') {
        nomeTopo.innerHTML = '<sapn style="font-weight: 100;">Alocação do Professor Tutor</span><sapn style="font-weight: bold;"> - Rosangela Godinho Loureiro</span>';
    }
    else if (matricula == '07136219744') {
        nomeTopo.innerHTML = '<sapn style="font-weight: 100;">Alocação do Professor Tutor</span><sapn style="font-weight: bold;"> - Renata Peres dos Santos</span>';
    }
    else if (matricula == '11316472701') {
        nomeTopo.innerHTML = '<sapn style="font-weight: 100;">Alocação do Professor Tutor</span><sapn style="font-weight: bold;"> - Davi dos Santos Marques</span>';
    }
    else if (matricula == '10919835775') {
        nomeTopo.innerHTML = '<sapn style="font-weight: 100;">Alocação do Professor Tutor</span><sapn style="font-weight: bold;"> - Carolina Boucinha Martins</span>';
    }
    else if (matricula == '02201940762') {
        nomeTopo.innerHTML = '<sapn style="font-weight: 100;">Alocação do Professor Tutor</span><sapn style="font-weight: bold;"> - Carlos Alberto de Oliveira</span>';
    }
    else if (matricula == '08264293786') {
        nomeTopo.innerHTML = '<sapn style="font-weight: 100;">Alocação do Professor Tutor</span><sapn style="font-weight: bold;"> - Sandro Rafael de Lima</span>';
    }
    else if (matricula == '05799701755') {
        nomeTopo.innerHTML = '<sapn style="font-weight: 100;">Alocação do Professor Tutor</span><sapn style="font-weight: bold;"> - Raphael Fernandes Gomes</span>';
    }
    else if (matricula == '11348092718') {
        nomeTopo.innerHTML = '<sapn style="font-weight: 100;">Alocação do Professor Tutor</span><sapn style="font-weight: bold;"> - Diego Ramos do Nascimento</span>';
    }
    else if (matricula == '03724049790') {
        nomeTopo.innerHTML = '<sapn style="font-weight: 100;">Alocação do Professor Tutor</span><sapn style="font-weight: bold;"> - Anna Cristina Caldeira de Andrada Sobral Brisola</span>';
    }
    else if (matricula == '03669128107') {
        nomeTopo.innerHTML = '<sapn style="font-weight: 100;">Alocação do Professor Tutor</span><sapn style="font-weight: bold;"> - Carla Monteiro Leal</span>';
    }
    else if (matricula == '11580357725') {
        nomeTopo.innerHTML = '<sapn style="font-weight: 100;">Alocação do Professor Tutor</span><sapn style="font-weight: bold;"> - Thiago dos Santos Cardoso</span>';
    }
    else if (matricula == '14119118738') {
        nomeTopo.innerHTML = '<sapn style="font-weight: 100;">Alocação do Professor Tutor</span><sapn style="font-weight: bold;"> - Paulo Rodrigo Martins Ramalho</span>';
    }
    else if (matricula == '81969740515') {
        nomeTopo.innerHTML = '<sapn style="font-weight: 100;">Alocação do Professor Tutor</span><sapn style="font-weight: bold;"> - Rafael Rizzaro de Almeida</span>';
    }
    else if (matricula == '10833131770') {
        nomeTopo.innerHTML = '<sapn style="font-weight: 100;">Alocação do Professor Tutor</span><sapn style="font-weight: bold;"> - João Gabriel Moutinho Graça de Miranda</span>';
    }
    else if (matricula == '15155192790') {
        nomeTopo.innerHTML = '<sapn style="font-weight: 100;">Alocação do Professor Tutor</span><sapn style="font-weight: bold;"> - Yan Inácio da Silva</span>';
    }
    else if (matricula == '00616523777') {
        nomeTopo.innerHTML = '<sapn style="font-weight: 100;">Alocação do Professor Tutor</span><sapn style="font-weight: bold;"> - Marcelo Jacinto de Abreu</span>';
    }
    else if (matricula == '13425091700') {
        nomeTopo.innerHTML = '<sapn style="font-weight: 100;">Alocação do Professor Tutor</span><sapn style="font-weight: bold;"> - Brayan Lima Cordeiro</span>';
    }
    else if (matricula == '13647811742') {
        nomeTopo.innerHTML = '<sapn style="font-weight: 100;">Alocação do Professor Tutor</span><sapn style="font-weight: bold;"> - Frederico Barreto Kochem</span>';
    }
    else if (matricula == '15167827710') {
        nomeTopo.innerHTML = '<sapn style="font-weight: 100;">Alocação do Professor Tutor</span><sapn style="font-weight: bold;"> - Nielson Athayde de Souza</span>';
    }
    else if (matricula == '08943319657') {
        nomeTopo.innerHTML = '<sapn style="font-weight: 100;">Alocação do Professor Tutor</span><sapn style="font-weight: bold;"> - Phillipe Augusto Ferreira Rodrigues</span>';
    }
    else if (matricula == '13814480708') {
        nomeTopo.innerHTML = '<sapn style="font-weight: 100;">Alocação do Professor Tutor</span><sapn style="font-weight: bold;"> - Wallace da Silva Carvalho</span>';
    }
    else if (matricula == '11598314750') {
        nomeTopo.innerHTML = '<sapn style="font-weight: 100;">Alocação do Professor Tutor</span><sapn style="font-weight: bold;"> - Patrícia Guimarães Monteiro de Freitas</span>';
    }
    else if (matricula == '17239746763') {
        nomeTopo.innerHTML = '<sapn style="font-weight: 100;">Alocação do Professor Tutor</span><sapn style="font-weight: bold;"> - Caio Fabio Alves Leonor</span>';
    }
    else if (matricula == '11068381736') {
        nomeTopo.innerHTML = '<sapn style="font-weight: 100;">Alocação do Professor Tutor</span><sapn style="font-weight: bold;"> - Karolynne Gorito de Oliveira</span>';
    }
    else if (matricula == '00158813693') {
        nomeTopo.innerHTML = '<sapn style="font-weight: 100;">Alocação do Professor Tutor</span><sapn style="font-weight: bold;"> - Jonatas Aracy Gomes de Sousa</span>';
    }
    else if (matricula == '11377877752') {
        nomeTopo.innerHTML = '<sapn style="font-weight: 100;">Alocação do Professor Tutor</span><sapn style="font-weight: bold;"> - Miguel Gabriel Prazeres de Carvalho</span>';
    }
    else if (matricula == '94945268720') {
        nomeTopo.innerHTML = '<sapn style="font-weight: 100;">Alocação do Professor Tutor</span><sapn style="font-weight: bold;"> - Marcelo Vasques de Oliveira</span>';
    }
    else if (matricula == '05572443743') {
        nomeTopo.innerHTML = '<sapn style="font-weight: 100;">Alocação do Professor Tutor</span><sapn style="font-weight: bold;"> - Flávia Costa Machado</span>';
    }
    else if (matricula == '05682394747') {
        nomeTopo.innerHTML = '<sapn style="font-weight: 100;">Alocação do Professor Tutor</span><sapn style="font-weight: bold;"> - Roberta Andréa dos Santos Colombo</span>';
    }
    else if (matricula == '09723130793') {
        nomeTopo.innerHTML = '<sapn style="font-weight: 100;">Alocação do Professor Tutor</span><sapn style="font-weight: bold;"> - Vanessa Fernandes dos Santos</span>';
    }
    else if (matricula == '12207468780') {
        nomeTopo.innerHTML = '<sapn style="font-weight: 100;">Alocação do Professor Tutor</span><sapn style="font-weight: bold;"> - Celina Maria Frias Leal Martins</span>';
    }
    else if (matricula == '03665806712') {
        nomeTopo.innerHTML = '<sapn style="font-weight: 100;">Alocação do Professor Tutor</span><sapn style="font-weight: bold;"> - Paulo Roberto Feitosa</span>';
    }
    else if (matricula == '09009347788') {
        nomeTopo.innerHTML = '<sapn style="font-weight: 100;">Alocação do Professor Tutor</span><sapn style="font-weight: bold;"> - Sandra Conceição Ribeiro Chicharo</span>';
    }
    else if (matricula == '13616844703') {
        nomeTopo.innerHTML = '<sapn style="font-weight: 100;">Alocação do Professor Tutor</span><sapn style="font-weight: bold;"> - Eveline Mamede Dantas</span>';
    }
    else if (matricula == '06972453739') {
        nomeTopo.innerHTML = '<sapn style="font-weight: 100;">Alocação do Professor Tutor</span><sapn style="font-weight: bold;"> - Ricardo Ferreira da Silva</span>';
    }
    else if (matricula == '10031270700') {
        nomeTopo.innerHTML = '<sapn style="font-weight: 100;">Alocação do Professor Tutor</span><sapn style="font-weight: bold;"> - Leonardo Rodrigues Pereira</span>';
    }
    else if (matricula == '10250762730') {
        nomeTopo.innerHTML = '<sapn style="font-weight: 100;">Alocação do Professor Tutor</span><sapn style="font-weight: bold;"> - Gisele Teixeira Saleiro</span>';
    }
    else if (matricula == '15470043711') {
        nomeTopo.innerHTML = '<sapn style="font-weight: 100;">Alocação do Professor Tutor</span><sapn style="font-weight: bold;"> - Erika Cinegaglia Viz Leutwiler</span>';
    }
    else if (matricula == '15612718705') {
        nomeTopo.innerHTML = '<sapn style="font-weight: 100;">Alocação do Professor Tutor</span><sapn style="font-weight: bold;"> - Rodolfo Velasque Freitas de Oliveira</span>';
    }
    else if (matricula == '29804168863') {
        nomeTopo.innerHTML = '<sapn style="font-weight: 100;">Alocação do Professor Tutor</span><sapn style="font-weight: bold;"> - Andrea Macedo de Avila Baez Garcia</span>';
    }
    else if (matricula == '11979554706') {
        nomeTopo.innerHTML = '<sapn style="font-weight: 100;">Alocação do Professor Tutor</span><sapn style="font-weight: bold;"> - Maria da Conceição Avelino Dias</span>';
    }
    else if (matricula == '13136688775') {
        nomeTopo.innerHTML = '<sapn style="font-weight: 100;">Alocação do Professor Tutor</span><sapn style="font-weight: bold;"> - Danielle Mendes da Silva Albuquerque</span>';
    }
    else if (matricula == '11898578710') {
        nomeTopo.innerHTML = '<sapn style="font-weight: 100;">Alocação do Professor Tutor</span><sapn style="font-weight: bold;"> - Maxilane Silva Viana</span>';
    }
    else if (matricula == '23483309896') {
        nomeTopo.innerHTML = '<sapn style="font-weight: 100;">Alocação do Professor Tutor</span><sapn style="font-weight: bold;"> - Vanessa Sartori Rodi</span>';
    }
    else if (matricula == '12299794760') {
        nomeTopo.innerHTML = '<sapn style="font-weight: 100;">Alocação do Professor Tutor</span><sapn style="font-weight: bold;"> - Raissa Lyra de Paiva Alves</span>';
    }
    else if (matricula == '14524586776') {
        nomeTopo.innerHTML = '<sapn style="font-weight: 100;">Alocação do Professor Tutor</span><sapn style="font-weight: bold;"> - Felipe de Oliveira Santos</span>';
    }
    else if (matricula == '14524475788') {
        nomeTopo.innerHTML = '<sapn style="font-weight: 100;">Alocação do Professor Tutor</span><sapn style="font-weight: bold;"> - Fernanda de Carvalho Nenartavis</span>';
    }
    else if (matricula == '12184618705') {
        nomeTopo.innerHTML = '<sapn style="font-weight: 100;">Alocação do Professor Tutor</span><sapn style="font-weight: bold;"> - Natalia Xavier Pereira da Costa</span>';
    }
    else if (matricula == '17172347714') {
        nomeTopo.innerHTML = '<sapn style="font-weight: 100;">Alocação do Professor Tutor</span><sapn style="font-weight: bold;"> - Mirelle Lourenco de Andrade</span>';
    }
    else if (matricula == '13922540783') {
        nomeTopo.innerHTML = '<sapn style="font-weight: 100;">Alocação do Professor Tutor</span><sapn style="font-weight: bold;"> - Felipe Akira Miasato</span>';
    }
    else if (matricula == '05839520705') {
        nomeTopo.innerHTML = '<sapn style="font-weight: 100;">Alocação do Professor Tutor</span><sapn style="font-weight: bold;"> - Priscila Lopes D Avila Borges</span>';
    }
    else if (matricula == '07160101944') {
        nomeTopo.innerHTML = '<sapn style="font-weight: 100;">Alocação do Professor Tutor</span><sapn style="font-weight: bold;"> - Carla Andressa Pedron</span>';
    }
    else if (matricula == '37524490801') {
        nomeTopo.innerHTML = '<sapn style="font-weight: 100;">Alocação do Professor Tutor</span><sapn style="font-weight: bold;"> - Carla Caroline Franzini De Souza</span>';
    }
    else if (matricula == '12312989794') {
        nomeTopo.innerHTML = '<sapn style="font-weight: 100;">Alocação do Professor Tutor</span><sapn style="font-weight: bold;"> - #N/D #N/D</span>';
    }
    else if (matricula == '36193836772') {
        nomeTopo.innerHTML = '<sapn style="font-weight: 100;">Alocação do Professor Tutor</span><sapn style="font-weight: bold;"> - Isabel de Oliveira Nascimento</span>';
    }
    else if (matricula == '02191847714') {
        nomeTopo.innerHTML = '<sapn style="font-weight: 100;">Alocação do Professor Tutor</span><sapn style="font-weight: bold;"> - Ana Lucia Guimarães</span>';
    }
    else if (matricula == '03054974804') {
        nomeTopo.innerHTML = '<sapn style="font-weight: 100;">Alocação do Professor Tutor</span><sapn style="font-weight: bold;"> - Fernando Torres de Andrade</span>';
    }
    else if (matricula == '06993280710') {
        nomeTopo.innerHTML = '<sapn style="font-weight: 100;">Alocação do Professor Tutor</span><sapn style="font-weight: bold;"> - Alex dos Prazeres Machado</span>';
    }
    else if (matricula == '08756118775') {
        nomeTopo.innerHTML = '<sapn style="font-weight: 100;">Alocação do Professor Tutor</span><sapn style="font-weight: bold;"> - Andre Luiz Bernardo Storino</span>';
    }
    else if (matricula == '60605553734') {
        nomeTopo.innerHTML = '<sapn style="font-weight: 100;">Alocação do Professor Tutor</span><sapn style="font-weight: bold;"> - Glaucia Maria Guerra Ferreira</span>';
    }
    else if (matricula == '07617530790') {
        nomeTopo.innerHTML = '<sapn style="font-weight: 100;">Alocação do Professor Tutor</span><sapn style="font-weight: bold;"> - Rosemeri da Silva Paixão</span>';
    }
    else if (matricula == '05458451732') {
        nomeTopo.innerHTML = '<sapn style="font-weight: 100;">Alocação do Professor Tutor</span><sapn style="font-weight: bold;"> - Renata de Oliveira Batista Rodrigues</span>';
    }
    else if (matricula == '74487841704') {
        nomeTopo.innerHTML = '<sapn style="font-weight: 100;">Alocação do Professor Tutor</span><sapn style="font-weight: bold;"> - Claudia Abreu Paes</span>';
    }
    else if (matricula == '08624242754') {
        nomeTopo.innerHTML = '<sapn style="font-weight: 100;">Alocação do Professor Tutor</span><sapn style="font-weight: bold;"> - Caroline Costa Nunes Lima</span>';
    }
    else if (matricula == '14292526770') {
        nomeTopo.innerHTML = '<sapn style="font-weight: 100;">Alocação do Professor Tutor</span><sapn style="font-weight: bold;"> - Flora Thamiris Rodrigues Bittencourt</span>';
    }
    else if (matricula == '05878531747') {
        nomeTopo.innerHTML = '<sapn style="font-weight: 100;">Alocação do Professor Tutor</span><sapn style="font-weight: bold;"> - Thamires da Silva Ribeiro</span>';
    }
    else if (matricula == '02051812799') {
        nomeTopo.innerHTML = '<sapn style="font-weight: 100;">Alocação do Professor Tutor</span><sapn style="font-weight: bold;"> - Patricia Paes de Albuquerque</span>';
    }
    else if (matricula == '05410640705') {
        nomeTopo.innerHTML = '<sapn style="font-weight: 100;">Alocação do Professor Tutor</span><sapn style="font-weight: bold;"> - Ricardo Cavalcanti Lavandier</span>';
    }
    else if (matricula == '13814480708') {
        nomeTopo.innerHTML = '<sapn style="font-weight: 100;">Alocação do Professor Tutor</span><sapn style="font-weight: bold;"> - Wesley Pinto da Silva</span>';
    }
    else if (matricula == '08705475775') {
        nomeTopo.innerHTML = '<sapn style="font-weight: 100;">Alocação do Professor Tutor</span><sapn style="font-weight: bold;"> - Gilliard da Silva Alves</span>';
    }
    else if (matricula == '08931303700') {
        nomeTopo.innerHTML = '<sapn style="font-weight: 100;">Alocação do Professor Tutor</span><sapn style="font-weight: bold;"> - Flavia Alexandrina Coelho Marcos</span>';
    }
    else if (matricula == '02974801706') {
        nomeTopo.innerHTML = '<sapn style="font-weight: 100;">Alocação do Professor Tutor</span><sapn style="font-weight: bold;"> - Angela Paula Zao Bastos</span>';
    }
    else if (matricula == '89438744720') {
        nomeTopo.innerHTML = '<sapn style="font-weight: 100;">Alocação do Professor Tutor</span><sapn style="font-weight: bold;"> - Jorge Kenedy Almeida Silva</span>';
    }
    else if (matricula == '01173126732') {
        nomeTopo.innerHTML = '<sapn style="font-weight: 100;">Alocação do Professor Tutor</span><sapn style="font-weight: bold;"> - Carla Castilho Ferreira Bastos</span>';
    }
    else if (matricula == '03618309716') {
        nomeTopo.innerHTML = '<sapn style="font-weight: 100;">Alocação do Professor Tutor</span><sapn style="font-weight: bold;"> - Aleciano Santana de Souza</span>';
    }
    else if (matricula == '07615312701') {
        nomeTopo.innerHTML = '<sapn style="font-weight: 100;">Alocação do Professor Tutor</span><sapn style="font-weight: bold;"> - Everton Santos Vasconcelos</span>';
    }
    else if (matricula == '08299352746') {
        nomeTopo.innerHTML = '<sapn style="font-weight: 100;">Alocação do Professor Tutor</span><sapn style="font-weight: bold;"> - Bruno Taranto Malheiros</span>';
    }
    else if (matricula == '07539494743') {
        nomeTopo.innerHTML = '<sapn style="font-weight: 100;">Alocação do Professor Tutor</span><sapn style="font-weight: bold;"> - Marcio Simão de Vasconcellos</span>';
    }
    else if (matricula == '13941785737') {
        nomeTopo.innerHTML = '<sapn style="font-weight: 100;">Alocação do Professor Tutor</span><sapn style="font-weight: bold;"> - Daniele Vaz Fernandes</span>';
    }
    else if (matricula == '04296055798') {
        nomeTopo.innerHTML = '<sapn style="font-weight: 100;">Alocação do Professor Tutor</span><sapn style="font-weight: bold;"> - Daniely Aparecida Polido Mendes</span>';
    }
    else if (matricula == '01829456776') {
        nomeTopo.innerHTML = '<sapn style="font-weight: 100;">Alocação do Professor Tutor</span><sapn style="font-weight: bold;"> - Julio Cesar de Souza Loureiro</span>';
    }
    else if (matricula == '07643930732') {
        nomeTopo.innerHTML = '<sapn style="font-weight: 100;">Alocação do Professor Tutor</span><sapn style="font-weight: bold;"> - Christine Soares de Oliveira Lopes da Cruz</span>';
    }
    else if (matricula == '80668186704') {
        nomeTopo.innerHTML = '<sapn style="font-weight: 100;">Alocação do Professor Tutor</span><sapn style="font-weight: bold;"> - Licia Laura Craveiro de Souza Queiroz</span>';
    }
    else if (matricula == '01241688761') {
        nomeTopo.innerHTML = '<sapn style="font-weight: 100;">Alocação do Professor Tutor</span><sapn style="font-weight: bold;"> - Luciana de Souza Lobato</span>';
    }
    else if (matricula == '11964886732') {
        nomeTopo.innerHTML = '<sapn style="font-weight: 100;">Alocação do Professor Tutor</span><sapn style="font-weight: bold;"> - Carlos Leonardo Loureiro Cardoso</span>';
    }
    else if (matricula == '13365277730') {
        nomeTopo.innerHTML = '<sapn style="font-weight: 100;">Alocação do Professor Tutor</span><sapn style="font-weight: bold;"> - Deborah Paredes Soares da Silva</span>';
    }

    /* 
        window.scrollTo(0, 9999); */
}

function voltar() {
    document.location.reload(true);
}

