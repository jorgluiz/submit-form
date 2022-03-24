

const form = {
    email: document.querySelector("#signin-email"),
    password: document.querySelector("#signin-password"),
    submit: document.querySelector("#signin-btn-submit"),
}


form.submit.addEventListener("click", (e) => {
    e.preventDefault();
    const signin = "http://localhost:3000/signin";

    axios.post(signin, {

        email: form.email.value,
        password: form.password.value,
    })
        .then(res => {
            const token = res.data.token
            console.log(token)
            localStorage.setItem('token', token)

            // const refresh = res.data.refreshToken
            // localStorage.setItem('refresh', refresh)
 
            location.href = '/home.html'
        })
        .catch(() => {
            alert('senha ou email está incorreta')
        })
})
