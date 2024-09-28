const btn = document.querySelector('button')
const imagemCriada = document.createElement('img')
const textoAbaixo = document.createElement('p')
btn.addEventListener('click', handleClick)


function handleClick() {
  btn.innerText = 'Carregando...'
  btn.disabled = true

  textoAbaixo.innerText = 'carregando...'

  fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => response.json())
    .then((result) => {

      btn.innerText = 'Pegar Foto'
      btn.disabled = false

      imagemCriada.src = result.message
      imagemCriada.classList.add('imagemCriada')

      textoAbaixo.innerText = 'carregado'
      textoAbaixo.classList.add('textoAbaixo')

      btn.insertAdjacentElement('afterend', imagemCriada)
      imagemCriada.insertAdjacentElement('afterend', textoAbaixo)
    })
}