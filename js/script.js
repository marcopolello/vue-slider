var app = new Vue ({
  el: '#app',
  data: {
    pictures: ["img/image1.jpg", "img/image2.jpg", "img/image3.jpg", "img/image4.jpg"],
    timer: null,
    currentIndex: 0,
    myClass: "active",
    circleCurrent: false
  },
  mounted: function() {
    this.startSlide();
  },
  methods: {
    startSlide: function() {
      this.timer = setInterval(this.nextPic, 4000);
    },
    nextPic: function () {
      if (this.currentIndex >= (this.pictures.length - 1)) {
        this.currentIndex = 0;
      } else {
        this.currentIndex ++;
        // console.log(this.currentIndex);
      }
    },
    prevPic: function () {
      if (this.currentIndex === 0) {
        this.currentIndex = this.pictures.length - 1;
      } else {
        this.currentIndex --;
        // console.log(this.counter);
      }
    }
  },
  // computed: {
  //   currentCircle: function() {
  //     return this.pictures[Math.abs(this.currentIndex) % this.pictures.length];
  //   }
  // }
})
