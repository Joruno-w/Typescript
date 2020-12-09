import {Color, Mark} from "./enum";
import {Card, Joker,Peck} from "./types";

export function createPeck(): Peck {
    const peck: Peck = [];
    const marks = Object.values(Mark);
    const colors = Object.values(Color);
    for (const m of marks) {
        for (const c of colors) {
            peck.push({
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
    peck.push(joker);
    joker = {
        type: "small",
        getString: () => "Jo"
    }
    peck.push(joker);
    return peck;
}

export function printPeck(peck: Peck) {
    let result = "";
    let i = 0;
    for (const p of peck) {
        result += p.getString() + "\t";
        if ((i+1)%6===0){
            result += "\n";
        }
        i ++;
    }
    console.log(result);
}