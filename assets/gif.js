$(document).ready(function(){

    var golfers = ["jordan Speith", "phil mickelson", "brooks koepka", "jason day"]

    //$("button").on("click", function(){
    function displayGolfers(){    

        var golfer = $(this).attr("data-person");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        golfer + "&api_key=DAGsNNHsQvcdBxAUXLy0djrLeck5e07P&limit=10"
        
         $.ajax({
             url: queryURL,
             method: "GET"        
         })
         
        .then(function (response){
            var results = response.data;
            console.log(response.data);

            for (var i = 0; i < golfers.length; i++) {
           
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
    }  
    
        function renderButtons() {
            $("#buttons-view").empty();
            
            for (var i = 0; i < golfers.length; i++) {
                var a = $("<button>");
                a.addClass("golfer-btn");
                a.attr("data-name", golfers[1]);
                a.text(golfers[i]);
                $("#buttons-view").append(a);
            }
        }

        $("#select-golfer").on("click", function(event) {
            event.preventDefault();
            var golfer = $("#golfer-input").val().trim();
            golfers.push(golfer);
            renderButtons();
        });

        $(document).on("click", ".golfer-btn", displayGolfers);
        renderButtons();
    
    //     .then(function (response){
    //         var results = response.data;
    //        // console.log(response.data);

    //         for (var i = 0; i < results.length; i++) {
           
    //             var gifDiv = $("<div>");
    //             var rating = results[i].rating;
    //             var p = $("<p>").text("Rating: " + rating);
    //             var gifImage = $("<img>");
                

    //             gifImage.attr("src", results[i].images.fixed_height.url);
                

    //             gifDiv.prepend(p);
    //             gifDiv.prepend(gifImage);
                 
    //             $("#gifImages").prepend(gifDiv);  
    //         }  
              

         
    //     });
    //     //Pausing and animating code

    //     $("#gifImgages").on("click", function() {
    //         var state = $(this).attr("data-state");                

    //         if (state === "still") {
    //             $(this).attr("src", $(this).attr("data-animate"));
    //             $(this).attr("data-state", "animate");
    //         }
    //         else {
    //             $(this).attr("src", $(this).attr("data-still"));
    //             $(this).attr("data-state", "still");                   
    //         }  
            
    //         //inputing a new golfers button

    //         // function rednerButtons(){
    //         //     $("#buttons-view").empty();
    //         //     for (var i = 0, i < golfers.lentth)

    //         // }
    //         function renderButtons(){

    //             $("#gif").empty();

    //             for (var i=0; i < golfers.length; i++) {
    //                 var a = $("<button>");
    //                 a.addClass("golfer-btn");
    //                 a.attr("data-name", golfers[i]);
    //                 a.text(golfers[i]);
    //                 $("#buttons-view").append(a);
    //             }
    //         }

    //         $("#select-golfer").on("click", function(event) {
    //             event.preventDefault();
    //             var inputGolfer = $("#golfer-input").val().trim();
                
    //             golfers.push(person);

    //             renderButtons();

    //             //person(inputGolfer);
    //         });
    //         $(document).on("click", ".golfer-btn",)
    // });





    // });
















});