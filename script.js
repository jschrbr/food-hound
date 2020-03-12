

function buildQuery(){
    //this is the query URL we will use to query API 
    // var query = searchQuery;

    // var queryURL = "https://api.spoonacular.com/recipes/search?"+"query=burger"+"&apiKey=7fd63fa14b66441e9190b97a36f40c22";
    var queryURL = "https://api.spoonacular.com/recipes/search?query=burger&apiKey=7fd63fa14b66441e9190b97a36f40c22"
    // fetch(queryURL)
    // .then(function(data){
    //     console.log(data)
    // });

    $.ajax({
        url:queryURL,
        method:"GET"
    }).then(function (response){
    
        var results = response.results;
        console.log(results)

        for (index in results){
            var text_content = "Title: " + results[index].title;
            // var image_content = "image: " + results[index].image;
            var text = document.createTextNode(text_content);
            var tag_element = $("<div>");
            tag_element.append(text);
            var body = $("body")

            // var image_element = document.createElement("img")
            // image_element.append(image)
            body.append(tag_element)
        }        
    });
}
buildQuery();