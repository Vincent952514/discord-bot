const express = require('express');
const app = express();
const { Client } = require('discord.js-selfbot-v13');

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

    // Set đúng khung Rich Presence "Đang chơi Visual Studio Code"
    client.user.setPresence({
        activities: [{
            name: "Visual Studio Code",
            type: "PLAYING",
            details: "👑 xVincent | 🛠 Developer",
            state: "✦✦✦✦✦✧✧✧✧✧",
            timestamps: { start: Date.now() }, // Đếm thời gian từ lúc chạy
            assets: {
                largeImage: "https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_vscode.png", // Icon Visual Studio Code
                largeText: "Visual Studio Code",
                smallImage: "https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_vscode.png",
                smallText: "VS Code"
            },
            buttons: [
                { label: "༺𓆩 -ˏ` Discord ༻𓆩", url: "https://discord.gg/RpryjFGDqs" }
            ]
        }],
        status: "online"
    });
});

client.login(process.env.DISCORD_TOKEN);
