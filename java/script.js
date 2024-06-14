const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav__links")
const navLinksAll = navLinks.querySelectorAll("a");
console.log(navLinksAll)


hamburger.onclick = function () {
    hamburger.classList.toggle("hamburger_active");
    navLinks.classList.toggle("nav__links_active")
}

for (let i = 0; i < 4; i++) {
    navLinksAll[i].onclick = function () {
        hamburger.classList.remove("hamburger_active");
        navLinks.classList.remove("nav__links_active");
    }
}
const iframe = document.querySelector("iframe");
const formSend = document.querySelector(".form__send");
iframe.onload = function() {
    formSend.classList.add("form__send_active");
    const chatToken = '7384646720:AAGO7XHrBK6GAYS2mYRNi68jUMZBhGOOxgg';
    const chatId = '6071947706';
    const url = `https://api.telegram.org/bot${chatToken}/sendMessage`;
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const coment = document.querySelector("#coment").value;
    const messageText = `hola, te felicitamos\n Nombre: ${name} \n Correo electronico: ${email} \n Mensaje: ${coment}`
    const params = {
        chat_id: chatId,
        text: messageText,
    };
    setTimeout(() => {
        document.querySelector("form").reset();
        formSend.classList.remove("form__send_active")
    }, 3000);

    axios.post(url, params)
        .then(response => {
            console.log('Сообщение успешно отправлено:', response.data);
        })
        .catch(error => {
            console.error('Ошибка при отправке сообщения:', error);
        });
        return false

    
}
