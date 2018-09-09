new Vue({
    el:'#vue-app',
    data:{
        task:'',
        
    },
   
    methods:{
        showtask:function(){
            console.log(this.$refs.input.value);
            this.task=this.$refs.input.value;
        }
    }

});