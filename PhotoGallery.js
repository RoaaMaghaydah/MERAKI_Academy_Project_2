const body1 =$("body")
const theme=$('#theme')
theme.on("click",()=>{
 body1.css({
   "background-image":'url("https://www.ramstarab.com/wp-content/uploads/2019/05/%D8%AE%D9%84%D9%81%D9%8A%D8%A7%D8%AA-%D9%85%D8%AA%D9%86%D9%88%D8%B9%D8%A9-%D9%85%D9%84%D9%88%D9%86%D8%A9-10.jpeg")',
   'background-size':'1400px 400px',
   'background-repeat': 'no-repea',
    
  });

})

const gallery=$("<div class:'gallery_button'>  </div>");
gallery.appendTo(body1);

const all=$('<button class:"button"> All</button>');
const flowers=$('<button > flowers</button>');
const animals=$('<button > animals</button>');
const greenLand=$('<button> green land</button>');
all.appendTo(gallery);
flowers.appendTo(gallery);
animals.appendTo(gallery);
greenLand.appendTo(gallery);

gallery.css({
    "display": "grid",
    'grid-template-columns': '100px 100px 100px 100px',
    'gap': '50px',
   'justify-content': 'center',
   
  });

  all.css({
    'position':'relative',
      'top' :'280px',
      'background-color': 'white',
      'border-radius': '50%'
  });
  
  flowers.css({
    'position':'relative',
      'top' :'280px',
      'background-color': 'white',
      'border-radius': '50%'
  });
  animals.css({
    'position':'relative',
      'top' :'280px',
      'background-color': 'white',
      'border-radius': '50%'
  });
  greenLand.css({
    'position':'relative',
      'top' :'280px',
      'background-color': 'white',
      'border-radius': '50%'
  });

  
  all.on("mouseover",function(){
    $(this).addClass("button")})
  
  all.on("mouseout",function(){
    $(this).removeClass("button")
  })

  flowers.on("mouseover",function(){
    $(this).addClass("button")})
  
  flowers.on("mouseout",function(){
    $(this).removeClass("button")
  })

  animals.on("mouseover",function(){
    $(this).addClass("button")})
  
  animals.on("mouseout",function(){
    $(this).removeClass("button")
  })

  greenLand.on("mouseover",function(){
    $(this).addClass("button")})
  
  greenLand.on("mouseout",function(){
    $(this).removeClass("button")
  })