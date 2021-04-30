const body1 = $("body")
const theme = $('#theme')

theme.on("click", () => {

    $t(his).addClass(change_backg);
})
////////////////////////////////////////////////////////////////////
const flowers_arr = ["https://pbs.twimg.com/profile_images/883859744498176000/pjEHfbdn_400x400.jpg", "http://www.photon-echoes.com/images/nature/flowers/flower1.JPG",
    "https://empire-s3-production.bobvila.com/slides/26814/original/ganzia.jpg?1532362531", "https://sciencenotes.org/wp-content/uploads/2020/02/1280px-Glowing_flowers-1024x710.jpg", "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-182880589-1493334765.jpg",
    "https://i0.wp.com/ae04.alicdn.com/kf/H7c41fbf0454a4aa2bda33efae67bfacbH.png_300x300.jpg"];



const animals_arr = ["https://i.pinimg.com/originals/e3/32/3f/e3323fc80a203239e2a28ae23f83260a.jpg", "https://i.pinimg.com/originals/a4/0c/c0/a40cc0f58f64009050739f9c87853a82.jpg",
    "https://img.jakpost.net/c/2019/06/25/2019_06_25_75103_1561445774._large.jpg", "https://i.redd.it/4m2ypc8v0p221.jpg", "https://sf.ezoiccdn.com/ezoimgfmt/meowlogy.com/wp-content/uploads/2017/04/Cute-animals-66.jpg?ezimgfmt=rs:392x581/rscb2/ng:webp/ngcb2",
    "https://images.saymedia-content.com/.image/t_share/MTc0MzIwMjM1MTk1NjcxOTEy/top-ten-cutest-japanese-wild-animals.jpg"]

const green_arr = ["https://lh3.googleusercontent.com/proxy/3T1zW7ui8Z3hrdHZwC9po_eMU5YVD_E8bt3yYreVWcJQHw5Otpe09cESWp0eqo0UgMXUiQmFJAhbFFAronGC1pXQZdCiQ5R0C6DB8Iq46ms", "http://1.bp.blogspot.com/-TtzbPEk88Mc/VnJ4qdOsZxI/AAAAAAAADd4/mSHI7N25dP0/s1600/%25D8%25B5%25D9%2588%25D8%25B1%2B%25D8%25B7%25D8%25A8%25D9%258A%25D8%25B9%25D8%25A9-%25D8%25B5%25D9%2588%25D8%25B1%2B%25D8%25B7%25D8%25A8%25D9%258A%25D8%25B9%25D9%258A%25D8%25A9-%2B%25D9%2585%25D9%2586%25D8%25A7%25D8%25B8%25D8%25B1%2B%25D8%25B7%25D8%25A8%25D9%258A%25D8%25B9%25D9%258A%25D8%25A9-%2B%25D8%25B5%25D9%2588%25D8%25B1%2B%25D8%25A3%25D9%2586%25D9%2587%25D8%25A7%25D8%25B1.jpg",
    "https://www.arabeuropa.com/wp-content/uploads/2019/02/7J9-H1H_thumb2.jpg", "http://lh3.ggpht.com/-olkU-hZWK3Q/T-l_MXj8AyI/AAAAAAAAEns/Rjtqk1bC8rA/7%252528J9%252529%252520%25252737F%252528HD%2525201_thumb%25255B2%25255D.jpg?imgmax=800",
    "https://pic.i7lm.com/wp-content/uploads/2019/07/%D8%A3%D8%AD%D9%84%D9%8A-%D8%B5%D9%88%D8%B1-%D8%B7%D8%A8%D9%8A%D8%B9%D9%8A%D8%A9-780x405.jpg",
    "https://www.zyadda.com/wp-content/uploads/2021/02/%D8%B9%D8%A8%D8%A7%D8%B1%D8%A7%D8%AA-%D8%B9%D9%86-%D8%A7%D9%84%D8%B7%D8%A8%D9%8A%D8%B9%D8%A9.jpg"]

