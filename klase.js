console.log("\n !!!! CLASS  !!!! \n");
// class
const klasa = class Klasa {
    name(names) {
        return names + " - a";
    }
    prezime(prezime) {
        return prezime + " -b"
    }

    static pozovi() {
        return "pozan static";
    }
    get area() {
        return this.calcArea();
    }
    calcArea() {
        return "Calc";
    }

}

const kls = new klasa();
console.log("Ime : ", kls.name("ime"));
//console.log("Pozovi : ", Klasa.pozovi()); // radi ako se stavi samo const klss =  new Klasa(); i  class Klasa { ... }
console.log("Area : ", kls.area); // ovo se korisiti kada imamo GET a onda nemamo ()





console.log("\n !!!! PROTOTYPE !!!! \n");
// PROTOTYPE
class proto {
    constructor(name) {
        this.name = name;
    }
}

proto.prototype.miki = () => {
    return "miki";
}
class ext extends proto {
    siki() {
        return this.miki() + " dodatak " + this.name
    }
}
//let prt = new proto();
//console.log("Prototipe miki : ", prt.miki());
let extn = new ext("ImeMoje");
console.log("Extend Siki : ", extn.siki());













console.log("\n !!!! EC6 !!!! \n");
const ec6 = class {
    callfunct() {
        return "aaa"
    }
}
ec6.prototype.addfnc = function () {
    return "addfnc";
}
let ec = new ec6();
console.log("EC6 ", ec.callfunct());
console.log("EC6 addFnc : ", ec.addfnc());

let params = {
    "emailDestination": "nemanja.milivojevic@test.com",
    "name": "Nemanja",
    "encryptedEntryId": 1
};

let params2 = {
    configurationId: 'nemanjaId',
    flowLabel: 'redeemPrize',
    userId: 'mailuser@mail.rs',
    prizeId: 'prize33'
}

let requiredParameters = ['emailDestination', 'name', 'encryptedEntryId'];
let merged = {...params, ...params2};
console.log(merged);


