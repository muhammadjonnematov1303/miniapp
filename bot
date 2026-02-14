const TelegramBot = require('node-telegram-bot-api');

const token = "BOT_TOKENINGIZNI_SHU YERGA_QOYING"; // Bot token
const bot = new TelegramBot(token, { polling: true });

// /start buyrug'i
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, "Mini Appga xush kelibsiz 👋", {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "Mini App ochish 🚀",
            web_app: { url: "https://miniapp-username.vercel.app" } // Mini App URL
          }
        ]
      ]
    }
  });
});

// Mini Appdan kelgan data
bot.on('web_app_data', (msg) => {
  const chatId = msg.chat.id;
  const data = msg.web_app_data.data;

  bot.sendMessage(chatId, "Mini Appdan kelgan ma'lumot:\n" + data);
});