const emojy = [`<svg id="img1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-x" viewBox="0 0 16 16">
<path d="M6.854 7.146a.5.5 0 1 0-.708.708L7.293 9l-1.147 1.146a.5.5 0 0 0 .708.708L8 9.707l1.146 1.147a.5.5 0 0 0 .708-.708L8.707 9l1.147-1.146a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146z"/>
<path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"/>
</svg>`, `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-save" viewBox="0 0 16 16">
<path d="M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v7.293l2.646-2.647a.5.5 0 0 1 .708.708l-3.5 3.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L7.5 9.293V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1H2z"/>
</svg>`, `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-suit-heart-fill" viewBox="0 0 16 16">
<path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"/>
</svg>`, `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-share-fill" viewBox="0 0 16 16">
<path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z"/>
</svg>`];

let favorite = [];
let bool = true;

///////////////////////////////////////////////////////////////////
const lightbox = $("<div id='lightbox'></div>")
const gallery = $("<div class:'gallery_button'>  </div>");
gallery.appendTo(body1);
gallery.css({
    "display": "grid",
    'grid-template-columns': '100px 100px 100px 100px',
    'gap': '50px',
    'justify-content': 'start',
    'margin-left': "50px",
});


const rander = () => {
    gallery.html("");
    const flowers = $('<button id="imgs_2"> flowers</button>');
    const all = $('<button "> All</button>');
    const animals = $('<button > animals</button>');
    const greenLand = $('<button> nature</button>');
    all.appendTo(gallery);
    flowers.appendTo(gallery);
    animals.appendTo(gallery);
    greenLand.appendTo(gallery);

    all.css({
        'position': 'relative',
        'top': '170px',
        'background-color': 'white',
        'border-radius': '20px'
    });

    flowers.css({
        'position': 'relative',
        'top': '170px',
        'background-color': 'white',
        'border-radius': '20px'
    });
    animals.css({
        'position': 'relative',
        'top': '170px',
        'background-color': 'white',
        'border-radius': '20px'
    });
    greenLand.css({
        'position': 'relative',
        'top': '170px',
        'background-color': 'white',
        'border-radius': '20px'
    });
    all.on("click", function () {
        $(this).addClass("act")
    })
   
 
    all.on("mouseover", function () {
        $(this).addClass("button")
    })

    all.on("mouseout", function () {
        $(this).removeClass("button")
    })

    flowers.on("mouseover", function () {
        $(this).addClass("button")
    })

    flowers.on("mouseout", function () {
        $(this).removeClass("button")
    })

    animals.on("mouseover", function () {
        $(this).addClass("button")
    })

    animals.on("mouseout", function () {
        $(this).removeClass("button")
    })

    greenLand.on("mouseover", function () {
        $(this).addClass("button")
    })

    greenLand.on("mouseout", function () {
        $(this).removeClass("button")
    })

    const gallery_1 = $("<div id='show'>  </div>");
    gallery_1.appendTo(gallery);




    const render_flowers = () => {
        $("#show").html("");

        const div_0 = $('<div id="div_0"></div>')
        div_0.appendTo(gallery_1)
        const input = $('<input type="text">')
        input.appendTo(div_0);
        input.css({
            'position': 'relative',
            'top': '220px',
            'font-size': "15px",
            'border-radius': '20px ',
            'height': '230px',
            'width': '300px',
        })
        const new_button = $('<button> +</button>')
        new_button.appendTo(div_0)
        new_button.css({
            'position': 'relative',
            'top': '220px',
            'font-size': "60px",
            'border-radius': '20px ',
            'height': '75px',
            'width': '300px',
        })
        new_button.on('click', () => {
            flowers_arr.push(input.val());
            render_flowers();

        })

        for (let i = 0; i < flowers_arr.length; i++) {
            const div_1 = $('<div></div>')
            div_1.appendTo(gallery_1)
            const div_2 = $('<div></div>');
            div_2.appendTo(div_1);
            const div_3 = $('<div></div>');
            div_3.appendTo(div_1);

            const add = $(`<img src=${flowers_arr[i]} style="height: 300px; width: 300px;">`);
            add.appendTo(div_2)
            add.css({
                'position': 'relative',
                'top': '220px',
                'border-radius': '20px ',

            })
            add.on("mouseover", function () {
                add.addClass("change")
            })

            add.on("mouseout", function () {
                add.removeClass("change")
            })
            //////////////////////////////////////////////////////////////////////   

            body1.append(lightbox);

            add.on('click', e => {
                lightbox[0].classList.add('active')
                const img_2 = $(`<img src=${flowers_arr[i]} style="height: 500px; width: 500px;"></img>`)
                img_2.css({
                    'background-color': 'black',
                    'border': '2px solid white',
                })

                while (lightbox[0].firstChild) {
                    lightbox[0].removeChild(lightbox[0].firstChild)
                }
                lightbox.append(img_2)
            })

            lightbox.on('click', e => {
                if (e.target !== e.currentTarget) return
                lightbox[0].classList.remove('active')
            })

            ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
            const add_emojy_1 = $(emojy[0]);
            add_emojy_1.appendTo(div_3)
            add_emojy_1.css({
                'position': 'relative',
                'top': '220px',
                "margin": '20px',
                'height': '30px',
                'width': '30px',
                'border': '2px black ',
            })
            add_emojy_1.on("mouseover", function () {
                $(this).addClass("change_1")
            })

            add_emojy_1.on("mouseout", function () {
                $(this).removeClass("change_1")
            })

            add_emojy_1.on("click", function () {

                flowers_arr.splice(i, 1);
                render_flowers()

            })

            const add_emojy_2 = $(emojy[1]);
            add_emojy_2.appendTo(div_3)
            add_emojy_2.css({
                'position': 'relative',
                'top': '220px',
                "margin": '20px',
                'height': '30px',
                'width': '30px',
                'border': '2px black ',
            })
            add_emojy_2.on("mouseover", function () {
                $(this).addClass("change_1")
            })

            add_emojy_2.on("mouseout", function () {
                $(this).removeClass("change_1")
            })

            add_emojy_2.on("click", function () {
            })

            const add_emojy_3 = $(emojy[2]);
            add_emojy_3.appendTo(div_3)
            add_emojy_3.css({
                'position': 'relative',
                'top': '220px',
                "margin": '20px',
                'height': '30px',
                'width': '30px',
                'border': '2px black ',
                //'cursor': 'block',
            })
            add_emojy_3.on("mouseover", function () {
                $(this).addClass("change_1")
            })

            add_emojy_3.on("mouseout", function () {
                $(this).removeClass("change_1")
            })

            add_emojy_3.on("click", function () {
                if (favorite.indexOf(flowers_arr[i]) === -1) {
                    favorite.push(flowers_arr[i]);
                    localStorage.setItem("list_data_key", JSON.stringify(favorite));
                    add_emojy_3.unbind('click')
                }
            })

            const add_emojy_4 = $(emojy[3]);
            add_emojy_4.appendTo(div_3)
            add_emojy_4.css({
                'position': 'relative',
                'top': '220px',
                "margin": '20px',
                'height': '30px',
                'width': '30px',
                'border': '2px black ',
            })
            add_emojy_4.on("mouseover", function () {
                $(this).addClass("change_1")
            })

            add_emojy_4.on("mouseout", function () {
                $(this).removeClass("change_1")
            })

            add_emojy_4.on("click", function () {


            })
        }

    }

    flowers.on('click', render_flowers);

    const render_animals = () => {
        $("#show").html("");

        const div = $('<div id="div_0"></div>')
        div.appendTo(gallery_1)
        const input = $('<input type="text">')
        input.appendTo(div);
        input.css({
            'position': 'relative',
            'top': '220px',
            'font-size': "15px",
            'border-radius': '20px ',
            'height': '230px',
            'width': '300px',
        })
        const new_button = $('<button> +</button>')
        new_button.appendTo(div)
        new_button.css({
            'position': 'relative',
            'top': '220px',
            'font-size': "60px",
            'border-radius': '20px ',
            'height': '75px',
            'width': '300px',
        })
        new_button.on('click', () => {
            animals_arr.push(input.val());
            render_animals();
        })

        for (let i = 0; i < animals_arr.length; i++) {
            const div_1 = $('<div></div>')
            div_1.appendTo(gallery_1)
            const div_2 = $('<div></div>');
            div_2.appendTo(div_1);
            const div_3 = $('<div></div>');
            div_3.appendTo(div_1);
            const add = $(`<img src=${animals_arr[i]} style="height: 300px; width: 300px;">`);
            add.appendTo(div_2)
            add.css({
                'position': 'relative',
                'top': '220px',
                'border-radius': '20px ',
            })
            add.on("mouseover", function () {
                $(this).addClass("change")
            })

            add.on("mouseout", function () {
                $(this).removeClass("change")
            })
            /////////////////////////////////////////////////////////
            body1.append(lightbox);

            add.on('click', e => {
                lightbox[0].classList.add('active')
                const img_2 = $(`<img src=${animals_arr[i]} style="height: 500px; width: 500px;"></img>`)
                img_2.css({
                    'background-color': 'black',
                    'border': '2px solid white',
                })

                while (lightbox[0].firstChild) {
                    lightbox[0].removeChild(lightbox[0].firstChild)
                }
                lightbox.append(img_2)
            })

            lightbox.on('click', e => {
                if (e.target !== e.currentTarget) return
                lightbox[0].classList.remove('active')
            })


            ////////////////////////////////////////////////////////


            const add_emojy_1 = $(emojy[0]);
            add_emojy_1.appendTo(div_3)
            add_emojy_1.css({
                'position': 'relative',
                'top': '220px',
                "margin": '20px',
                'height': '30px',
                'width': '30px',
                'border': '2px black ',
            })
            add_emojy_1.on("mouseover", function () {
                $(this).addClass("change_1")
            })

            add_emojy_1.on("mouseout", function () {
                $(this).removeClass("change_1")
            })

            add_emojy_1.on("click", function () {

                animals_arr.splice(i, 1);
                render_animals()

            })

            const add_emojy_2 = $(emojy[1]);
            add_emojy_2.appendTo(div_3)
            add_emojy_2.css({
                'position': 'relative',
                'top': '220px',
                "margin": '20px',
                'height': '30px',
                'width': '30px',
                'border': '2px black ',
            })
            add_emojy_2.on("mouseover", function () {
                $(this).addClass("change_1")
            })

            add_emojy_2.on("mouseout", function () {
                $(this).removeClass("change_1")
            })

            add_emojy_2.on("click", function () {
            })

            const add_emojy_3 = $(emojy[2]);
            add_emojy_3.appendTo(div_3)
            add_emojy_3.css({
                'position': 'relative',
                'top': '220px',
                "margin": '20px',
                'height': '30px',
                'width': '30px',
                'border': '2px black ',
            })
            add_emojy_3.on("mouseover", function () {
                $(this).addClass("change_1")
            })

            add_emojy_3.on("mouseout", function () {
                $(this).removeClass("change_1")
            })

            add_emojy_3.on("click", function () {


                if (favorite.indexOf(animals_arr[i]) === -1) {
                    favorite.push(animals_arr[i]);
                    localStorage.setItem("list_data_key", JSON.stringify(favorite));
                    add_emojy_3.unbind('click')

                }


            })


            const add_emojy_4 = $(emojy[3]);
            add_emojy_4.appendTo(div_3)
            add_emojy_4.css({
                'position': 'relative',
                'top': '220px',
                "margin": '20px',
                'height': '30px',
                'width': '30px',
                'border': '2px black ',
            })
            add_emojy_4.on("mouseover", function () {
                $(this).addClass("change_1")
            })

            add_emojy_4.on("mouseout", function () {
                $(this).removeClass("change_1")
            })

            add_emojy_4.on("click", function () {


            })

        }

    }

    animals.on('click', render_animals);


    const render_greenLand = () => {
        $("#show").html("");
        const div = $('<div id="div_0"></div>')
        div.appendTo(gallery_1)
        const input = $('<input type="text">')
        input.appendTo(div);
        input.css({
            'position': 'relative',
            'top': '220px',
            'font-size': "15px",
            'border-radius': '20px ',
            'height': '230px',
            'width': '300px',
        })
        const new_button = $('<button> +</button>')
        new_button.appendTo(div)
        new_button.css({
            'position': 'relative',
            'top': '220px',
            'font-size': "60px",
            'border-radius': '20px ',
            'height': '75px',
            'width': '300px',
        })
        new_button.on('click', () => {
            green_arr.push(input.val());
            render_greenLand();
        })
        for (let i = 0; i < green_arr.length; i++) {
            const div_1 = $('<div></div>')
            div_1.appendTo(gallery_1)
            const div_2 = $('<div></div>');
            div_2.appendTo(div_1);
            const div_3 = $('<div></div>');
            div_3.appendTo(div_1);
            const add = $(`<img src=${green_arr[i]} style="height: 300px; width: 300px;">`);
            add.appendTo(div_2)
            add.css({
                'position': 'relative',
                'top': '220px',
                'border-radius': '20px ',
            })
            add.on("mouseover", function () {
                $(this).addClass("change")
            })

            add.on("mouseout", function () {
                $(this).removeClass("change")
            })

            //////////////////////////////////////////////

            body1.append(lightbox);

            add.on('click', e => {
                lightbox[0].classList.add('active')
                const img_2 = $(`<img src=${green_arr[i]} style="height: 500px; width: 500px;"></img>`)
                img_2.css({
                    'background-color': 'black',
                    'border': '2px solid white',
                })

                while (lightbox[0].firstChild) {
                    lightbox[0].removeChild(lightbox[0].firstChild)
                }
                lightbox.append(img_2)
            })

            lightbox.on('click', e => {
                if (e.target !== e.currentTarget) return
                lightbox[0].classList.remove('active')
            })


            //////////////////////////////////////////////

            const add_emojy_1 = $(emojy[0]);
            add_emojy_1.appendTo(div_3)
            add_emojy_1.css({
                'position': 'relative',
                'top': '220px',
                "margin": '20px',
                'height': '30px',
                'width': '30px',
                'border': '2px black ',
            })
            add_emojy_1.on("mouseover", function () {
                $(this).addClass("change_1")
            })

            add_emojy_1.on("mouseout", function () {
                $(this).removeClass("change_1")
            })

            add_emojy_1.on("click", function () {

                green_arr.splice(i, 1);
                render_greenLand();

            })

            const add_emojy_2 = $(emojy[1]);
            add_emojy_2.appendTo(div_3)
            add_emojy_2.css({
                'position': 'relative',
                'top': '220px',
                "margin": '20px',
                'height': '30px',
                'width': '30px',
                'border': '2px black ',
            })
            add_emojy_2.on("mouseover", function () {
                $(this).addClass("change_1")
            })

            add_emojy_2.on("mouseout", function () {
                $(this).removeClass("change_1")
            })

            add_emojy_2.on("click", function () {
            })

            const add_emojy_3 = $(emojy[2]);
            add_emojy_3.appendTo(div_3)
            add_emojy_3.css({
                'position': 'relative',
                'top': '220px',
                "margin": '20px',
                'height': '30px',
                'width': '30px',
                'border': '2px black ',
            })
            add_emojy_3.on("mouseover", function () {
                $(this).addClass("change_1")
            })

            add_emojy_3.on("mouseout", function () {
                $(this).removeClass("change_1")
            })

            add_emojy_3.on("click", function () {
                if (favorite.indexOf(green_arr[i]) === -1) {
                    favorite.push(green_arr[i]);
                    localStorage.setItem("list_data_key", JSON.stringify(favorite));
                    add_emojy_3.unbind('click')
                }
            })

            const add_emojy_4 = $(emojy[3]);
            add_emojy_4.appendTo(div_3)
            add_emojy_4.css({
                'position': 'relative',
                'top': '220px',
                "margin": '20px',
                'height': '30px',
                'width': '30px',
                'border': '2px black ',
            })
            add_emojy_4.on("mouseover", function () {
                $(this).addClass("change_1")
            })

            add_emojy_4.on("mouseout", function () {
                $(this).removeClass("change_1")
            })

            add_emojy_4.on("click", function () {


            })

        }

    }
    greenLand.on('click', render_greenLand);


    const render_all = () => {
        const all_arr = flowers_arr.concat(animals_arr).concat(green_arr);
        $("#show").html("");
        for (let i = 0; i < all_arr.length; i++) {
            const add = $(`<img src=${all_arr[i]} style="height: 300px; width: 300px;">`);
            add.appendTo(gallery_1)
            add.css({
                'position': 'relative',
                'top': '220px',
                'border-radius': '20px ',
            })
            add.on("mouseover", function () {
                $(this).addClass("change")
            })

            add.on("mouseout", function () {
                $(this).removeClass("change")
            })
        }
    }
    all.on('click', render_all);

    gallery_1.css({
        "display": "grid",
        'grid-template-columns': '300px 300px 300px',
        'gap': '100px',
        'justify-content': 'start',
        //'margin-left': "50px",
    })
}

