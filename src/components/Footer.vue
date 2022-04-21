<template>
    
    <footer>
        
        <a class="socialLink" v-for="(socialLink, index) in socialLinks" :key="index"  :href="socialLink.link" target="_blank">
            <img :title="socialLink.label" :alt="socialLink.label" :src="socialLink.icon">
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

.socialLink {
    border: 2px solid var(--color-text-light);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;
    margin: 0 0.625rem;
}


.socialLink img {
    width: 1.25rem;
}

</style>