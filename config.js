//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "27616853383";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUVkcVVGU1ZQTkxadkYvazhPZUo3V0gvYjNLTExFa1Z5aVNRdkV3MFYxRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieENVYlVTdVNNU0psYTZZeWlCK0VQN1NWY0I0TS9vblhtbzJNK0ZYTHh3dz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnSzFCakc2U1BMamE0ZnVRbFh2Q0hIQkNpMjJKTVlQYWEySWRuMmxJb21BPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGRGtoUW8rMzY1Yit6TnJ3T3FDOGszT1ZqelJ5WTg5STRYVGxqT0R4RnlJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1KYW8yNUZIVDlIWEpqUXRMSWZ2QllsL01PV0s1RW5pR0Eyc21yT1IzSG89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InRWSU5CWnVSY2FDc2lpVCtUVFE4cmhJbkVRSjlLZm4wNnNncURrcE1wVms9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUpmRGVTWmZVSGxFeDdkNldJcC9rbDAwV25YRDQzYjJVQmV5YmdHRTUxaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOW5qejNYWXBQcjlzTTcxcmJiQWxoM2ErR3JGcVMwZVpiNUpSdXJpM1BXND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii9sL2syNUdzK3FxS1Z2dWpHVVQrcGhLNGxMakx0SFhaRWNIckNyTnJOOHNwVGtiOE9EYkYyNXZVMVlzdm1JTGx0cnAycDdkdmNxOTJsaU03TzB2eEJ3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzQsImFkdlNlY3JldEtleSI6Ill3bnNlbUoxMUdtT0lOcFZYOWEzeFFzWExza2FSaXJNRjYwd1M0UC93STA9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjc2MTY4NTMzODNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQTJFMTkyMzJBOTNBODBFQzYzRkI0ODc5N0MyQjRDREEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyNTYwNjI5N31dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoib3hwM2tWZ09TeDZQYk8zSzNFZHdnUSIsInBob25lSWQiOiI5MTFjYjE2Zi0zYjhjLTQyMDYtODQyZS1lYWRiMTc3MTYxOTQiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0N6M3ZmdU5zdkRkeGZzL1gvUm51ZUpQK1lNPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtqOWZkQklpSDBFNmxEb3BkaE5Ea1EwSElJaz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiI3NzJKWkdFVyIsIm1lIjp7ImlkIjoiMjc2MTY4NTMzODM6MTVAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoic2hhbWJmbGl4QGdtYWlsLmNvbSDwn5OnIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJSEJ6WnNCRUlQVDZyWUdHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJabWIweDFXZ1IxeWxzdk5OY3hVbTZJdzljc2s4SVdLN3lQRDRvVXpKL2cwPSIsImFjY291bnRTaWduYXR1cmUiOiJlcUxyNmpUblBNZ25hOFdMTHA4WU1pZGt3Qm5zZTJWT3JibVZjUHYzaHlGQ3hySWhNVXJNYWE4YWROcXFaZCtaamFncUtpMW5sRmlib1k4N09KMWFEUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiYU9ydUVCMkd0WkFTYkRGWW90R1E3WUpNcTBtTVpwbkcyalRyQ0J0SnVEdG40NXk0a2pqK21JN3UvdU9IMWZEN2Rva1F3dndTeVUzczMvQUtGZFkxQlE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNzYxNjg1MzM4MzoxNUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJXWm05TWRWb0VkY3BiTHpUWE1WSnVpTVBYTEpQQ0ZpdThqdytLRk15ZjROIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI1NjA2MjkzLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU1xWSJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
