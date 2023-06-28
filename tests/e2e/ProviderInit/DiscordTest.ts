import HeyHi, {Discord} from "../../../src/index.ts";
import {env} from "bun";

export default function DiscordTest(): void {
    HeyHi.addProvider(new Discord(
        env.DISCORD_WEBHOOK_ID ?? '',
        env.DISCORD_WEBHOOK_TOKEN ?? '',
    ));

}
