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
"https://empire-s3-production.bobvila.com/slides/26814/original/ganzia.jpg?1532362531","https://sciencenotes.org/wp-content/uploads/2020/02/1280px-Glowing_flowers-1024x710.jpg","https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-182880589-1493334765.jpg",
"https://i0.wp.com/ae04.alicdn.com/kf/H7c41fbf0454a4aa2bda33efae67bfacbH.png_300x300.jpg"];



const animals_arr=["https://i.pinimg.com/originals/e3/32/3f/e3323fc80a203239e2a28ae23f83260a.jpg","https://i.pinimg.com/originals/a4/0c/c0/a40cc0f58f64009050739f9c87853a82.jpg",
"https://img.jakpost.net/c/2019/06/25/2019_06_25_75103_1561445774._large.jpg","https://i.redd.it/4m2ypc8v0p221.jpg","https://sf.ezoiccdn.com/ezoimgfmt/meowlogy.com/wp-content/uploads/2017/04/Cute-animals-66.jpg?ezimgfmt=rs:392x581/rscb2/ng:webp/ngcb2",
"https://images.saymedia-content.com/.image/t_share/MTc0MzIwMjM1MTk1NjcxOTEy/top-ten-cutest-japanese-wild-animals.jpg"]

const green_arr=["https://lh3.googleusercontent.com/proxy/3T1zW7ui8Z3hrdHZwC9po_eMU5YVD_E8bt3yYreVWcJQHw5Otpe09cESWp0eqo0UgMXUiQmFJAhbFFAronGC1pXQZdCiQ5R0C6DB8Iq46ms","http://1.bp.blogspot.com/-TtzbPEk88Mc/VnJ4qdOsZxI/AAAAAAAADd4/mSHI7N25dP0/s1600/%25D8%25B5%25D9%2588%25D8%25B1%2B%25D8%25B7%25D8%25A8%25D9%258A%25D8%25B9%25D8%25A9-%25D8%25B5%25D9%2588%25D8%25B1%2B%25D8%25B7%25D8%25A8%25D9%258A%25D8%25B9%25D9%258A%25D8%25A9-%2B%25D9%2585%25D9%2586%25D8%25A7%25D8%25B8%25D8%25B1%2B%25D8%25B7%25D8%25A8%25D9%258A%25D8%25B9%25D9%258A%25D8%25A9-%2B%25D8%25B5%25D9%2588%25D8%25B1%2B%25D8%25A3%25D9%2586%25D9%2587%25D8%25A7%25D8%25B1.jpg",
"https://www.arabeuropa.com/wp-content/uploads/2019/02/7J9-H1H_thumb2.jpg","http://lh3.ggpht.com/-olkU-hZWK3Q/T-l_MXj8AyI/AAAAAAAAEns/Rjtqk1bC8rA/7%252528J9%252529%252520%25252737F%252528HD%2525201_thumb%25255B2%25255D.jpg?imgmax=800",
"https://pic.i7lm.com/wp-content/uploads/2019/07/%D8%A3%D8%AD%D9%84%D9%8A-%D8%B5%D9%88%D8%B1-%D8%B7%D8%A8%D9%8A%D8%B9%D9%8A%D8%A9-780x405.jpg",
"https://www.zyadda.com/wp-content/uploads/2021/02/%D8%B9%D8%A8%D8%A7%D8%B1%D8%A7%D8%AA-%D8%B9%D9%86-%D8%A7%D9%84%D8%B7%D8%A8%D9%8A%D8%B9%D8%A9.jpg"]

const all_arr=flowers_arr.concat(animals_arr).concat(green_arr);


///////////////////////////////////////////////////////////////////

const gallery=$("<div class:'gallery_button'>  </div>");
gallery.appendTo(body1);
const all=$('<button "> All</button>');
const flowers=$('<button id="imgs_2"> flowers</button>');
const animals=$('<button > animals</button>');
const greenLand=$('<button> nature</button>');
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
      'top' :'200px',
      'background-color': 'white',
      'border-radius': '50%'
  });
  
  flowers.css({
    'position':'relative',
      'top' :'200px',
      'background-color': 'white',
      'border-radius': '50%'
  });
  animals.css({
    'position':'relative',
      'top' :'200px',
      'background-color': 'white',
      'border-radius': '50%'
  });
  greenLand.css({
    'position':'relative',
      'top' :'200px',
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

  const render_flowers=()=>
  {
    $("#show").html("");
    for(let i=0 ;i<flowers_arr.length;i++)
    {
        const add=$(`<img src=${flowers_arr[i]} style="height: 300; width: 300px;">`);
        add.appendTo(gallery_1)
        add.css({
            'position':'relative',
            'top' :'270px',      
            'border': '3px solid black', 
           })

    }
  }

flowers.on('click',render_flowers);

const render_animals=()=>
  {
    $("#show").html("");
    for(let i=0 ;i<animals_arr.length;i++)
    {
        const add=$(`<img src=${animals_arr[i]} style="height: 300; width: 300px;">`);
        add.appendTo(gallery_1)
        add.css({
            'position':'relative',
            'top' :'270px', 
            'border': '3px solid black',      
           })
    }
  }

animals.on('click',render_animals);


const render_greenLand=()=>
  {
    $("#show").html("");
    for(let i=0 ;i<green_arr.length;i++)
    {
        const add=$(`<img src=${green_arr[i]} style="height: 300; width: 300px;">`);
        add.appendTo(gallery_1)
        add.css({
            'position':'relative',
            'top' :'270px',  
            'border': '3px solid black',  
           })

    }
  }
greenLand.on('click',render_greenLand);

const render_all=()=>
  {
    $("#show").html("");
    for(let i=0 ;i<all_arr.length;i++)
    {
        const add=$(`<img src=${all_arr[i]} style="height: 250; width: 250px;">`);
        add.appendTo(gallery_1)
   add.css({
    'position':'relative',
    'top' :'270px',   
    'border': '3px solid black',    
   })
   add.on("mouseover",function(){
    $(this).addClass("change")})
  
  add.on("mouseout",function(){
    $(this).removeClass("change")
  })
    }
  }
all.on('click',render_all);





gallery_1.css({
    "display": "grid",
    'grid-template-columns': '300px 300px 300px',
    'gap': '100px',
    'justify-content': 'center',
   
    /*'height':' 50px',
    'width': '50px',
    'position':'relative',
    'top' :'300px',  */  
})

