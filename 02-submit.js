

// event.preventDefault()

// //  ###   submit form ao servidor   ###

// const myForm = event.target
// const fd = new FormData(myForm)

// // fd.append('api-key', 'myApiKey')
// for(let key of fd.keys()){
//     console.log(key, fd.get(key))
// }

// let json = await convertFD2JSON(fd)
// const prontuarioUrl = "http://localhost:3000/signin"
// let h = new Headers()
// h.append('Content-type', 'application/json')

// const options = {
//     Headers: h,
//     method: 'post',
//     mode: 'cors',
//     body: json
// }


// fetch(prontuarioUrl, options)
//     .then(res => res.json())
//     .then(response => {

//         console.log(response)

//         const token = response.data.accessToken
//         localStorage.setItem('token', token)

//         location.href = '/home.html'
//     })
//     .catch(err => err)

//     function convertFD2JSON(formData){
//         let obj = {}
//         for(let key of formData.keys()){
//             obj[key] = formData.get(key)
//         }
//         return JSON.stringify(obj)
//     }


// // obter todos inputs
// let inputs = form.querySelectorAll('input')

// objValidator.clearErrors()

// for (let i = 0; i < inputs.length; i++) {
//     let input = inputs[i]
//     let check = objValidator.checkInput(input)
//     if (check !== true) {
//         send = false
//         //exibir o erro
//         objValidator.showError(input, check)
//     }
// }