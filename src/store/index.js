import { createStore } from 'vuex'
// import items from '../data/items'

function updateLocalStorage(card) {
    localStorage.setItem('card', JSON.stringify(card))
}

export default createStore({
    state: {
        card: []
    },
    getters: {
        productQuantity: state => product => {
            const item = state.card.find(i => i.id === product.id)
            if (item) {
                return item.quantity
            } else {
                return null
            }

        },
        cardItems: state => {
            return state.card
        },
        cardTotal: state => {
            return state.card.reduce((a, b) => a + (b.price * b.quantity), 0)
        }





    },
    mutations: {
        addToCard(state, product) {
            const item = state.card.find(i => i.id === product.id)
            if (item) {
                item.quantity++
            } else {
                state.card.push({...product, quantity: 1 })
            }

            updateLocalStorage(state.card)

        },
        removeFromCard(state, product) {
            let item = state.card.find(i => i.id === product.id)
            if (item) {
                if (item.quantity > 1) {
                    item.quantity--
                } else {
                    state.card = state.card.filter(i => i.id !== product.id)
                }
            }
            updateLocalStorage(state.card)
        },
        updateCardFromLocalStorage(state) {
            const card = localStorage.getItem('card')
            if (card) {
                state.card = JSON.parse(card)
            }

        }
    },
    actions: {},
    modules: {}
})