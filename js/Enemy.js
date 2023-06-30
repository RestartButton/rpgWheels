const Goblin = function() {
    power = 1

    function getPower() {
        return power
    }

    function winSkill(player) {
        badWheel(player);
        player.loseAll();
    }

    return {
        getPower: getPower,
        battleSkill: null,
        winSkill: winSkill,
    }
}

const Wolf = function() {
    power = 2

    function getPower() {
        return power
    }

    function winSkill(player) {
        badWheel(player);
        player.loseAll();
    }

    return {
        getPower: getPower,
        battleSkill: null,
        winSkill: winSkill,
    }
}

const Slime = function() {
    power = 3

    function getPower() {
        return power
    }

    function winSkill(player) {
        badWheel(player);
        power += 2;
    }

    return {
        getPower: getPower,
        battleSkill: null,
        winSkill: winSkill,
    }
}

const Skeleton = function() {
    power = 4

    function getPower() {
        return power
    }

    function winSkill(player) {
        badWheel(player);
        badWheel(player);
    }

    return {
        getPower: getPower,
        battleSkill: null,
        winSkill: winSkill,
    }
}

const Bandit = function() {
    power = 5

    function getPower() {
        return power
    }

    function winSkill(player) {
        badWheel(player);
        player.addCoin(-3)
    }

    return {
        getPower: getPower,
        battleSkill: null,
        winSkill: winSkill,
    }
}

const Hydra = function() {
    power = 17

    function getPower() {
        return power
    }

    function winSkill(player) {
        badWheel(player);
    }

    return {
        getPower: getPower,
        battleSkill: null,
        winSkill: winSkill,
    }
}

const ShadowMage = function() {
    power = 15

    function getPower() {
        return power
    }

    function winSkill(player) {
        //sends to shadow realm
    }

    return {
        getPower: getPower,
        battleSkill: null,
        winSkill: winSkill,
    }
}

const Demon = function() {
    power = 25

    function getPower() {
        return power
    }

    function winSkill(player) {
        //sends to shadow realm
    }

    return {
        getPower: getPower,
        battleSkill: null,
        winSkill: winSkill,
    }
}

const Golem = function() {
    power = 60

    function getPower() {
        return power
    }

    function winSkill(player) {
        //sends back to village
    }

    return {
        getPower: getPower,
        battleSkill: null,
        winSkill: winSkill,
    }
}

const Dragon = function() {
    power = 100

    function getPower() {
        return power
    }

    function battleSkill(enemy, player) {
        if(player.getPower() < 20){
            killPlayer(enemy, player)
        }
    }

    function winSkill(player) {
        badWheel(player);
    }

    return {
        getPower: getPower,
        battleSkill: battleSkill,
        winSkill: winSkill,
    }
}