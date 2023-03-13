const app = new Vue({

    el:'#root',
    data:{
          contatore:0,
         foto:[
             'img/foto1.jpg','img/foto2.jpg','img/foto3.jpg','img/foto4.jpg','img/foto5.jpg','img/foto6.jpg'
         ],
         descrizione:['lago con sfondo montagne','isoletta con pini e montagne','new york by night','london bridge with mist','colosseo al tramonto','oltrepo pavese hills'],
    },

    methods:{
      circleClik:function(index){
            this.contatore=index
      },
      next:function(){
            this.contatore++
            this.contatore>this.foto.length-1?this.contatore=0:''
      },
      prev:function(){
          this.contatore--
          this.contatore<0?this.contatore=this.foto.length-1:''
      }
    }
})