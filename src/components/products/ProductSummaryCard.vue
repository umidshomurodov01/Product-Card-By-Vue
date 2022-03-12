<template>
<div class="card">
<h3>{{product.name}}</h3>
<h3 class="price">Price : ${{product.price.toFixed(2)}}</h3>
<p class="description">Description : {{description}}</p>
<p class="text-muted">{{product.category}}</p>
<button class="view-product-button" @click="$emit('view-product', product)">View Product</button>


</div>
</template>

<script>
export default {
    props : ['product'],
    computed:{
        description(){
            return this.product.description.substring(0,500)

        }
    }
}
</script>

<style lang="scss" scoped>
.card{

width: 80%;
margin: 10%;
padding: 10px;
border-radius: 5px;
background-color: white;
box-shadow: 0 0 5px gray;


h5.price{
    color: gray
}
p.description{
    font-size: .85rem;
}
p.text-muted{
    color: grey;
}
}

button.view-product-button{
    padding: 10px;
    background-color:rgb(3, 70, 70);
    border:none;
    color:white;
    font-weight: bold;
    font-size: 1.15rem;
    border-radius: 5px;
    cursor: pointer;
    border-bottom: 2px solid crimson;
}


@media (min-width: 500px) {
    .card{
        width:350px;
        margin: 10px
    }
    
}

</style>


