let cash = +prompt('how much money do you have? Max-Insert is 5000:');
let items = document.querySelectorAll('.item')
let btns = document.querySelectorAll('.button');
let displayPr = document.querySelector('.display>strong')
let displayText = document.querySelector('.display>span')
let chDisp = document.querySelector('.change-display>span')
let boxFlex = document.querySelectorAll('.box-flex>img')
let coin = document.querySelector('.coin')

displayPr.innerHTML = 'Cash: ' + cash
btns[0].addEventListener('click', () => {
  if (cash>=800) {
    cash = cash - 800
    chDisp.innerHTML = 'SC: ' + cash
    items[0].style.backgroundColor = "rgb(205, 255, 104)"
    boxFlex[0].style.display = 'block'
    displayText.innerHTML = 'Please insert coin'
  }
  else {
    items[0].style.backgroundColor = "red"
    displayText.innerHTML = 'Not Enough Money'
    displayText.style.color = 'aqua'
    setTimeout(() => {items[0].style.backgroundColor = 'rgb(165, 165, 165)'}, 3000);
  }
})
btns[1].addEventListener('click', () => {
  if (cash>=500) {
    cash = cash - 500
    chDisp.innerHTML = 'SC: ' + cash
    items[1].style.backgroundColor = "rgb(205, 255, 104)"
    boxFlex[1].style.display = 'block'
    displayText.innerHTML = 'Please insert coin'
  }
  else {
    items[1].style.backgroundColor = "red"
    displayText.innerHTML = 'Not Enough Money'
    displayText.style.color = 'aqua'
    setTimeout(() => {items[1].style.backgroundColor = 'rgb(165, 165, 165)'}, 3000);
  }
})
btns[2].addEventListener('click', () => {
  if (cash>=700) {
    cash = cash - 700
    chDisp.innerHTML = 'SC: ' + cash
    items[2].style.backgroundColor = "rgb(205, 255, 104)"
    boxFlex[2].style.display = 'block'
    displayText.innerHTML = 'Please insert coin'
  }
  else {
    items[2].style.backgroundColor = "red"
    displayText.innerHTML = 'Not Enough Money'
    displayText.style.color = 'aqua'
    setTimeout(() => {items[2].style.backgroundColor = 'rgb(165, 165, 165)'}, 3000);
  }
})
btns[3].addEventListener('click', () => {
  if (cash>=800) {
    cash = cash - 800
    chDisp.innerHTML = 'SC: ' + cash
    items[3].style.backgroundColor = "rgb(205, 255, 104)"
    boxFlex[3].style.display = 'block'
    displayText.innerHTML = 'Please insert coin'
  }
  else {
    items[3].style.backgroundColor = "red"
    displayText.innerHTML = 'Not Enough Money'
    displayText.style.color = 'aqua'
    setTimeout(() => {items[3].style.backgroundColor = 'rgb(165, 165, 165)'}, 3000);
  }
})
btns[4].addEventListener('click', () => {
  if (cash>=650) {
    cash = cash - 650
    chDisp.innerHTML = 'SC: ' + cash
    items[4].style.backgroundColor = "rgb(205, 255, 104)"
    boxFlex[4].style.display = 'block'
    displayText.innerHTML = 'Please insert coin'
  }
  else {
    items[4].style.backgroundColor = "red"
    displayText.innerHTML = 'Not Enough Money'
    displayText.style.color = 'aqua'
    setTimeout(() => {items[4].style.backgroundColor = 'rgb(165, 165, 165)'}, 3000);
  }
})
btns[5].addEventListener('click', () => {
  if (cash>=850) {
    cash = cash - 850
    chDisp.innerHTML = 'SC: ' + cash
    items[5].style.backgroundColor = "rgb(205, 255, 104)"
    boxFlex[5].style.display = 'block'
    displayText.innerHTML = 'Please insert coin'
  }
  else {
    items[5].style.backgroundColor = "red"
    displayText.innerHTML = 'Not Enough Money'
    displayText.style.color = 'aqua'
    setTimeout(() => {items[5].style.backgroundColor = 'rgb(165, 165, 165)'}, 3000);
  }
})
btns[6].addEventListener('click', () => {
  if (cash>=600) {
    cash = cash - 600
    chDisp.innerHTML = 'SC: ' + cash
    items[6].style.backgroundColor = "rgb(205, 255, 104)"
    boxFlex[6].style.display = 'block'
    displayText.innerHTML = 'Please insert coin'
  }
  else {
    items[6].style.backgroundColor = "red"
    displayText.innerHTML = 'Not Enough Money'
    displayText.style.color = 'aqua'
    setTimeout(() => {items[6].style.backgroundColor = 'rgb(165, 165, 165)'}, 3000);
  }
})
btns[7].addEventListener('click', () => {
  if (cash>=550) {
    cash = cash - 550
    chDisp.innerHTML = 'SC: ' + cash
    items[7].style.backgroundColor = "rgb(205, 255, 104)"
    boxFlex[7].style.display = 'block'
    displayText.innerHTML = 'Please insert coin'
  }
  else {
    items[7].style.backgroundColor = "red"
    displayText.innerHTML = 'Not Enough Money'
    displayText.style.color = 'aqua'
    setTimeout(() => {items[7].style.backgroundColor = 'rgb(165, 165, 165)'}, 3000);
  }
})
btns[8].addEventListener('click', () => {
  if (cash>=1000) {
    cash = cash - 1000
    chDisp.innerHTML = 'SC: ' + cash
    items[8].style.backgroundColor = "rgb(205, 255, 104)"
    boxFlex[8].style.display = 'block'
    displayText.innerHTML = 'Please insert coin'
  }
  else {
    items[8].style.backgroundColor = "red"
    displayText.innerHTML = 'Not Enough Money'
    displayText.style.color = 'aqua'
    setTimeout(() => {items[8].style.backgroundColor = 'rgb(165, 165, 165)'}, 3000);
  }
})

coin.addEventListener('click', ()=> {
  cash = cash + +prompt('how much money do you have? Max-Insert is 5000:')
  displayPr.innerHTML = cash
})