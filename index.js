const express = require('express');
const app = express();
const { Client, CustomStatus } = require('discord.js-selfbot-v13');

// 1. Web server giữ Render hoạt động 24/7
app.get('/', (req, res) => {
    res.send('Rich Presence đang hoạt động!');
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Server Web đã mở!');
});

// 2. Kết nối Discord
const client = new Client({ checkUpdate: false });

client.on('ready', async () => {
    console.log(`Đã đăng nhập thành công vào tài khoản: ${client.user.tag}`);

    // Thiết lập Custom Status (Dòng trạng thái dưới tên)
    client.user.setCustomStatus({
        text: '👑 xVincent | 🛠 Developer',
        emoji: '👑', // Bạn có thể đổi emoji tùy ý
    });

    // Thiết lập Rich Presence (Khung hoạt động Chơi game)
    client.user.setPresence({
        activities: [{
            name: "Visual Studio Code",
            type: "PLAYING",
            details: "02 : 01 : 39",
            state: "👑 xVincent | 🛠 Developer",
            timestamps: { start: 1755137373 },
            assets: {
                largeImage: "app",
                largeText: "✦✦✦✦✦✧✧✧✧✧",
                smallImage: "visual"
            },
            buttons: [
                { label: "༺𓆩 -ˏ` Discord ༻𓆩", url: "https://discord.gg/RpryjFGDqs" }
            ]
        }],
        status: "online"
    });
});

client.login(process.env.DISCORD_TOKEN);
