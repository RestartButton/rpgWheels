const killEnemy = function(player) {
    player.addPower(1);
    player.addCoin(2);
}

const killPlayer = function(enemy, player) {
    enemy.winSkill(player);
}

const mug = function(player1, player2) {
    var coin = player2.getCoin()
    
    if(coin < 5) {
        player2.addCoin(coin * -1)
        player1.addCoin(coin)
    } else {
        player2.addCoin(-5)
        player1.addCoin(5)
    }

}

const Node = function(name, conn, handler) {
    entities = []
    connections = conn
    effect = handler
    nodeName = name

    function getName() {
        return nodeName
    }

    function getConn() {
        return connections
    }

    function addEntity(entity) {
        entities.push(entity);
    }

    return {
        effect: effect,
        addEntity: addEntity,
        getName: getName,
        getConn: getConn,

    }
}

const Board = function() {
    nodeList = [
        Node("village",[1,4]),
        Node("s.road1",[2]),
        Node("s.road2",[3,5]),
        Node("shadow",[], (player) => { shadowWheel(player) }),
    ]
    idCount = 3

    function getNode(id) {
        if(id <= idCount)
            return nodeList[id];
        else return -1;
    }

    function hasConn(cur_id, id){
        return (getNode(cur_id) != -1 
                && getNode(cur_id).getConn().indexOf(id) != -1)
    }

    function addNode(node) {
        nodeList.push(node)

        idCount++;
    }
}

/*
#cartas
encontro aleatório
item aleatório
roleta aleatória
*/