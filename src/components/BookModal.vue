<template>
    <div class="modal-bg" @click="closeModal">
        <div class="modal">
            <div class="book-img">
                <img :src="book.volumeInfo.imageLinks.thumbnail" alt="">
            </div>

            <div class="book-info">
                <div>
                    <h1>{{book.volumeInfo.title ? book.volumeInfo.title : 'indefinido'}}</h1>
                    <h4>{{book.volumeInfo.authors ? book.volumeInfo.authors[0] : 'indefinido'}}</h4>
                </div>

                <div class="infos">
                    <h3>Informações</h3>
                    <div class="content">
                        <span>Páginas</span><p>{{book.volumeInfo.pageCount ? book.volumeInfo.pageCount : 'indefinido'}} páginas</p>
                    </div>
                    <div class="content">
                        <span>Editora</span><p>{{book.volumeInfo.publisher ? book.volumeInfo.publisher : 'desconhecido'}}</p>
                    </div>
                    <div class="content">
                        <span>Publicação</span><p>publicado em {{book.volumeInfo.publishedDate | formatYear}}</p>
                    </div>
                    <div class="content">
                        <span>Idioma</span><p>{{book.volumeInfo.language ? book.volumeInfo.language : 'indefinido'}}</p>
                    </div>
                    <div class="content">
                        <span>Título Original</span><p>{{book.volumeInfo.title ? book.volumeInfo.title : 'desconhecido'}}</p>
                    </div>
                    <div class="content">
                        <span>etag</span><p>{{book.etag}}</p>
                    </div>
                </div>

                <div class="infos">
                    <h3>Resenha da Editora</h3>
                    <div class="content">
                        <p>{{book.volumeInfo.description ? book.volumeInfo.description : 'Sem resenha'}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "BookModal",

    props: [ 'book' ],

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
        closeModal(e) {
            console.log(e.target);
            if(e.target.className === 'modal-bg') {
                this.$emit("close")
            }
        }
    }
}
</script>

<style scoped>

.modal-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background: rgba(0, 0, 0, 0.4);
}

.modal {
    position: relative;
    width: 769px;
    height: 608px;

    background: #fff;
    margin: 100px auto;

    display: flex;
}

.container-book {
    display: flex;
    width: 272px;
    height: 160px;

    background: #fff;
    padding: 5px 10px;
}

.book-img img {
    height: 512px;
    margin: 50px 15px;
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

.book-info h1 {
    font-size: 28px;
    margin-top: 30px;
}

.book-info h4 {
    font-size: 14px;
    color: #AB2680;
}

.book-info p {
    font-size: 12px;
    color: #999;
}

.content {
    display: flex;
    justify-content: space-between;
    line-height: 1.2em;
}

.infos h3 {
    margin-bottom: 15px;
}

.content span {
    font-size: 12px;
    font-weight: bold;
}

.content p {
    font-size: 12px;
    margin-right: 15px;
}

</style>