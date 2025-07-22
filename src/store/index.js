import { createStore } from "vuex";

export default createStore({
    state:{
        user: {
            first_name: 'Jon',
            last_name: 'Snow',
            email: 'jon@snow.com',
        },
        products: [
            {
                id: 1,
                name: 'Bola',
                price: 100
            },
            {
                id: 2,
                name: 'Chuteira',
                price: 200
            },
            {
                id: 3,
                name: 'Meião',
                price: 50
            }
        ],
        cart: []
    },
    getters:{
        total(state){
            return state.cart.reduce((total, item) => total += item.price, 0)
        }
    },
    mutations:{
        updateUser(state, data){
            state.user = data
            // console.log('updateUser mutations', state.user, data)
        },
        addProduct(state, data){
            state.cart.push(data)
        },
        removeProduct(state, productIdRemove){
            // if(){

            // }
            const idx = state.cart.findIndex(p => p.id === productIdRemove)
            state.cart.splice(idx, 1)
        }
    },
    actions:{

    }
})