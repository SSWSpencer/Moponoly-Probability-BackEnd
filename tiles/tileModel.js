const db = require("../data/dbConfig.js");

module.exports = {
    getData,
    insert,
    update,
}

function getData(){
    return db("tiles").where({"id": 1}).first();
}

async function insert(inf){
    try{
        const[id] = await db("tiles").insert(inf, "id");
        return getData();
    }
    catch(err){
        throw err;
    }
}

function update(changes){
    return db("tiles").where({"id": 1}).update(changes, "id")
    .then(updated=>{
        return db("tiles").where({"id": 1}).first();
    })
}
