const getData = () => {
    return fetch('https://test-e4ca5-default-rtdb.firebaseio.com/goods.json')
        .then((response) => {
            return response.json()
        })
}

export default getData