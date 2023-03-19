
const close = document.querySelector('.close')
const open = document.querySelector('.open')
const html = document.querySelector('html')

function ativa(){
  
  html.classList.add('active');
  console.log('cricou')
  
  
}

function desativa(){
  
  html.classList.remove('active')

}




open.addEventListener('click', ativa)
close.addEventListener('click', desativa)
