// const emojis = ['🐥','🐯','🐼']
// console.log(emojis.includes('🐴'))

const addItemBtn = document.getElementById('add-item-btn')
const itemInput = document.getElementById('item-input')
const list = document.getElementById('list')

const shoppingList = []
    
addItemBtn.addEventListener('click', function(){
        if(!shoppingList.includes(itemInput.value)){
        shoppingList.push(itemInput.value)
        render()        
        itemInput.value = '' 
    }else {
        window.alert('El item ya esta en la lista')
        itemInput.value = '' 
    }
})

function render(){    
    let html = ''
    for (let item of shoppingList){
        html+= `<li class="list-item">${item}</li>`
    }
    list.innerHTML = html
}

render()

