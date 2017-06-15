<template>
  
  <div id="app">  
    <header>
          <ul class="menu align-right">
            <li><a href="/">Home</a></li>
            <li><a href="about">About</a></li>                     
          </ul>        
      </header>  
    <router-view></router-view>
  </div>
</template>

<script>
import '../node_modules/jquery/src/jquery.js'
import '../node_modules/foundation-sites/dist/css/foundation-flex.css'
import '../node_modules/what-input/dist/what-input.js'
import '../node_modules/foundation-sites/dist/js/foundation.min.js'

export default {
  name: 'app'
}
</script>

<style>

</style>
