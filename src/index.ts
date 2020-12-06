type Gender = "男"| "女";
type User = {
    name: string
    gender: Gender
}

function sum(n1:number, n2:number):number;
function sum(n1:string, n2:string):string;
function sum(n1:string|number,n2:string|number):string|number {
    if (typeof n1 === "string" && typeof n2 === "string"){
        return n1 + n2;
    }else if (typeof  n1 === "number" && typeof n2 === "number"){
        return n1 * n2;
    }
    throw new Error("123");
}

console.log(sum(1,1));
console.log(sum("1","1"));
function users(g?:Gender):User[]{
    return [
        {
            name: '123',
            gender: "男"
        },
        {
            name: '456',
            gender: "女"
        }
    ]
}

console.log(users());


type Color = "♥"|"♠"|"♣"|"♦"
type NormalCard = {
    color: Color
    mark: number
}
type Peck = NormalCard[];

function createPeck():Peck{
    const peck:Peck = [];
    for (let i = 1;i <=13;i ++){
        peck.push({
            color: "♠",
            mark: i
        });
        peck.push({
            color: "♣",
            mark: i
        });
        peck.push({
            color: "♥",
            mark: i
        });
        peck.push({
            color: "♦",
            mark: i
        });
    }
    return peck;
}

function  printPeck(peck:Peck){
    let result = "\n";
    for (const c of peck) {
        const color = c.color;
        const mark = c.mark;
        if (mark === 11){
            result += color + "J";
        }else if (mark === 12){
            result += color + "Q";
        }else if (mark === 13){
            result += color + "K";
        }else{
            result += color + mark;
        }
        result += "\t";
    }
    console.log(result);
}

const peck = createPeck();
printPeck(peck);
