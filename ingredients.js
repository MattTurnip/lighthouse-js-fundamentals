var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];


let count = 0
while (count < ingredients.length) {
  console.log(ingredients[count]);
  count++;
}

for (i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}

for (i = ingredients.length - 1; i >= 0; i--) {
  console.log(ingredients[i])
}