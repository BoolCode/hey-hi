import BaseProvider from "../base/BaseProvider.ts";
import NotificationObject from "../base/NotificationObject.ts";
import Webhook from "./Webhook.ts";
import HeyHi from "../index.ts";

export default class PushBullet extends BaseProvider {
    static svgIcon: string = '';

    private readonly accessToken: string;


    constructor(accessToken: string) {
        super();
        this.accessToken = accessToken;
    }

    async push(notification: NotificationObject): Promise<boolean> {
        const wh = new Webhook(
            'https://api.pushbullet.com/v2/pushes',
            {type: 'note', title: HeyHi.buildIconPlusTitle(notification, ''), body: notification.content},
            {
                'Access-Token': this.accessToken,
                "Content-Type": "application/json"
            });

        return await wh.push(notification);
    }

}
