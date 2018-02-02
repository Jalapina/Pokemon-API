$(document).ready(function(){


  for(var i=1; i<=151; i++){                                           //displays all 151 pokemon images
         var pokeImg = "http://pokeapi.co/media/img/"+i+".png";
         $('#pokemon').append("<img id="+i+" src="+pokeImg+">")
    }

    $('img').click(function(){

      var id = this.id;

      var pokeurl='http://pokeapi.co/api/v2/pokemon/'+id+'/'  //url to pokemon info

      var pokepic = 'http://pokeapi.co/media/img/'+id+'.png' //images for pokedox

      $.get(pokeurl, function(res){                        //Retrives info from pokeurl

        $('#title').html("<h2>"+res.name+"</h2>");        //Sets pokemon name
        
        $('#pokedox #dox').attr('src', pokepic);       //Sets pokemon img    
        
        $('#pokedox .type').html("<h3>Type</h3><p>"+res.types[0].type.name+"</p>");  
        
        $('#pokedox #height').html("<p> Height: "+res.height+"</p>");     //Sets pokemons height
        
        $('#pokedox #weight').html("<p> Wight: "+res.weight+"</p>");  //Sets pokemons weight

      }, 'json');

        });
});

 $('img').hover(function(){
          console.log('working')
      });