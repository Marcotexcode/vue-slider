

const sliderImage = new Vue ({

    el: '#sliderImage',

    // dati
    data: {

        init: 0,

        imagine: [
            
            '../img/1.jpg',
            '../img/2.jpg',
            '../img/3.jpg',
            '../img/4.jpg',

        ],

    },

    // metodi vuejs
    mounted() {
        
        setInterval(() => {

            this.init ++;
            
            if (this.init > this.imagine.length - 1) {

                this.init = 0;

            }
        }, 6000)

    },

    // metodi miei
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

        cangePhoto(indice){
            this.init = indice;
        }

    }

});

