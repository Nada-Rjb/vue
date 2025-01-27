<template>
    <div class="Myorm">
      <h2>
        This is a slot component, my name is {{ myFormComponent }}
        <form action="" @submit.prevent>
            <div>
                <label for="">First name</label>
                <input v-model.lazy="firstNam" type="text">
                <p> result is {{ firstNam }}</p>
            </div>
            <hr/>
            <div>
                <label for="">last name</label>
                <input v-model="lastNam" type="text">
                <p> result is {{ firstNam }}</p>

            </div>
            <hr/>
            <div>
                <label for="">Email</label>
                <input v-model="firstNam" type="text">
                <p> result is {{ firstNam }}</p>

            </div>
            <hr/>
            <div>
                <label for="">align-items</label>
                <input v-model="age" type="number">
            </div>
            <hr/>
            <div class="acrtion">
                <input type="submit" >
            </div>
        </form>
      </h2>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        myFormComponent: "My Form",
        firstNam:"",
        lastNam:"",
        age:"",
        email:"",


      };
    },
  };
  </script>
  