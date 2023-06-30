const Player = function() {
    
    power = 3
    coin = 2

    pos = 0

    item1 = null
    item2 = null
    item3 = null
    item4 = null

    function addCoin(value) {
        coin += value

        if(coin <= 0) coin = 0;
    }

    function getCoin() {
        return coin;
    }

    function addPower(value) {
        power += value

        if(power <= 1) power = 1;
    }

    function addItem(player, item) {
        if(item1 == null) {
            item1 = item;
        } else if (item2 == null) {
            item2 = item;
        } else if (item3 == null) {
            item3 = item;
        } else if (item4 == null) {
            item4 = item;
        }
        item.effect(player)
    }

    function removeItem(player) {
        if(item4 != null) {
            item4.remove(player)
            item4 = null;
        } else if (item3 != null) {
            item3.remove(player)
            item3 = null;
        } else if (item2 != null) {
            item2.remove(player)
            item2 = null;
        } else if (item1 != null) {
            item1.remove(player)
            item1 = null;
        }
    }

    function loseAll() {
        coin = 0
        item1 = null
        item2 = null
        item3 = null
        item4 = null
    }

    return {}

}


const PlayerList = function() {
    playerList = []
    length = 0

    function append(player) {
        if(length < 3){
            playerList.push(player)
            length++;
        }
    }

    return {}
}