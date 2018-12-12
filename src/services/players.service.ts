import { Player } from "../data/player.interface";

export class PlayerService{
    //Turned array to a fixed size array
    private selectedPlayers: Player[] = [];

    addPlayer(player: Player){
        if(this.selectedPlayers.length < 11){
            this.selectedPlayers.push(player);
        console.log(this.selectedPlayers);
        }else{
            
        }
    }

    removePlayer(player:Player){
        const position = this.selectedPlayers.findIndex(
            (person: Player) => {
                return person.Id == player.Id;
            }
        );
        this.selectedPlayers.splice(position,1);
    }

    removeTeam(){
        this.selectedPlayers.splice(0,10);
    }

    getMyTeam(){
        return this.selectedPlayers.slice();
    }
}