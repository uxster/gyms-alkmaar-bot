const gyms = require("./gyms.js");
const Discord = require("discord.js");
const client = new Discord.Client();
const token = "NDYxOTY3MjI5MzI0MzYxNzM5.DiIbIA.7zduk-kTs_iip7crJv2-njaaCD8";
const clientID = 461967229324361739;
const prefix = "!";

// The ready event is vital, it means that your bot will only start reacting to information from Discord _after_ ready is emitted
client.on("ready", () => {
  console.log(
    `Bot has started, with ${client.users.size} users, in ${
      client.channels.size
    } channels of ${client.guilds.size} servers.`
  );
});

// 'client.on('message')' commands are triggered when the specified message is read in a text channel that the bot is in.
client.on("message", message => {
  // It's good practice to ignore other bots. This also makes your bot ignore itself
  // and not get into a spam loop (we call that "botception").
  if (message.author.bot) return;

  // Function to send the message to the channel.
  const sendMessage = (gymname, desc) => {
    message.channel.send({
      embed: {
        color: 3447003,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: gymname,
        description: desc,
        color: 293340
      }
    });
  };

  // Object.keys(gyms).forEach(key => {
  //   if (key === message.content) {
  //     sendMessage(gyms[key][1], gyms[key][2]);
  //   }
  // });

  const msg = message.content;
  msg.startsWith("!")
    ? sendMessage(gyms[msg][1], gyms[msg][2])
    : sendMessage(
        "Uh oh",
        "Ik herken je bericht niet! Type een uitroepteken + de naam van de gym waarvan je informatie wil krijgen: !NaamVanGym."
      );
});

client.login(token);

// message.channel.send({
//   embed: {
//     color: 3447003,
//     author: {
//       name: client.user.username,
//       icon_url: client.user.avatarURL
//     },
//     title: "Gym Zebrapaal",
//     description:
//       "Locatie op [Google Maps](https://goo.gl/maps/EMoB5oZYdtm) \nOmgeving De Mare \nEX Raid? Nee",
//     color: 293340
//   }
// });

// if (message.content === Object.value("!zebrapaal") {
//   sendMessage(
//     "Gym Zebrapaal",
//     "Locatie op [Google Maps](https://goo.gl/maps/EMoB5oZYdtm) \nOmgeving De Mare \nEX Raid? Nee"
//   );
// }

// // Here we separate our "command" name, and our "arguments" for the command.
// // e.g. if we have the message "+say Is this the real life?" , we'll get the following:
// // command = say
// // args = ["Is", "this", "the", "real", "life?"]
// const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
// const command = args.shift().toLowerCase();

// if (command === "location") {

// }

// Also good practice to ignore any message that does not start with our prefix,
// which is set in the configuration file.
// if (message.content.indexOf(prefix) !== 0) return;
