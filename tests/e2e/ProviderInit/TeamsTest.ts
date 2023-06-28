import HeyHi, {Teams} from "../../../src/index.ts";
import {env} from "bun";

export default function TeamsTest(): void {
    HeyHi.addProvider(new Teams(
        env.TEAMS_WEBHOOK ?? '',
    ));

}
