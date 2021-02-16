const help = (prefix) => {
	return `> *Comandos Incríveis do 🔥J3FFBOT🌹 😳🤙* <
command : *${prefix}sticker* or *${prefix}stiker*
desc : converte imagem/gif/video para sticker
uso: responder imagem / gif / vídeo ou enviar imagem / gif / vídeo com legenda\n
command : *${prefix}sticker nobg* or *${prefix}stiker nobg*
desc : converter imagem em adesivo removendo o fundo
usage : reply image, or send image with caption\n
command : *${prefix}toimg*
desc : converte sticker para imagem
usage : reply sticker\n
command : *${prefix}tsticker* or *${prefix}tstiker*
desc : converte texto para sticker
usage : *${prefix}tsticker text in here*\n
> *Meme Commandos* <
command : *${prefix}meme*
desc : imagens de memes aleatórios [english]
usage : just send the command\n
command : *${prefix}memeindo*
desc : imagens de memes aleatórios [indo]
usage : just send the command\n
> *Others Commands* <
command : *${prefix}gtts*
desc : converte texto para audio
usage : *${prefix}gtts [cc] [text]*\nexample : *${prefix}gtts ja On2-chan*\n
command : *${prefix}loli*
desc : imagens aleatórias de loli
usage : just send the command\n
command : *${prefix}nsfwloli*
desc : imagens nsfw aleatórias de loli
usage : just send the command\n
command : *${prefix}url2img*
desc : tirar screenshots da web
usage : *${prefix}url2img [tipe] [url]*\n
command : *${prefix}simi*
desc : your message will be replied to by simi
usage : *${prefix}simi yourmessage*\n
command : *${prefix}ocr*
desc : take the text in the picture
usage : reply image, or send image with caption\n
command : *${prefix}wait*
desc : pesquisar anime com imagem [Que anime é isso / aquilo]
usage : reply image, or send image with caption\n
command : *${prefix}setprefix*
desc : escolhe um novo prefixo
usage : *${prefix}setprefix [text|optional]*\nexample : *${prefix}setprefix ?*
note : Este comando só pode ser usado pelo proprietário do bot\n
> *Grupo Comandos* < ---
command : *${prefix}add*
desc : adiciona um membro no grupo
usage : *${prefix}add 62813xxxxx*\n
note : só pode ser usado quando o bot se torna admin, e quem envia o comando é admin!\n
command : *${prefix}kick*
desc : expulsa membros do grupo 
usage : *${prefix}kick @tagmember*\n
note : só pode ser usado quando o bot se torna admin, e quem envia o comando é admin!\n
command : *${prefix}promote*
desc : Faz ser ademe do grupo 
usage : *${prefix}promote @tagmember*\n
note : só pode ser usado quando o bot se torna admin, e quem envia o comando é admin!\n
command : *${prefix}demote*
desc : tira os poderes do ademiro 
usage : *${prefix}demote @tagmember*\n
note : só pode ser usado quando o bot se torna admin, e quem envia o comando é admin!\n
command : *${prefix}linkgroup*
desc : pega o link desse Grupo
usage : just send the command
note : can only be used when the bot becomes admin, and the one who sends the command is admin!\n
command : *${prefix}leave*
desc : faz o bot sair do grupo (faz isso não 😭🙏)
usage : just send the command
note : Só pode ser usado por administradores de grupo e proprietário do bot\n
command : *${prefix}tagall*
desc : Chama geral do grupo
usage : just send the command
note : This command can be used if you are a group admin\n
command : *${prefix}simih*
desc : activate simi mode in the group
usage : *${prefix}simih 1* to activate simi mode and *${prefix}simih 0* to deactivate simi mode
note : This command can be used if you are a group admin\n`
}

exports.help = help
