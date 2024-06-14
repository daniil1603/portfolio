import telebot
bot = telebot.TeleBot("7384646720:AAGO7XHrBK6GAYS2mYRNi68jUMZBhGOOxgg")
@bot.message_handler(commands=["id"])
def getId(message):
    bot.send_message(message.chat.id, message.chat.id)
bot.polling(non_stop=True)