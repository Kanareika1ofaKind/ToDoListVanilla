const addInput = document.querySelector('.add-input')
//const addName = document.querySelector('.add-name')
const addBtn = document.querySelector('.add-btn')
const todoList = document.querySelector('.todo-list')

addBtn.addEventListener('click', () => {
    if (addInput.value.length === 0) {
        return alert('Please enter an item')
    }

    //create li
    const li = document.createElement('li')
    li.classList.add('list-group-item', 'd-flex', 'justify-content-between')
    //const name = document.createElement('span')
    //name.textContent = addName.value
    // const label = document.createElement('label') // add form label
    const span = document.createElement('span')
    span.textContent = addInput.value
    const button = document.createElement('button')
    button.classList.add('btn', 'btn-danger', 'btn-sm', 'delete-btn')
    button.textContent = 'Delete'
    li.appendChild(span)
    //li.appendChild(name)
    li.appendChild(button)
    todoList.appendChild(li)
    addInput.value = ''
    //addName.value = ''

    //Get all list of items
    const listGroupItems = document.querySelectorAll('.list-group-item')

    // Get all delete buttons
    const deleteButtons = document.querySelectorAll('.delete-btn')

    // Get each delete  button
    deleteButtons.forEach((item, idx) =>{
        // add on click function to delete button
        //console.log(listGroupItems)
        item.addEventListener('click', () => {

            //From all items, we will delete the element with same index,
            // the one had been clicked
            listGroupItems[idx].remove()
        })
    })
})