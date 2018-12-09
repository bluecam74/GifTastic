$(document).ready(function () {

    $(".submitButton").on("click", function (e) {
        e.preventDefault();
        var input = $("#animalInput").val().trim();
        console.log(input);
        var btn = $("<button>" + input + "</button>");
        $(btn).attr({
            "data-animal": input,
            class: "gifButton",
        });
        $(".buttonArea").append(btn);

        $(".gifButton").on("click", function () {
            console.log("gifButton clicked");
            var animal = $(this).attr("data-animal");

            var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
                animal + "&api_key=dc6zaTOxFJmzC&limit=10";

            $.ajax({
                url: queryURL,
                method: "GET"
            })
                .then(function (response) {
                    console.log(queryURL);
                    console.log(response);
                    var results = response.data;
                    for (var i = 0; i < results.length; i++) {
                        var animalDiv = $("<div>");
                        var div = $("<div>", {
                            text: "Rating: " + results[i].rating
                        });

                        var animalImage = $("<img>", {
                            class: "gif",
                        });


                        $(animalImage).attr({
                            "src": results[i].images.fixed_height_still.url,
                            "data-still": results[i].images.fixed_height_still.url,
                            "data-anim": results[i].images.fixed_height.url,
                            "data-state": "still",
                        });

                        animalDiv.append(div);
                        animalDiv.append(animalImage);
                        $("#gifsArea").prepend(animalDiv);

                    }

                    $(".gif").on("click", function () {
                        var state = $(this).attr("data-state");
                        if (state === "still") {
                            $(this).attr("src", $(this).attr("data-anim"));
                            $(this).attr("data-state", "anim");
                        } else {
                            $(this).attr("src", $(this).attr("data-still"));
                            $(this).attr("data-state", "still");
                        }
                    });
                });


        });
    });
    $(".gifButton").on("click", function () {
        console.log("gifButton clicked");
        var animal = $(this).attr("data-animal");

        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
            animal + "&api_key=dc6zaTOxFJmzC&limit=10";

        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function (response) {
                console.log(queryURL);
                console.log(response);
                var results = response.data;
                for (var i = 0; i < results.length; i++) {
                    var animalDiv = $("<div>", {
                        class: "gifDiv"
                    });
                    var div = $("<div>", {
                        text: "Rating: " + results[i].rating,
                    });

                    var animalImage = $("<img>", {
                        class: "gif",
                    });


                    $(animalImage).attr({
                        "src": results[i].images.fixed_height_still.url,
                        "data-still": results[i].images.fixed_height_still.url,
                        "data-anim": results[i].images.fixed_height.url,
                        "data-state": "still",
                    });

                    animalDiv.append(div);
                    animalDiv.append(animalImage);
                    $("#gifsArea").prepend(animalDiv);

                }

                $(".gif").on("click", function () {
                    var state = $(this).attr("data-state");
                    if (state === "still") {
                        $(this).attr("src", $(this).attr("data-anim"));
                        $(this).attr("data-state", "anim");
                    } else {
                        $(this).attr("src", $(this).attr("data-still"));
                        $(this).attr("data-state", "still");
                    }
                });
            });


    });
});
