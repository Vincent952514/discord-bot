const express = require('express');
const app = express();
const { Client, RichPresence, CustomStatus } = require('discord.js-selfbot-v13');

// 1. Web server duy trì Render 24/7
app.get('/', (req, res) => {
    res.send('Rich Presence đang hoạt động!');
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Server Web đã mở!');
});

// 2. Client Discord
const client = new Client({ checkUpdate: false });

client.on('ready', async () => {
    console.log(`Đã đăng nhập thành công vào tài khoản: ${client.user.tag}`);

    // XÓA HẲN STATUS BONG BÓNG TRÊN AVATAR
    try {
        const custom = new CustomStatus(client);
        await client.user.setCustomStatus(custom);
    } catch (e) {
        // Bỏ qua nếu đã trống
    }

    // TẠO KHUNG RICH PRESENCE ĐẦY ĐỦ LOGO VS CODE
    const getPresence = new RichPresence(client)
        .setApplicationId('356888700030582784') // App ID chính thức của VS Code trên Discord
        .setType('PLAYING')
        .setName('Visual Studio Code')
        .setDetails('👑 xVincent | 🛠 Developer')
        .setState('✦✦✦✦✦✧✧✧✧✧')
        .setStartTimestamp(1755137373)
        // Icon VS Code lớn & nhỏ
        .setAssetsLargeImage('vscode') 
        .setAssetsLargeText('Visual Studio Code')
        .setAssetsSmallImage('vscode')
        .setAssetsSmallText('VS Code')
        .addButton(' -ˏ` Discord ', 'https://discord.gg/RpryjFGDqs');

    client.user.setPresence({
        activities: [getPresence],
        status: 'online'
    });
});

client.login(process.env.DISCORD_TOKEN);
