<template>
    <div>
        <div v-for="item in bbsview" v-bind:key="item.index">
            <h3 style="padding-top:20px;">{{ item.wr_subject }}</h3>
            <div style="padding-top:50px;">
                <p v-html="item.wr_content"></p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            bbsview : []
        }
    },
    methods:{
        bbsviewItem(){
            var id = this.$route.params.id;
            
            this.$http.get('http://temamoa.com/api/detail.php?bo_table=free&id='+id)
            .then((response) => {
            var resData = response.data;
            this.bbsview = resData;            
            })
            .catch((error)=>{
                console.log(error);
            });
        }
    },
    created(){
        this.bbsviewItem();
    }
}
</script>

<style>

</style>
