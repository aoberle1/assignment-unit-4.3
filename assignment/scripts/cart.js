console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!


// 1.) Creating variable basket
let basket = [];
// Stretch 1.) Creating maxItems constant
const maxItems = 5;

// 2.) Creating function addItem with parameter item - returns true when item added
function addItem ( item ){
    // isFull does not need to === true, boolean only has 2 outcomes
    if ( isFull() ){
        console.log( 'Item not added, basket is full!')
        return false
    }
    else {
        basket.push( item );
        return true;
    }
}
// Testing addItem function outside console log
addItem( 'Brie' )
console.log( `Basket is: ${ basket }` );
// Testing addItem function inside console log
console.log( 'Adding Speck to basket (should be true):', addItem( 'Speck' ) );
console.log( `Updated basket is: ${ basket }` );


// 3.) Creating listItem function
function listItem () {
    for ( let i = 0; i <= (basket.length-1); i++ ){
            console.log( `We have ${ basket[i] } in the basket!` );
    }
}
// Testing listItem, logs each item in the basket appropriately
listItem()

// Stretch 2.) creating function for isFull (before empty array function)
function isFull(){
    if ( maxItems <= basket.length ) {
        return true;
    }
    else {
        return false;
    }
}
console.log( 'The basket is full (expect false):', isFull() );
// adding items to basket to test isFull for true
addItem( 'Crackers');
addItem( 'Cornichons' );
addItem( 'Tiramisu' );
listItem();
console.log( 'The basket is full (expect true)', isFull() );
addItem( 'Easy Cheez' );
console.log( basket )

// 4.) Emptying array function

function empty(){
    let basket = [];
    console.log( 'The basket is empty', basket )    
}
empty()

