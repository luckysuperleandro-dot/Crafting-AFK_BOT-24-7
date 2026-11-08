const bedrock = require('bedrock-protocol');

function createBot() {
    const bot = bedrock.createClient({
        host: 'LosFacuLoDros.aternos.me', // IP de tu servidor de Bedrock en Aternos
        port: 19132,                    // Puerto por defecto de Bedrock
        username: 'Leandro702444',      // Tu usuario de Aternos
        offline: true                   // Para servidores no oficiales / Aternos
    });

    bot.on('spawn', () => {
        console.log(`[NPC Bedrock] ¡El bot Leandro702444 se ha conectado correctamente!`);
    });

    // Mantiene la reconexión automática si el servidor se reinicia o lo desconecta
    bot.on('close', () => {
        console.log(`[NPC Bedrock] Conexión cerrada. Reintentando en 25 segundos...`);
        setTimeout(createBot, 25000);
    });

    bot.on('error', (err) => {
        console.log(`[NPC Bedrock] Error detectado: ${err}`);
    });
}

createBot();
