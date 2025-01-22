// /mnt/data/scripts.js

// Dados simulados dos projetos
const projetos = [
    {
        id: 1,
        titulo: "Banco de dados-Condomínio",
        descricao: "Descrição completa do Projeto 1.",
        tipo: "Banco de Dados-MySQL",
        data: "02/07/2024",
        imagem: "projetos/projeto1/Condominio.jpg",
        arquivo: "projetos/projeto1/Banco_de_dados_condominio.zip"
    },
    {
        id: 2,
        titulo: "criptografia",
        descricao: "Programa que criptografa uma mensagem utilizando do deslocamento (shift) nos valores ASCII dos caracteres, sendo um tipo de Cifra de César.",
        tipo: "Programa de Criptografia em Java",
        data: "13/10/2024",
        imagem: "projetos/projeto2/criptografia.png",
        arquivo: "projetos/projeto2/criptografia-JavaScript.js"
    },
    {
        id: 3,
        titulo: "Simulação de combate contra supe-bacterias com fagos",
        descricao: "Uma simulação que testa a eficácia dos bacteriófagos contra superbactérias",
        tipo: "Programa de simulação com HTML; JavaScript e CSS",
        data: "24/11/2024",
        imagem: "projetos/projeto3/bacteriofago.jpg",
        arquivo: "projetos/projeto3/Simulação de combate contra supe-bacterias com fagos.zip"
    },
    {
        id: 4,
        titulo: "APP - bateria",
        descricao: "Aplicativo criado no Kodular que tem a função de mostrar a bateria atual do aparelho.",
        tipo: "APK - Kodular",
        data: "14/10/2024",
        imagem: "projetos/projeto4/bateria.png",
        arquivo: "projetos/projeto4/bateria app.rar"
    },
    {
        id: 5,
        titulo: "APP - localização",
        descricao: "Aplicativo criado no Kodular que tem a função de pegar a localização atual do aparelho.",
        tipo: "APK - Kodular",
        data: "14/10/2024",
        imagem: "projetos/projeto5/localização.jpg",
        arquivo: "projetos/projeto5/localização app.rar"
    },
    {
        id: 6,
        titulo: "APP - permissões",
        descricao: "Aplicativo criado no Kodular que tem a funcionalidade de pedir permissão do aparelho.",
        tipo: "APK - Kodular",
        data: "16/09/2024",
        imagem: "projetos/projeto6/permissões.jpg",
        arquivo: "projetos/projeto6/permissões app.rar"
    },
    {
        id: 7,
        titulo: "APP - luximetro",
        descricao: "Aplicativo criado no Kodular que tem a função de medir a luz.",
        tipo: "APK - Kodular",
        data: "14/10/2024",
        imagem: "projetos/projeto7/luximetro.jpg",
        arquivo: "projetos/projeto7/luximetro app.rar"
    },    
    {
        id: 8,
        titulo: "APP - compartilhar",
        descricao: "Aplicativo criado no Kodular que tem a função de compartilhar.",
        tipo: "APK - Kodular",
        data: "15/09/2024",
        imagem: "projetos/projeto8/compartilhar.png",
        arquivo: "projetos/projeto8/compartilhar app.rar"
    }
];

// Selecionar elementos do DOM
const modal = document.getElementById("modal-detalhes");
const fecharModal = document.querySelector(".fechar-modal");
const tituloProjeto = document.getElementById("titulo-projeto");
const descricaoProjeto = document.getElementById("descricao-projeto");
const tipoProjeto = document.getElementById("tipo-projeto");
const dataProjeto = document.getElementById("data-projeto");
const imagemProjeto = document.getElementById("imagem-projeto");
const linkDownload = document.getElementById("link-download");

// Função para abrir o modal com os detalhes do projeto
function abrirModal(id) {
    const projeto = projetos.find(p => p.id === id);
    if (projeto) {
        tituloProjeto.textContent = projeto.titulo;
        descricaoProjeto.textContent = projeto.descricao;
        tipoProjeto.textContent = `Tipo: ${projeto.tipo}`;
        dataProjeto.textContent = `Data: ${projeto.data}`;
        imagemProjeto.src = projeto.imagem;
        linkDownload.href = projeto.arquivo;
        modal.style.display = "flex";
    }
}

// Fechar o modal
fecharModal.addEventListener("click", () => {
    modal.style.display = "none";
});

// Fechar o modal ao clicar fora do conteúdo
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// Adicionar evento aos botões de "Detalhes"
const botoesDetalhes = document.querySelectorAll(".abrir-detalhes");
botoesDetalhes.forEach(botao => {
    botao.addEventListener("click", () => {
        const id = parseInt(botao.getAttribute("data-id"));
        abrirModal(id);
    });
});
