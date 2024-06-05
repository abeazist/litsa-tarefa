const task = document.getElementById('task').value;
const criar = document.getElementById('botao');
const campo2 = document.getElementById("campo2");
const itens = document.getElementById('itens');
const criadas = document.getElementById('criadas');
const concluidas = document.getAnimations('concluidas');


criar.addEventListener('click',() =>{
    itens.style.display='none';
    const exer = document.createElement("input");
    exer.type='checkbox';
    exer.innerHTML = task.value
    campo2.appendChild(exer);
    contarTarefa();


})

function contarTarefa(){
    criadas = 0
    for (let i = 0; i < criadas; i++) {
         criadas+=1
         innerHTML= criadas.value
        
    }}