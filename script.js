const input = document.querySelector('#input-box')
const list = document.querySelector('#list-container')

function addTask() {
    if (input.value === ''){
        alert('Empty !')
    }
    else{
        let li = document.createElement('li')
        list.appendChild(li)
        const data = new Date()
        const hours = data.getHours().toString().padStart(2 , '0')
        const minutes = data.getMinutes().toString().padStart(2 , '0')
        const time = `${hours}:${minutes}`
        li.innerHTML = `${input.value}.   (${time})`
        let span = document.createElement('span')
        span.innerHTML = '\u00d7'
        li.appendChild(span)
    }
    input.value = ''
}

list.addEventListener('click', function(e){
    if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove()
    }
}, false)