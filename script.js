let playerCount = 0;
let allumettes = 50;
let currentPlayer = 1;

function play() {
    alert("Il est possible d'avoir jusqu'à dix joueurs.");
    playerCount = parseInt(window.prompt("Combien êtes-vous ? (1 à 10)"));
    
    if (!isNaN(playerCount) && playerCount <= 10 && playerCount >= 1) {
        gameMultiplePlayers();
    } else {
        alert("Veuillez entrer un nombre entre 1 et 10.");
        play();
    }
}

function gameMultiplePlayers() {
    let retrait = parseInt(window.prompt(`Joueur ${currentPlayer}, combien veux-tu retirer d'allumettes ?`));
    
    if (!isNaN(retrait) && retrait > 0 && retrait <= Math.min(allumettes, 6)) { 
        allumettes -= retrait;
        
        if (allumettes === 0) {
            alert(`Bravo joueur ${currentPlayer}, il ne reste plus d'allumettes. Tu as gagné !`);
            resetGame();
        } else {
            alert(`Il reste ${allumettes} allumettes.`);
            currentPlayer = currentPlayer % playerCount + 1;
            gameMultiplePlayers();
        }
    } else {
        alert("Le nombre doit être compris entre 1 et 6.");
        gameMultiplePlayers();
    }
}

function resetGame() {
    allumettes = 50;
    currentPlayer = 1;
    play();
}

play();
