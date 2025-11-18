const renderGoods = (goods) => {
    const goodWrapper = document.querySelector('.goods')

    goods.forEach((goodsItem) => {
        goodWrapper.insertAdjacentHTML('beforeend', `
                <div class="col-12 col-md-6 col-lg-4 col-xl-3">
				    <div class="card">
					    <div class="card-img-wrapper">
						    <span class="card-img-top"
							    style="background-image: url('${goodsItem.img}')">
                            </span>
						</div>
						<div class="card-body justify-content-between">
						    <div class="card-price">33990 ₽</div>
							<h5 class="card-title">Игровая приставка Sony PlayStation 4 Pro</h5>
							<button class="btn btn-primary">В корзину</button>
						</div>
				    </div>
				</div>
            `)
    })
}

export default renderGoods