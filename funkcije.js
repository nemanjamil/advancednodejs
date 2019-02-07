const f1 = (data) => {
    miki = data;
    get = () => {
        return miki + "aaa"
    }
    function add(add) {
        return "from add : "+ this.miki+ " ///// from get : "+get()
    }

    return {
        m : add(),
        f : miki
    }
}

console.log(f1("miki"));



console.log("\n !!!! EC6 VERSION 1 !!!! \n");
ec6v2 = () => {
    name = "ec6v2-name"

    function getall() {
        return name;
    }
    return {
        name: getall()
    }
}
console.log("ec6v2 : ", ec6v2());


console.log("\n !!!! CLASSICAL FUNCTION  !!!! \n");
// clasical function
function clasicalFuntion() {
    name = "Name"
    return this.name;
}
const clasicalFuntionConst = clasicalFuntion();
console.log(clasicalFuntionConst);
