function handleYesClick() {
    const title = document.getElementById("title");
    const gif = document.getElementById("gif");
    const music = document.getElementById("bgMusic");

    title.innerText = "YAYYY!! You just made me the happiest person 😭❤️";
    gif.src = "https://media.giphy.com/media/26BRv0ThflsHCqDrG/giphy.gif";

    music.play();

    setTimeout(() => {
        alert("I really like you so much ❤️ Thank you for being mine 😘");
    }, 500);
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
