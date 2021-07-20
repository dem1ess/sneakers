export function Drawer() {
    return (
        <div style={{display: 'none'}} className="overlay">
            <div className="drawer">
                <h2 className="mb-30 d-flex justify-between">Корзина <img className="cu-p" src="/img/btn-remove.svg"
                                                                          alt="Remove"/></h2>
                <div className="items">
                    <div className="cartItem d-flex align-center mb-20">
                        <div className="cartItemImg" style={{backgroundImage: 'url(/img/sneakers/image1.jpg)'}}/>
                        <div className="mt-5">
                            <p>Кроссовки Puma X Aka Boku Future Rider</p>
                            <b>8 400 UAN</b>
                        </div>
                        <img className="remove" src="/img/btn-remove.svg" alt="Remove"/>
                    </div>
                    <div className="cartItem d-flex align-center mb-20">
                        <div className="cartItemImg" style={{backgroundImage: 'url(/img/sneakers/image2.jpg)'}}/>
                        <div className="mt-5">
                            <p>Мужские Кроссовки Under Armour Curry 8</p>
                            <b>8 400 UAN</b>
                        </div>
                        <img className="remove" src="/img/btn-remove.svg" alt="Remove"/>
                    </div>
                </div>
                <div className="cartTotalBlock">
                    <ul>
                        <li><span>Итого:</span>
                            <div></div>
                            <b>16 800 UAN</b></li>
                        <li><span>Налог 5%:</span>
                            <div></div>
                            <b>840 UAN</b></li>
                    </ul>
                    <button className="greenButton">Оформить заказ <img src="/img/arrow.svg" alt="arrow"/></button>
                </div>
            </div>
        </div>
    )
}