exports.up = function(knex) {
  return knex.schema
    .createTable('recipe', tbl => {
      tbl.increments('id');
      tbl
        .string('name')
        .notNullable()
        .unique();
      tbl.text('instructions').notNullable();
    })
    .createTable('ingredient', tbl => {
      tbl.increments('id');
      tbl.string('name').notNullable();
    })
    .createTable('recipe_ingredient', tbl => {
      tbl
        .integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipe')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      tbl
        .integer('ingredient_id')
        .unsigned()
        .references('id')
        .inTable('ingredient')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      tbl.string('quantity').notNullable();
      tbl.string('unit').notNullable();
      tbl.primary(['recipe_id', 'ingredient_id']);
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('recipe')
    .dropTableIfExists('ingredient')
    .dropTableIfExists('recipe_ingredient');
};
