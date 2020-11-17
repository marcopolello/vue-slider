var app = new Vue ({
  el: '#app',
  data: {
    pictures: ["img/image1.jpg", "img/image2.jpg", "img/image3.jpg", "img/image4.jpg"],
    counter: 0
  },
  methods: {
    nextPic: function functionName() {
      if (this.counter >= (this.pictures.length - 1)) {
        this.counter = 0;
      } else {
        this.counter ++;
        // console.log(this.counter);
      }
    },
    prevPic: function functionName() {
      if (this.counter === 0) {
        this.counter = this.pictures.length - 1;
      } else {
        this.counter --;
        console.log(this.counter);
      }
    }
  }
})
