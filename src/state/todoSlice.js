import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    todos: [
        { id: 1, title: "Örnek todo", done: true },
        { id: 1, title: "Örnek todo", done: false },
        { id: 1, title: "Örnek todo", done: false },
        { id: 1, title: "Örnek todo", done: true },
        { id: 1, title: "Örnek todo", done: false },
        { id: 1, title: "Örnek todo", done: true },
        { id: 1, title: "Örnek todo", done: false },
    ]
}


export const todoSlice = createSlice({
    name: 'todoSlice',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            console.log('>> Add Todo params', state, action)

            /**
             * `action.payload.done` property'sinin her zaman boolean türünde olduğunu garanti ediyoruz.
             */
            if (!action.payload.done) {
                action.payload.done = false
            } else {
                action.payload.done = true
            }

            /**
             * Maximum id'yi bulup onun bir fazlasını yeni objeye ekliyoruz.
             */
            //const maxId = state.todos.length

            /**
             * ternary operator ile maximum id'yi bul.
             */
            const maxId = state.todos.reduce((maxId, item) => item.id > maxId ? item.id : maxId, 0)

            action.payload.id = maxId + 1

            state.todos.push(action.payload)

        },

        deleteTodo: (state, action) => {
            /**
             * Örnek action dataları:
             * {type: 'todoSlice/deleteTodo', payload: 0}
             * {type: 'todoSlice/deleteTodo', payload: 2}
             */
            console.log('>> Delete todos params', state, action)

            /**
             * Belirtilen index'ten itibaren sadece bir tane item silinecek. Bu yüzden `splice` fonksiyonunun
             * ikinci elemanına `1` yazıyoruz.
             */
            state.todos.splice(action.payload, 1)

        },

        updateTodo: (state, action) => {
            /**
             * ÖDEV: Bu bölgeyi ve "Düzenle" butonunu implement ediniz.
             * Farklı sayfa üzerinden veya modal window kullanarak düzenleme formunu açabilirsiniz.
             */
        }
    }
})

// Çok sayıda reducer fonksiyon olduğunda alt alta yazmak mümkün.
export const {
    addTodo,
    deleteTodo
} = todoSlice.actions


export default todoSlice.reducer
