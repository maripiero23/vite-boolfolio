<template>
    <div class="container pt-2">
        <ul class="nav justify-content-center">
            <li class="nav-item mx-2" v-for="(link, i) in navbarLinks" :key="i">
                <router-link :to="{ name: link.routeName }">{{ link.label }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            navbarLinks: [
                {
                    label: "Home",
                    routeName: "home",
                },
                {
                    label: "Progetti",
                    routeName: "projects.index",
                },
                {
                    label: "Show",
                    routeName: ".project.show",
                },

            ],
        };
    },

}
</script>

<style scoped lang="scss">
</style>