<template>
  <div class="register-page">      
      <div class="row">
          
              <div class="column small-12">
                  <h1>Registration</h1>
              </div>

          <div class="column small-12">
              <form v-on:submit.prevent="addUser" id="form">
                        <div class="row">
                            <div class="small-12 medium-2 columns">
                            <label for="username" class="text-left middle">Username</label>
                            </div>
                            <div class="small-12 medium-6 columns">
                            <input v-model="newUser.name" type="text" id="name" placeholder="Username" name="username">
                            </div>
                        </div> 
                        <div class="row">
                            <div class="small-12 medium-2 columns">
                            <label for="email" class="text-left middle">Email</label>
                            </div>
                            <div class="small-12 medium-6 columns">
                            <input v-model="newUser.email" type="email" id="email" placeholder="Email" name="email">
                            </div>
                        </div> 
                        <div class="row">
                            <div class="small-12 medium-2 columns">
                            <label for="password" class="text-left middle">Password</label>
                            </div>
                            <div class="small-12 medium-6 columns">
                            <input type="password" id="password" placeholder="Password" name="password">
                            </div>
                        </div> 
                        <div class="row">
                            <div class="small-12 medium-2 columns">
                            <label for="repassword" class="text-left middle">Confirm Password</label>
                            </div>
                            <div class="small-12 medium-6 columns">
                            <input type="password" id="repassword" placeholder="RePassword" name="repassword">
                            </div>
                        </div>   
                        <div class="row">                           
                            <div class="column small-12 medium-6 medium-offset-2 text-center">
                                <input type="submit" class="button" value="Add Book">
                            </div>
                        </div>                   
                          
                          

                      </form>

                      <div class="user-get" v-for="user in users">
                          <p>{{user.name}}</p>
                          <p>{{user.email}}</p>                          
                      </div>
          </div>

      </div>
  </div>
</template>

<script>
import firebase from 'firebase'

let config = {
  apiKey: 'AIzaSyD_A3q9F0C9Kb5ybM6Cjfy7bIq6tZyQqOw',
  authDomain: 'ielts-95847.firebaseapp.com',
  databaseURL: 'https://ielts-95847.firebaseio.com',
  projectId: 'ielts-95847',
  storageBucket: 'ielts-95847.appspot.com',
  messagingSenderId: '1018774675297'
}    
let app = firebase.initializeApp(config)
let data = app.database()
let userData = data.ref('users')

export default {
  name: 'register',
  firebase: {
    users: userData
  },
  data () {
    return {
      newUser : {
        namme: '',
        email: ''
      }
    }
  },
  methods: {
      addUser (){
        userData.push(this.newUser)
        this.newUser.name = ''
        this.newUser.email = ''
      }
  }
}
</script>

<style scoped>

</style>

