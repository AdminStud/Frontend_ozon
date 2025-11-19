import getData from "./getData"
import renderGoods from "./renderGoods"
import { priceFilter } from "./filters";

const filter = () => {
    const minInput = document.getElementById('min')
    const maxInput = document.getElementById('max')

    minInput.addEventListener('input', () => {
        getData().then((data) => {
                renderGoods(priceFilter(data, minInput.value, maxInput.value)
            })
    })

    maxInput.addEventListener('input', () => {
        
    })
}

export default filter