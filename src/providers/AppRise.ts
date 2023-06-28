import BaseProvider from "../base/BaseProvider.ts";
import NotificationObject from "../base/NotificationObject.ts";
import Webhook from "./Webhook.ts";
import HeyHi from "../index.ts";

export default class AppRise extends BaseProvider {
    static svgIcon: string = '';

    private readonly webhook: string;
    private readonly urls: string[];


    constructor(webhook: string, urls: string[]) {
        super();
        this.webhook = webhook;
        this.urls    = urls;
    }

    async push(notification: NotificationObject): Promise<boolean> {
        const wh = new Webhook(
            this.webhook,
            {
                urls : this.urls,
                title: HeyHi.buildIconPlusTitle(notification, ''),
                body : notification.content,
            },
            {'content-type': 'application/json'});

        return await wh.push(notification);
    }

}
