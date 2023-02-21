import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./pages/Home.vue";
import IndexPage from "./pages/Index.vue";
import ShowPage from "./pages/Show.vue";


const router = createRouter({
    //createWebHistory serve a indicare come gestire l url al cambio pagina
    history: createWebHistory(),
    routes: [
        {
            path: "/", //da scrivere nel browser
            name: "home", // nome della rotta da usare per creare un link
            component: HomePage // componente che ritorna l'html della pagina
        },

        {   //lista di tutti i progetti
            path: "/project",
            name: "project.index",
            component: IndexPage
        },

        {   //un singolo progetto
            path: "/project/show/:id",
            name: "project.show",
            component: ShowPage
        }

    ]
});

export {router}