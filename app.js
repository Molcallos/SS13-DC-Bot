const Discord = require("discord.js")
var http = require('http');
var fs = require('fs');
var kisisayisi
let urlci

var http = require('http');

  http.createServer(function (req, res) {           //Oyuncu sayısını çekiyor.
     urlci= req.url;
    const kelimeler = ["%", "20","/"]
    kelimeler.forEach(i => {
        urlci = urlci.replaceAll(i, "")
        })
    kisisayisi = urlci;
    
    res.end();
  }).listen(22422);


const client = new Discord.Client({
    intents:["GUILDS","GUILD_MESSAGES",]
  
})

function kisisayisii(){
  client.user.setActivity(kisisayisi+" Aktif Oyuncu SS13", {   //Oyuncu sayısını yazıyor.
    type: "PLAYING",

  });
}
setInterval(kisisayisii,16000);

var number = 0;
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)

})

function poly(){
 var obj;
 fs.readFile('C://lastg/data/npc_saves/poly.json', 'utf8', function (err, data) {   //Poly i otomatik çekip chate yazdıran
   if (err) throw err;
   obj = JSON.parse(data);

   client.channels.fetch('913872860823584768').then(channel => {
    channel.send(obj.phrases[Math.floor(Math.random() * obj.phrases.length)]);
  });
   
 });
}
setInterval(poly, 600000);
var prefix ="!";



client.on('message', message => {

    

    if (message.content.startsWith(prefix + 'poly')&& message.author.id ==`289873346504556544`) {
        if (message.author.bot) return;
        fs.readFile('C://lastg/data/npc_saves/poly.json', 'utf8', function (err, data) {  //Polyi komut ile chate yazdıran.
            if (err) throw err;
            obj = JSON.parse(data);
         
            client.channels.fetch('913872860823584768').then(channel => {
             channel.send(obj.phrases[Math.floor(Math.random() * obj.phrases.length)]);
           });
        });    
    }

    if ((message.content.startsWith(prefix + 'wl')&& message.author.id ==`140168024433885184`) ||(message.content.startsWith(prefix + 'wl')&& message.author.id ==`272434960814571520`)||(message.content.startsWith(prefix + 'wl')&& message.author.id ==`289873346504556544`)) {
      if (message.author.bot) return;
      const SayMessage = message.content.slice(3).trim();
      fs.writeFile('C://lastg/config/whitelist.txt', SayMessage+"\n", {flag: 'a+'}, (err) => {  //WL Ekleme
        if (err) {
            throw err;
        }
        message.reply("WL Başarıyla Eklendi")
    });
    
  }

});
 
  var http = require('http');
  http.createServer(function (req, res) {
    console.log(req, res)
    number=number+1;
    if(number==1){

        let urlci= req.url;
        const kelimeler = ["%", "20","/"]
        kelimeler.forEach(i => {
            urlci = urlci.replaceAll(i, "")           //                  Round bildirim Çekiyo
            })
        client.channels.fetch('968247435090616360').then(channel => {
            channel.send('<@&968246531784314930>' +" Yeni Round Basliyor!! Harita: " + urlci);
            number = 0;
          });
    }
    res.end();
  }).listen(22322);

  


client.login("tokenburaya");