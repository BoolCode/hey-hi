import NotificationObject from "./NotificationObject.ts";
import SingleIterator from "./SingleIterator.ts";

export default abstract class BaseProvider {
    static svgIcon: string;

    public async push(notification: NotificationObject): Promise<boolean> {
        return true;
    }

    public static getIteratorInfo(): SingleIterator {
        return new SingleIterator(this.svgIcon, this.name, this);
    }
}
