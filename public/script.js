const menu=[{id:1,title:"Idly",category:"Breakfast",price:"13.99",img:"images/idly.jpg",desc:"Idli is made of urad dal or skinned black gram and rice. Urad dal is high in protein and calcium."},
{id:2,title:"Biriyani",category:"Lunch",price:"11.99",img:"images/biriyani.jpg",desc:"There are various forms of Hyderabadi biryani. One such biryani is the kachay gosht ki biryani or the dum biryani"},
{id:3,title:"Full Meals",category:"Lunch",price:"12.99",img:"images/full-meal.jpg",desc:"Buttermilk Sambar. A recipe that's sure to draw recipe requests"},
{id:4,title:"Dosa",category:"Breakfast",price:"13.99",img:"images/dosa.jpg",desc:"I guarantee you will have a nice crisp dosa! Why is my dosa sticking to the pan"},
{id:5,title:"Parota",category:"Dinner",price:"10.99",img:"images/poratta.jpg",desc:"Parotta is traditionally served with Beef Roast, Mutta Curry, or Vegetable Kurma for breakfast"},
{id:6,title:"Kothu Porata",category:"Dinner",price:"09.99",img:"images/kothu-poratta.jpg",desc:"Kothu Parotta is a popular street food in South-India. It is made with parotta, a soft, crispy, and layered flat bread, and left over chicken curry"},
{id:7,title:"Pongal",category:"Breakfast",price:"15.99",img:"images/pongal.jpg",desc:"Pongal is a popular South Indian food prepared with rice & moong dal, either to a sweet or savory dish"}]
const CategoryButton = document.querySelector(".btn-container")
var sectionCenter = document.querySelector(".section-center");
window.addEventListener("DOMContentLoaded",function(){
    displayMenu(menu);
    const categories = menu.reduce(function(values,items){
        if(!values.includes(items.category)){
            values.push(items.category);
        }
        return values
    },["All"]);
    //Mapping Buttons 
    const CategoryBtns = categories.map(function(category){
        return `<button class="filter-btn" type="button" data-id="${category}">${category}</button>`
    }).join("");
    CategoryButton.innerHTML = CategoryBtns;
    var filterbutton = document.querySelectorAll(".filter-btn");
    //filter items
filterbutton.forEach(function(btn){
    btn.addEventListener("click",function(e){
        const catergory = e.currentTarget.dataset.id;
        const menucatergory = menu.filter(function(menuitem){
            if(menuitem.category === catergory){
                return menuitem;
            }
            
        });
        if(catergory=="All"){
            displayMenu(menu);
        }
        else{
            displayMenu(menucatergory);
        }
    });
});
   function displayMenu(Menuitem){
    let displayMenu = Menuitem.map(function(item){
        return `<article class="menu-item">
        <img src=${item.img} alt="img">
        <div class="item-info">
            <header>
                <h4>${item.title}</h4>
                <h4 class="price">$${item.price}</h4>
            </header>
            <p>${item.desc}</p>
        </div>
        <div class="order">
            <div id="des">
            <p><i>To Order ${item.title}</i></p>
            </div>
            <div id="price">
            <p><i>Click here</i></p>
            </div>
        </div>
    </article>`
    });
    displayMenu= displayMenu.join("");
    sectionCenter.innerHTML = displayMenu;
   }
});
/* Dessert Slider */
const iceCream_list =[{i_name : "falooda",category:"iceCream",id : "falooda",title : "Falooda",price : "2$",image : "https://shwetainthekitchen.com/wp-content/uploads/2020/06/IMG_0058-scaled.jpg"},
                      {i_name : "strawberry",category:"iceCream",id : "strawberry",title : "Strawberry",price : "1.8$",image : "https://www.biggerbolderbaking.com/wp-content/uploads/2018/05/Strawberry-Ice-Cream-Temp-2.jpg"},
                      {i_name : "chocolate",category:"iceCream",id : "chocolate",title : "Chocolate",price : "2.1$",image : "https://www.davidlebovitz.com/wp-content/uploads/2020/05/Chocolate-chip-ice-cream-gelato-amaro-recipe_-9.jpg"},
                      {i_name : "vennila",category:"iceCream",id : "vennila",title : "Vennila",price : "2.3$",image : "https://laurenslatest.com/wp-content/uploads/2020/08/vanilla-ice-cream-5-copy.jpg"},
                      {i_name : "cookies n cream",category:"iceCream",id : "cookies n cream",title : "Cookies n cream",price : "2.1$",image : "https://homemadehooplah.com/wp-content/uploads/2016/07/Cookies-and-Cream-Ice-Cream-4.jpg"},
                      {i_name : "buttered pecan",category:"iceCream",id : "buttered pecan",title : "Buttered pecan",price : "2$",image : "https://lemonsandzest.com/wp-content/uploads/2019/07/Maple-Cinnamon-Pecan-No-Churn-Ice-Cream-28.jpg"},
                      {i_name : "neapolitan",category:"iceCream",id : "neapolitan",title : "Neapolitan",price : "2$",image : "https://beautyberryboutique.weebly.com/uploads/2/5/9/1/25911687/s971665060652142755_p1_i1_w736.jpeg"}];
