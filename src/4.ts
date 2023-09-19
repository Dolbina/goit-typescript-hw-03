class Key {
    private signature: number;

    constructor(signature: number) {
        this.signature = Math.random();
    }
    getSignature() {
        return this.signature;
    }
}

class Person{
    constructor (privat key: new Key)
    getKey() {
           return this.key
       }
}

abstract class House{
    door: boolean;
    key: {};
    comeln() {
        this.tenants.push(this.Person)
    }
}
const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};