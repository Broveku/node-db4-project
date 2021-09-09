
exports.up = async function(knex) {
  await knex.scheme
    .creatTable('recipes', table =>{
        table.increments('recipe_id')
        table.string('recipe_name', 128).notNullable().unique()
        table.timestamps(true, true)
    })
    .creatTable('steps', table => {
        table.increments('steps_id')
        table.integer('recipe_id')
          .unsigned()
          .notNullable()
          .reference('recipe_id')
          .inTable('recipes')
        table.integer('step_number')
          .unsigned()
          .notNullable()
        table.string('step_instructions', 128)

          
    })
    .creatTable('ingredients', table =>{

    })
    .creatTable('step_ingredients', table => {

    })
};

exports.down = async function(knex) {
  await knex.scheme
    .dropTableIfExist('step_ingredients')
    .dropTableIfExist('ingredients')
    .dropTableIfExist('steps')
    .dropTableIfExist('recipes')
};
