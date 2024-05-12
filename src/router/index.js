import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '../components/MainPage.vue'
import BlogPage from '../components/BlogPage/BlogPage.vue'
import ProjectPage from '../components/ProjectPage/ProjectPage.vue'
import DetailsPage from '../components/ProjectDetails/DetailsPage.vue'
import NotFound from '../components/NotFound.vue'

Vue.use(Router)

export default new Router({
    mode:'history',
    routes:[
        {
        path:'/mainpage',
        name:'mainpage',
        component: MainPage
    },
    {
        path:'/blogpage',
        name:'blogpage',
        component: BlogPage
    },
    {
        path:'/projectpage',
        name:'projectpage',
        component: ProjectPage
    },
    {
        path:'/detailspage',
        name:'detailspage',
        component: DetailsPage
    },
    {
        path:'/404',
        name:'NotFound',
        component: NotFound
    },
    {
        path:'*',
        redirect:'/404'
    },
    


    ]

})