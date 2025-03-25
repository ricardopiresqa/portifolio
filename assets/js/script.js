let nav = document.querySelector('header nav');
let popup = document.querySelector('.popup-image');
let header = document.querySelector('header');
let body = document.querySelector('body');


function showMenu() {
    if (nav.classList.contains('open')) {
        nav.classList.remove('open');
        document.querySelector('.menu-btn img').src = './assets/img/menu.png'
    } else {
        nav.classList.add('open');
        document.querySelector('.menu-btn img').src = './assets/img/close.png'
    }
}


function closeMenu() {
    let a = document.querySelectorAll('.underline-hover a')
    if (nav.classList.contains('open')) {
        nav.classList.remove('open');
        document.querySelector('.menu-btn img').src = './assets/img/menu.png'
    }
}

//insert description    

document.onmouseover = function (element) {
    let description = document.querySelector('.element-description')
    let description2 = document.querySelector('.soft-element-description')
    let titleElement = document.querySelector('.skill-element-title');
    let titleElement2 = document.querySelector('.soft-skill-element-title');
    if (element.target.classList.contains('jira')) {
        titleElement.textContent = "JIRA";
        description.textContent = "O Jira Software é uma ferramenta de gestão ágil de projetos que oferece suporte a qualquer metodologia ágil, como Scrum, Kanban ou qualquer outra que você preferir.";
    }
    else if (element.target.classList.contains('confluence')) {
        titleElement.textContent = "CONFLUENCE";
        description.textContent = "O Confluence é a área de trabalho da equipe onde o conhecimento e a colaboração andam lado a lado. As páginas dinâmicas proporcionam um espaço ideal para sua equipe criar, coletar e colaborar em qualquer projeto ou ideia.";
    }

    else if (element.target.classList.contains('metodologias-ageis')) {
        titleElement.textContent = "METÓDOLOGIAS ÁGEIS";
        description.textContent = "As metodologias ágeis são uma forma de acelerar entregas de um determinado projeto. Ela consiste no fracionamento de entregas para o cliente final em ciclos menores. Com isso, eventuais problemas podem ser corrigidos mais rapidamente e os planejamentos serem revistos com os métodos ágeis.";
    }

    else if (element.target.classList.contains('banco')) {
        titleElement.textContent = "BANCO DE DADOS";
        description.textContent = "Um banco de dados é uma coleção organizada de informações - ou dados - estruturadas, normalmente armazenadas eletronicamente em um sistema de computador. Um banco de dados é geralmente controlado por um sistema de gerenciamento de banco de dados (DBMS).";
    }

    else if (element.target.classList.contains('git')) {
        titleElement.textContent = "GIT";
        description.textContent = "Git é o sistema de controle de versão open source mais usado no mundo atualmente! Ele é usado para controlar o histórico de alterações de arquivos e principalmente de projetos de desenvolvimento de software. Ele permite mais flexibilidade no fluxo de trabalho, segurança e desempenho.";
    }

    else if (element.target.classList.contains('github')) {
        titleElement.textContent = "GITHUB";
        description.textContent = "GitHub é uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git. Ele permite que programadores, utilitários ou qualquer usuário cadastrado na plataforma contribuam em projetos privados e/ou Open Source de qualquer lugar do mundo.";
    }

    else if (element.target.classList.contains('cypress')) {
        titleElement.textContent = "CYPRESS";
        description.textContent = "Com o Cypress, você pode criar facilmente testes para seus aplicativos da Web modernos, depurá-los visualmente e execute-os automaticamente em suas compilações de integração contínua.";
    }

    else if (element.target.classList.contains('java')) {
        titleElement.textContent = "JAVA";
        description.textContent = "Java é uma linguagem multiplataforma, orientada a objetos e centrada em rede que pode ser usada como uma plataforma em si. É uma linguagem de programação rápida, segura e confiável para codificar tudo, desde aplicações móveis e software empresarial até aplicações de big data e tecnologias do servidor.";
    }

    else if (element.target.classList.contains('learning')) {
        titleElement.textContent = "O QUE ESTOU APRENDENDO?";
        description.textContent = "No momento, estou me aprofundando em testes ágeis, javascript, selenium, postman, restful API, docker, nodeJs, swagger, BDD/Cucumber, HTML/CSS, python, java e na certificação CTFL.";
    }

    else {
        titleElement.textContent = "";
        description.textContent = "*passe o cursor do mouse por cima do card para visualizar a descrição*";
    }

    if (element.target.classList.contains('equipe')) {
        titleElement2.textContent = "TRABALHO EM EQUIPE";
        description2.textContent = "Habilidade de cooperar com colegas em grupos compostos por pessoas diversas, dando a minha contribuição individual para o interesse coletivo.";
    }
    else if (element.target.classList.contains('critico')) {
        titleElement2.textContent = "PENSAMENTO CRÍTICO";
        description2.textContent = "Capacidade de questionar métodos, identificar problemas, buscar novas soluções e rever processos, mas com sabedoria.";
    }

    else if (element.target.classList.contains('resiliencia')) {
        titleElement2.textContent = "RESILIÊNCIA";
        description2.textContent = "Capacidade de lidar com problemas de modo assertivo e se adaptar facilmente.";
    }

    else if (element.target.classList.contains('comunicacao')) {
        titleElement2.textContent = "COMUNICAÇÃO";
        description2.textContent = "Capacidade de dialogar com colegas de trabalho para evitar conflitos, resolver divergências e eliminar ruídos que prejudicam a realização de tarefas.";
    }

    else if (element.target.classList.contains('proatividade')) {
        titleElement2.textContent = "PROATIVIDADE";
        description2.textContent = "Capacidade de arregaçar as mangas, avaliar cenários e encontrar caminhos para resolver questões que impedem os resultados ou atrapalham a produtividade.";
    }

    else if (element.target.classList.contains('learning')) {
        titleElement2.textContent = "O QUE ESTOU APRENDENDO?";
        description2.textContent = "Sempre estou disposto a desenvolver novas habilidade e aprimorar as que ja possuo.";
    }

    else {
        titleElement2.textContent = "";
        description2.textContent = "*passe o cursor do mouse por cima do card para visualizar a descrição*";
    }
}

//open popup image

document.querySelectorAll('.certified-img').forEach(image => {
    image.onclick = () => {
        document.querySelector('.popup-image').style.display = 'block';
        document.querySelector('.popup-image img').src = image.getAttribute('src');
        openModal();
    }
});

function openModal() {
    if (popup.style.display == 'block') {
        header.style.display = 'none';
        body.style.overflow = 'hidden';
    }
    return;
}

function closePopup() {
    document.querySelector('.popup-image').style.display = 'none';
    body.style.overflow = 'auto';
    header.style.display = 'block';
    header.style.display = 'flex';
}

