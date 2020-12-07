import {Color, Mark} from "./enum";
import {Peck} from "./types";

export function createPeck(): Peck {
    const peck: Peck = [];
    const marks = Object.values(Mark);
    const colors = Object.values(Color);
    for (const m of marks) {
        for (const c of colors) {
            peck.push({
                color: c,
                mark: m
            });
        }
    }
    return peck;
}

export function printPeck(peck: Peck) {
    let result = "";
    let i = 0;
    for (const {mark,color} of peck) {
        result += color + mark + "\t";
        if ((i+1)%6===0){
            result += "\n";
        }
        i ++;
    }
    console.log(result);
}