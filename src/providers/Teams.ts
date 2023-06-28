import BaseProvider from "../base/BaseProvider.ts";
import NotificationObject from "../base/NotificationObject.ts";
import Webhook from "./Webhook.ts";
import HeyHi from "../index.ts";

export default class Teams extends BaseProvider {
    static svgIcon: string = '';

    private readonly webhook: string;

    constructor(webhook: string) {
        super();
        this.webhook = webhook;
    }

    async push(notification: NotificationObject): Promise<boolean> {
        const wh = new Webhook(
            this.webhook,
            {text: HeyHi.buildMarkdownMessage(notification)},
            {'content-type': 'application/json'});

        return await wh.push(notification);
    }
}
