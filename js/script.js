alert('Hello world')

let PokemonList= [
  {
    name:'pikachu',
    height: 1.4,
    type:  ['electric' , 'static']
  },

  {
    name: 'jigglypuff',
    height: .7,
    type: ['cute charm' , 'Competitive']
  },

  {
    name: 'Zubat',
    height: .8,
    type:['poison' , 'ultrasonic waves']
  },

  {
    name:'squirtle',
    height: .5,
    type: ['water' , 'Torrent']
  },

  {
    name: 'beedrill',
    height: 1.2,
    type: ['poison' , 'stings']
  },

  {
    name:'arbok',
    height: .9,
    type: ['poison' , 'bite']
  },

  {
    name:'ninetales',
    height: 2.1,
    type: ['fire' , 'flash fire']
  }

]

console.log(PokemonList);

// issues i am having when using js
//spacings, and no spacings.
//remembering to use the ; and '' instead of ""

// In this This Loop + conditional I specify that the pokemon with a height smaller than 1 will have this message

for (var i = 0; i < PokemonList.length; i++) {
 if (PokemonList[i].height <= 1.0) {
    document.write('<P>' +  PokemonList[i].name + ( ', height: ' )+ PokemonList[i].height + ( " (Tinny Pokemon)") + '<P>');
 } else {
   document.write('<P>' +  PokemonList[i].name + ( ', height: ' )+ PokemonList[i].height + '<P>')
  }
}