import BaseProvider from "../base/BaseProvider.ts";
import NotificationObject from "../base/NotificationObject.ts";

export default class DummyProvider extends BaseProvider {
    static svgIcon: string = '';

    constructor(a: any = '', b: any = '', c: any = '', d: any = '', e: any = '') {
        super();

    }

    async push(notification: NotificationObject): Promise<boolean> {
        return super.push(notification);
    }

}
