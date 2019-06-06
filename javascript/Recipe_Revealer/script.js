// Copyright 2018 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

let recipe = [];
let button = document.querySelector("#button");

function addInstructions(recipeArray){
	recipe.push("Heat oven to 425ºF. Prepare Double-Crust Pastry.");
	recipe.push("Mix sugar, flour, cinnamon, nutmeg and salt in large bowl.");
	recipe.push("Stir in apples");
	recipe.push("Turn into pastry-lined pie plate. Dot with butter. Trim overhanging edge of pastry 1/2 inch from rim of plate.");
	recipe.push("Roll other round of pastry. Fold into fourths and cut slits so steam con escape.");
	recipe.push("Unfold top pastry over filling; trim overhanging edge 1 inch from rim of plate.")
	recipe.push("Cover edge with 3-inch strip of aluminum foil to prevent excessive browning. Remove foil during last 15 minutes of baking.");
	recipe.push("Bake 40 to 50 minutes or until crust is brown and juice begins to bubble through slits in crust. Serve warm if desired.");
	return recipe;
};

function checkStep(step){
	return recipe[step-1];
};

function checkLength(recipeArray){
	return recipeArray.length;
};

function publishRecipe(recipe){
	count = 1;
	for (var i in recipe){
		console.log("Step " + count + ": " + recipe[i]);
		count++;
	};
};

button.addEventListener("click", function(){
	printstr = ""
	count = 1;
	for (var i in recipe){
		printstr = printstr + "\n" + "Step " + count + ": " + recipe[i];
		count++;
	};
	let newRecipe = document.createElement("p");
	newRecipe.innerHTML = printstr;
	document.body.appendChild(newRecipe);
});
