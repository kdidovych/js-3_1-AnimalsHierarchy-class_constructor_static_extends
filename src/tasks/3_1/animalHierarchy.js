'use strict';

class Animals {
    constructor(name = 'some animal') {
        this.name = name;
    }

    move() {
        console.log(`${this.name} is moving.`);
    }

    say() {
        console.log(`${this.name} is making a sound.`);
    }

    eat() {
        console.log(`${this.name} is eating.`);
    }
}

class Mammals extends Animals {
}
class Birds extends Animals {
    static maxAge = 80;
    static maxWeight = 200;

    static isBirds(obj) {
        return obj instanceof Birds;
    }

    constructor(name = 'some bird', age = -1, weight = -1, limbAmount = 4) {
        super(name);
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.limbAmount = limbAmount;
    }
}
class Fish extends Animals {
    static maxAge = 50;
    static maxWeight = 300;

    static isFish(obj) {
        return obj instanceof Fish;
    }

    constructor(name = 'some fish', age = -1, weight = -1, limbAmount = 0) {
        super(name);
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.limbAmount = limbAmount;
    }
}

class Predators extends Mammals {
}
class Whales extends Mammals {
}
class Primates extends Mammals {
}

class Dog extends Predators {
    static maxAge = 20;
    static maxWeight = 100;

    static isDog(obj) {
        return obj instanceof Dog;
    }

    constructor(name = 'some dog', age = -1, weight = -1, limbAmount = 4) {
        super(name);
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.limbAmount = limbAmount;
    }
}
class Dolphin extends Whales {
    static maxAge = 50;
    static maxWeight = 300;

    static isDolphin(obj) {
        return obj instanceof Dolphin;
    }

    constructor(name = 'some dolphin', age = -1, weight = -1, limbAmount = 2) {
        super(name);
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.limbAmount = limbAmount;
    }
}
class Human extends Primates {
    static maxAge = 150;
    static maxWeight = 200;

    static isHuman(obj) {
        return obj instanceof Human;
    }

    constructor(name = 'some human', age = -1, weight = -1, limbAmount = 4) {
        super(name);
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.limbAmount = limbAmount;
    }
}

/** @type {typeof Animals[]} allClasses */
const allClasses = [Animals, Mammals, Birds, Fish, Predators, Whales, Primates, Dog, Dolphin, Human];
allClasses.forEach(classElement => {
    const className = classElement.name;
    console.group(`Class: ${className}`);
    for (let i = 1; i <= 2; i++) {
        const someAnimal = new classElement(className + i, Math.random() * classElement.maxAge, Math.random() * classElement.maxWeight);
        console.log('    ', i === 1 ? 'First' : 'Last', `${className} specimen: '${someAnimal.name}'`);

        console.log('  Static Properties');
        console.log('maxAge: ', classElement.maxAge);
        console.log('maxWeight: ', classElement.maxWeight, '\n');

        console.log('  Static Methods');
        allClasses.forEach(class2Element => {
            const class2Name = class2Element.name;
            const isMethodName = 'is' + class2Name;
            if (typeof class2Element[isMethodName] === 'function') {
                console.log(isMethodName, ':', class2Element[isMethodName](someAnimal));
            }
        });

        console.log(`  Properties:`);
        console.log('name: ', someAnimal.name);
        console.log('age: ', someAnimal.age);
        console.log('weight: ', someAnimal.weight);
        console.log('limbAmount: ', someAnimal.limbAmount, '\n');

        console.log(`  Methods (move/say/eat):`);
        someAnimal.move();
        someAnimal.say()
        someAnimal.eat();
    }
    console.groupEnd();
});

// export { Animals, Mammals, Birds, Fish, Predators, Whales, Primates, Dog, Dolphin, Human };