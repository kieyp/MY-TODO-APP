document.addEventListener("DOMContentLoaded",()=>{
let form=document.querySelector('form')
form.addEventListener("submit",(e)=>{
  e.preventDefault()
  handleTodo(e.target.new_todo.value)

  form.reset()
})

function handleTodo(todo){
  let p=document.createElement('p')
  let btn=document.createElement('button')
 btn.innerText='x'
 btn.addEventListener("click",handleDelete)
  p.textContent= ` ${ todo}  `
  p.appendChild(btn)
  document.querySelector('#todo_container').appendChild(p)
}

function handleDelete(e){
  e.target.parentNode.remove()
}

})