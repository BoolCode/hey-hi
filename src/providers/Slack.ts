import BaseProvider from "../base/BaseProvider.ts";
import NotificationObject from "../base/NotificationObject.ts";
import Webhook from "./Webhook.ts";
import HeyHi from "../index.ts";

export default class Slack extends BaseProvider {
    static svgIcon: string = '';

    private readonly webhookUrl: string;

    constructor(webhookUrl: string) {
        super();
        this.webhookUrl = webhookUrl;
    }

    async push(notification: NotificationObject): Promise<boolean> {
        console.log(this.webhookUrl);
        const wh = new Webhook(
            this.webhookUrl,
            {"text": HeyHi.buildMarkdownMessage(notification)},
            {
                'content-type': 'application/json'
            });

        return await wh.push(notification);
    }


}
