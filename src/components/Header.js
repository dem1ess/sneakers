export function Header() {
    return (
        <header className="d-flex justify-between align-center p-40">
            <div className="d-flex align-center headerLeft">
                <img src="/img/logo.png" alt="logo"/>
                <div>
                    <h3 className="text-uppercase">React Sneakers</h3>
                    <p className="opacity-5">Магазин лучших кроссовок</p>
                </div>
            </div>
            <ul className="d-flex ">
                <li className="mr-30">
                    <img className="mr-10" height={20} width={20} src="/img/cart.png" alt=""/>
                    <span className="mr-50">16 800 UAN</span></li>
                <li className="mr-40"><img width={20} height={20} src="/img/user.png"/></li>
            </ul>
        </header>
    )
}