import BaseProvider from "../base/BaseProvider.ts";
import NotificationObject from "../base/NotificationObject.ts";

export default class SendInBlue extends BaseProvider {
    static svgIcon: string = '';


    private sendTo: string;
    private apiKey: string;
    private templateId: string;

    constructor(sendTo: string, apiKey: string, templateId: string = '') {
        super();

        this.sendTo     = sendTo;
        this.apiKey     = apiKey;
        this.templateId = templateId;
    }

    async push(notification: NotificationObject): Promise<boolean> {
        if (this.templateId === '') {

        } else {

        }

        return super.push(notification);
    }

}
