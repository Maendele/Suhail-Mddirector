const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_20_07_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTMsXG4gICAgICAgIDM5LFxuICAgICAgICA1NyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDExNSxcbiAgICAgICAgNDIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMCxcbiAgICAgICAgNTQsXG4gICAgICAgIDM4LFxuICAgICAgICA0NCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMDksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTk2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY1LFxuICAgICAgICA2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDY4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNTksXG4gICAgICAgIDM1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNyxcbiAgICAgICAgOTYsXG4gICAgICAgIDc1LFxuICAgICAgICAyMjksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICA5NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgODgsXG4gICAgICAgIDczLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMixcbiAgICAgICAgMTIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTgwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTM2LFxuICAgICAgICAzMCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTIxLFxuICAgICAgICA4MixcbiAgICAgICAgODgsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjUwLFxuICAgICAgICA0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNSxcbiAgICAgICAgMTYyLFxuICAgICAgICA5NixcbiAgICAgICAgMjUxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDgwLFxuICAgICAgICA2OCxcbiAgICAgICAgNTEsXG4gICAgICAgIDExMixcbiAgICAgICAgMzEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTY2LFxuICAgICAgICA0NSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDM2LFxuICAgICAgICA2MSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyOSxcbiAgICAgICAgMjQwLFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAyNixcbiAgICAgICAgMjU0LFxuICAgICAgICAyMixcbiAgICAgICAgMjUzLFxuICAgICAgICA3OSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTY2LFxuICAgICAgICAzNSxcbiAgICAgICAgMzAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTUzLFxuICAgICAgICAxODYsXG4gICAgICAgIDIwLFxuICAgICAgICA0MixcbiAgICAgICAgMjA4LFxuICAgICAgICAxODgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNjAsXG4gICAgICAgIDIzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNTgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTMyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNjksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEwLFxuICAgICAgICAzNyxcbiAgICAgICAgMTMwLFxuICAgICAgICAzNyxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDI4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTY4LFxuICAgICAgICA1MixcbiAgICAgICAgMjA1LFxuICAgICAgICA1NCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMixcbiAgICAgICAgMjA2LFxuICAgICAgICAyNyxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNyxcbiAgICAgICAgNjcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTI5LFxuICAgICAgICA3MCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDc3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDYwLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDEwOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTI0LFxuICAgICAgICA3MyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDYyLFxuICAgICAgICA4MSxcbiAgICAgICAgMTc2LFxuICAgICAgICA0NCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIwLFxuICAgICAgICAyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTYsXG4gICAgICAgIDUxLFxuICAgICAgICAyMTksXG4gICAgICAgIDE3NixcbiAgICAgICAgNjQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgODksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTM1LFxuICAgICAgICA2NixcbiAgICAgICAgNjUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDY4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDc5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMzAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgODUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMyxcbiAgICAgICAgNSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMzAsXG4gICAgICAgIDE3LFxuICAgICAgICA3NSxcbiAgICAgICAgMzksXG4gICAgICAgIDkwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTI5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA2NixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJINCtPNHJNaFFNRlNQL09BM1ZncTRNeklrWmFZb0sxK2Zyc2FxSEZVWS8wPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJIcDhRM3RKc1JlLUV6a2RXRzVUM2t3XCIsXG4gIFwicGhvbmVJZFwiOiBcImZkMmU2NGRmLTcxNjAtNGY5Zi1iNTRiLWY3MGM4ZGUxNGQ3M1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzksXG4gICAgICAxMTcsXG4gICAgICAxMDYsXG4gICAgICAxLFxuICAgICAgMTQxLFxuICAgICAgMTY1LFxuICAgICAgOTcsXG4gICAgICA0MCxcbiAgICAgIDI0NyxcbiAgICAgIDEwMSxcbiAgICAgIDEzMSxcbiAgICAgIDU3LFxuICAgICAgMjIwLFxuICAgICAgMTQ3LFxuICAgICAgNTQsXG4gICAgICA3MixcbiAgICAgIDIxLFxuICAgICAgOTcsXG4gICAgICA1NixcbiAgICAgIDIwOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzQsXG4gICAgICAxMjMsXG4gICAgICAyMyxcbiAgICAgIDI0MyxcbiAgICAgIDIyMSxcbiAgICAgIDIzNyxcbiAgICAgIDE3NCxcbiAgICAgIDQzLFxuICAgICAgMTQ2LFxuICAgICAgMjAsXG4gICAgICA4MixcbiAgICAgIDUwLFxuICAgICAgNTUsXG4gICAgICAxMSxcbiAgICAgIDIwNixcbiAgICAgIDY1LFxuICAgICAgMTgsXG4gICAgICAyNTAsXG4gICAgICAxOTEsXG4gICAgICAxNzNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTTJSQUpWNTVcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NTc1MjMzODk3MjoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMTA1ODcyNzA5NjczNjE6MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOZTl2bzRIRUtyZnk3UUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkJEOHZLb0VON3FhTmgwMTBvN1VIWlBWQzdQT0d6a2hXK1RmbHZvYU9SVU09XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiTTBrVGJhMWVlWTMzRmZTRWlNMklheHBtOVJkTjhPOTFMdG5SUnpabVFCTndMVEhHSXFRM2lLVVI5L2s3eDBXcTh5YkNScUJjYVU2NUo4bjc4a3FWQnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiN3ZHVXcyRWF6dm5heGRDREdOd1dad3B6aXFhNmtueVJpclJ2V012cVlwZEFQUi9NV2VId0o5Q0JETmFROUc1U1lOc2dOaVJ6ODNaeko4MlBtOUVDZ0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU1NzUyMzM4OTcyOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA3MixcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDY3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA5MDU2NDZcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
