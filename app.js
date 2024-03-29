const inquirer = require("inquirer");

class Player {
    constructor (name, title){
        this.name = name;
        this.title = title;
        this.level = 0;
        this.maxlevel = 100;
        this.maxDamage = 5;
        this.minDamage = 1;
        this.health = 100;
        this.maxHealth = 100;
        this.enemyHealth = 20;
        this.enemyMaxHealth = 20;
        this.enemydamage = 10;
    }
    levelUp() {
        this.level++;
        this.Maxdamage += 2;
        this.minDamage += 2;
        this.maxHealth += 10;
        this.health = this.maxHealth;
        this.enemyMaxHealth += 10;
        this.enemyHealth = this.enemyMaxHealth;
        this.enemydamage += 2;
        console.log(this.name + ", " + this.title + " is now level: " + this.level + " You have been fully healed and your new max health is: " + this.maxHealth + " and your damage is now: " + this.damage);
    }
    dead() {
        console.log(this.name + ", " + this.title + "'s max health has reached 0 you hvae been killed GAME OVER")
    }
    hurt() {
        this.health -= this.enemydamage;
        console.log("you have been hit for " + this.enemydamage + " health you now have " + this.health)
        if (this.health <= 0)
        this.dead();
    }
    enemy() {
        console.log("An enemy has appeared he has " + this.enemyHealth + " health");
        while (this.enemyHealth > 0 || this.health >= 0){
        } 
    }
    attack(damage) {
        // let hit =;
        this.enemyHealth -= damage;
        console.log("you have hit the enemy for " + damage + " he now has " + this.enemyHealth);
        if (this.enemyHealth <= 0 && this.level <= 100) {
        this.levelUp();
        this.enemy();
        }
    }
}
// const mike = new Player("mike", "the cool guy");
let user;
inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "what is your name"
    },
    {
        type: "input",
        name: "title",
        message: "what is your title? ex. 'The Great'"
    }
  ]).then((name) => {
    user = new Player(name.name, name.title);
    console.log("These are your stats:");
    console.log(user);
    return user;
  })
  .then(()=> {
      inquirer.prompt([
          {
              type: "list",
              name: "luckeyNum",
              message: "what is your lucky number",
              choices: [1,2,3,4,5]
          }
      ]).then((luckyNum) => {
          let num = Math.floor(Math.random()*5)
        //   console.log(num);
        if(luckyNum === num){
            user.attack(this.maxDamage);
        } else{
            user.attack(this.minDamage);
        }
      })
  })