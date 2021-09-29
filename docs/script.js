// variable
let switch_player = true;

let player_1;
let player_2;

//object
class Player{
    constructor(player){
        this.player_name = player;
        this.current_score = 0;
        this.stockable_score = 0;
    }
}



//function

//score at 0
function reset_all_scores(){
    player_1.current_score = 0;
    player_2.current_score = 0;
    player_1.stockable_score = 0;
    player_2.stockable_score = 0;

    document.getElementById("stockable_score_2").innerHTML = player_2.stockable_score;
    document.getElementById("current_score_2").innerHTML = player_2.current_score;
    document.getElementById("stockable_score_1").innerHTML = player_1.stockable_score;
    document.getElementById("current_score_1").innerHTML = player_1.current_score;

}
let player_1_visual_point = document.getElementById("player_1_visual_point");
let player_2_visual_point = document.getElementById("player_2_visual_point");

//start new game
function starting_game(){
    player_1 = new Player(prompt('entrez votre pseudo: '));
    player_2 = new Player(prompt('entrez votre pseudo: '));

    document.getElementById("player_1").innerHTML = player_1.player_name.bold() + " .";
    document.getElementById("player_2").innerHTML = player_2.player_name;  
    reset_all_scores(); 
}

starting_game();




// rolling dice with switch player and actualise sotckable score
document.getElementById("roll_button").onclick = () => {

    let dice_result = Math.floor(Math.random() * 6) + 1;
    document.getElementById("dice_image").src = `./image/Dice_${dice_result}.png`;
    if(switch_player === true){

        if (dice_result === 1){
            player_1.stockable_score = 0;
            document.getElementById("stockable_score_1").innerHTML = player_1.stockable_score;
        }else{
            player_1.stockable_score += dice_result;
            document.getElementById("stockable_score_1").innerHTML = player_1.stockable_score;
        }
        document.getElementById("player_1").innerHTML = player_1.player_name;
        document.getElementById("player_2").innerHTML = player_2.player_name.bold() + " .";
        switch_player = false;
    }else{

        if (dice_result === 1){
            player_2.stockable_score = 0;
            document.getElementById("stockable_score_2").innerHTML = player_2.stockable_score;
        }else{
            player_2.stockable_score += dice_result;
            document.getElementById("stockable_score_2").innerHTML = player_2.stockable_score;
        }
        document.getElementById("player_1").innerHTML = player_1.player_name.bold()+" .";
        document.getElementById("player_2").innerHTML = player_2.player_name;
        switch_player = true;
    
    }
    }

// stock stockable score in current et vreify is win condistion is ok and win alert it is

document.getElementById("hold_button").onclick = () => {
    if ( switch_player === true){
        player_1.current_score += player_1.stockable_score;
        player_1.stockable_score = 0;

        document.getElementById("stockable_score_1").innerHTML = player_1.stockable_score;
        document.getElementById("current_score_1").innerHTML = player_1.current_score;

        if( player_1.current_score >= 100){
            alert(`${player_1.player_name} à gagné avec un score de ${player_1.current_score}!!!!`);
            reset_all_scores();
            
        }
    }else{
        player_2.current_score += player_2.stockable_score;
        player_2.stockable_score = 0;

        document.getElementById("stockable_score_2").innerHTML = player_2.stockable_score;
        document.getElementById("current_score_2").innerHTML = player_2.current_score;

        if( player_2.current_score >= 100){
            alert(`${player_2.player_name} à gagné avec un score de ${player_2.current_score}!!!!`);
            reset_all_scores();
        }
    }
}

document.getElementById("new_game_button").onclick = ()=>{starting_game()};

document.getElementById("rules_button").onclick = ()=>{alert(`Règles :
Le jeu comprend 2 joueurs sur un seul et même écran. 
Chaque joueur possède un score temporaire (ROUND) et un score global (GLOBAL).
À chaque tour, le joueur a son ROUND initialisé à 0 et peut lancer un dé autant de fois qu'il le souhaite. Le 
résultat d’un lancer est ajouté au ROUND. 
Lors de son tour, le joueur peut décider à tout moment de:
- Cliquer sur l’option “Hold”, qui permet d’envoyer les points du ROUND vers le GLOBAL. Ce sera alors le
tour de l’autre joueur.
- Lancer le dé. S’il obtient un 1, son score ROUND est perdu et c’est la fin de son tour.
Le premier joueur qui atteint les 100 points sur global gagne le jeu.`)};


