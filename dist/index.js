var Level;
(function (Level) {
    Level[Level["level1"] = 0] = "level1";
    Level[Level["level2"] = 1] = "level2";
    Level[Level["level3"] = 2] = "level3";
})(Level || (Level = {}));
let l;
l = Level.level1;
l = Level.level2;
l = Level.level3;
console.log(l);
var Gender;
(function (Gender) {
    Gender["male"] = "\u5E05\u54E5";
    Gender["female"] = "\u7F8E\u5973";
})(Gender || (Gender = {}));
let g;
g = Gender.male;
g = Gender.female;
console.log(g);
var Color;
(function (Color) {
    Color["heart"] = "\u2665";
    Color["spade"] = "\u2660";
    Color["club"] = "\u2663";
    Color["diamond"] = "\u2666";
})(Color || (Color = {}));
var Mark;
(function (Mark) {
    Mark["A"] = "A";
    Mark["two"] = "2";
    Mark["three"] = "3";
    Mark["four"] = "4";
    Mark["five"] = "5";
    Mark["six"] = "6";
    Mark["seven"] = "7";
    Mark["eight"] = "8";
    Mark["nine"] = "9";
    Mark["ten"] = "10";
    Mark["J"] = "J";
    Mark["Q"] = "Q";
    Mark["K"] = "K";
})(Mark || (Mark = {}));
function createPeck() {
    const peck = [];
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
function printPeck(peck) {
    let result = "";
    let i = 0;
    for (const { mark, color } of peck) {
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
var Permisstion;
(function (Permisstion) {
    Permisstion[Permisstion["Read"] = 1] = "Read";
    Permisstion[Permisstion["Write"] = 2] = "Write";
    Permisstion[Permisstion["Create"] = 4] = "Create";
    Permisstion[Permisstion["Delete"] = 8] = "Delete";
})(Permisstion || (Permisstion = {}));
let p = Permisstion.Read | Permisstion.Write;
function hasPermisstion(target, per) {
    return (target & per) === per;
}
console.log(hasPermisstion(p, Permisstion.Write));
p = p ^ Permisstion.Write;
console.log(hasPermisstion(p, Permisstion.Write));
