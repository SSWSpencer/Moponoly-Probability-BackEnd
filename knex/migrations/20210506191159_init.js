
exports.up = function(knex) {
    return knex.schema.createTable("tiles", tile=>{
        tile.increments();
        tile.integer("Go Square").notNullable();
        tile.integer("Mediterranean Street").notNullable();
        tile.integer("Society Chest (1)").notNullable();
        tile.integer("Baltic Street").notNullable();
        tile.integer("Income Tax").notNullable();
        tile.integer("I Read a Book Railroad").notNullable();
        tile.integer("Oriental Street").notNullable();
        tile.integer("Chance (1)").notNullable();
        tile.integer("Vermont Street").notNullable();
        tile.integer("Connecticut Street").notNullable();
        tile.integer("Jail").notNullable();
        tile.integer("St Charles Palace").notNullable();
        tile.integer("Electricity Company").notNullable();
        tile.integer("States Street").notNullable();
        tile.integer("Virginia Street").notNullable();
        tile.integer("Pennsylvania Choo-Choo Train").notNullable();
        tile.integer("St James Palace").notNullable();
        tile.integer("Society Chest (2)").notNullable();
        tile.integer("Tennessee Street").notNullable();
        tile.integer("New York Street").notNullable();
        tile.integer("$0 Parking").notNullable();
        tile.integer("Kentucky Street").notNullable();
        tile.integer("Chance (2)").notNullable();
        tile.integer("Indiana Street").notNullable();
        tile.integer("Illinois Street").notNullable();
        tile.integer("B&O&B Railroad").notNullable();
        tile.integer("Atlantic Street").notNullable();
        tile.integer("Ventnor Street").notNullable();
        tile.integer("Water Worx").notNullable();
        tile.integer("Marven Gardens").notNullable();
        tile.integer("Go to Jail").notNullable();
        tile.integer("Pacific Street").notNullable();
        tile.integer("North Carolina Street").notNullable();
        tile.integer("Society Chest (3)").notNullable();
        tile.integer("Pennsylvania Street").notNullable();
        tile.integer("Shortest Railroad").notNullable();
        tile.integer("Chance (3)").notNullable();
        tile.integer("Park Palace").notNullable();
        tile.integer("Luxurious Tax").notNullable();
        tile.integer("Walk of Boards").notNullable();
    })
  
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("tiles")
};
