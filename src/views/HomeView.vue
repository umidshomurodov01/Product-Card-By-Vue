<template>
  <div class="Home">
  <ProductDescriptionDrawer
  :product="product"
  :active="active.product_drawer"
  v-on:close-product-drawer="closeProductDrawer()"
  />
  <div class="product-cards-container">
  <ProductSummaryCard 
  v-for="product in items"
  :key="product.id"
  :product="product"
  v-on:view-product="viewProduct($event)"
  />
  </div>


  </div>
</template>

<script>
import items from '../data/items.js';
import ProductSummaryCard from '../components/products/ProductSummaryCard.vue';
import ProductDescriptionDrawer from '../components/products/ProductDescriptionDrawer.vue';

export default {
  name: 'HomeView',
  components: {
    ProductSummaryCard,  ProductDescriptionDrawer
   
    

    
  },
  data(){
    return{
      items:items,
      product:null,
      active:{
        product_drawer:false,

      }

    }
  },
  methods:{
    viewProduct(product){
      this.product = product; 
      this.active.product_drawer=true;

    },
    closeProductDrawer(){
      this.active.product_drawer = false
       
    }
  }
}
</script>

<style lang="scss" scoped> 
.product-cards-container{
  display: flex;
  justify-content: center;
 
  flex-wrap: wrap;

}
</style>

