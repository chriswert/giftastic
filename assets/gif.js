$(document).ready(function(){
    //Create a array of glfers

    var golfers = [ "Phil Mickelson", "Jordan Spieth", "Brooks Koepka", "Rory McIlroy", "Justin Rose", "Rickie Fowler", "Tiger Woods", "Keegan Bradley"];

    //Create function for gif images

    function displayGolfers(){
          
        //set up link to Giphy

        var golfer = $(this).attr("data-person");
        console.log(golfer); // 'some string'
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        golfer + "&api_key=DAGsNNHsQvcdBxAUXLy0djrLeck5e07P&limit=10"
        
         $.ajax({
             url: queryURL,
             method: "GET"        
         })
         //Create the .then function to display the images

        .then(function (response){
            var results = response.data;
            console.log(results);

            //for loop to dislay the golfers in the array
            //Pause animation

            for (var i = 0; i < results.length; i++) {
           
                var gifDiv = $("<div>");
                var rating = results[i].rating;
                var p = $("<p>").text("Rating: " + rating);
                var animated = results[i].images.fixed_height.url;
                var still = results[i].images.fixed_height_still.url;
                console.log(animated, still);

                var gifImage = $("<img>");
              
                gifImage.attr({
                    "src": animated,
                    "data-still": still,
                    "data-animate": animated,
                    "data-state": "animated",
                    "class": "gif-image"
                });

                console.log(gifImage)

                gifDiv.prepend(p);
                gifDiv.prepend(gifImage);
                 
                $("#gifImages").prepend(gifDiv);  
                console.log(gifImage);
            } 

            
        }); 
      
    }  
        //create the function to add the buttons on the array

        function renderButtons() {
            $("#buttons-view").empty();
            
            for (var i = 0; i < golfers.length; i++) {
                var a = $("<button>");
                a.addClass("golfer-btn");
                a.attr("data-person", golfers[i]);
                a.text(golfers[i]);
                $("#buttons-view").append(a);
            }
        }
        //create function to add golfer buttons

        $("#select-golfer").on("click", function(event) {
            event.preventDefault();
            var golfer = $("#golfer-input").val().trim();
            golfers.push(golfer);
            renderButtons();
        });

        $(document).on("click", ".golfer-btn", displayGolfers);
        renderButtons();



        //Pausing and animating code

        $(document).on("click", ".gif-image", function() {
            var state = $(this).attr("data-state");                

            if (state === "still") {
                $(this).attr("src", $(this).attr("data-animate"));
                $(this).attr("data-state", "animate");
            }
            else {
                $(this).attr("src", $(this).attr("data-still"));
                $(this).attr("data-state", "still");                   
            }  
        });
    
    



   
















});