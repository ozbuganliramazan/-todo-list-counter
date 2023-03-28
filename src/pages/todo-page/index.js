import { useRef, useState } from "react";
import { Button, Col, Form, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "../../state/todoSlice";

export default function TodoPage() {
    const todoState = useSelector(state => state.todoState)
    const dispatch = useDispatch()

    // buranın çıktısı şu şekilde olacaktır:
    // {todos: []}
    console.log('>> todoState', todoState)


    return (
        <>
            <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
                <h1 class="display-4 fw-normal">
                    TODO Örneği
                </h1>
                <p class="fs-5 text-muted">
                    Redux-toolkit kullanarak bir TODO APP yapalım.
                </p>
            </div>


            <Form onSubmit={event => {
                /**
                 * Tarayıcının formu submit etmesini engelliyoruz.
                 */
                event.preventDefault()
                console.log('>> onSubmit params', event.target)

                /**
                 * Html form elemanını doğrudan JSON objesine çeviriyoruz. Bu yöntem sayesinde
                 * rerender (tekrar render olması) probleminden kaçınmış oluyoruz. Daha performanslı
                 * geliştirme yapmış oluruz bu yöntemle.
                 */
                const formData = new FormData(event.target);
                const formValueJson = Object.fromEntries(formData.entries());

                /**
                 * Check elemanı seçili değilse `done` propertysi gelmez.
                 * {title: 'aergaerg'}
                 * 
                 * Check elemanı seçili ise `done` propertysi'ne verdiğimiz `value` değeri gelir.
                 * {title: 'aergaerg', done: '1'}
                 */
                console.log('>> Form value json', formValueJson)

                dispatch(addTodo(formValueJson))
            }}>
                <Row>
                    <Col sm={4}>
                        <Form.Group >
                            <Form.Label>
                                Todo Başlığı
                            </Form.Label>
                            <Form.Control type="text" name="title" />
                        </Form.Group>
                    </Col>
                    <Col sm={4}>
                        <Form.Group>
                            <Form.Label>
                                Yapıldı mı?
                            </Form.Label>
                            <Form.Check name="done" value="1" />
                        </Form.Group>
                    </Col>
                    <Col sm={4}>

                        <Button type="submit" className="mt-4">
                            TODO Ekle
                        </Button>

                    </Col>
                </Row>
            </Form>



            <Table>
                <thead>
                    <tr>
                        <th>
                            ID
                        </th>
                        <th>
                            Başlık
                        </th>
                        <th>
                            Yapıldı mı?
                        </th>

                        <th>
                            İşlem
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todoState.todos.map((item, index) => {
                            //console.log('>> map item', item)

                            return (
                                <tr key={index}>
                                    <td>
                                        {item.id}
                                    </td>
                                    <td>
                                        {item.title}
                                    </td>
                                    <td>
                                        <input type="checkbox" checked={item.done} />
                                    </td>
                                    <td>
                                        <Button variant="primary" className="me-2">
                                            Düzenle
                                        </Button>
                                        <Button variant="danger"
                                            onClick={event => dispatch(deleteTodo(index))}
                                        >
                                            Sil
                                        </Button>
                                    </td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </Table>

        </>
    )
}
