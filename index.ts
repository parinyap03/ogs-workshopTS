// No.1
enum gender {
    male = "male",
    female = "female"
}

type Animal = {
    name: string,
    fly: boolean,
    gender: gender,
    leg: number,
    swim: boolean
}

const Animal1 = {
    name: "tiger",
    fly: false,
    gender: gender.male,
    leg: 4,
    swim: true

}

const animal2: Animal = Animal1

// console.log("1.)")
// console.log(animal2)

// No.2
type People = {
    name: string,
    age: number,
    gender: gender,
    hobbie: string | string[],
    job?: string
}

const Peaple1: People = {
    name: "peter",
    age: 20,
    gender: gender.male,
    hobbie: ["watch movie", "swiming"]
}

const People2: People = {
    name: "alex",
    age: 18,
    gender: gender.male,
    hobbie: "play game",
    job: "doctor"
}

const people3: People = People2
const people4: People = Peaple1

// console.log("2.)")
// console.log(people3)
// console.log(people4)

// No.3
enum TypePokemon {
    Fire = "Fire",
    Water = "Water",
    Grass = "Grass",
    Flying = "Flying",
    Ground = "Ground"
}

type Move = {
    name: string,
    effect: string
}

type Pokemon = {
    name: string,
    gender: string,
    height: number,
    weight: number,
    Location_area_encounters: string,
    moves: Move[],
    type: TypePokemon | TypePokemon[],
    held_items?: {
        name: string,
        stat: Stat
    }[]
}

type Stat ={
    armor: number,
    damage: number,
    hp: number,
    speed: number
}

const Pokemon1: Pokemon = {
    name: "Charliizard",
    gender: "female",
    height: 200,
    weight: 200,
    Location_area_encounters: "forest",
    moves: [
        {
            name: "flying",
            effect: "cannot take damage from ground"
        }
    ],
    type: [TypePokemon.Fire, TypePokemon.Flying]

}

const Pokemon2 : Pokemon = {
    name: "babalsor",
    gender: "female",
    height: 200,
    weight: 200,
    Location_area_encounters: "forest",
    moves: [
        {
            name: "kick",
            effect: "deal damage 50"
        }
    ],
    type: TypePokemon.Grass,
    held_items: [
        {
            name: "glove",
            stat: {
                armor: 20,
                damage: 10,
                hp: 200,
                speed: 200
            }
        }
    ]

}

const pokemon3: Pokemon = Pokemon1
const pokemon4: Pokemon = Pokemon2

console.log("3.)")
console.log(pokemon3)
console.log(pokemon4)