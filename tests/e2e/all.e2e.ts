import HeyHi from "../../src/";
import TelegramTest from "./ProviderInit/TelegramTest.js";
/*

HeyHi.addProvider(new ClickSendSMS());
HeyHi.addProvider(new GoAlert());
HeyHi.addProvider(new GoogleChat());
HeyHi.addProvider(new GoRush());
HeyHi.addProvider(new Gotify());

HeyHi.addProvider(new PlivoPHLO());
HeyHi.addProvider(new PlivoSMS());
HeyHi.addProvider(new PlivoPHONE());

HeyHi.addProvider(new SendInBlueGrid());
HeyHi.addProvider(new SendGrid());

HeyHi.addProvider(new SMTP());

*/

TelegramTest();
// DiscordTest();
// TeamsTest();
// AppriseTest();
// AppWriteTest();
// PushBulletTest();
// SlackTest();
await HeyHi.sendNotification({
    title  : 'BoolCode Production',
    content: 'The HTML Website has been published!',
});


await HeyHi.sendNotification({
    icon         : '🚙',
    title        : 'BoolCode Production',
    content      : 'The HTML Website has been published!',
    showPoweredBy: true,
    addTime      : true,
    attachment   : 'https://bool-code.org/Bool-code-logo-02.png'
});
