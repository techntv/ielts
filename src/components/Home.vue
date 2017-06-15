<template>
  <div class="home-page">
      <header>
          <ul class="menu align-right">
            <li><a href="#">One</a></li>
            <li><a href="#">Two</a></li>
            <li><a href="#">Three</a></li>
            <li><a href="#">Four</a></li>
          </ul>        
      </header>
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
          <div class="product-text">
            <h2>IELTS TEST</h2>
            <p>List of the best IELTS test</p>
          </div>

          <div class="product-list">
            <div class="row">
              <div class="column small-12 medium-4">
                <a href="/post">
                  <div class="card">
                      <img class="text-center" src="http://res.cloudinary.com/techntvz/image/upload/v1497495409/camb11_hnjkhh.png" alt="">
                      <div class="card-section">
                        <h4>Cambridge IELTS with answer 11</h4>
                        <p>Complete test and answer of Cambridge 11.</p>
                      </div>
                  </div>
                </a>
                
                
              </div>
              <div class="column small-12 medium-4">
                    <div class="card">
                          <img class="text-center" src="http://res.cloudinary.com/techntvz/image/upload/v1497495409/camb11_hnjkhh.png" alt="">
                          <div class="card-section">
                            <h4>Cambridge IELTS with answer 11</h4>
                            <p>Complete test and answer of Cambridge 11.</p>
                          </div>
                    </div>
              </div>
              <div class="column small-12 medium-4">
                 <div class="card">
                      <img class="text-center" src="http://res.cloudinary.com/techntvz/image/upload/v1497495409/camb11_hnjkhh.png" alt="">
                      <div class="card-section">
                        <h4>Cambridge IELTS with answer 11</h4>
                        <p>Complete test and answer of Cambridge 11.</p>
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

