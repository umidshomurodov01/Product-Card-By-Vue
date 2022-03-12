<template>
    <div class="cart-item-card">
    <h4>Card Total: ${{card_total.toFixed(2)}}</h4>
    <button class="view-product-button">Pay by Credit Card</button>
    </div>
</template>

<script>
export default {
    computed:{
        
        card_total(){
            return this.$store.getters.cardTotal
        }

    }
}
</script>
<style lang="scss" scoped>
.cart-item-card{
    
    text-align: center;
    background-color:rgb(32, 92, 92);
    h4{
        font-weight: bold;
        font-size: 20px;
        color: #fff;
    }
     button.view-product-button{
    padding: 12px;
    background-color:crimson;
    border:none;
    color:white;
    font-weight: bold;
    font-size: 1.1rem;
    border-radius: 5px;
    cursor: pointer;
}
}
</style>



