
const { Client, Events, GatewayIntentBits, Collection, EmbedBuilder } = require('discord.js');
const Eris = require('eris')
const dotenv = require('dotenv')

dotenv.config()
const { TOKEN } = process.env


//importação dos comandos
const fs = require('node:fs')
const path = require('node:path')
const commandsPath = path.join(__dirname,'commands') //caminho dos comandos
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js')) 

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMessageReactions] });
client.commands = new Collection() 

for (const file of commandFiles ) {
    const filePath = path.join(commandsPath, file)
    const command = require(filePath)
    
    if ("data" in command && "execute" in command) {
        client.commands.set(command.data.name, command)
    } else {
        console.log(`Esse comando em ${filePath} está com data ou execute ausentes`);
    }
}

console.log(commandFiles)

//Login do bot
client.once(Events.ClientReady, c => {
	console.log(`Bot Online em: ${c.user.tag}`);

});
 client.login(TOKEN);


 //INTEREÇÕES COM O BOT
client.on(Events.InteractionCreate,  async interaction => {
    if (!interaction.isChatInputCommand()) return
    const  command = interaction.client.commands.get(interaction.commandName)
    if(!command) {
        console.error("Comando não encontrado")
        return
    }

    try {
        await command.execute(interaction)
        //console.log(interaction)
    }
    catch(error) {
        console.error(error)
        await interaction.reply('Houve um erro ao executar este comando')
    }
})

const botTheCria = new Eris("MTA4NzEyMjY3OTE0MTc3MzQ0Mg.G5wW81.MHUi2l8obwdAOt8v0ZJB6E4fr8p-ZGiqJ6BId0");

botTheCria.on("ready", () => {
  console.log("Eris Status: OK!");
  
  
});


//MODULO ERIS JS 
botTheCria.on("messageCreate", async (msg) => {
    
    if(msg.content.toLowerCase() === "fufu") {
        return msg.channel.createMessage({content: `O ultimo romantico da terra ${':heart_eyes:'} `, messageReferenceID: msg.id})
    }

    if(msg.content.toLowerCase() === "fulano") {
        return msg.channel.createMessage({content: `O poderoso macho alfa! ${':sunglasses:'}`, messageReferenceID: msg.id})
  
    }

    if(msg.content.toLowerCase() === "fulaninho") {
        return msg.channel.createMessage({content: `Além de bonito é gostoso! ${':wink:'} `, messageReferenceID: msg.id})
    }

    if(msg.content.toLowerCase() === "mata") {
        return msg.channel.createMessage({content: "Opa, chamou um xipes?", messageReferenceID: msg.id})

    }

    if(msg.content.toLowerCase() === "carol") {
        return msg.channel.createMessage({content: "Xiiuu ela é troll", messageReferenceID: msg.id})

    }

    if(msg.content.toLowerCase() === "kzm") {
        return msg.channel.createMessage({content: "Escodam as suas bananas o xipes tá na area", messageReferenceID: msg.id})
    }
    
    if(msg.content.toLowerCase() === "boa sorte") {

        
        let embed = {
            title: ` Uma triste história de amor não correspondido ${':broken_heart:'}`,
            description: ` Ela é apaixonada pelo fulano mas não conta pra ninguém `,
            timestamp: new Date(),
            color: 0x7289DA,

            thumbnail: {
                url: "https://i.ibb.co/tmbQJNR/floatinghearts.gif"
            },
            image: {
                url: "https://i.ibb.co/QHT8NBW/image.png"
            },
            fields: [
                {
                    name: "Nem tudo está perdido", value: "Ainda há esperanca...", inline: true
                }
            ],
        }
        return msg.channel.createMessage({embed:embed, messageReferenceID: msg.id})   
    }

    //mencão bot
    if (msg.content === `<@1087122679141773442>`) {

        let embed = {
            title: `TheCria BOT ${':robot:'}`,
            description: 'Botzinho dos cria, utilize a / para iniciar os comandos. Para ver a lista de comandos digite: /tcHelp.',
            timestamp: new Date(),
            color: 0x7289DA,

            thumbnail: {
                url: 'https://i.ibb.co/fQPvKyd/0eec70f3-154b-42ab-9287-8b6eed2516f7-removebg-preview.png'
            },

            image: {
                url: "https://media.giphy.com/media/3oEjHUL3Vkg8v7Yt7G/giphy.gif"
            },

            fields: [
                {
                    name: `Desenvolvedor: `, value: `<@659209701304696852>`, inline: true
                   
                },
                {
                   
                    name: `Ajudante:`, value: `<@291234273367949314>`, inline: true
                },
            ],
          

        }

        return msg.channel.createMessage({embed: embed, messageReferenceID: msg.id})
    }

    //mencao fulano
    if (msg.content === `<@291234273367949314>`) {
        const senha = (Math.floor(Math.random() * 100))
        let embed = {
            title: `Está ocupado comendo Cu de curioso ${':smiling_imp: '}`,
            description: 'Pegue uma senha e espere a sua vez.',
            timestamp: new Date(),
            color: 0x7289DA,
            thumbnail: {
                url: 'https://i.ibb.co/VTQKwnQ/coolpikachu.gif'
            },

            fields: [
                {
                    name: `Seu numero na fila é: ${senha}`, value: "Ja vai preparando o seu toba...", inline: true
                }
            ],

        }

        return msg.channel.createMessage({embed: embed, messageReferenceID: msg.id})
    }

    //botmencai
    


    if (msg.content === `sorte <@${msg.author.id}>`) {
        return msg.channel.createMessage({content: 'msg', messageReferenceID: msg.id})
        
    }
    

});

botTheCria.connect();

