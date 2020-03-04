<template>
    <div>
        首页
    </div>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
    created(){
        this.initData()
    },
    methods: {
        async initData(){
            let { data } = await this.$api.getArticleList({type:2});
            console.log(data)
        }
    },
}
</script>   