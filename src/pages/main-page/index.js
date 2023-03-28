
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

// counterSlice'taki `export const { ..... }` ifadesinden gelen `increase` fonksiyonu
import { decrease, increase, setCounter } from "../../state/counterSlice";


export default function MainPage() {
    /**
     * useSelector hookunu aynı redux'taki gibi kullanıyoruz.
     */
    const counterState = useSelector(state => state.counterState)

    /**
     * Aşağıdaki iki satır aynı işi yapar. Tek fark alttaki satır
     * state'i konsola yazdırır. Çıktıyı görmek için yorum 
     * satırını kaldırın.
     */
    //let reduxState = useSelector(state => state)
    //reduxState = useSelector(state => {
    //    console.log('>> Use Selector State:', state)
    //    return state
    //})
    //console.log('>> Redux State:', reduxState)

    const dispatch = useDispatch()

    return (
        <>
            <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
                <h1 class="display-4 fw-normal">
                    Counter Örneği
                </h1>
                <p class="fs-5 text-muted">
                    Redux-toolkit kullanarak bir sayaç yapalım.

                </p>
            </div>

            <Row className={'justify-content-center'}>
                <Col sm={4}>
                    <div class="card mb-4 rounded-3 shadow-sm border-primary">
                        <div class="card-header py-3 text-bg-primary border-primary">
                            <h4 class="my-0 fw-normal">
                                Sayaç
                            </h4>
                        </div>
                        <div class="card-body">
                            <h1 class="card-title pricing-card-title text-center">
                                Counter:
                                &nbsp;
                                {counterState.counter}
                            </h1>
                            <button
                                type="button"
                                class="w-100 btn btn-lg btn-success mb-3"
                                onClick={e => {
                                    // `increase()` fonksiyonundan ne döndüğünü inceleyelim.
                                    const resultOfIncrease = increase("burası payload kısmına gelecek")
                                    console.log('>> increase() fonksiyonundan dönen değer: ', resultOfIncrease)
                                    console.log('>> typeof increase:', typeof increase)

                                    /** Konsol çıktıları:
                                    >> increase() fonksiyonundan dönen değer:
                                    {type: 'counterSlice/increase', payload: undefined}
                                    {type: 'counterSlice/increase', payload: 'burası payload kısmına gelecek'}
                                    >> typeof increase: function
                                    */

                                    dispatch(increase())
                                    //dispatch({ type: 'counterSlice/increase', payload: undefined })
                                }}
                            >
                                + Arttır
                            </button>

                            <button
                                type="button"
                                class="w-100 btn btn-lg btn-danger mb-3"
                                onClick={e => dispatch(decrease())}
                            >
                                - Azalt
                            </button>

                            <button
                                type="button"
                                class="w-100 btn btn-lg btn-secondary mb-3"
                                onClick={e => dispatch(setCounter(0))}
                            >
                                Sıfırla
                            </button>

                            <button
                                type="button"
                                class="w-100 btn btn-lg btn-secondary"
                                onClick={e => dispatch(setCounter(5))}
                            >
                                5 yap
                            </button>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    )
}
