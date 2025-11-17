const getData = () => {
    return fetch('https://jsonplaceholder.typicode.com/todos')
        .then((response) => {
            return response.json()
        })
}

export default getData