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

    // Sử dụng RichPresence Builder để xử lý ảnh và nút bấm chuẩn đét
    const getPresence = new RichPresence(client)
        .setApplicationId('356888700030582784') // App ID mặc định của Visual Studio Code trên Discord
        .setType('PLAYING')
        .setName('Visual Studio Code')
        .setDetails('👑 xVincent | 🛠 Developer')
        .setState('✦✦✦✦✦✧✧✧✧✧')
        .setStartTimestamp(1755137373)
        .setAssetsLargeImage('https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_vscode.png')
        .setAssetsLargeText('Visual Studio Code')
        .setAssetsSmallImage('https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_vscode.png')
        .setAssetsSmallText('VS Code')
        .addButton('༺𓆩 -ˏ` Discord ༻𓆩', 'https://discord.gg/RpryjFGDqs');

    client.user.setPresence({
        activities: [getPresence],
        status: 'online'
    });
});

client.login(process.env.DISCORD_TOKEN);