$("#favorit").on('click', () => {
    gallery.html("");
    let storedData = localStorage.getItem("list_data_key");
    console.log("1", storedData, "2", favorite)
    if (storedData) {
        favorite = JSON.parse(storedData);

    }

    const div_11 = $('<div id="f"></div>')
    div_11.appendTo(gallery)

    div_11.css({
        "display": "grid",
        'grid-template-columns': '300px 300px 300px',
        'gap': '100px',
        'justify-content': 'start',
        'margin-left': "50px",
    })

    for (let i = 0; i < favorite.length; i++) {
        const add = $(`<img src=${favorite[i]} style="height: 300px; width: 300px;">`);
        add.appendTo(div_11)
        add.css({
            'position': 'relative',
            'top': '220px',
            'border-radius': '20px ',
        })
        add.on("mouseover", function () {
            $(this).addClass("change")
        })

        add.on("mouseout", function () {
            $(this).removeClass("change")
        })
    }

})

rander();
$("#home").on('click', rander);
//////////////////////////////////////////////////
$("#login").on('click', () => {
    gallery.html("");
 const div = $('<div id="div_0"></div>')
 div.appendTo(gallery)
 const div_c1 = $('<div"></div>')
 div.appendTo(div)
 const div_c2 = $('<div"></div>')
 div.appendTo(div)
const p_username=$('<p> User name :</p>')
 p_username.appendTo(div_c1)
const username=$('<input type="text">')
username.appendTo(div_c1)
const p_password=$('<p> Password :</p>')
p_password.appendTo(div_c2)
const password=$('<input type="password">')
password.appendTo(div_c2);


div.css({
    "display": "grid",

    'gap': '50px',
    'justify-content': 'start',
    'margin-left': "50px",
});

div_c1.css({
    "display": "grid",
    'grid-template-columns': '100px 100px',
    'gap': '50px',
    'justify-content': 'start',
    'margin-left': "50px",
});

div_c2.css({
    "display": "grid",
    'grid-template-columns': '100px 100px ',
    'gap': '50px',
    'justify-content': 'start',
    'margin-left': "50px",
});

username.css({
    'position': 'relative',
    'top': '220px',
    'font-size': "15px",
    'border-radius': '20px ',
    
})

password.css({
    'position': 'relative',
    'top': '220px',
    'font-size': "15px",
    'border-radius': '20px ',
    
})
})