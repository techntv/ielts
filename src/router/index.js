import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Home from '@/components/Home'
import About from '@/components/About'
import Blog from '@/components/Blog'
import Post from '@/components/Post'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/post',
      name: 'Post',
      component: Post
    }
  ]
})
