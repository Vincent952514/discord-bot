const express = require('express');
const app = express();
const { Client, CustomStatus } = require('discord.js-selfbot-v13');

// 1. Web server giữ Render chạy 24/7
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

    // Xóa Custom Status (status dạng bong bóng trên avatar)
    try {
        const custom = new CustomStatus(client);
        await client.user.setCustomStatus(custom);
    } catch (e) {
        // Bỏ qua nếu status trống
    }

    // Thiết lập Rich Presence sử dụng App ID hỗ trợ Asset Key chuẩn
    client.user.setPresence({
        activities: [{
            name: "Visual Studio Code",
            type: "PLAYING",
            application_id: "810594328905809921", // Application ID công khai chuyên dành cho VS Code
            details: "👑 xVincent | 🛠 Developer",
            state: "✦✦✦✦✦✧✧✧✧✧",
            timestamps: { start: 1755137373 },
            assets: {
                large_image: "vscode", // Asset Key chính xác của logo VS Code
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
