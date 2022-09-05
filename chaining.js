const users = [12, 'yamin', {
    id: 1,
    name: 'rakib',
    job: 'director'
}]

// console.log(users[2].job);

const data = {
    count: 5000,
    data: [
        { id: 1, name: 'rakib', job: 'director' },
        { id: 2, name: 'shakib', job: 'assistant' },
    ]
}

const findTeam = data.data[1].job;

console.log(findTeam);