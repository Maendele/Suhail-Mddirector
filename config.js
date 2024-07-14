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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_14_07_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDg5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTgxLFxuICAgICAgICA0LFxuICAgICAgICAzMSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMTksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDI0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTgsXG4gICAgICAgIDUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMzAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTYzLFxuICAgICAgICAzNixcbiAgICAgICAgNCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTE2LFxuICAgICAgICA5LFxuICAgICAgICAzNSxcbiAgICAgICAgODYsXG4gICAgICAgIDIyLFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzQsXG4gICAgICAgIDc2LFxuICAgICAgICA2MyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMDksXG4gICAgICAgIDIyMSxcbiAgICAgICAgNzEsXG4gICAgICAgIDQsXG4gICAgICAgIDY4LFxuICAgICAgICA5NixcbiAgICAgICAgMTIwLFxuICAgICAgICA4MCxcbiAgICAgICAgMTkzLFxuICAgICAgICA4MCxcbiAgICAgICAgMjgsXG4gICAgICAgIDIwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDUzLFxuICAgICAgICAyNixcbiAgICAgICAgODMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTMzLFxuICAgICAgICA0NixcbiAgICAgICAgMTE5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDYyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgNjksXG4gICAgICAgIDE1LFxuICAgICAgICA0NixcbiAgICAgICAgOTYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMixcbiAgICAgICAgMTc2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDg5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMixcbiAgICAgICAgMTUxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDk4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgOTksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTYxLFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDMyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDgxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTAyLFxuICAgICAgICA2OSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMCxcbiAgICAgICAgMTYsXG4gICAgICAgIDUxLFxuICAgICAgICAxODUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTczLFxuICAgICAgICAxMDgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNjksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA2NSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICA0MCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxODAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgOTUsXG4gICAgICAgIDYwLFxuICAgICAgICA1NCxcbiAgICAgICAgMTA0LFxuICAgICAgICA0MixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxOSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDYzLFxuICAgICAgICA0OCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTM5LFxuICAgICAgICA4NSxcbiAgICAgICAgMjI0LFxuICAgICAgICA1NixcbiAgICAgICAgMzAsXG4gICAgICAgIDg5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjU1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDcwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgODQsXG4gICAgICAgIDQ5LFxuICAgICAgICA4LFxuICAgICAgICA5LFxuICAgICAgICAzNSxcbiAgICAgICAgNjksXG4gICAgICAgIDIwMSxcbiAgICAgICAgODcsXG4gICAgICAgIDQzLFxuICAgICAgICA2OCxcbiAgICAgICAgMjAsXG4gICAgICAgIDI5LFxuICAgICAgICAxMzksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNjUsXG4gICAgICAgIDg3LFxuICAgICAgICA1MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDkxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDQxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTU1LFxuICAgICAgICA5NCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTY3LFxuICAgICAgICAzOSxcbiAgICAgICAgNjQsXG4gICAgICAgIDc0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNDksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMzUsXG4gICAgICAgIDQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgODEsXG4gICAgICAgIDU5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMSxcbiAgICAgICAgODEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTQyLFxuICAgICAgICA1OSxcbiAgICAgICAgMTIyLFxuICAgICAgICA3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjI2LFxuICAgICAgICA3NixcbiAgICAgICAgMTcxLFxuICAgICAgICAyNyxcbiAgICAgICAgMzMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjA3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEwNyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJKVWNndVJRUVNLNGxoMkJoUWVTQWNLYWpsTXhzdmwydEhKcHR6SmhCV3hrPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJJSzNINVVpSlQ1S1BRcFB2Rmkyc1V3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjI1ZTM5ZmI1LWJmZGQtNDZhZi1hMTY4LWVjOGUzMWQ4NmI5Y1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDUsXG4gICAgICAyMjUsXG4gICAgICAxMDcsXG4gICAgICAxNTUsXG4gICAgICAxMTgsXG4gICAgICA0MSxcbiAgICAgIDExNyxcbiAgICAgIDE4OSxcbiAgICAgIDEzMixcbiAgICAgIDE2OSxcbiAgICAgIDE1MSxcbiAgICAgIDE4OCxcbiAgICAgIDYzLFxuICAgICAgMjAsXG4gICAgICAyMixcbiAgICAgIDEwMixcbiAgICAgIDk4LFxuICAgICAgOTcsXG4gICAgICAxMzksXG4gICAgICAxMTZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTAsXG4gICAgICA4NSxcbiAgICAgIDY0LFxuICAgICAgMTE1LFxuICAgICAgMjIyLFxuICAgICAgMTczLFxuICAgICAgMTQzLFxuICAgICAgMTk3LFxuICAgICAgMTY2LFxuICAgICAgMTczLFxuICAgICAgMjM3LFxuICAgICAgMTQ0LFxuICAgICAgMTE5LFxuICAgICAgNTksXG4gICAgICAxOTIsXG4gICAgICAyNyxcbiAgICAgIDY3LFxuICAgICAgMjM4LFxuICAgICAgMjM1LFxuICAgICAgNDhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRVdLV0VaVDlcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NTc1MjMzODk3MjoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMTA1ODcyNzA5NjczNjE6MkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOaTl2bzRIRUxuNHk3UUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkJEOHZLb0VON3FhTmgwMTBvN1VIWlBWQzdQT0d6a2hXK1RmbHZvYU9SVU09XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiVGIxRkJKMGFndlY4UW5NMWxJN01IVWtBVjNJREM5L0gxaFg5L3N1b1hEdjV1U0ZSS1JOeUM3NE8xeGh6NHR3TGpRajlsczVqQW8yVCsyZUR0T0VBQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiTnh4NkpQRjBheDJ6L0d2S1NMdVZKUXRTdmxkeEZJdktwTzV4WWVBYjVDanlJZ0lBTkk1Y21zVGZFRUh0QzQyVm1jTWRFRnlJMTRTbGtHamIxYzc5aGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU1NzUyMzM4OTcyOjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA3MixcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDY3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA5MDg4NjFcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
