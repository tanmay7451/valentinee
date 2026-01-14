function handleYesClick() {
    const title = document.getElementById("title");
    const question = document.getElementById("question");
    const message = document.getElementById("message");
    const gif = document.getElementById("gif");
    const music = document.getElementById("bgMusic");

    title.innerText = "YAYYYY APURWA SAID YES 😭❤️";
    question.innerText = "Best Valentine Ever 💘";
    message.innerText =
        "Apurwa, you have no idea how happy you just made me 🥹💕 " +
        "I promise to always care for you, support you, and protect your smile 😘 " +
        "You mean so so much to me and I’m really lucky to have you ❤️";

    gif.src = "https://media.giphy.com/media/26BRv0ThflsHCqDrG/giphy.gif";

    music.play();

    setTimeout(() => {
        alert("Apurwaaa 😭❤️ I really really like you sooo much 😘 Happy Valentine’s Day my love 💕");
    }, 700);
}

function handleNoClick() {
    const noBtn = document.querySelector(".no-button");

    const maxX = window.innerWidth - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
}
