const express = require("express");

const Tile = require("./tileModel.js");

const router = express.Router();
const db = require("../data/dbConfig.js");

router.get("/", (req, res)=>{
    Tile.getData()
    .then(inf=>{
        res.status(200).json(inf)
    })
})

router.post("/init", (req, res)=>{
    const initData = {
        "Go Square": 0,
        "Mediterranean Street": 0,
        "Society Chest (1)": 0,
        "Baltic Street": 0,
        "Income Tax": 0,
        "I Read a Book Railroad": 0,
        "Oriental Street": 0,
        "Chance (1)": 0,
        "Vermont Street": 0,
        "Connecticut Street": 0,
        "Jail": 0,
        "St Charles Palace": 0,
        "Electricity Company": 0,
        "States Street": 0,
        "Virginia Street": 0,
        "Pennsylvania Choo-Choo Train": 0,
        "St James Palace": 0,
        "Society Chest (2)": 0,
        "Tennessee Street": 0,
        "New York Street": 0,
        "$0 Parking": 0,
        "Kentucky Street": 0,
        "Chance (2)": 0,
        "Indiana Street": 0,
        "Illinois Street": 0,
        "B&O&B Railroad": 0,
        "Atlantic Street": 0,
        "Ventnor Street": 0,
        "Water Worx": 0,
        "Marven Gardens": 0,
        "Go to Jail": 0,
        "Pacific Street": 0,
        "North Carolina Street": 0,
        "Society Chest (3)": 0,
        "Pennsylvania Street": 0,
        "Shortest Railroad": 0,
        "Chance (3)": 0,
        "Park Palace": 0,
        "Luxurious Tax": 0,
        "Walk of Boards": 0
    }
    Tile.insert(initData)
    .then(inf=>{
        res.status(201).json(inf);
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({error: "Could Not Initialize Data", location: "POST /tiles/init, insert()"})
    })
})

router.post("/reset", (req, res)=>{
    const resetData = {
        "Go Square": 0,
        "Mediterranean Street": 0,
        "Society Chest (1)": 0,
        "Baltic Street": 0,
        "Income Tax": 0,
        "I Read a Book Railroad": 0,
        "Oriental Street": 0,
        "Chance (1)": 0,
        "Vermont Street": 0,
        "Connecticut Street": 0,
        "Jail": 0,
        "St Charles Palace": 0,
        "Electricity Company": 0,
        "States Street": 0,
        "Virginia Street": 0,
        "Pennsylvania Choo-Choo Train": 0,
        "St James Palace": 0,
        "Society Chest (2)": 0,
        "Tennessee Street": 0,
        "New York Street": 0,
        "$0 Parking": 0,
        "Kentucky Street": 0,
        "Chance (2)": 0,
        "Indiana Street": 0,
        "Illinois Street": 0,
        "B&O&B Railroad": 0,
        "Atlantic Street": 0,
        "Ventnor Street": 0,
        "Water Worx": 0,
        "Marven Gardens": 0,
        "Go to Jail": 0,
        "Pacific Street": 0,
        "North Carolina Street": 0,
        "Society Chest (3)": 0,
        "Pennsylvania Street": 0,
        "Shortest Railroad": 0,
        "Chance (3)": 0,
        "Park Palace": 0,
        "Luxurious Tax": 0,
        "Walk of Boards": 0
    }
    Tile.update(resetData)
    .then(inf=>{
        res.status(200).json(inf)
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({error: "Could not reset data", location: "POST /tiles/reset, update()"});
    })
})

router.post("/update", (req, res)=>{
    const userData = req.body;
    const globalData = Tile.getData().then(inf=>{
        const newData = {
            "Go Square": inf["Go Square"] + userData["Go Square"],
            "Mediterranean Street": inf["Mediterranean Street"] + userData["Mediterranean Street"],
            "Society Chest (1)": inf["Society Chest (1)"] + userData["Society Chest (1)"],
            "Baltic Street": inf["Baltic Street"] + userData["Baltic Street"],
            "Income Tax": inf["Income Tax"] + userData["Income Tax"],
            "I Read a Book Railroad": inf["I Read a Book Railroad"] + userData["I Read a Book Railroad"],
            "Oriental Street": inf["Oriental Street"] + userData["Oriental Street"],
            "Chance (1)": inf["Chance (1)"] + userData["Chance (1)"],
            "Vermont Street": inf["Vermont Street"] + userData["Vermont Street"],
            "Connecticut Street": inf["Connecticut Street"] + userData["Connecticut Street"],
            "Jail": inf["Jail"] + userData["Jail"],
            "St Charles Palace": inf["St Charles Palace"] + userData["St Charles Palace"],
            "Electricity Company": inf["Electricity Company"] + userData["Electricity Company"],
            "States Street": inf["States Street"] + userData["States Street"],
            "Virginia Street": inf["Virginia Street"] + userData["Virginia Street"],
            "Pennsylvania Choo-Choo Train": inf["Pennsylvania Choo-Choo Train"] + userData["Pennsylvania Choo-Choo Train"],
            "St James Palace": inf["St James Palace"] + userData["St James Palace"],
            "Society Chest (2)": inf["Society Chest (2)"] + userData["Society Chest (2)"],
            "Tennessee Street": inf["Tennessee Street"] + userData["Tennessee Street"],
            "New York Street": inf["New York Street"] + userData["New York Street"],
            "$0 Parking": inf["$0 Parking"] + userData["$0 Parking"],
            "Kentucky Street": inf["Kentucky Street"] + userData["Kentucky Street"],
            "Chance (2)": inf["Chance (2)"] + userData["Chance (2)"],
            "Indiana Street": inf["Indiana Street"] + userData["Indiana Street"],
            "Illinois Street": inf["Illinois Street"] + userData["Illinois Street"],
            "B&O&B Railroad": inf["B&O&B Railroad"] + userData["B&O&B Railroad"],
            "Atlantic Street": inf["Atlantic Street"] + userData["Atlantic Street"],
            "Ventnor Street": inf["Ventnor Street"] + userData["Ventnor Street"],
            "Water Worx": inf["Water Worx"] + userData["Water Worx"],
            "Marven Gardens": inf["Marven Gardens"] + userData["Marven Gardens"],
            "Go to Jail": inf["Go to Jail"] + userData["Go to Jail"],
            "Pacific Street": inf["Pacific Street"] + userData["Pacific Street"],
            "North Carolina Street": inf["North Carolina Street"] + userData["North Carolina Street"],
            "Society Chest (3)": inf["Society Chest (3)"] + userData["Society Chest (3)"],
            "Pennsylvania Street": inf["Pennsylvania Street"] + userData["Pennsylvania Street"],
            "Shortest Railroad": inf["Shortest Railroad"] + userData["Shortest Railroad"],
            "Chance (3)": inf["Chance (3)"] + userData["Chance (3)"],
            "Park Palace": inf["Park Palace"] + userData["Park Palace"],
            "Luxurious Tax": inf["Luxurious Tax"] + userData["Luxurious Tax"],
            "Walk of Boards": inf["Walk of Boards"] + userData["Walk of Boards"],

        }
        Tile.update(newData).then(inf=>{
            res.status(200).json(inf)
        })
        .catch(err=>{
            console.log(err);
            res.status(500).json({error: "Could not update data", location: "POST /tiles/update, getData() > update()"})
        })
    })
    .catch(err=>{
        res.status(500).json({error: "Could not update data", location: "POST /tiles/update, getData()"})
    })    
})


module.exports = router;