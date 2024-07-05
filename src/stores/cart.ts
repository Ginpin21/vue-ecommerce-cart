import { defineStore } from 'pinia'
import { useLocalStorage } from "@vueuse/core"

export type cartItem = {
    id: number,
    name: string,
    price: number,
    image: string,
    qty: number
}
export const useCartStore = defineStore('cart', {
    state: () => {
        return {
            isOpen: useLocalStorage('isOpen', false),
            cartItems: useLocalStorage<cartItem[]>('cartItems', [])
        }
    },
    getters: {
        getTotal: (state) => {
            let total = 0
            state.cartItems.forEach((item: cartItem) => {
                total += item.price * item.qty
            })
            return total
        },
        getItemCount: (state) => {
            let count = 0
            state.cartItems.forEach((item: cartItem) => {
                count += item.qty
            })
            return count;
        }
    },
    // could also be defined as
    // state: () => ({ count: 0 })
    actions: {
        toggleCart() {
            this.isOpen = !this.isOpen
        },
        addToCart(item: {
            id: number,
            name: string,
            price: number,
            image: string
        }) {

            if (this.cartItems.some((cartItem: cartItem) => cartItem.id === item.id)) {
                this.cartItems = this.cartItems.map((cartItem: cartItem) => {
                    if (cartItem.id === item.id) {
                        return { ...cartItem, qty: cartItem.qty + 1 }
                    } else {
                        return cartItem
                    }
                })
            } else {
                this.cartItems.push({ ...item, qty: 1 })
            }
        },
        removeFromCart(id: number) {

            if (this.cartItems.some((item: cartItem) => item.id === id)) {

                this.cartItems = this.cartItems.filter((item: cartItem) => item.id !== id)
            }
        },
        derementQty(item: cartItem) {
            if (item.qty > 1) {
                item.qty -= 1
            } else {
                this.removeFromCart(item.id)
            }
        }
    },

})