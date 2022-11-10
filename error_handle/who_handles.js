
let kitchen_stock = { chocolate_pieces_in_kitcken: 21 }
const chocolate_recepie = {
    cholates_for_suffle: 20
}

function kitchen_makes_food(order) {
    console.log(`kitchen cook makes order ${order}`);
    if (order == 'chocolate sufle') {
        if (kitchen_stock.chocolate_pieces_in_kitcken > chocolate_recepie.cholates_for_suffle) {
            kitchen_stock.chocolate_pieces_in_kitcken -= chocolate_recepie.cholates_for_suffle
            console.log('suffle is ready!');
        }
        else {
            // problems
            throw new Error('I have no chocolate for the suffle')
        }
    }
}

function manager_takes_order(order) {
    console.log(`manager takes order ${order}`);
    kitchen_makes_food(order)
}

function waiter_takes_order(order) {
    //try {
        console.log(`waiter takes order ${order}`);
        manager_takes_order(order)
    //}
    //catch (err) {
        console.log('sorry not enough chocolate, take 100 NIS');
    //}
}

function client_makes_order(order) {
    console.log(`client makes order ${order}`);
    waiter_takes_order(order)
}

client_makes_order('chocolate sufle')
client_makes_order('chocolate sufle')
