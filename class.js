class Player {
    constructor(name, age, height, position, rank) {
        this.name = name;
        this.age = age;
        this.height = height;
        this.position = position;
        this.rank = rank;
    }
    givepass(jerseyNum) {
        console.log(`please give a pass to player ${jerseyNum}`);
    }
    makeshoot(area) {
        console.log(`please hit the ball from ${area} `);
    }
    team = 'monipur Fighters';

}

const rakib = new Player("rakib", 25, "5 feet 4 inch", 'forward', 10);
console.log(rakib);
rakib.givepass(10);
rakib.makeshoot('corner');

