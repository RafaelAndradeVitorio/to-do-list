var tarefa = document.querySelector('.inputTarefa')
var dataLimite = document.querySelector('.inputData-limite')
var prioridade = document.querySelector('.inputPrioridade')
const botao = document.querySelector('#add')
const tarefas = document.querySelector('.tarefas')
var corpo = document.querySelector('main')
var ok = document.querySelector('.checkBox')

botao.addEventListener('click', function(e){

   console.log(prioridade.value)
   console.log(ok.parentNode)
   var parente = this.parentNode

   var novaTarefa = document.createElement('div');
   novaTarefa.classList = "tarefas"

   var novaT = document.createElement('h3')
   novaT.classList = "tarefa"

   var novaDL = document.createElement('p')
   novaDL.classList = "data-limite"

   var caixaSelecao = document.createElement('input')
   caixaSelecao.classList = "checkBox"
   caixaSelecao.type = "checkbox"

   caixaSelecao.addEventListener('change', ()=> {
      if (caixaSelecao.checked) {
         console.log("Checkbox is checked..");
         caixaSelecao.parentNode.style.opacity = '60%';
       } else {
         console.log("Checkbox is not checked..");
         caixaSelecao.parentNode.style.opacity = '100%'
   
       }
   })

   novaT.textContent = tarefa.value
   novaDL.textContent = dataLimite.value


   corpo.appendChild(novaTarefa)
   novaTarefa.appendChild(novaT)
   novaTarefa.appendChild(novaDL)
   novaTarefa.appendChild(caixaSelecao)

   if (prioridade.value === 'Alta'){
      novaTarefa.classList = 'high'
   } else if (prioridade.value === 'Media'){
      novaTarefa.classList = 'medium'
   } else if (prioridade.value === 'Baixa'){
      novaTarefa.classList = 'low'
   }
   document.querySelector('.selecione').selected = 'true'
   tarefa.value = ""
   dataLimite.value = dataLimite.lastChild
})


