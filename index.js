client.on('ready', async () => {
    console.log(`Đã đăng nhập thành công vào tài khoản: ${client.user.tag}`);

    // Dùng RichPresence Builder
    const getPresence = new RichPresence(client)
        // THAY ID NÀY: Dùng ID của App ảo để ép ảnh URL
        .setApplicationId('1109438914690322432') 
        .setType('PLAYING')
        .setName('Visual Studio Code')
        .setDetails('👑 xVincent | 🛠 Developer')
        .setState('✦✦✦✦✦✧✧✧✧✧')
        .setStartTimestamp(1755137373)
        // Sử dụng Link ảnh URL xịn của VS Code
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
