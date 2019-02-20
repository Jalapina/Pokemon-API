$(document).ready(function(){


  for(var i=1; i<=151; i++){                                           //displays all 151 pokemon images
         var pokeImg = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+i+".png";
         $('.pokemon').append("<img id="+i+" src="+pokeImg+">")
    }

    $('img').on("click tap",function(){
      var id = this.id;

      var pokeurl='https://pokeapi.co/api/v2/pokemon/'+id  //url to pokemon info
      var pokepic = 'https://raw.githubusercontent.com/Pokeapi/sprites/master/sprites/pokemon/'+id+'.png' //images for pokedox

      $.get(pokeurl, function(res){                        //Retrives info from pokeurl

        $('.pokemon-name').html("<h2 class='name'>"+res.name+"</h2>");        //Sets pokemon name
        
        $('.pokedox-bio .pokemon-image').attr('src', pokepic);       //Sets pokemon img    
        
        $('.pokedox-bio .pokemon-type').html("<h3>Type</h3><p>"+res.types[0].type.name+"</p>");  
        
        $('.pokedox-bio .pokemon-height').html("<p> Height: "+res.height+"</p>");     //Sets pokemons height
        
        $('.pokedox-bio .pokemon-weight').html("<p> Wight: "+res.weight+"</p>");  //Sets pokemons weight

      }, 'json');

        });
});
