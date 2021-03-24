const app = new Vue (
  {
    el: '#root',
    data: {
      saluto: 'Hello Vue!',
      srcImg: "http://docmac.it/wp-content/uploads/2016/05/Hello_Hello-Again-e1501025061872.jpg",
      message: "",
    },
    methods: {
      cambiaImmagine: function () {
        if (app.srcImg == "http://docmac.it/wp-content/uploads/2016/05/Hello_Hello-Again-e1501025061872.jpg") {
          this.srcImg = "https://casellaweb.com/wp-content/uploads/2012/09/HelloWorld-680x167.png";
        } else {
          this.srcImg = "http://docmac.it/wp-content/uploads/2016/05/Hello_Hello-Again-e1501025061872.jpg";
        }
      }
    },
  }
);
