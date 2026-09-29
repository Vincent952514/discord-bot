const express = require('express');
const app = express();
const { Client, RichPresence } = require('discord.js-selfbot-v13');

// Web server giữ Render hoạt động 24/7
app.get('/', (req, res) => {
    res.send('Rich Presence đang hoạt động!');
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Server Web đã mở!');
});

const client = new Client({ checkUpdate: false });

client.on('ready', async () => {
    console.log(`Đã đăng nhập thành công vào tài khoản: ${client.user.tag}`);

    // Dùng Application ID chính thức của VS Code
    const getPresence = new RichPresence(client)
        .setApplicationId('356888700030582784') 
        .setType('PLAYING')
        .setName('Visual Studio Code')
        .setDetails('👑 xVincent | 🛠 Developer')
        .setState('✦✦✦✦✦✧✧✧✧✧')
        .setStartTimestamp(1755137373)
        // Link ảnh đã qua định dạng mp:external chuẩn selfbot
        .setAssetsLargeImage('mp:external/v2L9g4M_xGj5g5R8Kx4z8G9_N1x-V5Xz/https/i.imgur.com/8N4820s.png')
        .setAssetsLargeText('Visual Studio Code')
        .addButton('༺𓆩 -ˏ` Discord ༻𓆩', 'https://discord.gg/RpryjFGDqs');

    client.user.setPresence({
        activities: [getPresence],
        status: 'online'
    });
});

client.login(process.env.DISCORD_TOKEN);
