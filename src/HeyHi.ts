import NotificationObject from "./base/NotificationObject.ts";
import Telegram from "./providers/Telegram.ts";
import BaseProvider from "./base/BaseProvider.ts";
import AppRise from "./providers/AppRise.ts";
import AppWriteFunction from "./providers/AppWriteFunction.ts";
import ClickSendSMS from "./providers/ClickSendSMS.ts";
import Discord from "./providers/Discord.ts";
import GoAlert from "./providers/GoAlert.ts";
import GoogleChat from "./providers/GoogleChat.ts";
import GoRush from "./providers/GoRush.ts";
import PushBullet from "./providers/PushBullet.ts";
import SendGrid from "./providers/SendGrid.ts";
import Slack from "./providers/Slack.ts";
import SMTP from "./providers/SMTP.ts";
import Teams from "./providers/Teams.ts";
import Webhook from "./providers/Webhook.ts";
import SingleIterator from "./base/SingleIterator.ts";
import NHelper from "./utils/NHelper.ts";

export default class HeyHi {
    private static providers: BaseProvider[] = [];

    public static addProvider(provider: BaseProvider): void {
        this.providers.push(provider);
    }

    public static async sendNotification(notification: NotificationObject) {
        for (const provider of this.providers) {
            await provider.push(notification);
        }
    }

    public static iterator(): SingleIterator[] {
        return [
            AppRise.getIteratorInfo(),
            AppWriteFunction.getIteratorInfo(),
            ClickSendSMS.getIteratorInfo(),
            Discord.getIteratorInfo(),
            GoAlert.getIteratorInfo(),
            GoogleChat.getIteratorInfo(),
            GoRush.getIteratorInfo(),
            PushBullet.getIteratorInfo(),
            SendGrid.getIteratorInfo(),
            Slack.getIteratorInfo(),
            SMTP.getIteratorInfo(),
            Teams.getIteratorInfo(),
            Telegram.getIteratorInfo(),
            Webhook.getIteratorInfo(),
        ];
    }

    static buildMarkdownMessage(notification: NotificationObject) {
        return `${notification.icon !== '' ? notification.icon + '\n\n' : ''}*${notification.title}*\n${notification.content}`;
    }

    static buildIconPlusTitle(notification: NotificationObject, stars = '*') {

        return `${NHelper.isNotEmpty(notification.icon) ? notification.icon + ' ' : ''}${stars}${notification.title}${stars}`;
    }

    static timestamp(notification: NotificationObject, addedString = ''): string {
        if (notification.addTime) {
            return `${addedString}${(new Date()).toLocaleString()}`;
        }

        return '';
    }
}
