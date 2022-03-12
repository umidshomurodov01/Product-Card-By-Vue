<template>
   <div class="drawer-background" :class="{show:active}"> 
   <div class="drawer" :class="{show: active}">
   <div class="drawer-close" @click="$emit('close-product-drawer')" >X</div>
   
   <div v-if="product" class="product-details">
   <h3 class="text-center">{{product.name}}</h3>
   <p class="description">{{product.description}}</p>
   <h3 class="text-center">${{product.price.toFixed(2)}}</h3>
   <div class="card-total" v-if="product_total">
   <h3>In Card</h3>
   <h4>{{product_total}}</h4>
   </div>
   <div class="button-container">
   <button class="remove" @click="removeFromCard()">Remove</button>
   <button class="add" @click="addToCard()">Add</button>
   </div>
   </div>
   </div>
   </div>

   
  
   

</template>

<script>
export default {
    props:['product', 'active'],
    methods:{
        addToCard(){
            this.$store.commit('addToCard', this.product)
        },
             removeFromCard(){
            this.$store.commit('removeFromCard', this.product)
        }
    },
    computed:{
       product_total(){
           
        return this.$store.getters.productQuantity(this.product)
       
       }
    }
}
    
</script>
<style lang="scss" scoped>
.drawer-background{
    width:100%;
    height: 100vh;
    position: fixed;
    left: 0;
    top:0;
    background-color: rgba(124, 124, 124, 0.55);
    z-index: 100;
    display:none; 
    transition: display 1s;

    &.show{
        display: block;
    }
}
    .drawer{
        width: 95vh;
        height: 100vh;
        background-color: white;
        position: fixed;
        top:0;
        left: -105vh;
        padding: 15px;
        transition: left 1s;
        z-index: 101;
        overflow-y: scroll;
        
        &.show{
            left:0;
        }
    }
    .drawer-close{
        font-size: 1.5rem;
        padding: 5px;
        border-radius: 5px;
        right: 10px;
        border: 2px solid gray;
        width: 15px;
        float: right;
        cursor: pointer;

        &:hover{
            background-color: lightgray;
        }
    }
    .product-details{
        display: flex;
        justify-content:center;
        flex-direction: column;

        p.description{
            padding: 20px;
            line-height: 1.5rem;
        }
        .button-container{
            .remove{
                background: crimson;
                color: #fff;
            }
            .add{
                background: rgb(3, 70, 70);
                color: #fff;
            }
            button{
                width: 150px;
                padding: 10px;
                border: none;
                border-radius: 5px;
                margin: 0 5px 50px 5px;
                cursor: pointer;
            }
        }
    }
    @media  (min-width: 500px){
        .drawer{
            width: 450px
        }
    }
    

</style>


