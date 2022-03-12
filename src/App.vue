<template>
  <nav id="nav" class="text-center">
    <div class="logo-box">
    <h3 class="logo" @click="redirect">Vue Shop </h3>
    <img class="logo-img" alt="Vue logo" src="./assets/logo.png">

    </div>
   
    <div>
    <router-link :class="{active : $route.name === 'Home'}" to="/">Home</router-link> 
    <router-link :class="{active : $route.name === 'Card'}" to="/card">Card</router-link>
    </div>
  </nav>
  <router-view/>
</template>

<script>
export default {
  methods:{
      redirect(){
      this. $router.push({name : "Home"})
      }
    },
 mounted(){
   this.$store.commit('updateCardFromLocalStorage')
 }
 }

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

html , body,h1{
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}
body{
  background-color: rgb(245,245, 245)
}
#nav{
  border-top: 3px solid crimson;
  padding: 10px;
  width: 100%;
  height: 30px;
  line-height: 30px;
  display: flex;
  justify-content:space-around;
  padding: 10px;
  width: 100%;
  height: 45px;
  background-color:rgb(3, 70, 70);
  line-height: 30px;
  align-items: center;
  margin-bottom: 40px;
  
  .logo-box{
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content:center;
    cursor: pointer;
  }
  .logo{
    color: #fff;
    font-size: 1.8rem;
    margin-right: 15px;
  }
  .logo-img{
    width: 12%;
    height: 12%;
  }

  a{
    font-weight: bold;
    color:#fff;
    text-decoration: none;
    margin: 0 5px 0 5px;
    font-size: 1rem;
    background-color: crimson;
    padding: 12px;
    border-radius: 3px;

    &.active{
       font-size: 1rem; 
       color: rgb(211, 210, 209);
       background-color: transparent;
    }
  }
}
.text-center{
  text-align: center;
}
// nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
