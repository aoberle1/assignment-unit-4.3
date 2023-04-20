console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!


// 1.) Creating variable basket
let basket = [];
// 5.) Creating maxItems constant
// Tested changing maxItems to 2 to check if isFull returns appropriate true
const maxItems = 5;

// 2.) Creating function addItem with parameter item
function addItem ( item ){
    console.log( 'In addItem' );
    basket.push( item );
    return true;
}
// Testing addItem function outside console log
addItem( 'Brie' )
console.log( `Basket is: ${ basket }` );
// Testing addItem function inside console log
console.log( 'Adding Speck to basket (should be true):', addItem( 'Speck' ) );
console.log( `Updated basket is: ${ basket }` );


// 3.) Creating listItem function
function listItem () {
        console.log( 'in listItem' );
    for ( let i = 0; i <= (basket.length-1); i++ ){
            console.log( `We added ${ basket[i] } to the basket!` );
    }
}
// Testing listItem, logs each item in the basket appropriately
listItem()

// 6.) creating function for isFull before empty array function
function isFull(){
        console.log( 'in isFull ');
    if ( maxItems <= basket.length ) {
        return true;
    }
    else {
        return false;
    }
}
console.log( 'The basket is full (expect false):', isFull() );


// 4.) Emptying array function

function empty(){
    basket = [];
    console.log( 'The basket is empty', basket )    
}
empty()

