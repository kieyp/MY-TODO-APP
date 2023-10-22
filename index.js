// //log the arthmetic
// document.querySelector('form').addEventListener('click',(e)=>{console.log(20+20)})

// //create an alert
// document.querySelector('#alert.btn').addEventListener('click',alertMe)
// //log smth into the console
// document.querySelector('#log.btn').addEventListener('click',(e)=>{
//  console.log('i loggged smty daamn!')
// })

// function alertMe(){
//   alert('Boniface you love js,but yo dont know js,keep practicing')
// }



// //Event listener to delete events
// function addbuttonEvents(){
//



document.querySelector('form').addEventListener('submit',(e)=>{
  e.preventDefault()
  buildToDO(e.target.new_todo.value)
})


function buildToDO(todo)
{
  let p=document.createElement('p')
  let btn=document.createElement('button')
  btn.textContent='x'
  btn.addEventListener('click',handleDelete)
  console.log(p)
  p.textContent=`${todo} `
  p.appendChild(btn)
  document.querySelector('#todo_container').appendChild(p)

}



function handleDelete(e){
e.target.parentNode.remove()
}