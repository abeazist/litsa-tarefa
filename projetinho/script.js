const task = document.getElementById('task');
const criar = document.getElementById('botao');
const campo2 = document.getElementById("campo2");
const itens = document.getElementById('itens');
const criadas = document.querySelector('[criadas]');
const concluidas = document.getElementById('concluidas');
let tarefasCriadas = 0;



criar.addEventListener('click',() =>{
    itens.style.display='none';
    const lista = document.createElement("li")
    lista.className="lista"
    lista.innerHTML = `
    <input type="checkbox" id="Atividades" >
    <span>
        ${task.value}
    </span>`
    task.value=""
    campo2.appendChild(lista);
    contarTarefa();
})

concluidas.addEventListener('change',() =>{
    
})



function contarTarefa(){
        tarefasCriadas+=1
        criadas.innerHTML=tarefasCriadas //capturei o criadas do html e atribui a variavel
        
    
}