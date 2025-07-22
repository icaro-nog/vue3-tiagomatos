import { createStore } from "vuex";

export default createStore({
    state:{
        user: {
            first_name: 'Jon',
            last_name: 'Snow',
            email: 'jon@snow.com',
        },
        products: [],
        cart: []
    },
    getters:{

    },
    mutations:{
        storeUser(state, data){
            state.user = data
            // console.log('storeUser mutations', state.user, data)
        }
    },
    actions:{

    }
})