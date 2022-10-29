import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue"
import About from "../pages/About.vue"
import Project from "../pages/Project.vue"
import Contact from "../pages/Contact.vue"

const routes =[{
    path: "/",
    component: Home,
    name: "Home",
},{
    path: "/about",
    component: About,
    name: "About",
},{
    path: "/Project",
    component: Project,
    name: "Project",
},
{
    path: "/Contact",
    component: Contact,
    name: "Contact",
}
]

const router = createRouter({
    history: createWebHistory(),
    linkActiveCrass: "active",
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                selector: to.hash,
                behavior: 'smooth'
            };
        }
        return { x: 0, y: 0 };
    },
    routes,
});

export default router;

