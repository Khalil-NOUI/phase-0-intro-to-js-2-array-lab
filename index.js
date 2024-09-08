const cats = ["Milo", "Otis", "Garfield",];

//destructively

//add in the end
function destructivelyAppendCat(name){
    cats.push(name)
}


//add in the beginning
function destructivelyPrependCat(name){
    cats.unshift(name)
}

//remove last

function destructivelyRemoveLastCat(name){
    cats.pop(name)
}

//remove first

function destructivelyRemoveFirstCat(name){
    cats.shift(name)
}

//spread end

function appendCat(name){
   return [...cats, name]
}

//spread front

function prependCat(name){
    return [name, ...cats]
}

//slice end

function removeLastCat(name){
    return cats.slice(0, cats.length - 1)
}

//slice front

function removeFirstCat(name){
    return cats.slice(1, cats.length)
}