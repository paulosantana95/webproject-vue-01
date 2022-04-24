<template>
    <main>
        <section class="container">
            <h1>Vídeos</h1>

            <div class="videos">
                <div class="video" v-for="(video, index) in videos" :key="index" >
                    <a class="video" :href="video.link" target="_blank">
                        <img :src="video.thumb" :alt="video.title">
                        <div class="video-text">{{ video.title }}</div>
                    </a>
                </div>
                

            </div>

        </section>

    </main>
</template>

<script>
import api from '@/services/api.js';

export default {
// eslint-disable-next-line
    name: 'Videos',

    data() {
        return {
            videos: []
        }
    },
    
    mounted() {
        api.get('/videos.json').then(response => {
            this.videos = response.data;
        })
    }
}
</script>

<style scoped>

    main {
        align-items: center;

    }

    .videos{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .video {
        width: 80%;
        margin-bottom: 1.875rem;
    }

    .video img {
        width: 100%;
    }

    .video a {
        color: var(--color-text-dark);
        font-weight: 600;
        text-align: center;
    }


    @media (min-width: 700px) {
        .videos {
            flex-direction: row;
            align-items: flex-start;
            flex-wrap: wrap;
        }

        .video {
            margin-right: 1.875rem;
            width: 18.75rem;
        }        
    }

</style>