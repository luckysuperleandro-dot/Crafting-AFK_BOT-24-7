const bedrock = require('bedrock-protocol');

function createBot() {
    console.log('[NPC Bedrock] Intentando conectar al servidor...');
    
    const bot = bedrock.createClient({
        host: 'LosFacuLoDros.aternos.me',
        port: 19132,
        username: 'Leandro702444',
        offline: true
    });

    bot.on('spawn', () => {
        console.log('[NPC Bedrock] ¡El bot Leandro702444 se ha conectado con éxito!');
    });

    bot.on('close', () => {
        console.log('[NPC Bedrock] Conexión cerrada. Reintentando en 15 segundos...');
        setTimeout(createBot, 15000);
    });

    bot.on('error', (err) => {
        console.log(`[NPC Bedrock] Error de conexión: ${err.message || err}`);
    });
}

// Iniciar el bot
createBot();

// Mantiene el proceso de Node.js vivo continuamente en GitHub Actions
setInterval(() => {}, 1000000);
