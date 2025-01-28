<template>
    <div class="my-nav">
        <div class="icon"></div>
        <div class="logo"> <img src="@/assets/logo.png" alt="logo"/></div>
        <div class="links">
            <ul>
                <li v-for="link in myRoutes" :key="link.name"> 
                    <router-link :to="link.path"> {{link.meta.title}}</router-link>
                </li>
            </ul>
        </div>

<div class="btns">
    <button style="margin-right: 10px;">LOG IN</button>
    <button>SIGN IN</button>
</div>
</div>
</template>

<script>


export default({
   data(){
    return{
        logo:"My Logo",
        links:["link1","link2"],
        myRoutes:[],
    }
   },
   mounted (){
    this.myRoutes = this.$router.options.routes
   }
})
</script>

<style scoped>


.my-nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background:#ddd;
    box-shadow: 0px 0px 9px -3px black;
}
ul {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    list-style: none;

}
img {
    width: 100px;
}
button{
    background-color:rgb(27, 223, 27);;
}
</style>

