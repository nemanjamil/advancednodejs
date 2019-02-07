console.log("\n !!!! objekat !!!! \n");
// OBJEKAT
const objekat = {
    names: "name",
    getuj: function () {
        return this.names;
    },

    fnc: () => {
        return this.names;
    }
}
console.log("objekat name  : ", objekat.names);
console.log("GETUJ OBJEKAT ", objekat.getuj());
console.log("FNC OBJEKAT ", objekat.fnc());


console.log("\n !!!! COMPOSITION !!!! \n");
const kucanje = (state) => ({
    prsti: () => console.log("CAO " + state.name)
})
livecomp = (name) => {
    let state = {
        name: 20,
        f: "trte"
    }

    return Object.assign({},
        kucanje(state)
    )
}
livecomp({
    name: "nemanja"
}).prsti()
