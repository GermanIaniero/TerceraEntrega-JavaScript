/*const isayjose  = [ */

let stockProductos = [    
    {
      "id": 1,
      "producto": "001",
      "precio": 500,
      "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp7il8GsXSKP0U1N5MX9-0Pwb3m6uolwSAsMmKbhkXFOoKAq7loUK4aDIVTSKWuVdoHq8&usqp=CAU",
      "descrip": "sticker",
      "categoria": "libreria",
      "cantidad": 1,
      "oferta": true,
      "descuento": 10,
     
      
    
    
    }, {
        "id": 2,
        "producto": "002",
        "precio": 500,
        "img": "https://xlshop.vteximg.com.br/arquivos/ids/201264-1000-1000/202209-XL-eCommerce-75.jpg?v=638004202852830000",
        "descrip": "riñonera",
        "categoria": "accesorio",
        "cantidad": 1,
        "oferta": true,
        "descuento": 20,
       
    }, {

        "id": 3,
        "producto": "003",
        "precio": 3000,
        "img": "https://colormake.com/wp-content/uploads/2014/08/Gorra-Trucker-57-Rosa-Neon.png",
        "descrip": "gorra",
        "categoria": "ropa",
        "cantidad": 1,
        "oferta": true,
        "descuento": 10,
       
   
    }, {
        "id": 4,
        "producto": "004",
        "precio": 3000,
        "img": "https://d2r9epyceweg5n.cloudfront.net/stores/034/011/products/remera-go-faster-celeste-back1-86d7feb20f76de752915705528975314-640-0.jpg",
        "descrip": "remera",
        "categoria": "ropa",
        "cantidad": 1,
        "oferta": false,
        "descuento": 0,
      
    }, {
        "id": 5,
        "producto": "005",
        "precio": 5000,
        "img": "https://www.stanser.com/wp-content/uploads/2019/10/002.mapamundi-con-letras.png",
        "descrip": "mapa mundi",
        "categoria": "regalo",
        "cantidad": 1,
        "oferta": true,
        "descuento": 30,
       
    }, {
        "id": 6,
        "producto": "006",
        "precio": 500,
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRufcaxHv4aQy0tnD8zzQ-q0n4LGiTgQVdQ4g&usqp=CAU",
        "descrip": "mapa vinilo",
        "categoria": "libreria",
        "cantidad": 1,
        "oferta": true,
        "descuento": 40,
       
    }, {
        "id": 7,
        "producto": "007",
        "precio": 1000,
        "img": "https://upload.wikimedia.org/wikipedia/commons/5/55/Mapa_del_mundo_en_1970.jpg",
        "descrip": "mapa",
        "categoria": "adornos",
        "cantidad": 1,
        "oferta": true,
        "descuento": 25,
       
    }, {
        "id": 8,
        "producto": "008",
        "precio": 500,
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjJRpRJ3aJYbDleqV8GQLEpFSuE_RDDWA07g&usqp=CAU",
        "descrip": "banderas",
        "categoria": "adornos",
        "cantidad": 1,
        "oferta": false,
        "descuento": 0,
       
    }, {
        "id": 9,
        "producto": "009",
        "precio": 600,
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdChdO19xjuSeFRkTSCG5XcDxW8er4THg9uQ&usqp=CAU",
        "descrip": "colores",
        "categoria": "libreria",
        "cantidad": 1,
        "oferta": true,
        "descuento": 15,
       
    }, {
        "id": 10,
        "producto": "010",
        "precio": 750,
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT-vsBy5MAvhkM0v0xNv4k2e6vnx35isqD6A&usqp=CAU",
        "descrip": "lapicera",
        "categoria": "libreria",
        "cantidad": 1,
        "oferta": true,
        "descuento": 15,
       
    }, {
        "id": 11,
        "producto": "011",
        "precio": 1100,
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHr8FCp-wNwyhI_ioO4OyfAxMSVtnGMo_Nhw&usqp=CAU",
        "descrip": "vaso plastico",
        "categoria": "bazar",
        "cantidad": 1,
        "oferta": true,
        "descuento": 10,
       
    }, {
        "id": 12,
        "producto": "012",
        "precio": 1800,
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaPWyxJYo2d0LCHHq5ZxqsBNKnZIJB8czvkA&usqp=CAU",
        "descrip": "anotador",
        "categoria": "libreria",
        "cantidad": 1,
        "oferta": true,
        "descuento": 10,
       
    }, {
        "id": 13,
        "producto": "013",
        "precio": 1790,
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxinkIP3OT79Wp_gbnzItImR2Vq6YMDN0T2g&usqp=CAU",
        "descrip": "mousepad",
        "categoria": "libreria",
        "cantidad": 1,
        "oferta": true,
        "descuento": 15,
       
    }, {
        "id": 14,
        "producto": "014",
        "precio": 750,
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhKYg0BFI7PsdxmWfZJmd_rnYrHUNWV__WMw&usqp=CAU",
        "descrip": "mate",
        "categoria": "bazar",
        "cantidad": 1,
        "oferta": true,
        "descuento": 18,
    }, {
        "id": 15,
        "producto": "015",
        "precio": 1500,
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbLxCaNH1Y-BL39TS8dG1N6mSt5PiPymkQcQ&usqp=CAU",
        "descrip": "vaso plástico",
        "categoria": "bazar",
        "cantidad": 1,
        "oferta": false,
        "descuento": 0,
     }
    ]