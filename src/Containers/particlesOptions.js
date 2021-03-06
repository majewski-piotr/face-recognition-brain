const particlesOptions = {
    particles: {
      number:{
        value:150,
        density: {
          enable:true,
          value_area:800,
        }
      },
      color:'#000000',
      line_linked: {
        color:'#000000',
        opacity:0.1,
        distance:100,
      },
      move:{
        speed:2,
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
          distance:200,
        }
      }
    },
    retina_detect:true
  }

  export default particlesOptions