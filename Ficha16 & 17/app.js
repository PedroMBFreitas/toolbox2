new Vue({
    el: '#app',
    data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false,
    turns: []
    },

    methods: {
        startGame: function(){
            this.turns=[]
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
        },

        attack: function(){
            var max = 10;
            var min = 3;
            var damage = Math.max(Math.floor(Math.random() * max) +1, min)
            this.monsterHealth -= damage;
            this.turns.unshift({
               isPlayer: true,
               text: 'Player hits Monster for ' + damage
           });
           if (this.monsterHealth<=0){
               this.monsterHealth=0;
               this.gameIsRunning = false;
               alert('You won!');               
               return;
            }
            var max2 = 12;
            var min2 = 5;
            var damage2 = Math.max(Math.floor(Math.random() * max2) +1, min2)
            this.playerHealth -= damage2;
            this.turns.unshift({
                isPlayer: false,
                text: 'Monster hits Player for ' + damage2    
            });
            if (this.playerHealth<=0){
                this.playerHealth=0;
                this.gameIsRunning = false;
                alert('You Lost!');
                return;
            }
        },

        specialAttack: function(){
            var max3 = 35;
            var min3 = 20;
            var sdamage = Math.max(Math.floor(Math.random() * max3) + 1, min3)
            this.monsterHealth -= sdamage;
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits Monster for ' + sdamage
            });
            if (this.monsterHealth<=0){
                this.monsterHealth=0;
                this.gameIsRunning = false;
                alert('You won!');
                return;
            }
            var max2 = 12;
            var min2 = 5;
            var damage2 = Math.max(Math.floor(Math.random() * max2) +1, min2)
            this.playerHealth -= damage2;
            this.turns.unshift({
                isPlayer: false,
                text: 'Monster hits Player for ' + damage2    
            });
            if (this.playerHealth<=0){
                this.playerHealth=0;
                this.gameIsRunning = false;
                alert('You Lost!');
                return;
            }             
        },

        heal: function(){
            var rmax = 50;
            var rmin = 25;
            var heals = Math.max(Math.floor(Math.random() * rmax) +1, rmin)
            
            var max2 = 12;
            var min2 = 5;
            var damage2 = Math.max(Math.floor(Math.random() * max2) +1, min2)
            this.playerHealth -= damage2;
            this.turns.unshift({
                isPlayer: false,
                text: 'Monster hits Player for ' + damage2    
            });
            if (this.playerHealth>=100){
                this.playerHealth=100;
                this.turns.unshift({
                isPlayer:true,
                text: 'You are at full health!'});
            }
            else{
                this.playerHealth += heals;
                this.turns.unshift({
                isPlayer: true,
                text: 'Player healed for ' + heals
            });
            }
            
        },
        giveUp: function(){
            this.turns=[]
            this.playerHealth=0;
            
            alert('You Lost!');
            this.gameIsRunning = false;

        },
        checkWin: function(){
            if (monsterHealth<=0){
                this.gameIsRunning = false;
                alert('You on!');             
                return;
            }
            else if(playerHealth<=0){
                this.gameIsRunning = false;
                alert('You LOSE!');
            }
        }
    }
});