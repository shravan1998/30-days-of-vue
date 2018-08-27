new Vue({
    el:'#vue-app',
    
   
    methods:{
        showtask:function(input){
            return this.$refs.input.focus();
        }
    }

});