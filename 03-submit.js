  
  
  //  ###   submit form ao servidor   ###
  const formData = event.target
  const searcParams = new FormData(formData)

  const options = {
      method: 'post',
      mode: 'cors',
      body: new URLSearchParams(searcParams)
  }

//   const prontuarioUrl = 'http://localhost:3000/signup'

  fetch(prontuarioUrl, options)
  .then(response => {

      if(response.ok === true) location.href = '/signin.html'

      if(response.status === 401){

          let email = document.querySelector('.signup-email')
          email.style='margin: 0 auto' // style input name
          email.style.borderColor = '#FF0000' // style input name

      //    let errorElement = document.createElement('div')
      //    errorElement.classList.add('error-email')
      
         const errorElement = document.querySelector('.email-error')
         errorElement.textContent = 'Já existe um email cadastrado'

         email.insertAdjacentElement('afterend', errorElement)
      }
    
  })
  .catch(err => err)