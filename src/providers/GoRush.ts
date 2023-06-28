import BaseProvider from "../base/BaseProvider.ts";
import NotificationObject from "../base/NotificationObject.ts";

export default class GoRush extends BaseProvider {
    static svgIcon: string = '';

    async push(notification: NotificationObject): Promise<boolean> {
        return super.push(notification);
    }

}
