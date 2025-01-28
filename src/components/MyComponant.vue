<template>
    <div class="MyForm">
      <h1> This form Page</h1>
      <form action="" @submit.prevent = " addstudent">
        <div>
            <label for="FirstName ">First Name</label>
            <input v-model="student.firstName" type="text" name="FirstName">
        </div>
        <div>
            <label for="lastName ">last Name</label>
            <input v-model="student.lastNme" type="text" name="lastName">
        </div>
        <div>
            <label for="age ">age</label>
            <input v-model="student.age" type="number" name="age">
        </div>
        <div>
            <label for="male">male</label>
            <input v-model="student.gender" value="male" type="radio" name="male">
            <label for="female">female</label>
            <input v-model="student.gender" value="female" type="radio" name="female">
        </div>
        <div>
            <h3>Grade</h3>
            <select v-model="student.grade" name="grade" id="grade">
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
                <option value="F">F</option>
            </select>
        </div>
        <div>
            <h3>Favourit sport</h3>
            <label for="tenis">Tennis</label>
            <input v-model="student.sports.tennis" type="checkbox" name="tenis">
            <label for="football">Football</label>
            <input v-model="student.sports.football" type="checkbox" name="football">
            <label for="bascketball">Basketball</label>
            <input v-model="student.sports.basketball" type="checkbox" name="bascketball">
        </div>
        <div>
            <label for="email">email</label>
            <input v-model="student.email" type="text" name="email">
        </div>
        <div>
            <label for="bio">bio</label>
            <textarea v-model="student.bio" name="bio"></textarea>
        </div>
        <div class="action" style="width: 100%;">
            <input  type="submit" style="width: 50%" value="Save">
        </div>
      </form>
      <div>
        <ul>
            <li v-for="(st,i) in students" :key="i">
                <p> Name :{{ st.firstName }} {{ st.lastNme }}</p>
                <p> age :{{ st.age }} </p>
                <p> gender :{{ st.gender }} </p>
                <p> sports: <br>  <span v-for="(sport,key,i) in st.sports" :key="i">
                  <span v-if=" sport">   {{  key }} <br></span>  
                </span> 
               </p>
                <p> grade : {{ st.grade }}</p>
                <p> Email : {{ st.email }}</p>
                <p> Bio : {{ st.bio }}</p>

            </li>
        </ul>
      </div>
    </div> 
  </template>
  
  <script>
  export default {
    data() {
      return {
        student:{
            firstName:"",
            lastNme:"",
            age:"",
            email:"",
            sports: {
                tennis: "",
                football: "",
                basketball: ""
            },
            grade:"",
            gender:"",
            bio:","

        },
        students:[],

      };
    },
    methods:{
        addstudent() {
            this.students.push(this.student)
            this.student = {
            firstName:"",
            lastNme:"",
            age:"",
            email:"",
            sports: {
                tennis: "",
                football: "",
                basketball: ""
            },
            grade:"",
            gender:"",
            bio:","

        },
            console.log(this.student)
        }
    }
  };
  </script>
  <style lang="scss" scoped>
  .MyForm {
    form {
        display: flex;
        flex-wrap: wrap;
        
    }
    div{
        width:45%;
        margin-bottom: 20px;

    }
    label{
        margin: 10px;

    }
    input {
        margin: 10px;
    }


  }
</style>
  