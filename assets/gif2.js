$(document).ready(function(){

    $("button").on("click", function(){
        var person = $(this).attr("data-person");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        person + "&api_key=DAGsNNHsQvcdBxAUXLy0djrLeck5e07P&limit=10"
        
         $.ajax({
             url: queryURL,
             method: "GET"        
         })
    
        .then(function (response){
            var results = response.data;
           // console.log(response.data);

            for (var i = 0; i < results.length; i++) {
           
                var gifDiv = $("<div>");
                var rating = results[i].rating;
                var p = $("<p>").text("Rating: " + rating);
                var gifImage = $("<img>");
                

                gifImage.attr("src", results[i].images.fixed_height.url);
                

                gifDiv.prepend(p);
                gifDiv.prepend(gifImage);
                 
                $("#gifImages").prepend(gifDiv);  
            }  
              

         
        });
        //Pausing and animating code

        $("#gifImgages").on("click", function() {
            var state = $(this).attr("data-state");                

            if (state === "still") {
                $(this).attr("src", $(this).attr("data-animate"));
                $(this).attr("data-state", "animate");
            }
            else {
                $(this).attr("src", $(this).attr("data-still"));
                $(this).attr("data-state", "still");                   
            }  
            
            //inputing a new golfers button

            function rednerButtons(){
                $("#buttons-view").empty();
                for (var i = 0, i < golfers.lentth)

            }
            
            $("#select-golfer").on("click", function(event) {
                event.preventDefault();
                var inputGolfer = $("#golfer-input").val().trim();

                person(inputGolfer);
            })
    });





    });
















});