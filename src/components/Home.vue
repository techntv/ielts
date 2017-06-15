<template>
  <div class="home-page">      
      <section class="main-content">
        <section class="section-hero">
          <div class="row">
            <div class="column small-12">
              <div class="hero-image">
                <img src="" alt="">
              </div>
            </div>
          </div>
        </section>

        <section class="section-product">
          <div class="row">
            <div class="column small-12">
                <div class="product-text text-center">
                    <h2>Song that you like</h2>
                    <p>You can learn english by listen english</p>
                  </div>
            </div>
          </div>
         

          <div class="song-list">
            <div class="row">
              <div class="column small-12 medium-4 flex-container">
               
                  <div class="card">
                       <a href="/post"><img class="text-center" src="http://res.cloudinary.com/techntvz/image/upload/v1497500721/takemetoyourheart_aovspc.jpg" alt=""></a>
                      <div class="card-section">
                        <h4>Take me to your heart</h4>
                        <p>Micheal learn to rock</p>
                      </div>
                  </div>
                
                
                
              </div>
              <div class="column small-12 medium-4 flex-container">                   
                        <div class="card">
                             <a href="/post"><img class="text-center" src="http://res.cloudinary.com/techntvz/image/upload/v1497502479/mylove_emmdwv.jpg" alt=""></a>
                            <div class="card-section">
                              <h4>My Love</h4>
                              <p>Westlife</p>
                            </div>
                        </div>
                  
              </div>
              <div class="column small-12 medium-4 flec-container">                
                  <div class="card">
                      <a href="/post"><img class="text-center" src="http://res.cloudinary.com/techntvz/image/upload/v1497502390/ifletyougo_x75kl4.jpg" alt=""></a>
                      <div class="card-section">
                        <h4>If I Let You Go</h4>
                        <p>Westlife</p>
                      </div>
                  </div>
                
              </div>
            </div>
          </div>
        </section>


      </section>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Hello IELTS ACTUAL',
      tagline: 'Practice your ielts tesing'
    }
  }
}
</script>

