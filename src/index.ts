import {Card, Joker} from "./types";
import {Color, Mark} from "./enum";
interface  PublishCards{
    player1: Deck,
    player2: Deck,
    player3: Deck,
    left: Deck,
}
class Deck{
    private cards: Card[] = []
    constructor(cards?:Card[]) {
        if (cards){
            this.cards = cards;
        }else{
            this.init();
        }
    }

    init(){
        const marks = Object.values(Mark);
        const colors = Object.values(Color);
        for (const m of marks) {
            for (const c of colors) {
                this.cards.push({
                    color: c,
                    mark: m,
                    getString: () => c + m,
                } as Card);
            }
        }
        let joker:Joker = {
            type: "big",
            getString: () => "jo"
        }
        this.cards.push(joker);
        joker = {
            type: "small",
            getString: () => "Jo"
        }
        this.cards.push(joker);
    }

    print(){
        let result = "";
        let i = 0;
        for (const c of this.cards) {
            result += c.getString() + "\t";
            if ((i+1)%6===0){
                result += "\n";
            }
            i ++;
        }
        console.log(result);
    }

    shuffle(){
        for (let i = 0;i < this.cards.length;i ++){
            const targetIndex = this.getRandom(0,this.cards.length);
            let target = this.cards[targetIndex];
            const temp = this.cards[i];
            this.cards[i] = target;
            target = temp;
        }
    }

    publish():PublishCards{
        const player1:Deck = this.takeCards(17);
        const player2:Deck = this.takeCards(17);
        const player3:Deck = this.takeCards(17);
        const left:Deck = new Deck(this.cards);
        return {
            player1,
            player2,
            player3,
            left,
        }
    }

    takeCards(n:number):Deck{
        const cards:Card[] = [];
        for (let i = 0;i < n;i ++){
            cards.push(this.cards.shift() as Card);
        }
        return new Deck(cards);
    }

    private getRandom(min:number,max:number):number{
        return Math.floor(Math.random()*(max-min)+min);
    }
}

const deck = new Deck();
deck.shuffle();
console.log("=============洗牌中==============");
deck.print();
console.log("=============发牌中===============");
const {player1,player2,player3,left} = deck.publish();
console.log("=============玩家1===============");
player1.print();
console.log("=============玩家2===============");
player2.print();
console.log("=============玩家3===============");
player3.print();
console.log("=============剩余===============");
left.print();
