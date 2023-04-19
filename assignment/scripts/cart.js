console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!


// 1.) Creating variable basket
let basket = [];

// 2.) Creating function addItem with parameter item
function addItem ( item ){
    console.log( 'In addItem', item );
    basket.push( item );
    return true;
}