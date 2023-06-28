import HeyHi, {Telegram} from "../../../src/index.ts";

export default function TelegramTest(): void {
    console.log(process.env.TELEGRAM_BOT_TOKEN ?? '',
        process.env.TELEGRAM_CHAT_ID ?? '',
    );
    HeyHi.addProvider(new Telegram(
        process.env.TELEGRAM_BOT_TOKEN ?? '',
        process.env.TELEGRAM_CHAT_ID ?? '',
        true
    ));
}
