export function Card() {
    return (
        <div className="card">
            <div className="favorite">
                <img src="/img/heart-unliked.svg" alt="liked"/>
            </div>
            <img width={133} height={112} src="/img/sneakers/image1.jpg"
                 alt="Мужские Кроссовки Nike Blazer Mid Suede"/>
            <h5>Кроссовки Puma X Aka Boku Future Rider</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Price:</span>
                    <b>8 400 UAN</b>
                </div>
                <button className="button"><img height={11} width={11} src="/img/plus.svg" alt=""/></button>
            </div>
        </div>
    )
}