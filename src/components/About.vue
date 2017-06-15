<template>
  <div class="about-page">      
      <section class="section-profile">
          <div class="row">
              <div class="column small-12 text-center">
                  <div class="profile-detail">
                      <img src="http://res.cloudinary.com/techntvz/image/upload/v1497508841/avatar_y2yopp.jpg" alt="">
                      <h1>Vincent Nguyen</h1>
                      <hr>
                      <p class="profile-job">Front-End Developer - User Experience Designer</p>
                  </div>
              </div>
          </div>          
      </section>
      <section class="section-portfolio">
              <div class="row">
                  <div class="column small-12">
                      <div class="portfolio-text text-center">
                            <h2>Portfolio</h2>
                            <hr>
                      </div>                     
                  </div>
                  <div class="column small-12 medium-4 larger-4">
                      <div class="portfolio-detail">
                            <div class="portfolio-img">
                                <img src="https://blackrockdigital.github.io/startbootstrap-freelancer/img/portfolio/cabin.png" alt="">
                                
                            </div>
                            <div class="portfolio-overlay">
                                <i class="fa fa-search-plus fa-3x"></i>
                            </div>
                      </div>                    
                  </div>
                  <div class="column small-12 medium-4 larger-4">
                            <div class="portfolio-detail">
                                <div class="portfolio-img">
                                    <img src="https://blackrockdigital.github.io/startbootstrap-freelancer/img/portfolio/cake.png" alt="">
                                    
                                </div>
                                <div class="portfolio-overlay">
                                    <i class="fa fa-search-plus fa-3x"></i>
                                </div>
                            </div>                     
                  </div>
                  <div class="column small-12 medium-4 larger-4">
                            <div class="portfolio-detail">
                                <div class="portfolio-img">
                                    <img src="https://blackrockdigital.github.io/startbootstrap-freelancer/img/portfolio/circus.png" alt="">
                                </div>
                                <div class="portfolio-overlay">
                                    <i class="fa fa-search-plus fa-3x"></i>
                                </div>
                        </div>                      
                  </div>
              </div>
          </section>

          <section class="section-about">
              <div class="row">
                  <div class="column small-12">
                      <div class="about-text text-center">
                          <h2>About</h2>
                          <hr>
                      </div>
                  </div>

                  <div class="column small-12 medium-6">
                        <p>Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional LESS stylesheets for easy customization.</p>
                  </div>
                  <div class="column small-12 medium-6">
                      <p>Whether you're a student looking to showcase your work, a professional looking to attract clients, or a graphic artist looking to share your projects, this template is the perfect starting point!</p>
                  </div>

                  <div class="column small-12 text-center">
                      <a href="#" class="button">Download My Resume</a>
                  </div>
              </div>
          </section>

          <section class="section-contact">
              <div class="row">
                  <div class="column small-12">
                      <div class="contact-text text-center">
                          <h2>Contact Me</h2>
                          <hr>
                      </div>
                  </div>
                  <div class="column small-12">
                      <form>
                        <div class="row">
                            <div class="small-12 medium-3 columns">
                            <label for="name" class="text-left middle">Name</label>
                            </div>
                            <div class="small-12 medium-9 columns">
                            <input type="text" id="name" placeholder="Name" name="name">
                            </div>
                        </div> 
                        <div class="row">
                            <div class="small-12 medium-3 columns">
                            <label for="email" class="text-left middle">Email</label>
                            </div>
                            <div class="small-12 medium-9 columns">
                            <input type="email" id="email" placeholder="Email" name="email">
                            </div>
                        </div> 
                        <div class="row">
                            <div class="small-12 medium-3 columns">
                            <label for="phone" class="text-left middle">Phone</label>
                            </div>
                            <div class="small-12 medium-9 columns">
                            <input type="number" id="phone" placeholder="Name" name="phone">
                            </div>
                        </div> 
                        <div class="row">
                            <div class="small-12 medium-3 columns">
                            <label for="message" class="text-left middle">Message</label>
                            </div>
                            <div class="small-12 medium-9 columns">
                            <textarea cols="5"></textarea>
                            </div>
                        </div>   
                        <div class="row">
                            <div class="column small-12 text-center">
                                <a href="#" class="button">Send</a>
                            </div>
                        </div>                   
                          
                          

                      </form>
                  </div>
              </div>
          </section>

          <section class="footer">
              <div class="row">
                  <div class="column small-12 medium-4">
                    <div class="footer-location text-center">
                        <h2>Location</h2>
                        <p>328 - 330 Đường 3/2, Phường 12<br>Quận 10, TP.Hồ Chí Minh</p>
                    </div>
                  </div>

                  <div class="column small-12 medium-4">
                      <div class="footer-social text-center">
                          <h2>Around the web</h2>
                          <p>Facebook</p>
                          <p>LinkedIn</p>
                          <p>Twitter</p>
                      </div>
                  </div>

                  <div class="column small-12 medium-4">
                      <div class="footer-aboutme text-center">
                          <h2>About me</h2>
                          <p>Freelance is a free to use, open source Bootstrap theme created by love</p>
                      </div>
                  </div>
              </div>
              <div class="column small-12">
                  <div class="footer-copyright text-center">
                      <p>Copyright &copy; by Vincent Nguyen 2017</p>
                  </div>
              </div>
          </section>
  </div>
</template>

<script>
export default {
  name: 'about',
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

