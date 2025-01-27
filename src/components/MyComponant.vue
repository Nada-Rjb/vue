<template>
    <div class="MyForm">
      <h1> This form Page</h1>
        <form action="" @submit.prevent>
            <div>
                <label for="">First name</label>
                <input v-model.lazy="student.firstNam" type="text">
                <p> result is {{ student.firstNam }}</p>
            </div>
            <hr/>
            <div>
                <label for="">last name</label>
                <input v-model="student.lastNam" type="text">
                <p> result is {{ student.lastNam }}</p>

            </div>
            <hr/>
            <div>
                <label for="">Email</label>
                <input v-model="student.email" type="text">
                <p> result is {{ student.email }}</p>

            </div>
            <hr/>
            <div>
                <label for="">student age</label>
                <input v-model="student.age" type="number">
                <p>result is {{ student.age }}</p>
            </div>
            <div>
                <h3> Favourit Sport</h3>
                <label for="tens">tens</label>
                <input v-model="student.sports.tennis" type="checkbox" name="tens" id="tens"/>
                <p>{{ student.sports.football }}</p>

                <label for="football">football</label>
                <input v-model="student.sports.football" type="checkbox" name="football" id="football"/>
                <p>{{ student.sports.tennis }}</p>
            </div>
            <div>
                <h3>Gender</h3>
                <label for="male">male</label>
                <input v-model="student.gender" value="male" type="radio" name="male" id="male">

                <label for="female">male</label>
                <input  v-model="student.gender" value="female" type="radio" name="female" id="female">
            </div>
            <hr/>
            <div>
                <label for="grade">grade</label>
                <select   v-model="student.grade" name="grade" id="grade">
                    <option value="one">one</option>
                    <option value="two">two</option>
                    <option value="three">three</option>
                    <option value="four">four</option>

                </select>
                <p>{{ student.grade }}</p>
            </div>
            <div class="acrtion " style="width: 100%">
                <input v-model="gender" type="submit" style="width: 50%;" >
            </div>
        </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        student: {
            
        firstNam:"",
        lastNam:"",
        age:"",
        email:"",
        sports:{
            tennis:false,
            football:false,
        },
        gender :"",
        grade:"",
        }
       


      };
    },
  };
  </script>
  <style lang="scss" scoped>
  .MyForm {
    form {
        display: flex;
        flex-wrap: wrap;
    }
    div{
        width:40%;
    }
    label{
        margin: 10px;

    }

  
    

  }
</style>
  