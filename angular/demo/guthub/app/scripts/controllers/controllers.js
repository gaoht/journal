var app = angular.module('guthub', ['guthub.directives', 'guthub.services']);

app.controller('ListCtrl',
    function($scope, recipes){
        $scope.recipes = recipes;
    }
)

app.controller('ViewCtrl', function($scope, $location, recipe){
    $scope.recipe = recipe;
    $scope.edit = function(){
        $location.path('/edit/' + recipe.id);
    }
})

app.controller('EditCtrl', function($scope, $location, recipe){
    $scope.recipe = recipe;
    $scope.save = function(){
        $scope.recipe.$save(function(recipe){
            $location.path('/view/' + recipe.id);
        });
    }
    $scope.remove = function(){
        $scope.recipe.$remove(function(){
            delete $scope.recipe;
            $location.path("/");
        });
    }
})

app.controller('NewCtrl', function($scope, $location, Recipe){
    $scope.recipe = new Recipe({
        ingredients: [{}]
    })
    $scope.save = function(){
        $scope.recipe.$save(function(recipe){
            $location.path('/view/' + recipe.id);
        })
    }
})

app.controller('IngredientsCtrl', function($scope) {
    $scope.addIngredient = function() {
        var ingredients = $scope.recipe.ingredients;
        ingredients[ingredients.length] = {};
    };
    $scope.removeIngredient = function(index) {
        $scope.recipe.ingredients.splice(index, 1);
    };
});

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/', {
            controller: 'ListCtrl',
            resolve: {
                recipes: function(MultiRecipeLoader) {
                    return  MultiRecipeLoader();
                }
            },
            templateUrl:'/views/list.html'
        }).when('/edit/:recipeId', {
            controller: 'EditCtrl',
            resolve: {
                recipe: function(RecipeLoader) {
                    return RecipeLoader();
                }
            },
            templateUrl:'/views/recipeForm.html'
        }).when('/view/:recipeId', {
            controller: 'ViewCtrl',
            resolve: {
                recipe: function(RecipeLoader) {
                    return RecipeLoader();
                }
            },
            templateUrl:'/views/viewRecipes.html'
        }).when('/new', {
            controller: 'NewCtrl',
            templateUrl:'/views/recipeForm.html'
        }).otherwise({redirectTo:'/'});
}]);