const tg = window.Telegram.WebApp;
tg.expand();

const user = tg.initDataUnsafe?.user;

if (user) {
  document.getElementById("user").innerText =
    "Ism: " + user.first_name + "\nID: " + user.id;
}

function sendData() {
  tg.sendData("Mini App dan salom!");
}
