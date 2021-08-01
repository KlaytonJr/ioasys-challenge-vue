<template>
    <div class="container-list">
        <div v-if="data && data.items.length" class="livros" key="livros">
            <ul class="list">
                <li @click="openModal" v-for="(item, index) in data.items" :key="item.id" :id="index" class="list-item">
                    <div class="container-book">
                        <div class="book-img">
                            <img :src="item.volumeInfo.imageLinks.thumbnail" :alt="item.name">
                        </div>

                        <div class="book-info">
                            <div>
                                <h3>{{item.volumeInfo.title ? item.volumeInfo.title : 'indefinido'}}</h3>
                                <h4>{{item.volumeInfo.authors ? item.volumeInfo.authors[0] : 'indefinido'}}</h4>
                            </div>

                            <div class="infos">
                                <p>{{item.volumeInfo.pageCount ? item.volumeInfo.pageCount : 'indefinido'}} páginas</p>
                                <p>{{item.volumeInfo.publisher ? item.volumeInfo.publisher : 'desconhecido'}}</p>
                                <p>publicado em {{item.volumeInfo.publishedDate | formatYear}}</p>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            <div v-if="modal" class="">
                <BookModal :book="selectedBook" @close="closeModal"/>
            </div>
        </div>
        <div v-else-if="data && data.items.length === 0" key="sem-resultados">
            <p class="sem-resultados">Busca sem resultados. Tente buscar outro termo.</p>
        </div>
    </div>
</template>

<script>
import BookModal from './BookModal.vue'

export default {
    name: 'BooksList',

    components: {
        BookModal
    },

    data() {
        return {
            loading: false,
            data: null,
            modal: false,
            index: 0,
            selectedBook: []
        }
    },

    filters: {
        formatYear(value) {
            if (value) {
                return value.substring(0, 4);
            } else {
                return 'um ano indefinido'
            }            
        }
    },

    methods: {
        fetchData() {
            fetch("https://www.googleapis.com/books/v1/volumes?q=all")
                .then(r => r.json())
                .then(r => {
                    this.data = r;
                    this.produtosTotal = r.items.length;
                })
        },
        openModal(e) {
           this.index = e.currentTarget.id;
           this.selectedBook = this.data.items[this.index];
           console.log(this.selectedBook);
           this.modal = true;
        },
        closeModal() {
            this.modal = false;
        }
    },

    created() {
        this.fetchData();
    }
}
</script>

<style scopde>
.list {
    width: 980px;
    display: flex;
    flex-wrap: wrap;
    margin: 50px auto;
    justify-content: space-around;
}

.list-item {
    width: 272px;
    height: 160px;
    list-style: none;
    margin-bottom: 30px;

    cursor: pointer;
}

.container-book {
    display: flex;
    width: 272px;
    height: 160px;

    background: #fff;
    padding: 5px 10px;
}

.book-img img {
    height: 122px;
    margin-top: 15px;
}

.book-info {
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-left: 20px;
    margin-top: 10px;
    justify-content: space-between;
}

.book-info .infos {
    margin-bottom: 10px;
}

.book-info h3 {
    font-size: 14px;
}

.book-info h4 {
    font-size: 12px;
    color: #AB2680;
}

.book-info p {
    font-size: 12px;
    color: #999;
}

</style>