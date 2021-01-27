Vue.config.devtools = true;
new Vue({
  el: '.container',
  data: {
    images:[
      'https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?cs=srgb&dl=clouds-country-daylight-371633.jpg&fm=jpg',
      'https://static.photocdn.pt/images/articles/2017/04/28/iStock-646511634.jpg',
      'https://cdn.mos.cms.futurecdn.net/FUE7XiFApEqWZQ85wYcAfM.jpg',
      'https://static.photocdn.pt/images/articles/2017/04/28/iStock-546424192.jpg'
    ],
    selectedImage: 0,
  },
  methods: {
    nextImage: function() {
      if(this.selectedImage !== 3) {
        this.selectedImage += 1
      } else {
        this.selectedImage = 0
      }
    },
    prevImage: function() {
      if(this.selectedImage !== 0) {
        this.selectedImage -= 1
      } else {
        this.selectedImage = 3
      }
    },
    addBluePoint: function(i) {
      if(i === this.selectedImage) {
        return 'active'
      } else {
        return ''
      }
    }
  }
})
