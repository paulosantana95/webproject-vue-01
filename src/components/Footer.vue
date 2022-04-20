<template>
    
    <footer>
        <a class="socialLink" href="">
            <img title="" src="" alt="">
        </a>

    </footer>

</template>

<script>
import api from '@/services/api.js';

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Footer',
    data(){
        return {
            socialLinks: []
        }
    },
    mounted(){
        api.get('/social-links.json').then(response => {
            this.socialLinks = response.data;
        })
    }

}

</script>

<style scoped>

footer {
    width: 100%;
    height: 3.75rem;
    background-color: var(--color-background-nav);
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>