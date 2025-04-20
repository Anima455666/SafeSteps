from telegram import Update, InlineKeyboardButton, InlineKeyboardMarkup
from telegram.ext import Application, CommandHandler, MessageHandler, filters, CallbackQueryHandler, ContextTypes

# Replace with your bot token
TOKEN = "7691667736:AAEZRM4hDheSH_bSVctVGXYfT_A2-Akes8c"

async def start(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    user_name = update.effective_user.first_name
    message = f"Hello {user_name}! 😊\nChoose a service below:"

    keyboard = [
        [InlineKeyboardButton("📅 Period Tracking", callback_data="period_tracking")],
        [InlineKeyboardButton("🤰 Maternity Tracking", callback_data="maternity_tracking")],
        [InlineKeyboardButton("📖 Sex Education", callback_data="sex_education")]
    ]
    reply_markup = InlineKeyboardMarkup(keyboard)

    if update.message:
        await update.message.reply_text(message, reply_markup=reply_markup)
    else:
        await update.callback_query.edit_message_text(message, reply_markup=reply_markup)

async def button_handler(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    query = update.callback_query
    await query.answer()

    if query.data == "period_tracking":
        await period_tracking(update, context)
    elif query.data == "maternity_tracking":
        await maternity_guidance(update, context)
    elif query.data == "sex_education":
        await sex_education(update, context)
    elif query.data == "back_to_main":
        await start(update, context)

async def period_tracking(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    keyboard = [
        [InlineKeyboardButton("📆 Log Period", callback_data="log_period")],
        [InlineKeyboardButton("🔔 Set Reminder", callback_data="set_period_reminder")],
        [InlineKeyboardButton("🔙 Back", callback_data="back_to_main")]
    ]
    reply_markup = InlineKeyboardMarkup(keyboard)
    
    await update.callback_query.edit_message_text(
        "📅 *Period Tracking*:\nChoose an option below:", parse_mode="Markdown", reply_markup=reply_markup
    )

async def maternity_guidance(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    keyboard = [
        [InlineKeyboardButton("🤰 pregnancy Tracking", callback_data="pregnancy_tracking")],
        [InlineKeyboardButton("👶 Postpartum Care", callback_data="postpartum_care")],
        [InlineKeyboardButton("🔙 Back", callback_data="back_to_main")]
    ]
    reply_markup = InlineKeyboardMarkup(keyboard)

    await update.callback_query.edit_message_text(
        "🤰 *Maternity Guidance*:\nChoose an option below:", parse_mode="Markdown", reply_markup=reply_markup
    )

async def sex_education(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    keyboard = [
        [InlineKeyboardButton("🧒 9-12 Years", callback_data="sex_ed_9_12")],
        [InlineKeyboardButton("👩‍🦰 13-15 Years", callback_data="sex_ed_13_15")],
        [InlineKeyboardButton("🧑 16+ Years", callback_data="sex_ed_16_plus")],
        [InlineKeyboardButton("🔙 Back", callback_data="back_to_main")]
    ]
    reply_markup = InlineKeyboardMarkup(keyboard)

    await update.callback_query.edit_message_text(
        "📖 *Sex Education*:\nSelect an age group:", parse_mode="Markdown", reply_markup=reply_markup
    )

def main():
    app = Application.builder().token(TOKEN).build()

    app.add_handler(CommandHandler("start", start))
    app.add_handler(MessageHandler(filters.TEXT & filters.Regex(r"(?i)\bhi\b"), start))
    app.add_handler(CallbackQueryHandler(button_handler))

    print("🤖 Bot is running...")
    app.run_polling()

if __name__ == '__main__':
    main()
