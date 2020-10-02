const particlesOptions = {
    particles: {
      number:{
        value:60,
        density: {
          enable:true,
          value_area:800,
        }
      },
      color:'#000000',
      line_linked: {
        color:'#000000',
        opacity:0.4,
        distance:170,
      },
      move:{
        speed:1,
      }
    },
    interactivity:{
      detectsOn: "window",
      events:{
        onhover:{
          enable: true,
          mode:'grab'
        }
      },
      modes:{
        grab:{
          distance:75,
        }
      }
    },
    retina_detect:true
  }

  export default particlesOptions