$(".mainContent").hide()
        
          $(".generator").click(function(){

          
        
                $.get("https://www.themealdb.com/api/json/v1/1/random.php", function(res) {
                    console.log(res);
                    $(".mainContent").show()
                    
                    $(".mealResult").text(res.meals[0].strMeal)
                    $(".cuisineResult").text(res.meals[0].strArea)
                    $(".categoryResult").text(res.meals[0].strCategory)

                    // ingredients
                    $(".ingredient1").text(res.meals[0].strIngredient1)
                    $(".ingredient2").text(res.meals[0].strIngredient2)
                    $(".ingredient3").text(res.meals[0].strIngredient3)
                    $(".ingredient4").text(res.meals[0].strIngredient4)
                    $(".ingredient5").text(res.meals[0].strIngredient5)
                    $(".ingredient6").text(res.meals[0].strIngredient6)
                    $(".ingredient7").text(res.meals[0].strIngredient7)
                    $(".ingredient8").text(res.meals[0].strIngredient8)
                    $(".ingredient9").text(res.meals[0].strIngredient9)
                    $(".ingredient10").text(res.meals[0].strIngredient10)
                    $(".ingredient11").text(res.meals[0].strIngredient11)
                    $(".ingredient12").text(res.meals[0].strIngredient12)
                    $(".ingredient13").text(res.meals[0].strIngredient13)
                    $(".ingredient14").text(res.meals[0].strIngredient14)
                    $(".ingredient15").text(res.meals[0].strIngredient15)
                    $(".ingredient16").text(res.meals[0].strIngredient16)
                    $(".ingredient17").text(res.meals[0].strIngredient17)
                    $(".ingredient18").text(res.meals[0].strIngredient18)
                    $(".ingredient19").text(res.meals[0].strIngredient19)
                    $(".ingredient20").text(res.meals[0].strIngredient20)


                    // Measure
                    $(".measure1").text(res.meals[0].strMeasure1)
                    $(".measure2").text(res.meals[0].strMeasure2)
                    $(".measure3").text(res.meals[0].strMeasure3)
                    $(".measure4").text(res.meals[0].strMeasure4)
                    $(".measure5").text(res.meals[0].strMeasure5)
                    $(".measure6").text(res.meals[0].strMeasure6)
                    $(".measure7").text(res.meals[0].strMeasure7)
                    $(".measure8").text(res.meals[0].strMeasure8)
                    $(".measure9").text(res.meals[0].strMeasure9)
                    $(".measure10").text(res.meals[0].strMeasure10)
                    $(".measure11").text(res.meals[0].strMeasure11)
                    $(".measure12").text(res.meals[0].strMeasure12)
                    $(".measure13").text(res.meals[0].strMeasure13)
                    $(".measure14").text(res.meals[0].strMeasure14)
                    $(".measure15").text(res.meals[0].strMeasure15)
                    $(".measure16").text(res.meals[0].strMeasure16)
                    $(".measure17").text(res.meals[0].strMeasure17)
                    $(".measure18").text(res.meals[0].strMeasure18)
                    $(".measure19").text(res.meals[0].strMeasure19)
                    $(".measure20").text(res.meals[0].strMeasure20)

                    // Recipe
                    $(".recipe").text(res.meals[0].strInstructions)

                  // meal image
                    $(".imageResult").attr("src", res.meals[0].strMealThumb)

                    // youtube link
                    $(".youtubeResult").attr("href", res.meals[0].strYoutube)

                }, "json");

          });  