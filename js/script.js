const {createApp} = Vue;

createApp({
    data(){
        return{
            slides : [
                {
                    image: 'img/01.jpg',
                    title: 'Svezia',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
                },
                {
                    image: 'img/02.jpg',
                    title: 'Svizzera',
                    text: 'Lorem ipsum.',
                },
                {
                    image: 'img/03.jpg',
                    title: 'Gran Bretagna',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                },
                {
                    image: 'img/04.jpg',
                    title: 'Germania',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
                },
                {
                    image: 'img/05.jpg',
                    title: 'Paradise',
                    text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
                }
            ],
            positionSlides : 0,
            intervalSet : ""
        }
        
    },

    methods: {
        
        slideNext: function(){
            console.log(this.positionSlides, this.slides.length);
            if(this.positionSlides < this.slides.length -1){
                this.positionSlides++;
            }else{
                this.positionSlides = 0;
            }
        },
        slidePrev:function(){
            if(this.positionSlides > 0){
                this.positionSlides--;
            }else{
                this.positionSlides = this.slides.length - 1;
            }
        },
        slideClick: function(clicked){
            this.positionSlides = clicked;
        },
        slideAuto: function(){
            this.intervalSet = setInterval(this.slideNext, 1000)
        },
        slideStop: function(){
            clearInterval(this.intervalSet);
        }
       
    },
    created (){
        this.slideAuto();
        
    }


}).mount('#app');

