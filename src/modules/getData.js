const getData = (str) => {
    return fetch(
        `https://test-e4ca5-default-rtdb.firebaseio.com/goods.json?${str ? `search=${str}` : ''}`

    )
        .then((response) => {
            return response.json()
        })
}

export default getData