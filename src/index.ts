enum Level {
    level1,
    level2,
    level3
}

let l: Level;

l = Level.level1;
l = Level.level2;
l = Level.level3;

console.log(l);

enum Gender {
    male = "帅哥",
    female = "美女"
}

let g: Gender;

g = Gender.male;
g = Gender.female;

console.log(g);

enum Color {
    heart = "♥",
    spade = "♠",
    club = "♣",
    diamond = "♦"
}

enum Mark {
    A = "A",
    two = "2",
    three = "3",
    four = "4",
    five = "5",
    six = "6",
    seven = "7",
    eight = "8",
    nine = "9",
    ten = "10",
    J = "J",
    Q = "Q",
    K = "K"
}

type NormalCard = {
    color: Color
    mark: Mark
}
type Peck = NormalCard[];

function createPeck(): Peck {
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

function printPeck(peck: Peck) {
    let result = "";
    let i = 0;
    for (const {mark, color} of peck) {
        result += color + mark + "\t";
        if ((i + 1) % 6 === 0) {
            result += "\n";
        }
        i++;
    }
    console.log(result);
}

const peck = createPeck();
printPeck(peck);

enum Permisstion{
    Read = 1, // 2^0
    Write = 2, // 2^1
    Create = 4,// 2^2
    Delete = 8, // 2^3
}

let p:Permisstion = Permisstion.Read | Permisstion.Write;

function hasPermisstion(target:Permisstion,per:Permisstion) {
    return (target & per) === per;
}

console.log(hasPermisstion(p,Permisstion.Write));

p = p ^ Permisstion.Write;

console.log(hasPermisstion(p,Permisstion.Write));