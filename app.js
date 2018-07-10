const express = require('express');
const bodyParser = require('body-parser');
const Discord = require('discord.js');
const client = new Discord.Client();
const TOKEN = "";
const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.listen(3000);
console.log('Server is online.');

app.post('/', function (req, res) {
  console.log(req.body);
  console.log(req.body.name);

  res.send('POST request to the homepage');
});

app.get('/', function (req, res) {
  console.log(req.body);
  console.log(req.body.name);

  res.send('POST request to the homepage');
});

client.on('ready', () => {

  console.log('Ready!!');

  client.user.setStatus("online");

  client.user.setActivity('ゲーム', {
    type: 'LISTENING'

  });
  // ステータスに ゲームをプレイ中 を表示
  /**********************************
   typeの値 -> https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=setActivity
   'PLAYING':  をプレイ中
   'STREAMING':  を配信中
   'WATCHING':  を視聴中
   'LISTENING': Listening to
   ***********************************/

}); // readyイベントここまで

client.on('message', async message => {
  if (message.author.id === client.user.id) {
    return;
  } // 再帰
  const embed = new Discord.RichEmbed()
    .setTitle(" ~ クエストリクエスト ~ ")
    .setColor(0x00AE86)
    .setFooter("This is the footer text, it can hold 2048 characters", "http://i.imgur.com/w1vhFSR.png");
  // .setThumbnail("https://cdn.discordapp.com/attachments/417645420156813312/461935904718848018/quest.png")
  //  .setTimestamp()
  //
  //  .addField("This is a field title, it can hold 256 characters",
  //    "This is a field value, it can hold 2048 characters.")
  //  .addField("Inline Field", "They can also be inline.", true)
  //  .addBlankField(true)
  //  .addField("Inline Field 3", "You can have a maximum of 25 fields.", true);

  message.channel.send({embed});
});
client.login(TOKEN);
