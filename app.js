const inquirer = require("inquirer");

class Player {
    constructor (name, title){
        this.name = name;
        this.title = title;
        this.level = 0;
        this.maxlevel = 100;
        this.damage = 5;
        this.health = 100;
        this.maxHealth = 100;
        this.enemyHealth = 20;
        this.enemydamage = 10;
    }
    levelUp() {
        this.level++;
        this.damage += 2;
        this.maxHealth += 10;
        this.health = this.maxHealth;
        this.enemyHealth += 10;
        this.enemydamage += 2;
        console.log(this.name + ", " + this.title + " is now level: " + this.level + " You have been fully healed and your new max health is: " + this.maxHealth + " and your damage is now: " + this.damage);
    }
    dead() {
        console.log(this.name + ", " + this.title + "'s max health has reached 0 you hvae been killed GAME OVER")
    }
    hurt() {
        this.health -= this.enemydamage;
        console.log("you have been hit for 10 health you now have " + this.health)
        if (this.health <= 0)
        this.dead();
    }
    enemy() {
        console.log("An enemy has appeared he has " + this.enemyHealth + "health");
        while (this.enemyHealth > 0 || this.health >= 0){
        this.hurt();
        this.attack();
        } 
    }
    attack() {
        this.enemyHealth -= this.damage;
        console.log("you have hit the enemy for " + this.damage + " he now has " + this.enemyHealth);
        if (this.enemyHealth <= 0 && this.level <= 100) {
        this.levelUp();
        this.enemy();
        }
    }
}
const mike = new Player("mike", "the cool guy");

mike.enemy();