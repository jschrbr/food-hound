let queryWooliesURL = "";

$.ajax({
  url: queryWooliesURL,
  method: "GET"
}).then(function(resp) {
  console.log(resp);
});
