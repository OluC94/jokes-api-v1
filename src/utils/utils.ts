import jokes from "../data/jokes.json";

export interface Joke {
    setup: string;
    punchline: string;
}

export interface JokeWithId extends Joke {
    id: number;
}

const jokeData: JokeWithId[] = [...jokes];

export const getAllJokes = (): JokeWithId[] => {
    return jokeData;
};

export const getJokeById = (id: number): JokeWithId | "not found"=> {
    return jokeData.find(joke => joke.id === id) ?? "not found"
}
