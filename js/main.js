const analiseTexto = {
    criptografar: {
        'a': 'ai',
        'e': 'enter',
        'i': 'imes',
        'o': 'ober',
        'u': 'ufat'
    },

    descriptografar: {
        'ai': 'a',
        'enter': 'e',
        'imes': 'i',
        'ober': 'o',
        'ufat': 'u'
    }
}

function substituirCaracteres(texto, mapeamento) {
    return texto.replace(new RegExp(Object.keys(mapeamento).join('|'), 'g'), match => mapeamento[match]);
}

function manipularTexto(acao) {
    const textarea = document.getElementById('textareaDigitado');
    const mapeamento = analiseTexto[acao];

    if (textarea && mapeamento) {
        const textoDigitado = textarea.value.trim(); // Remove espaços em branco no início e no final

        if (textoDigitado !== "") {
            const resultadoDaManipulacao = substituirCaracteres(textoDigitado, mapeamento);
            const visualizaTexto = document.getElementById('visualizaTextoCriptografado');

            visualizaTexto.innerHTML = `<p id="texto__resultado" class="textoCampoResultado">${resultadoDaManipulacao}</p> <button id="botaoCopiar" class="copiarTexto">Copiar</button>`;
            visualizaTexto.classList.add('alinhamento__conteudo__criptografado')

            document.getElementById('botaoCopiar').addEventListener('click', () => {
                const range = document.createRange();
                range.selectNodeContents(document.getElementById('texto__resultado'));

                const selection = window.getSelection();

                selection.removeAllRanges();

                selection.addRange(range);

                document.execCommand('copy');

                selection.removeAllRanges();
            });
        }else{
            const visualizaTexto = document.getElementById('visualizaTextoCriptografado');
            visualizaTexto.classList.remove('alinhamento__conteudo__criptografado')
            visualizaTexto.innerHTML = '<img src="assets/High quality products 1 1.svg" class="imagem__conteudo__criptografado" alt="Personagem Usando Lupa"> <h1 class="conteudo__criptografado__tituloMensagem">Nenhuma mensagem encontrada</h1> <p class="conteudo__criptografado__mensagem">Digite um texto que você deseja criptografar ou descriptografar.</p>';
        }
    } 
}


//Dark Theme:

const chk = document.getElementById('check')

chk.addEventListener('change', () => {
    document.body.classList.toggle('dark')
})

