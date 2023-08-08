const input = document.querySelector('#input-box')
const list = document.querySelector('#list-container')

function addTask() {
    if (input.value === ''){
        alert('EMPTY')
    }
    else{
        let li = document.createElement('li')
        li.innerHTML = input.value
        list.appendChild(li)
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