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

// 2. Client Discord Selfbot
const client = new Client({ checkUpdate: false });

client.on('ready', async () => {
    console.log(`Đã đăng nhập thành công vào tài khoản: ${client.user.tag}`);

    // Xóa hoàn toàn Custom Status bong bóng trên avatar
    try {
        const custom = new CustomStatus(client);
        await client.user.setCustomStatus(custom);
    } catch (e) {
        // Bỏ qua nếu trống
    }

    // Tạo Rich Presence sử dụng RichPresence Builder chuẩn thư viện
    const getPresence = new RichPresence(client)
        .setApplicationId('1098602283921313883') // App ID đã verify Rich Assets
        .setType('PLAYING')
        .setName('Visual Studio Code')
        .setDetails('👑 xVincent | 🛠 Developer')
        .setState('✦✦✦✦✦✧✧✧✧✧')
        .setStartTimestamp(1755137373)
        // Dùng phương thức setAssetsLargeImage dạng URL đã parse đúng chuẩn selfbot
        .setAssetsLargeImage('https://cdn.discordapp.com/emojis/1089228833075282052.png') 
        .setAssetsLargeText('Visual Studio Code')
        .setAssetsSmallImage('https://cdn.discordapp.com/emojis/1089228833075282052.png')
        .setAssetsSmallText('VS Code')
        .addButton('༺𓆩 -ˏ` Discord ༻𓆩', 'https://discord.gg/RpryjFGDqs');

    client.user.setPresence({
        activities: [getPresence],
        status: 'online'
    });
});

client.login(process.env.DISCORD_TOKEN);
