

const sliderImage = new Vue ({

    el: '#sliderImage',

    data: {

        init: 0,

        imagine: [
            
            '../img/1.jpg',
            '../img/2.jpg',
            '../img/3.jpg',
            '../img/4.jpg',

        ]
    },

    methods: {
        
        nextImg() {
            
            // Metodo ternario 
            (this.init == this.imagine.length - 1) ? this.init = 0 : this.init ++;

            // metodo classico 
            // this.init ++;

            // if (this.init == this.imagine.length ) {
                
            //     this.init = 0;

            // }
        },

        prevImg() {

            //metodo ternario
            (this.init == 0) ? this.init = this.imagine.length - 1 : this.init --;

            // metodo classico
            //  this.init --;

            //  if(this.init < 0) {

            //  this.init = this.imagine.length - 1;

            //  }

        },

        
         autoPlay() {

            setInterval(() => {
                this.init++
                
              }, 300)









            //  this.init = setInterval(() => {
            //     this.init++

            //  function add() {
            //      this.init ++;
            //  }
         }


    }



});

