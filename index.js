// document.addEventListener('click', (event) => {
//   event.preventDefault()
// })

// document.querySelector('h2').style.color = 'purple'

// console.log()
// console.log('')
// const prom = document.querySelector('#prom')

const getUser = async () => {
  try {
    const res = await fetch('https://vk.com')
    const data = await res.json()
  } catch (e) {
    console.log(e)
  }
}

getUser()
