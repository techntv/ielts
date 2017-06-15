<template>

            <div class="post-page">
                <div class="row">
                    <div class="column small-12">
                        <div class="post-title">
                            <h1>Take me to your heart</h1>
                            <p>Micheal Learn To Rock</p>
                        </div>
                    </div>
                </div>
                
                <div class="row">
                    <div class="column small-12 medium-6 medium-offset-3">
                        <div class="responsive-embed">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/TbLT12eg-lw" frameborder="0" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="column small-12 medium-12">
                        <form action="">
                            <div class="question-content">
                                    <h3>Lyrics</h3>
                                    <p>       Hiding from the rain and snow
                                                Trying to forget but I won't let go
                                                Looking at a crowded street
                                                Listening to my own heart beat

                                                So many people all around the world
                                                Tell me where do I find someone like you girl

                                                Take me to your <input class="q-input" type="text" name="q-heart" value=""> take me to your soul
                                                Give me your hand before I'm old
                                                Show me what love is - haven't got a clue
                                                Show me that wonders can be true

                                                They say nothing lasts forever
                                                We're only here today
                                                Love is now or never
                                                Bring me far away

                                                Take me to your heart take me to your <input class="q-input" type="text" name="q-soul">
                                                Give me your hand and hold me
                                                Show me <input class="q-input" type="text" name="q-what"> love is - be my guiding star
                                                It's easy take me to your heart

                                                Standing on a mountain high
                                                Looking at the moon through a clear blue sky
                                                I should go and see some friends
                                                But they don't really comprehend

                                                Don't need too much <input class="q-input" type="text" name="q-talking"> without saying anything
                                                All I need is someone who makes me want to sing

                                                Take me to your heart take me to your soul
                                                Give me your hand before I'm old
                                                Show me what love is - haven't got a clue
                                                Show me that wonders can be true
                                    </p>
                                
                                    <div class="app-action">
                                        <a href="#" class="button success expanded">Answer</a>
                                    </div>
                            </div>
                         </form>
                    </div>
                </div>
            </div>
    
</template>

<script>
export default {
  name: 'post',
  data () {
    return {
      msg: 'Hello IELTS ACTUAL',
      tagline: 'Practice your ielts tesing'
    }
  }
}
</script>

<style scoped>
    .q-input{
        display: inline;
        width: 100px;
    }
</style>

