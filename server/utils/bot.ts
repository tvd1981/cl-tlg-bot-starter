import { Bot, webhookCallback } from 'grammy'
import { useRuntimeConfig } from '#imports'

const config = useRuntimeConfig()
export const bot = new Bot(config.telegramBotToken)

bot.command('start', async (ctx) => {
  await ctx.reply(`Welcome to Telegram Bot! 👋, ${new Date().toString()}`)
})

export const handleUpdate = webhookCallback(bot, "cloudflare")
// Initialize the bot
export function start() {
  bot.start()
}