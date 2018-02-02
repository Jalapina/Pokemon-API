$(document).ready(function(){

  for(var i=1; i<=151; i++){                                           //displays all 151 pokemon images
         var pokeImg = "http://pokeapi.co/media/img/"+i+".png";
         $('#pokemon').append("<img id="+i+" src="+pokeImg+">")
    }
    $('img').click(function(){
     
      var id = this.id;                                        // Sets special ID to each pokemon when clicked
      var pokeurl='http://pokeapi.co/api/v1/pokemon/'+id+'/'  //url to pokemon info
      var pokepic = 'http://pokeapi.co/media/img/'+id+'.png' //images for pokedox

      $.get(pokeurl, function(res){                        //Retrives info from pokeurl
        $('#title').html("<h2>"+res.name+"</h2>");        //Sets pokemon name
          $('#pokedox #dox').attr('src', pokepic);       //Sets pokemon img
              var type = res.types.length;  //Amount of types 
              console.log(type);

                if(type>1){
                  var types = res.types[1].name;
                  console.log(types);
                  $('#pokedox #type').html("<h3>Types</h3>"+res.types[0].name+"</p>");  
                  $('#pokedox #type2').html("<p> "+res.types[1].name+"</p>");
                }
                else{
                  $('#pokedox #type').html("<p> Type: "+res.types[0].name+"</p>");     //Sets pokemon type
                }
                console.log(res.types[0].name)

              $('#pokedox #height').html("<p> Height: "+res.height+"</p>");     //Sets pokemons height
                $('#pokedox #weight').html("<p> Wight: "+res.weight+"</p>");  //Sets pokemons weight
      }, 'json');

        });
});

//  $('img').hover(function(){
//         $('img').css('background-color','red')
//         console.log('worl')
//       });