// date 19.12.22
//
// const arr = [10, 20, 30, 40, 50]
//
// console.log(arr)

// date 18.12.22
// let a = 0

// for(let i = 0; i <= 5; i++){
//   a = a + i;
// }
//
// console.log(a)

// date 03.01.23

const card = document.querySelector('.card')
const div = document.createElement('div')

div.innerHTML = '<h3>Toyota</h3> <h1>Premio 6 F EX PKG</h1> <h2>50000$</h2> <button>Buy Now</button>'
div.style.backgroundColor = 'lightgreen';
div.style.width = '300px';
div.style.height = '200px';
div.style.padding = '5px 5px';
div.style.margin = '5px';
div.style.borderRadius = '10px';

function clickEvent(){
card.appendChild(div)
}

function removeEvent(){
  card.remove();
}
