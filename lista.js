const button = document.querySelector(".button-add-task")
const input = document.querySelector(".input-task")
const listaCompleta = document.querySelector(".list-task")
let minhaListaDeItens = []

function adicionarNovaTarefa() {
    minhaListaDeItens.push({
        tarefa: input.value,
        concluida: false
       
    })
    input.value = ""
    mostrarTaferas()
}
function mostrarTaferas() {
    let novaLi = ''
    minhaListaDeItens.forEach((item, posicao) => {
        novaLi = novaLi + `

        <li class="task ${item.concluida && "done"}">
            <img src="./img/checked.png" alt="check-na-tarefa" onclick="concluirTarefa(${posicao})">
            <p>${item.tarefa}</p>
            <img src="./img/trash.png" alt="tarefa-para-o-lixo" onclick="deletarItem(${posicao})">
        </li>

        `
    }) 
    listaCompleta.innerHTML = novaLi

    localStorage.setItem('lista', JSON.stringify(minhaListaDeItens))
}
function concluirTarefa(posicao) {
    minhaListaDeItens[posicao].concluida = !minhaListaDeItens[posicao].concluida
    mostrarTaferas()
}
function deletarItem(posicao) {
    minhaListaDeItens.splice(posicao, 1)
    mostrarTaferas()
}
function recarregarTarefas() {
    const tarefaDoLocalStorage = localStorage.getItem('lista')

    if (tarefaDoLocalStorage){
    minhaListaDeItens = JSON.parse(tarefaDoLocalStorage)
}
    mostrarTaferas()
}
recarregarTarefas()
button.addEventListener('click', adicionarNovaTarefa)