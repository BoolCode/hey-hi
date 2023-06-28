import BaseProvider from "../base/BaseProvider.ts";
import NotificationObject from "../base/NotificationObject.ts";
import Webhook from "./Webhook.ts";

export default class AppWriteFunction extends BaseProvider {
    static svgIcon: string = '';

    /**
     * Use only in server site!!
     * @private
     */
    private readonly appWriteEndpoint: string;
    private readonly apiToken: string;
    private readonly projectID: string;
    private readonly functionID: string;


    constructor(appWriteEndpoint: string, projectID: string, functionID: string, apiToken: string = '') {
        super();

        this.appWriteEndpoint = appWriteEndpoint;
        this.apiToken         = apiToken;
        this.projectID        = projectID;
        this.functionID       = functionID;
    }

    async push(notification: NotificationObject): Promise<boolean> {

        const ws = new Webhook(`${this.appWriteEndpoint}/functions/${this.functionID}/executions`, {
            data: NotificationObject.toString(notification),
        }, {
            "Content-Type"      : 'application/json',
            'X-Appwrite-Project': this.projectID,
            'X-Appwrite-Key'    : this.apiToken
        })


        return ws.push(notification);

    }
}
