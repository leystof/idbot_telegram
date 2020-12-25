const Telegraf = require('telegraf');

let TOKEN = "@BotFather"
const bot = new Telegraf(TOKEN);

bot.catch((err, ctx) => {
  if (err.error_code === 403) {
    console.log("bot was blocked by the user - skip")
  } else {
    console.log(err)
  }
})

bot.command('start', async (ctx) => {
  await ctx.reply("🤝 Добро пожаловать")
  return ctx.replyWithSticker("CAACAgIAAxkBAAIW6F8sO6CKYDgyO7nQrOIW11PBH3hNAAJ0AAM7YCQUs8te1W3kR_QaBA")
})

bot.command('help', async ({ reply, replyWithSticker }) => {
  await reply(`
    📚 Для того чтобы вложения были доступны вашему боту: 
    1) Отправляете вложение своему боту.
    2) Пересыл сообщения с вложением сюда.
    `.replace(/ {16}/g, ""));
  return replyWithSticker("CAACAgUAAxkBAAI7bV-V92efOgf_86-ac4z21So0C0aEAAIgAAPg6vAdDBEzrevKwoAbBA")
})

bot.on('photo', async (ctx) => {
  let file_id = ctx.update.message.photo[ctx.update.message.photo.length - 1].file_id

  return ctx.replyWithPhoto(file_id, {caption: "📃 file_id: " + file_id})
})

bot.on('sticker', async (ctx) => {
  let file_id = ctx.update.message.sticker.file_id

  await ctx.replyWithSticker(file_id)
  return ctx.reply("📃 file_id: " + file_id)
})

bot.on('voice', async (ctx) => {
  let file_id = ctx.update.message.voice.file_id

  return ctx.replyWithVoice(file_id, {caption: "📃 file_id: " + file_id})
})

bot.on('gif', async (ctx) => {
  let file_id = ctx.update.message.gif.file_id

  return ctx.replyWithGif(file_id, {caption: "📃 file_id: " + file_id})
})

bot.on('audio', async (ctx) => {
  let file_id = ctx.update.message.audio.file_id

  return ctx.replyWithAudio(file_id, {caption: "📃 file_id: " + file_id})
})

bot.on('video', async (ctx) => {
  let file_id = ctx.update.message.video.file_id

  return ctx.replyWithVideo(file_id, {caption: "📃 file_id: " + file_id})
})

bot.on('document', async (ctx) => {
  let file_id = ctx.update.message.document.file_id

  return ctx.replyWithDocument(file_id, {caption: "📃 file_id: " + file_id})
})

bot.on('message', async (ctx) => {

  return ctx.reply(`
  🔸 Для того чтобы получить file_id, отправьте:
  - 🙂 Стикер
  - 🌄 Фото
  - 🕳 Гиф
  - 📹 Видео
  - 🔈 Аудио
  - 🗣 Голосовое сообщение
  - 🗂 Документ
  
  - 📝 Гайд по вложениям /help`.replace(/ {16}/g, ""))
})


bot.launch()
