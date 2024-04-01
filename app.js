 // let array=[]
function task(){
    let input=document.getElementById('input').value
    // array.push(input)
    // console.log(array)
    let items=document.getElementById('items')



    let todo=document.createElement('div')
    let box=document.createElement('input')
    box.type='checkbox'
    let para=document.createElement('p')
    // let btn=document.createElement('button')
    para.innerHTML=input
    // btn.innerHTML='delete'
    // btn.classList.add('btn')
    todo.classList.add('todo')
    box.classList.add('box')
    todo.appendChild(box)
    todo.appendChild(para)
    items.appendChild(todo)
    // todo.appendChild(btn)
    document.getElementById('input').value=''



}
// function btn(){
//     // let items=document.getElementById('items')
//     // let todo=document.createElement('div')
//     // let box=document.createElement('input')
//     // let btn=document.getElementById('btn')
//     // btn.classList.add('btn')
//     // btn.innerHTML='delete'
//     para.innerHTML=''

// }