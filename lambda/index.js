exports.handler = async () => {
    const date = new Date().toLocaleTimeString("fr-FR", { timeZone: "Europe/Paris" });
    return `Hello World ! Ici Hugo Richard-Larvor, à ${date}`;
};
