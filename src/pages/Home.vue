/* eslint-disable vue/multi-word-component-names */
<template>
    
    <main>
        <div class="text-top">Vídeo novos toda <b>quinta</b> ás <b>20h</b></div>
        <a href="https://youtube.com/wdevoficial" target="_blank">
            <img id="subscribe" src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/subscribe.svg
            " alt="Increva-se">
        </a>
        <div class="text-bottom">youtube.com/wdevoficial</div>

    </main>

</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Home'
}
</script>

<style scoped>

    main {
        background-color: var(--color-background-home);
        justify-content: center;
        align-items: center;
    }

    .text-top {
        color: var(--color-text-light);
        font-size: 1.375rem;
        margin-bottom: 1.25rem;
    }

    #subscribe {
        width: 21.25rem;
    }

    .text-bottom {
        color: var(--color-text-light);
        font-size: 1.125rem;
        margin-top: 1.25rem;
    }

</style>