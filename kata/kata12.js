const ingredientCheck = function (ingredient, list) {
  let check = false
  for (let i = 0; i < list.length; i++) {
    if (ingredient === list[i]) {
      check = true
    }
  }
  return check
}


const chooseRecipe = function (bakeryA, bakeryB, recipes) {
  for(let i = 0 ; i < recipes.length; i++ ) {
    if (ingredientCheck(recipes[i].ingredients[0], bakeryA) === true) {
      if (ingredientCheck(recipes[i].ingredients[1], bakeryB) === true) {
        return recipes[i].name
      }
    }
    else if (ingredientCheck(recipes[i].ingredients[0], bakeryB) === true) {
      if (ingredientCheck(recipes[i].ingredients[1], bakeryA) === true) {
        return recipes[i].name
      }
    }
  }


}


let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
  {
    name: 'Coconut Sponge Cake',
    ingredients: ['coconut', 'cake base']
  },
  {
    name: 'Persian Cheesecake',
    ingredients: ['saffron', 'cream cheese']
  },
  {
    name: 'Custard Surprise',
    ingredients: ['custard', 'ground beef']
  }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
  {
    name: 'Potato Ganache',
    ingredients: ['potatoes', 'chocolate']
  },
  {
    name: 'Sweet Fish',
    ingredients: ['anchovies', 'honey']
  },
  {
    name: "Nima's Famous Dijon Raisins",
    ingredients: ['dijon mustard', 'raisins']
  }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));
