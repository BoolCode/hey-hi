import BaseProvider from "./BaseProvider.ts";
import DummyProvider from "./DummyProvider.ts";

type Provider = typeof DummyProvider | typeof BaseProvider | any;
export default class SingleIterator {
    svgIcon: string;
    name: string;
    construct: Provider;

    constructor(svgIcon: string, name: string, construct: Provider) {
        this.construct = construct;
        this.svgIcon   = svgIcon;
        this.name      = name;
    }
}
