import HeyHi, {PushBullet} from "../../../src/index.ts";
import {env} from "bun";

export default function PushBulletTest(): void {
    HeyHi.addProvider(new PushBullet(
        env.PUSHBULLET_ACCESS_TOKEN ?? '',
    ));

}
