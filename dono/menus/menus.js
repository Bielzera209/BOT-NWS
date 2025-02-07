const menu = (prefix, NomeDoBot, sender) => {
  
// NÃO APAGUE ESSE ${NickDono} nem 
//${numerodn} nem ${NomeDoBot} nem ${prefix} só se quiser apagar completo, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono, só pode altera a base de tudo, menos as definições, só se quiser apagar a definição completa.  
// VERSÃO FINAL REVISADA BY DAVE
return `

*★ 𝘽𝙀𝙈-𝙑𝙄𝙉𝘿𝙊 𝘼𝙊 𝘾𝙃𝙀𝙍𝙊𝙆𝙀𝙀 𝘽𝙊𝙏 ★*

> Versão: 1.0
> By: Dave | NewSchool | Gabs
> Site: https://newschool.app

📸 *»* 𝙁𝙄𝙂𝙐𝙍𝙄𝙉𝙃𝘼𝙎 *«*

• ${prefix}s (marcar-foto)
• ${prefix}f (marcar-foto)
• ${prefix}pesquisafig (nome)
• ${prefix}attp (texto)
• ${prefix}sticker (marcar-foto)
• ${prefix}fsticker (marcar-foto)
• ${prefix}rename (text/text)
• ${prefix}figgatos
• ${prefix}emojimix (emoji+emoji)

⏬ *»* 𝙋𝙀𝙎𝙌𝙐𝙄𝙎𝘼𝙎 𝙀 𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿'𝙎 *«*

• ${prefix}Play (nome da música)
• ${prefix}Playdoc (nome)
• ${prefix}YouTube (link do yt/short)
• ${prefix}Short (link do short)
• ${prefix}YTmp4 (link yt/short) 
• ${prefix}YTmp3 (link yt/short)
• ${prefix}YTSearch (nome) 
• ${prefix}TikTok (link)
• ${prefix}Instagram (link)
• ${prefix}Reels (link do rell)
• ${prefix}Facebook (link)
• ${prefix}Twitter (link)
• ${prefix}X (link) 
• ${prefix}Soundcloud (link)
• ${prefix}Spotify (link)
• ${prefix}Threads (link)
• ${prefix}Kwai (link)
• ${prefix}Letramusica (nome da música)
• ${prefix}PlayStore (nome) 

🕹️ *»* 𝙅𝙊𝙂𝙊𝙎/𝙌𝙐𝙄𝙕𝙕𝙀𝙎 *«*

• ${prefix}PPT (Pedra/Papel/Tesoura) 
• ${prefix}JogoDaVelha (@marcar) 
• ${prefix}Falta
• ${prefix}BaterFalta
• ${prefix}Iniciar_Forca
• ${prefix}JogoDaVelha (@marcar)
• ${prefix}EuNunca

ℹ️ *»* 𝙄𝙉𝙁𝙊'𝙎 *«*

• ${prefix}Ping
• ${prefix}Atividade
• ${prefix}RankAtivo
• ${prefix}RankInativo
• ${prefix}CheckAtivo (@marcar)
• ${prefix}Celular (modelo)
• ${prefix}DolarHoje
• ${prefix}EuroHoje
• ${prefix}Converter (Dolar/Euro + valor)
• ${prefix}Clima (cidade)
• ${prefix}Signo (nome do signo)
• ${prefix}moedas

📲 *»* 𝘿𝙄𝙑𝙀𝙍𝙎𝙊𝙎 𝙈𝙀𝙉𝙐𝙎 *«*

• ${prefix}Reportar (Marcar Msg)
• ${prefix}MenuAdm
• ${prefix}Brincadeiras
• ${prefix}Aplicativo
• ${prefix}Noticias
• ${prefix}Transcrever (Marcar Áudio/Vídeo)
• ${prefix}hidetag (Marcar algo) 
• ${prefix}ConselhoBiblico
• ${prefix}Calcular 1 + 1
• ${prefix}FazerNick
• ${prefix}Metadinha
`;
};

// MENU DE ADMINISTRADORES 

const adms = (prefix, sender) => { 
 
// NÃO APAGUE ESSE ${prefix}, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono, só pode altera a base de tudo, menos as definições, só se quiser apagar a definição completa. 

return `

──────────────────────────────

🛠️ *»* 𝙈𝙀𝙉𝙐 𝘿𝙀 𝘼𝘿𝙈𝙎 *«*

User: @${sender.split("@")[0]}

➡️ Use ${prefix}info nome do comando para obter informações detalhadas sobre um comando.

──────────────────────────────

⚙️ *»* 𝘾𝙊𝙉𝙁𝙄𝙂'𝙎 *«*

• ${prefix}Sorteio
• ${prefix}Atividades
• ${prefix}MultiPrefixo
• ${prefix}Duelo
• ${prefix}BloqCMD (comando)

──────────────────────────────

📃 *»* 𝙂𝙀𝙍𝙀𝙉𝘾𝙄𝘼𝙈𝙀𝙉𝙏𝙊 𝘿𝙀 𝙈𝙀𝙈𝘽𝙍𝙊𝙎 *«*

• ${prefix}ListaNegra (número)
• ${prefix}Ban ( @usu ou responder a mensagem)
• ${prefix}Promover [@] (Promover a Adm)

──────────────────────────────

⚒️ *»* 𝘾𝙊𝙉𝙁𝙄𝙂'𝙎 𝘿𝙊 𝙂𝙍𝙐𝙋𝙊 *«*

• ${prefix}Grupo
• ${prefix}Status
• ${prefix}LinkGP
• ${prefix}DescGP (txt)
• ${prefix}NomeGP (nome)
• ${prefix}Legenda_ListaNegra (msg)

──────────────────────────────

🔊 *»* *_CMD'S DE MARCAÇÕES_* *«*

• ${prefix}Marcar (marca todos do GP)
• ${prefix}HideTag (txt) (marcação)

──────────────────────────────

🚫 *»* 𝘼𝙉𝙏𝙄𝙎𝙋𝘼𝙈 *«*

• ${prefix}LimitarComando
• ${prefix}TempoCMD
• ${prefix}AntiPalavra
• ${prefix}Limpar (texto invisível GP)

──────────────────────────────
`;
};

