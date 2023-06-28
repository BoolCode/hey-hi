import BaseProvider from "../base/BaseProvider.ts";
import NotificationObject from "../base/NotificationObject.ts";
import Webhook from "./Webhook.ts";
import HeyHi from "../index.ts";

export default class Discord extends BaseProvider {
    static svgIcon: string = '';

    private readonly webhookID: string;
    private readonly webhookToken: string;

    constructor(webhookID: string, webhookToken: string) {
        super();
        this.webhookID    = webhookID;
        this.webhookToken = webhookToken;
    }

    async push(notification: NotificationObject): Promise<boolean> {
        console.log(`https://discord.com/api/webhooks/${this.webhookID}/${this.webhookToken}`);
        const wh = new Webhook(
            `https://discord.com/api/webhooks/${this.webhookID}/${this.webhookToken}`,
            {
                content: HeyHi.buildMarkdownMessage(notification),
            },
            {
                'content-type': 'application/json'
            });

        return await wh.push(notification);
    }


}
