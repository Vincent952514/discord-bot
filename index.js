const express = require('express');
const app = express();
const { Client, CustomStatus } = require('discord.js-selfbot-v13');

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

    // Xóa Custom Status bong bóng trên avatar
    try {
        const custom = new CustomStatus(client);
        await client.user.setCustomStatus(custom);
    } catch (e) {}

    // Dùng Activity Payload nguyên bản với App ID & Asset chuẩn của VS Code
    client.user.setPresence({
        activities: [{
            name: "Visual Studio Code",
            type: "PLAYING",
            application_id: "356888700030582784", // App ID gốc của VS Code
            details: "👑 xVincent | 🛠 Developer",
            state: "✦✦✦✦✦✧✧✧✧✧",
            timestamps: { start: 1755137373 },
            assets: {
                large_image: "vscode", // Asset key chính xác do Discord lưu trữ
                large_text: "Visual Studio Code",
                small_image: "vscode",
                small_text: "VS Code"
            },
            buttons: [
                "༺𓆩 -ˏ` Discord ༻𓆩"
            ],
            metadata: {
                button_urls: ["https://discord.gg/RpryjFGDqs"]
            }
        }],
        status: "online"
    });
});

client.login(process.env.DISCORD_TOKEN);
