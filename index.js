const wish = document.querySelector(".wish")
const mainAnswer = document.querySelector(".main-answer")
const button = document.querySelector(".button")
const answers = [
    "Certeza!",
    "Não tenho tanta certeza.",
    "É decididamente assim.",
    "Não conte com isso.",
    "Sem dúvidas!",
    "Pergunte novamente mais tarde.",
    "Sim, definitivamente!",
    "Minha resposta é não.",
    "Você pode contar com isso.",
    "Melhor não te dizer agora.",
    "A meu ver, sim.",
    "Minhas fontes dizem não.",
    "Provavelmente.",
    "Não é possível prever agora.",
    "Perspectiva boa.",
    "As perspectivas não são tão boas.",
    "Sim.",
    "Concentre-se e pergunte novamente.",
    "Sinais apontam que sim.",
]
const totalAnswers = answers.length
const randomNumber = Math.floor(Math.random() * totalAnswers)

button.addEventListener('click', answerTheQuestion)

function answerTheQuestion() {

    if(wish.value === "") {
        alert("Digite sua pergunta")
        return
    }

    button.setAttribute("disabled", true)

    mainAnswer.style.opacity = 1;

    const div = document.createElement("div")
    div.className = "question"
    div.textContent = wish.value
    mainAnswer.appendChild(div)

    const h2 = document.createElement("h2")
    h2.className = "title"
    h2.textContent = answers[randomNumber]
    mainAnswer.appendChild(h2)

    setTimeout(() => {
        mainAnswer.style.opacity = 0;
        button.removeAttribute("disabled")
        setTimeout(() => {
            mainAnswer.removeChild(div)
            mainAnswer.removeChild(h2)
        }, 800)
    }, 3000)  
}