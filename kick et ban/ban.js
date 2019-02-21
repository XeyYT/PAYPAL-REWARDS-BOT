const prefix = ("?");

module.exports = class ban {
    static match (message) {
      return message.content.startsWith('/ban')
    }
            
    static action (message) {
      const args = message.content.slice(prefix.length).split(/ +/);
      const command = args.shift().toLowerCase();
        if (!message.member.permissions.has('ADMINISTRATOR')) return message.reply('tu n\'est pas admin . ');
          const member = message.mentions.members.first();
        if (!member) return message.reply('Commande Invalide, il faut mettre `!ban @User#1234`');
          member.ban({
            days: args[1] || null,
            reason: `Banni par ${message.author.tag}`
          });
      }
    //}
}
