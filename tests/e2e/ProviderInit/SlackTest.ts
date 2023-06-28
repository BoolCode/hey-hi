import HeyHi, {Slack} from "../../../src/index.ts";
import {env} from "bun";

export default function SlackTest(): void {
    HeyHi.addProvider(new Slack(
        env.SLACK_WEBHOOK_URL ?? '',
    ));

}
