class Game{
    constructor(){}
    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function(data){
            gameState = data.val();
        })
    }

    update(state){
        database.ref("/").update({
            gameState :state
        });
    }

    start(){
        // if the race has not statred yet
        if(gameState === 0){
            player = new Player();
            player.getCount();
            form = new Form();
            form.display();
            console.log("start")
        }
    }
    play(){
        form.hide();
        textSize(30);
        text("Game Start", 120, 100);
        Player.getPlayerInfo();
        
        if(allPlayers !== undefined){
            var y = 130;
            for(var plr in allPlayers){
                
                if (plr === "player" + player.index)
                    fill("red")
                else
                    fill("black");

                y+=20;
                textSize(15);
                text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,y)
            }
    

        }
        if(keyIsDown(UP_ARROW) && player.index !== null){
            player.distance +=50
            player.update();
          }

    }
}