<template>
    <div>
        bbs test
            <div v-for="item in getlist" v-bind:key="item.index">
                {{ item.wr_subject }} 
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
            this.$http.get('http://temamoa.com/api/?bo_table=free&format=json')
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
