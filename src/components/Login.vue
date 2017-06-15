<template>
  <div class="login-page">      
      <div class="row">
          
              <div class="column small-12">
                  <h1>Login</h1>
              </div>

          <div class="column small-12">
              <form>
                        <div class="row">
                            <div class="small-12 medium-2 columns">
                            <label for="username" class="text-left middle">Username</label>
                            </div>
                            <div class="small-12 medium-6 columns">
                            <input type="text" id="name" placeholder="Username" name="username">
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
                            <div class="column small-12 medium-6 medium-offset-2 text-center">
                                <a href="#" class="button">Login</a>
                            </div>
                        </div>                  
                          
                          

                    </form>
          </div>

      </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      msg: 'Hello IELTS ACTUAL',
      tagline: 'Practice your ielts tesing'
    }
  }
}
</script>

<style scoped>

</style>

