<template>
    <div class="cart-item-card">
    <div class="header">
    <h3>{{product.name}}</h3>
    <h4>In Card : {{product.quantity}}</h4>
    <h4>Total Cost : {{item_cost.toFixed(2)}}</h4>
    </div>
    <p>{{description}}</p>
    </div>
</template>
<script>
export default {
    props : ['product'],
    computed :{
        description(){
            return this.product.description.substring(0, 120)
        },
        item_cost(){
            return this.product.price * this.product.quantity
        }
    }
}
</script>

<style lang="scss">
.cart-item-card{
    width: 80%;
    margin: 20px auto;
    background-color: white;
    box-shadow: 0 0 5px gray;
    border-radius: 5px;
    text-align: left;
    padding: 10px;

    .header{
        display: flex;
        justify-content: space-around;
    }
   

}
</style>

