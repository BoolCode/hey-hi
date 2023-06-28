import HeyHi, {AppRise} from "../../../src/index.ts";
import {env} from "bun";

export default function AppriseTest(): void {
    HeyHi.addProvider(new AppRise(
        env.APPRISE_WEBHOOK_URL ?? '',
        JSON.parse(env.APPRISE_URLS ?? '[]'),
    ));

}
