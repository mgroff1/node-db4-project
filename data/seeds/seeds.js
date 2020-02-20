exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredient')
    .truncate()
    .then(() => knex('recipe').truncate())
    .then(() => knex('ingredient').truncate())
    .then(() => {
      return knex('recipe').insert([
        { name: 'Chocolate Cake', instructions: 'the cake is a lie' },
        { name: 'water', instructions: 'just add water' },
        { name: 'lemonade', instructions: 'make it with what life gives you' }
      ]);
    })
    .then(() => {
      return knex('ingredient').insert([
        { name: 'lemon juice' },
        { name: 'chocolate chips' },
        { name: 'water' },
        { name: 'salt' },
        { name: 'flour' },
        { name: 'sugar' }
      ]);
    })
    .then(() => {
      return knex('recipe_ingredient').insert([
        { recipe_id: 1, ingredient_id: 1, quantity: 0.2, unit: 'cups' },
        { recipe_id: 1, ingredient_id: 2, quantity: 2.2, unit: 'cups' },
        { recipe_id: 1, ingredient_id: 4, quantity: 1, unit: 'tsp' },
        { recipe_id: 1, ingredient_id: 5, quantity: 3.2, unit: 'cups' },
        { recipe_id: 2, ingredient_id: 3, quantity: 4, unit: 'gallons' },
        { recipe_id: 3, ingredient_id: 1, quantity: 1.5, unit: 'cups' },
        { recipe_id: 3, ingredient_id: 3, quantity: 5, unit: 'liters' },
        { recipe_id: 3, ingredient_id: 6, quantity: 7, unit: 'cups' }
      ]);
    });
};
