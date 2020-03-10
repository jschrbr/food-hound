let queryWooliesURL = "";

let get = $.ajax({
  url: queryWooliesURL,
  method: "GET"
})
  .then(function(resp) {
    console.log(resp);
  })
  .fail(function(resp) {
    console.log(resp);
  });

get.always(function(resp) {
  console.log(resp);
});
