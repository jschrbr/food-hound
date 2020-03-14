

function buildQuery(userInput){

  var queryURL = "https://api.spoonacular.com/recipes/search?query=" +userInput+"&apiKey=7fd63fa14b66441e9190b97a36f40c22";
  // var queryURL = "https://api.spoonacular.com/recipes/search?query=burger&apiKey=7fd63fa14b66441e9190b97a36f40c22"

    $.ajax({
        url:queryURL,
        method:"GET"
    }).then(function (response){
        var results = response.results;
        console.log(results)

        for (index in results){
            // var text_content = "Title: " + results[index].title;
            // var text = document.createTextNode(text_content);
            // var tag_element = $("<div>");
            // tag_element.append(text);
            // var body = $("body")
            // console.log(index)
            
            // var image_element = $("<img>").attr("src","https://spoonacular.com/recipeImages/"+results[index].imageUrls);
            // // console.log(results[index].imageUrls);
            // body.append(image_element);

            var recipeId = results[index].id
            var recipeTitle = results[index].title
            var recipeImage = "https://spoonacular.com/recipeImages/"+ results[index].imageUrls
            console.log(recipeId)
            console.log(recipeImage)
            console.log(recipeTitle)


        } 


        

    });
}



//this allows the user to search up a recipe
function searchQuery(){
    $("#recipe-search-field").on("keyup",function(event){
        if (event.keyCode == 13){
            event.preventDefault()
            var userInput = $("#recipe-search-field").val().trim()
            // return userInput
            console.log(userInput)
            buildQuery(userInput);
        }; 
    });
}

//preventing enter button to submit globally
$(document).ready(function() {
    $(window).keydown(function(event){
      if(event.keyCode == 13) {
        event.preventDefault();
       return false;
      }
    });
  });


searchQuery();