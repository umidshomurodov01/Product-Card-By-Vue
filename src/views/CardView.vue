<template>
    <div>
    <h2>Your Cart</h2>
   <button class="redirect" @click="redirect">Go Back</button>

   <CartItemCard
   v-for="product in products"
   :key="product.id"
   :product="product"
   />
   <CartSummaryPaymentCard
   :products="products"/>
   
    </div>
</template>

<script>
import CartItemCard from '@/components/cart/CartItemCard.vue'
import CartSummaryPaymentCard from '@/components/cart/CartSummaryPaymentCard.vue'
export default {
    components :{
        CartItemCard,
        CartSummaryPaymentCard
    },
    computed: {
        products(){
            return this.$store.getters.cardItems

        }
    },

    methods:{
      redirect(){
      this. $router.push({name : "Home"})
      }
    }
}
</script>

<style lang="scss">
.redirect{
  background: rgb(3, 70, 70);
  color: #fff;
}
.redirect{
  width: 150px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
            }
.redirect:hover{
  background: crimson;
}
</style>

