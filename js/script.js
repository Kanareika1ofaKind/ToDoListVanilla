// const addInput = document.querySelector('.add-input')
// //const addName = document.querySelector('.add-name')
// const addBtn = document.querySelector('.add-btn')
// const todoList = document.querySelector('.todo-list')
//
// addBtn.addEventListener('click', () => {
//     if (addInput.value.length === 0) {
//         return alert('Please enter an item')
//     }
//
//     //create li
//     const li = document.createElement('li')
//     li.classList.add('list-group-item', 'd-flex', 'justify-content-between')
//     //const name = document.createElement('span')
//     //name.textContent = addName.value
//     // const label = document.createElement('label') // add form label
//     const span = document.createElement('span')
//     span.textContent = addInput.value
//     const button = document.createElement('button')
//     button.classList.add('btn', 'btn-danger', 'btn-sm', 'delete-btn')
//     button.textContent = 'Delete'
//     li.appendChild(span)
//     //li.appendChild(name)
//     li.appendChild(button)
//     todoList.appendChild(li)
//     addInput.value = ''
//     //addName.value = ''
//
//     //Get all list of items
//     const listGroupItems = document.querySelectorAll('.list-group-item')
//
//     // Get all delete buttons
//     const deleteButtons = document.querySelectorAll('.delete-btn')
//
//     // Get each delete  button
//     deleteButtons.forEach((item, idx) =>{
//         // add on click function to delete button
//         //console.log(listGroupItems)
//         item.addEventListener('click', () => {
//
//             //From all items, we will delete the element with same index,
//             // the one had been clicked
//             listGroupItems[idx].remove()
//         })
//     })
// })
//==============================
//
// const addInput = document.querySelector('.add-input')
// const addBtn = document.querySelector('.add-btn')
// const todoList = document.querySelector('.todo-list')
//
//
// let allTodos = ['name1','name2','name3','name4']
//
// const drawItem = itemText => {
//     const li = document.createElement('li')
//     li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'todo-item')
//     const span = document.createElement('span')
//     span.textContent = itemText
//     const button = document.createElement('button')
//     button.classList.add('btn', 'btn-danger', 'btn-sm', 'delete-btn')
   //  button.textContent = 'Delete'
   //  li.appendChild(span)
   //  li.appendChild(button)
   //  todoList.appendChild(li)
   //
   //
   // let todoItem = document.querySelectorAll('.todo-item')
   // let delBtn =  document.querySelectorAll('.delete-btn')
   //
   //  todoItem.forEach((item, idx) => {
   //      delBtn[idx].addEventListener('click', () => {
   //          item.remove()
//         })
//     })
//
// }
//
// allTodos.forEach((todo) => {
//     drawItem(todo)
// })
//
// addBtn.addEventListener('click', () => {
//     if (addInput.value.length === 0) {
//         return alert('error')
//     }
//     drawItem(addInput.value)
//     addInput.value = ''
// })
//============================== Third time is CHARM!!!

const addInput = document.querySelector('.add-input')
const addBtn = document.querySelector('.add-input')
const todoList = document.querySelector('.todo-list')

let allTodos = JSON.parse(localStorage.getItem('todos')) || []
console.log(allTodos)

addBtn.addEventListener('click', () => {
    addNewItem()
})
addInput.addEventListener('keypress', (e) =>{
    if (e.key === 'Enter') {
        addNewItem()
    }
})
const addNewItem = () => {
    if (addInput.value.trim() === '') {
        alert ('Please add new item')
        addInput.value = ''
        return
    }
    allTodos = [...allTodos, addInput.value]
    localStorage.setItem('todos', JSON.stringify(allTodos))
    addInput.value = ''
    drawList(allTodos)
}

const  drawItem = (itemText) => {
    const li = document.createElement('li')
    li.classList.add('list-group-item', 'd-flex', 'justify-content-between')
    const span = document.createElement('span')
    span.textContent = itemText
    const button = document.createElement('button')
    button.classList.add('btn', 'btn-danger', 'btn-sm', 'delete-btn')
    button.textContent = 'Delete'
    li.appendChild(span)
    li.appendChild(button)
    todoList.appendChild(li)
}

const clickDeleteBtn = () => {
    const deleteButtons = document.querySelectorAll('.delete-btn')
deleteButtons.forEach((deleteButtons, btnIndex) => {
    deleteButtons.addEventListener('click', () => {
        allTodos = allTodos.filter((todoFromStorage, indexFromStorage) => btnIndex !== indexFromStorage)
        localStorage.setItem('todos', JSON.stringify(allTodos))
        drawItem(allTodos)
    })
})
}

const drawList = (array) => {
    todoList.innerHTML = ''
    array.forEach((todo) => {
        drawItem(todo)
    })
    clickDeleteBtn()
}