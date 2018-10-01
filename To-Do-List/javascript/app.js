var todo=new Vue({
    el:'#vue-app',
    data:{
        tasks:{
            task:''
        }
        
    },
   
    methods:{
        showtask:function(){
            console.log(this.$refs.input.value);
            this.tasks=this.$refs.input.value;
        }
    }

});