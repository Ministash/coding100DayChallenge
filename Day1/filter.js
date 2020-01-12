var animals = [
    {name: 'fluff', species: 'rabbit'},
    {name: 'hunter', species: 'dog'},
    {name: 'rebecca', species: 'cat'},
    {name: 'robert', species: 'rabbit'},
    {name: 'brian', species: 'dog'},
    {name: 'helen', species: 'cat'},
]




var dogs = animals.filter(function(animal){
    return animal.species === 'dog';
});


console.log(dogs[0].species);