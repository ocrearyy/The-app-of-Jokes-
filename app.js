
const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');

const getDadJoke = async () => {
    const config = {headers: { Accept: 'application/json'} }; // API requirement to add this code 
    const res = await axios.get('https://icanhazdadjoke.com/', config)
    return res.data.joke;
}


const addNewJoke = async () => {
    const jokeText = await getDadJoke();
    const newLi = document.createElement('Li');
    newLi.append(jokeText);
    jokes.append(newLi); 

}

button.addEventListener('click', addNewJoke);
