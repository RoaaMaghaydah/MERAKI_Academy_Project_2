const body1 =$("body")
const theme=$('#theme')
theme.on("click",()=>{
 body1.css({
   "background-image":'url("https://www.ramstarab.com/wp-content/uploads/2019/05/%D8%AE%D9%84%D9%81%D9%8A%D8%A7%D8%AA-%D9%85%D8%AA%D9%86%D9%88%D8%B9%D8%A9-%D9%85%D9%84%D9%88%D9%86%D8%A9-10.jpeg")',
   'background-size':'1400px 400px',
   'background-repeat': 'no-repea',
    
  });

})
////////////////////////////////////////////////////////////////////
const flowers_arr=["https://pbs.twimg.com/profile_images/883859744498176000/pjEHfbdn_400x400.jpg","http://www.photon-echoes.com/images/nature/flowers/flower1.JPG",
"https://empire-s3-production.bobvila.com/slides/26814/original/ganzia.jpg?1532362531","https://sciencenotes.org/wp-content/uploads/2020/02/1280px-Glowing_flowers-1024x710.jpg"];

///////////////////////////////////////////////////////////////////

const gallery=$("<div class:'gallery_button'>  </div>");
gallery.appendTo(body1);
const all=$('<button "> All</button>');
const flowers=$('<button id="imgs_2"> flowers</button>');
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

  const gallery_1=$("<div id='show'>  </div>");
  gallery_1.appendTo(body1);

  const add_flowers=()=>
  {
    $("#show").html("");
    for(let i=0 ;i<flowers_arr.length;i++)
    {
        const add=$(`<img src=${flowers_arr[i]} style="height: 300; width: 300px;">`);
        add.appendTo(gallery_1)
      //gallery_1.html(`<img src=${flowers_arr[0]}>`)

    }
  }

flowers.on('click',add_flowers);

gallery_1.css({
    "display": "grid",
    'grid-template-columns': '200px 200px ',
    'gap': '200px',
    'justify-content': 'center',
   
    /*'height':' 50px',
    'width': '50px',
    'position':'relative',
    'top' :'300px',  */  
})