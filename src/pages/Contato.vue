<template>
    
    <main>
        <section class="container">
            <h1>Contato</h1>

            <div class="contacts">

                <div class="contact" v-for="(contact, index) in contacts" :key="index">
                    <div class="contact-title"> {{ contact.title }} </div>
                    <a :href="contact.link" target="_blank"> {{ contact.label }} </a>
                </div>

            </div>
                


        </section>

    </main>

</template>

<script>
import api from '@/services/api.js';

export default {
// eslint-disable-next-line
    name: 'Contato',

    data() {
        return {
            contacts: []
        }
    },
    
    mounted() {
        api.get('/contacts.json').then(response => {
            this.contacts = response.data;
        })
    }
}
</script>

<style scoped>

    main {
        align-items: center;
    }

    .contacts {
        margin-bottom: 2.5rem;
        color: var(--color-text-dark);
    }

    .contact-title {
        font-weight: 600;
        font-size: 1.125rem;
    }

    .contact a {
        color: var(--color-text-dark);
    }

    .contact {
        margin-bottom: 1.25rem;
    }

</style>