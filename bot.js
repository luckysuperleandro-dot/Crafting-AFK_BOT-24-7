const bedrock = require('bedrock-protocol');

function createBot() {
    const bot = bedrock.createClient({
        host: 'LosFacuLoDros.aternos.me', // <--- Tu IP de Aternos
        port: 19132,                    // <--- El puerto de Bedrock (19132)[span_0](start_span)[span_0](end_span)
        username: 'BotBedrock',         // Nombre del bot dentro del juego
        offline: true                   // Para servidores no oficiales / Aternos
    });

    bot.on('spawn', () => {
        console.log(`[NPC Bedrock] ¡El bot se ha conectado correctamente al servidor de Bedrock!`);
    });

    // Como en Bedrock los paquetes y eventos son distintos, 
    // mantenemos la conexión activa con un bucle simple reconectando si hay cierre.
    bot.on('close', () => {
        console.log(`[NPC Bedrock] Conexión cerrada. Reintentando en 25 segundos...`);
        setTimeout(createBot, 25000);
    });

    bot.on('error', (err) => {
        console.log(`[NPC Bedrock] Error detectado: ${err}`);
    });
}

createBot();