const milkShake_list = [{i_name : "chocolate",category:"milkShake",id : "chocolate",title : "Chocolate",price : "2$",image : "https://www.elephantasticvegan.com/wp-content/uploads/2018/08/vegan-chocolate-milkshake-7.jpg"},
                        {i_name : "strawberry",category:"milkShake",id : "strawberry",title : "Strawberry",price : "2$",image : "https://i.pinimg.com/736x/4f/57/d9/4f57d9c33343fddc5581707e37a1c1cf.jpg"},
                        {i_name : "graphes",category:"milkShake",id : "graphes",title : "Graphes",price : "2$",image : "https://73f0e1518e903443913e6712-triedandtastycom.netdna-ssl.com/wp-content/uploads/2016/05/grape-smoothie-05.jpg"},
                        {i_name : "papaya",category:"milkShake",id : "papaya",title : "Papaya",price : "2$",image : "https://thasneen.com/cooking/wp-content/uploads/2010/04/pappaya-milkshake-2.jpg"},
                        {i_name : "banana",category:"milkShake",id : "banana",title : "Banana",price : "2$",image : "https://i.pinimg.com/originals/6e/68/5d/6e685d8a9214ca11e70b2cc11653ec2b.jpg"},
                        {i_name : "kiwi",category:"milkShake",id : "kiwi",title : "Kiwi",price : "2$",image : "https://cdn.pixabay.com/photo/2017/07/25/17/28/smoothie-2538962_960_720.jpg"},
                        {i_name : "pineapple",category:"milkShake",id : "pineapple",title : "pineapple",price : "2$",image : "https://i.pinimg.com/originals/ec/0f/25/ec0f25a4bd5ccde0c516fc4df9f66be6.jpg"}];
const dessert = document.querySelector(".section-dessert");
const icecream_container = document.querySelector(".icecream-slider");
const milkshake_container = document.querySelector(".milkshake-slider");
function getitem(source){
    var slider = source.map(function(item){
       return `
        <div class="slider-${item.category}">
          <div class="varieties">
            <div class="dessert-image" id="${item.id}">
                <img class="images" src="${item.image}" width="200px">
                <div class="description">
                <h1><i>${item.title}</i></h1>
                <p>Price : ${item.price}</P>
                <button class="dessert-btn">Order here</button>
                </div>
            </div>
          </div>
        </div>
        `
    });
    var final = slider.join("");
    return final;
}

document.addEventListener("DOMContentLoaded",()=>{
        icecream_container.innerHTML= getitem(iceCream_list);
        milkshake_container.innerHTML= getitem(milkShake_list);
});

