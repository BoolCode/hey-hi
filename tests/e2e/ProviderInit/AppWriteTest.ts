import HeyHi, {AppWriteFunction} from "../../../src/index.ts";
import {env} from "bun";

export default function AppWriteTest(): void {
    HeyHi.addProvider(new AppWriteFunction(
        env.APPWRITE_ENDPOINT ?? '',
        env.APPWRITE_PROJECT_ID ?? '',
        env.APPWRITE_FUNCTION_ID ?? '',
        env.APPWRITE_API_KEY ?? '',
    ));

}
