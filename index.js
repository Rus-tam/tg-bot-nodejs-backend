require("dotenv").config();
const TelegramBot = require("node-telegram-bot-api");

const token = process.env.TOKEN;
const webAppUrl = "https://ya.ru";
const bot = new TelegramBot(token, { polling: true });

bot.on("message", async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if (text === "/start") {
    await bot.sendMessage(chatId, "Ниже появится кнопка, заполни форму", {
      reply_markup: {
        keyboard: [[{ text: "Заполнить форму" }]],
      },
    });

    await bot.sendMessage(chatId, "Заходи в наш интернет магазин по кнопке ниже", {
      reply_markup: {
        inline_keyboard: [[{ text: "Сделать заказ", web_app: { url: webAppUrl } }]],
      },
    });
  }
});
