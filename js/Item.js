/* 

const ItemName = function() {
    function effect(player) {

    }

    function remove(player) {

    }

    return {
        effect: effect,
        remove: remove
    }
}

*/


const BusterSword = function() {
    power = 12
    
    function effect(player) {
        player.addPower( power )
    }

    function remove(player) {
        player.addPower( power * -1 )
    }

    return {
        effect: effect,
        remove: remove
    }
}