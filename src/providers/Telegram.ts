import BaseProvider from "../base/BaseProvider.ts";
import NotificationObject from "../base/NotificationObject.ts";
import Webhook from "./Webhook.ts";
import HeyHi from "../index.ts";
import NHelper from "../utils/NHelper.ts";

export default class Telegram extends BaseProvider {
    static svgIcon: string = '';

    private readonly sendAsPhoto: boolean;
    private readonly token: string;
    private readonly chatID: string;

    constructor(token: string, chatID: string, sendAsPhoto = false) {
        super();

        this.token       = token;
        this.chatID      = chatID;
        this.sendAsPhoto = sendAsPhoto;
    }

    async push(notification: NotificationObject): Promise<boolean> {
        const text = this.buildTelegramMessage(notification);

        const withAttachment = NHelper.isNotEmpty(notification.attachment);

        const action     = withAttachment ? (this.sendAsPhoto ? 'sendPhoto' : 'sendDocument') : 'sendMessage';
        const bodyFields = withAttachment ? {caption: text, [this.sendAsPhoto ? 'photo' : 'document']: notification.attachment} : {text};

        const wh = new Webhook(
            `https://api.telegram.org/${this.token}/${action}`,
            {chat_id: Number(this.chatID), parse_mode: 'markdown', ...bodyFields,},
            {
                'content-type': 'application/json'
            });

        return await wh.push(notification);
    }


    private buildTelegramMessage(notification: NotificationObject): string {
        return `${HeyHi.buildIconPlusTitle(notification)}\n${notification.content}${HeyHi.timestamp(notification, '\n\n')}`;
    }
}
