const { Client, Collection, MessageEmbed } = require(`discord.js`);
const { 
  PREFIX,+
} = require(`../config.json`);

  


module.exports = {
  name: "help",
  aliases: ["h"],
  cooldown: 8,
  description: "**ANO Music Help**",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
    .setThumbnail(`https://cdn.discordapp.com/avatars/758785943426564187/0d2e89ab452cb53f5cb7eaf14295470b.png?size=2048`)
    .setAuthor(`Show Bot`, `https://cdn.discordapp.com/avatars/758785943426564187/0d2e89ab452cb53f5cb7eaf14295470b.png?size=2048`)
    .setDescription(`

**User Commands**
\`${+}invite\` - \`${+}support\` - \`${+}about\`
\`${+}ping\` - \`${+}prefix\` - \`${+}uptime\`
\`${+}avatar\` - \`${+}se\` - \`${+}invites\`

**Music Commands**
\`${+}play\` - \`${+}skip\` - \`${+}skipto\`
\`${+}stop\` - \`${+}volume\` - \`${+}nowplaying\`
\`${+}shuffle\` - \`${+}search\` - \`${+}resume\`
\`${+}remove\` - \`${+}queue\` - \`${+}filter\`
\`${+}loop\` - \`${+}lyrics\` - \`${+}radio\`

**Fun Commands**
\`${+}lock\` - \`${+}unlock\` - \`${+}ban\`
\`${+}unban\` - \`${+}slowmode\` - \`${+}giveaway\`

**Links**
[support](https://discord.gg/x2jzF8Gt3K)    -    [invite](https://discord.com/api/oauth2/authorize?client_id=841858854257164318&permissions=8&scope=bot)
`)

   .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
   .setColor("#146DF6");
   message.react("✅")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};

Coded By /////ANO//////
