console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!


// 1.) Creating variable basket
let basket = [];

// 2.) Creating function addItem with parameter item
function addItem ( item ){
    console.log( 'In addItem' );
    basket.push( item );
    return true;
}
// Testing addItem function
console.log( `Basket is ${ basket }` );
console.log( 'Adding Speck to basket (should be true):', addItem( 'Speck' ) );
console.log( `Updated basket is: ${ basket }` );
