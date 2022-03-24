

document.formSend.addEventListener('submit', async e => {
    e.preventDefault()
    const prontuarioUrl = 'http://localhost:3000/prontuarios'

    const form = e.target
    const data = new FormData(form)

    //segundo parâmtro do Fetch
    const options = {
        method: form.method,
        mode: 'cors',
        headers: { 'Authorization': 'bearer ' + localStorage.getItem('token') },
        body: new URLSearchParams(data)
    }

    fetch(prontuarioUrl, options)
    .then(() => {
        alert('prontuario enviado com sucesso')
        // document.querySelector('.reset-form')//.reset()
        // const result = document.getElementById('result')
            location.reload(true)
        })
        .catch(e => {
            console.log(result)
            result.innerHTML = e
        })
})