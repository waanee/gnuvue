<template>
    <div>
        <div v-for="item in getlist" v-bind:key="item.index">
            <router-link :to="{name:'bbsView', params:{id: item.wr_id}}"> {{ item.wr_subject }} </router-link>
        </div>
    </div> 
</template>

<script>
export default {
    data(){
        return{
            getlist:[],
            datetime:new Date().getDate()
        }
    },
    methods:{
        getData(){
            this.$http.get('http://temamoa.com/api/list.php?bo_table=free')
            .then((response) => {
            var resData = response.data;
            this.getlist = resData;            
            })
            .catch((error)=>{
                console.log(error);
            });
        }
    },
    created(){
        this.getData();
    }
}
</script>

<style>

</style>
