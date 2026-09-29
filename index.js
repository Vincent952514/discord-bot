const express = require('express');
const app = express();
const RPC = require('discord-rpc');

// Tạo web server để Render không bị lỗi
app.get('/', (req, res) => {
    res.send('Rich Presence đang hoạt động!');
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Server Web đã mở!');
});

// Code Discord Rich Presence của bạn bên dưới
const CLIENT_ID = '1554569657220857936'; 
const client = new RPC.Client({ transport: 'ipc' });

client.on('ready', () => {
    console.log('Rich Presence đã sẵn sàng!');
    client.setActivity({
        details: '02 : 01 : 39',
        state: '👑 xVincent | 🛠 Developer',
        startTimestamp: 1755137373,
        largeImageKey: 'app',
        largeImageText: '✦✦✦✦✦✧✧✧✧✧',
        smallImageKey: 'visual',
        buttons: [
            { label: '༺𓆩 -ˏ` Discord ༻𓆩', url: 'https://discord.gg/RpryjFGDqs' }
        ]
    });
});

client.login({ clientId: CLIENT_ID }).catch(console.error);