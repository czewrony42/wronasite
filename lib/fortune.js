const fortunes = [
    "Każda wrózba kończy się śmiercią",
    "Co cie nie zabije to Cie pokaleczy",
    "Nie wchodzi się dwa razy do tego samego grobu",
    "Jebać PIS",
    "PO też kradło!"
];

exports.getFortune = () => {
    const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    return randomFortune;
}