function TrocarPag(caminho) {
    window.location.href = caminho
}
function splitArray(array, size) {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i + size));
    }
    return result;
}
function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none'
    popup.innerHTML = '<button onclick="closePopup()" class="close-popup" id="closePopup">&times;</button>'
    document.getElementById('overlay').style.display = 'none';
}
function openPopup(tipo) {
    document.getElementById('popup').style.display = 'flex';
    contentPopup(tipo)
    document.getElementById('overlay').style.display = 'block';
}
const atividades = [
    "01/home.html",
    "02/Home2.html",
    "03/home3.html",
    "04/login.html",
    "05/Teste_css.html",
    "06/index.html",
]
const projetos = [
    "Projeto 1/jmviagens.html"
]
const trabalhos = [
    "Trabalho 1/Homepage_css.html"
]
function contentPopup(tipo) {
    if (tipo == "Atividades") {
        const elementos = contPopupMaker(atividades, tipo)
        elementos.forEach(element => {
            document.getElementById('popup').appendChild(element)
        });
    }
    else if (tipo == "Projetos") {
        const elementos = contPopupMaker(projetos, tipo)
        elementos.forEach(element => {
            document.getElementById('popup').appendChild(element)
        });
    }
    else if (tipo == "Trabalhos") {
        const elementos = contPopupMaker(trabalhos, tipo)
        elementos.forEach(element => {
            document.getElementById('popup').appendChild(element)
        });
    }
}
function contPopupMaker(lista, tipo) {
    const totalLinks = []
    for (let i = 0; i < lista.length; i++) {
        const a = document.createElement("a")
        a.textContent = `${tipo} ${i + 1}`;

        const divLink = document.createElement("div")
        divLink.classList.add("div-link")
        divLink.appendChild(a)
        divLink.addEventListener("click", function () {
            window.location.href = lista[i]
        })
        totalLinks.push(divLink)
    }
    const splitResults = splitArray(totalLinks, 6)
    const links = []
    for (let j = 0; j < splitResults.length; j++) {
        const div = document.createElement("div")

        for (let l = 0; l < splitResults[j].length; l++) {
            div.appendChild(splitResults[j][l])
        }
        links.push(div)
    }
    return links
}