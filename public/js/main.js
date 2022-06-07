let equaption = []



const keyboardList = [
    {type: 'command', value: 'clear', label: 'C'},
    {type: 'command', value: 'toggle-minus', label: '+/-'},
    {type: 'command', value: 'percentage', label: '%'},
    {type: 'command', value: 'division', label: '/'},
    {type: 'number', value: '7', label: '7'},
    {type: 'number', value: '8', label: '8'},
    {type: 'number', value: '9', label: '9'},
    {type: 'command', value: 'multiple', label: '*'},
    {type: 'number', value: '4', label: '4'},
    {type: 'number', value: '5', label: '5'},
    {type: 'number', value: '6', label: '6'},
    {type: 'command', value: 'minus', label: '-'},
    {type: 'number', value: '1', label: '1'},
    {type: 'number', value: '2', label: '2'},
    {type: 'number', value: '3', label: '3'},
    {type: 'command', value: 'plus', label: '+'},
    {type: 'number', value: '0', label: '0'},
    {type: 'number', value: '.', label: '.'},
    {type: 'command', value: 'equal', label: '='},
]

const keyboardArea = document.querySelector('#keyboard-area')
const clear = () => {
    equaption = []
}
const clickKey = (e) => {
    const {dataset} = e.target

    if(dataset.type === 'command' && dataset.value === 'clear') {
        clear()
        return
    }

    equaption.push({
        type: dataset.type,
        value: dataset.value
    })
}

const buildKeyboards = () => {
    keyboardList.forEach(item=>{
        const element = document.createElement('div')
        element.dataset.type = item.type
        element.dataset.value = item.value
        element.classList.add('key')
        element.classList.add(item.value)
        element.innerText = item.label
        element.addEventListener('click', clickKey)
        keyboardArea.appendChild(element)
    })
}


buildKeyboards()












