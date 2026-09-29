const express = require('express');
const app = express();
const { Client, CustomStatus } = require('discord.js-selfbot-v13');

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

    // Xóa Custom Status (status dạng bong bóng trên avatar)
    try {
        const custom = new CustomStatus(client);
        await client.user.setCustomStatus(custom);
    } catch (e) {
        // Bỏ qua nếu status trống
    }

    // Link ảnh CDN chính chủ Discord (Đã upload lên Discord CDN)
    const vsCodeLogo = "https://media.discordapp.net/attachments/1098602283921313883/1109438914690322432/vscode.png";

    // Thiết lập Rich Presence
    client.user.setPresence({
        activities: [{
            name: "Visual Studio Code",
            type: "PLAYING",
            application_id: "1098602283921313883",
            details: "👑 xVincent | 🛠 Developer",
            state: "✦✦✦✦✦✧✧✧✧✧",
            timestamps: { start: 1755137373 },
            assets: {
                large_image: vsCodeLogo,
                large_text: "Visual Studio Code",
                small_image: vsCodeLogo,
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
