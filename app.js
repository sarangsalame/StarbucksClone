const btn=document.getElementById('menu-btn');
const nav=document.getElementById('menu');
function navToggle(){
    
    btn.classList.toggle('open');
    nav.classList.toggle('hidden');
    document.body.classList.toggle('no-scroll')
}
btn.addEventListener('click', navToggle)

const arro = document.getElementsByClassName('arrow');
console.log(arro)
const itemsDiv = document.getElementsByClassName('items-div');
console.log(itemsDiv)
function show(){
  itemsDiv.style.display = `block`;
}