// MENU DE DONO

const menudono = (prefix, sender) => {
	
// NÃO APAGUE ESSE ${prefix}, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono, só pode alterar ele tod0, menos as definições, só se quiser apagar a definição completa. 	

return `

──────────────────────────────

👑 *»* 𝙈𝙀𝙉𝙐 𝘿𝙊𝙉𝙊 *«*

User: @${sender.split("@")[0]}

➡️ Use ${prefix}info [nome do comando] para obter informações detalhadas sobre um comando.

──────────────────────────────

⚙️ *»* 𝘾𝙊𝙉𝙁𝙄𝙂'𝙎 𝘾𝙈𝘿 *«*

• ${prefix}LimiteCaracteres
• ${prefix}Ativacoes_Dono
• ${prefix}FotoMenu (marcar imagem) 
• ${prefix}AntiLigar

──────────────────────────────

`;

};

// MENU DE LOGOS 

const menulogos = (prefix, sender) => {
  
// NÃO APAGUE ESSE ${prefix}, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono, só pode altera a base de tudo, menos as definições, só se quiser apagar a definição completa.  
  
return `

──────────────────────────────

🎨 *»* 𝙈𝙀𝙉𝙐 𝘿𝙀 𝙇𝙊𝙂𝙊𝙎 *«*

User: @${sender.split("@")[0]}

🔤 Logos de 1 Texto 🔤

• ${prefix}Logos1 (txt)

──────────────────────────────
`;
};

// MENU DE ALTERAR ÁUDIOS E VÍDEOS

const alteradores = (prefix, sender) => {

// NÃO APAGUE ESSE ${prefix}, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono, só pode altera a base de tudo, menos as definições, só se quiser apagar a definição completa. 

return`

──────────────────────────────

🎥 *»* 𝘼𝙇𝙏𝙀𝙍𝙉𝘼𝘿𝙊𝙍𝙀𝙎 𝘿𝙀 𝙑𝙊𝙕/𝙑𝙄𝘿𝙀𝙊 *«*

User: @${sender.split("@")[0]}

──────────────────────────────

🎬 *»* 𝘼𝙇𝙏𝙀𝙍𝘼𝙍 𝙑𝙄𝘿𝙀𝙊𝙎 *«*

• ${prefix}VideoLento (marcar)
• ${prefix}VideoRapido (marcar)
• ${prefix}VideoContrario (marcar)

──────────────────────────────

🔊 *»* 𝘼𝙇𝙏𝙀𝙍𝘼𝙍 𝘼𝙐𝘿𝙄𝙊𝙎 *«*

• ${prefix}AudioLento (marcar)
• ${prefix}AudioRapido (marcar)
• ${prefix}Grave (marcar)
• ${prefix}Grave2 (marcar)
• ${prefix}Esquilo (marcar)
• ${prefix}Estourar (marcar)
• ${prefix}Bass (marcar)
• ${prefix}Bass2 (marcar)
• ${prefix}VozMenino (marcar)
• ${prefix}AudioReverse (marcar)
• ${prefix}ParaAudio (marcar o video)

──────────────────────────────

`;
};

// MENU PREMIUM 

const menuprem = (prefix, sender) => { 

// NÃO APAGUE ESSE ${prefix}, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono, só pode altera a base de tudo, menos as definições, só se quiser apagar a definição completa. 

return `

──────────────────────────────

💎 **Menu Premium** 💎

User: @${sender.split("@")[0]}

Olá! Esse recurso foi desativado aqui...

──────────────────────────────

`;
};

// MENU DE BRINCADEIRAS.. 

const brincadeiras = (prefix, sender) => {

// NÃO APAGUE ESSE ${prefix}, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono, só pode altera a base de tudo, menos as definições, só se quiser apagar a definição completa. 

return `

──────────────────────────────

🎉 **Menu de Brincadeiras** 🎉

User: @${sender.split("@")[0]}

Olá! Esse recurso foi desativado aqui...

──────────────────────────────

`;
};

// MENU DE EFEITOS DE IMAGEM, MONTAGEM Tops Kkk

const efeitos = (prefix, sender) => {

// NÃO APAGUE ESSE ${prefix}, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono, só pode altera a base de tudo, menos as definições, só se quiser apagar a definição completa. 

return `

──────────────────────────────

📸 *»* 𝙈𝙀𝙉𝙐 𝘿𝙀 𝙀𝙁𝙀𝙄𝙏𝙊𝙎 *«*

User: @${sender.split("@")[0]}

──────────────────────────────

🖼️ *»* 𝙀𝙁𝙀𝙄𝙏𝙊𝙎 𝙀𝙈 𝙄𝙈𝘼𝙂𝙀𝙉𝙎 *«*

• ${prefix}Procurado (marcar)-(img)
• ${prefix}Preso (marcar)-(img)

──────────────────────────────

`;
};

module.exports = {
menu, adms, menudono, menulogos, alteradores, menuprem, brincadeiras, efeitos
		      }
