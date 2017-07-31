<template>
  <div class="register-page" v-if="!isAuthenticated" id="loginContainer">      
      <div class="row">          
              <div class="column small-12">
                  <h1>Registration</h1>
              </div>

          <div class="column small-12">
              <form id="form">                        
                        <div class="row">
                            <div class="small-12 medium-2 columns">
                            <label for="email" class="text-left middle">Email</label>
                            </div>
                            <div class="small-12 medium-6 columns">
                            <input v-model:="auth.email" type="email" id="email" placeholder="Email" name="email">
                            </div>
                        </div> 
                        <div class="row">
                            <div class="small-12 medium-2 columns">
                            <label for="password" class="text-left middle">Password</label>
                            </div>
                            <div class="small-12 medium-6 columns">
                            <input v-model:="auth.password" type="password" id="password" placeholder="Password" name="password">
                            </div>
                        </div> 
                        <!--<div class="row">
                            <div class="small-12 medium-2 columns">
                            <label for="repassword" class="text-left middle">Confirm Password</label>
                            </div>
                            <div class="small-12 medium-6 columns">
                            <input type="password" id="repassword" placeholder="RePassword" name="repassword">
                            </div>
                        </div>   -->

                        <div v-if="auth.message !== ''" class="callout"
                         :class="{'alert': auth.hasErrors, 'success': !auth.hasErrors}">
                         <button @click="dismissAlert" class="close-button" aria-label="Close alert" type="button">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            <p><strong>{{auth.message}}</strong></p>
                        </div>

                        <div class="row">                           
                            <div class="column small-12 medium-6 medium-offset-2 text-center">
                                <button v-on:click.stop.prevent="login" class="button">Login</button>
                                <button v-on:click.stop.prevent="signUp" class="button success">Signup</button>
                            </div>
                        </div>
                    </form>
             </div>

      </div>
  </div>
  <div class="admin-page" v-if="isAuthenticated">
      <h1>Login success. This is a admin page</h1>
      <button v-on:click.stop.prevent="signOut" class="button success">Sign out</button>
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
let db = app.database()
let userRef = db.ref('users')

export default {
  name: 'register',
  firebase: {
    users: userRef
  },
  data () {
    return {
      newUser : {
        name: '',
        email: ''
      },
      auth: {
        user: null,
        email: '',
        password: '',
        message: '',
        userName: '',
        hasErrors: false
      }
    }
  },
  computed: {

    /**
     * Determines if the user is authenticated
     *
     * return boolean
     */
    isAuthenticated: function () {
      // This function changes the auth.user state when 
      // the auth status of user changes.
      var self = this;
      firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
          self.auth.user = user;
        } else {
          self.auth.user = null;
        }
      });

      return (self.auth.user !== null);
    }

  },
  methods: {
      addUser (){
        userRef.push(this.newUser)
        this.newUser.name = ''
        this.newUser.email = ''
      },
      /**
     * Authenticate the user
     *
     * param object event
     */
      login(event) {
        let vm = this;
        vm.auth.message = '';
        vm.auth.hasErrors = false;
        if(vm.auth.email.length < 4){
          alert('Please enter an email address');
          return;
        }

        if(vm.auth.password.length < 6){
          alert('Please enter a password')
        }

        if(vm.auth.email === '' || vm.auth.password === '') {
          alert('Please provide the email and password');
          return;
        }

        firebase.auth().signInWithEmailAndPassword(vm.auth.email, vm.auth.password)
        .then(function(data) {
          vm.auth.user = firebase.auth().currentUser;
        }).catch(function(error) {
          vm.auth.message = error.message;
          vm.auth.hasErrors = true;
        });        
      },
       /**
     * Create a new user account
     * 
     * param object event
     */
     signUp: function(event){
       var vm = this;
       vm.auth.message = '';
       vm.auth.hasErrors = false;

       if(vm.auth.email === '' || vm.auth.password === ''){
         alert('Please provide the email and password');
         return;
       }

       // Create a new user in firebase
       firebase.auth().createUserWithEmailAndPassword(vm.auth.email, vm.auth.password)
       .then(function(data) {
         vm.auth.message = 'Successfully created user';
         vm.auth.user = firebase.auth().currentUser;
         vm.auth.email = '';
         vm.auth.password = '';
       }).catch(function(error) {
         vm.auth.message = error.message;
         vm.auth.hasErrors = true;
       });
     },

     /**
     * Signout the currently logged-in user
     */
    signOut: function () {
      // Signout the user using firebase
      firebase.auth().signOut()
        .then(function(error) {
          this.auth.user = firebase.auth().currentUser;
          this.auth.message = 'User signed out Successfully';
        }.bind(this), function (error) {
          alert('Failed to signout user, try again later');
        });
    },
     /**
     * Dismiss the alert message
     */
    dismissAlert: function () {
      this.auth.message = '';
      this.auth.hasErrors = false;
    },
  }
}
</script>

<style scoped>

</style>

