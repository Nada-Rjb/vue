const stMixin = {
    data() {
        return {
          students: ["nadoda", "mohamed", "menna"],
          isActive: true,
          products:[]
        };
      },
      methods: {
        changeActive(data) {
          this.isActive = data;
        },
       async GetProducyt(){
        await fetch ('https://dummyjson.com/products')
        .then(res => res.json())
        .then ((data) => this.products = data.products)
    
        }
      },
      async mounted(){
        await this.GetProducyt();
      }
    };
    export default stMixin ;
