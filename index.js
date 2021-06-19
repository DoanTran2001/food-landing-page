//back to top
let backToTopBtn = document.querySelector('.back-to-top');
window.onscroll = function() {
    if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopBtn.style.display = 'flex';
    }
    else {
        backToTopBtn.style.display = 'none';
    }
}
//menu
// let menuItem = document.querySelectorAll('.menu-item');
// menuItem.forEach(function(item){
//     item.addEventListener('click',function(){
//         menuItem.forEach(function(i){
//             i.classList.remove('active');
//         });
//         this.classList.add('active');
//     });
// });

//activemenu scroll----------------------------------------------
let sections = []
    //let arrSectionTopHeight = []
let activeMenuCroll = document.querySelectorAll('.nav .menu-wrap .menu-content .menu-item')
// console.log(activeMenuCroll)
activeMenuCroll.forEach((item) => {
    let nameSection = item.getAttribute('data-menu');
    // console.log(nameSection)
    //bắt vị trí của data-menu
    let section = document.querySelector("#" + nameSection);
    sections.push(section);
    // console.log(section)
    // console.log(sections)
    //actimenu click
    item.addEventListener('click', function(e) {
        e.preventDefault();
        // window.scrollTo({ top: section.offsetTop - 52, behavior: 'smooth' });
        window.scrollTo({ top: section.offsetTop - document.querySelector('.nav').offsetTop, behavior: 'smooth' });
    })
})

// bắt sự kiện scroll
window.addEventListener('scroll', function() {
    //lấy vị trí scroll đến
    let scrollPos = document.querySelector('html').scrollTop;
    // console.log(scrollPos)
    // tránh lặp lại trong việc xét đk lặp, thay vòng lặp
    sections.forEach((item, i) => {
        // đáy của slider chạm section thì active menu
        if (scrollPos > item.offsetTop - document.querySelector('.nav').offsetHeight) {
            activeMenuCroll.forEach((item) => {
                item.classList.remove('active');
            });
            // lấy thẻ a theo att add vào class active
            activeMenuCroll[i].classList.add('active');
        }
    })
})

// Menu food
let button = document.querySelectorAll('.btn');
// console.log(button);
for (let btn of button) {
    btn.addEventListener("click",function(e){
        document.querySelectorAll('.btn').forEach(function(item){
            item.classList.remove('active')
        })
        e.target.classList.add('active')
        let id = e.target.id
        document.querySelectorAll('.food-wrap').forEach(function(content){
            content.classList.remove('active')
        })
        document.querySelectorAll('.food-wrap').forEach(function(content){
            if (content.dataset.id === id) {
                content.classList.add('active')
            }
        })
    })
}

