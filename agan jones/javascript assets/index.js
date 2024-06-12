/*============show menu========*/
const navMenu =document.getElementById('nav-menu'),
        navToggle=document.getElementById('nav-toggle'),
        navClose=document.getElementById('nav-close')

        /* ===MENU SHOW--*/
        if (navToggle){
            navToggle.addEventListener('click',()=>{
                navMenu.classList.add('show-menu') 
            })
        }
        /*========MENU HIDDEN====*/
        /* validate if constant exists*/
        if(navClose){
            navClose.addEventListener('click',() =>{
                navMenu.classList.remove('show-menu')   
            })
        }

        /*===========REMOVE MENU MOBILE=======*/
    const navLink=document.querySelectorAll('.nav-link')

    const linkAction = () => {
        const navMenu=document.getElementById('nav-menu')
        /*when we click on each nav=link, we remove the show menu
        */
       navMenu.classList.remove('show-menu')
    }
    navLink.forEach(n => n.addEventListener('click',linkAction))


/*=========SHOW HEADER==========*/
const shadowHeader = () => {
    const header=document.getElementById('header')
    //when scroll is greater  than 50 viewport height, add the
    this.scrollY >= 50 ? header.classList.add('shadow-header')
                       :header.classList.remove('shadow-header')
}
window.addEventListener('scroll' , shadowHeader)





/*=======EMAIL JS======*/
const contactForm  =document.getElementById('contact-form'),
      contactMessage =document.getElementById('contact-message');

const sendEmail=(e)=>{
e.preventDefault()
//serviceId -templateID -#form -publicKey

emailjs.sendForm('service_m2bznqi','template_tkwy7ao','#contact-form','bPvkRRGbXVkGqpO8Q').then(() => {
    //show sent message
    contactMessage.textContent ='Message sent succesfully'
    //remove message after 5 seconds
setTimeout(()=>{
    contactMessage.textContent= ''
},5000)
//clear input fields
contactForm.reset()
}, () =>{
    //show error message
    
})
}
contactForm.addEventListener('submit',sendEmail)






/*============SCROLL UP====================== */
const scrollup= () =>{
const scrollup =document.getElementById('scrollup')

//when the scroll is higher than 359 viewport height, add the
this.scrollY >= 350 ? scrollup.classList.add('show-scroll')
                   :scrollup.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollup)


/*======SCROLL SECTIONS ACTIVE LINK*/
const sections =document.querySelectorAll('section[id]')
const scrollActive = () => { 
    const scrollDown =window.scrollY 

sections.forEach(current=>{
    const sectionHeight=current.offsetHeight,
         sectionTop=current.offsetTop - 58,
        sectionId =current.getAttribute('id'),
        sectionClass=document.querySelector('.nav-menu a[href*=' + sectionId + ']')

if(scrollDown > sectionTop && scrollDown<= sectionTop +sectionHeight){
    sectionClass.classList.add('active-link')
}
else{
    sectionClass.classList.remove('active-link')
}
    })
}
window.addEventListener('scroll', scrollActive)

/*======DARK-LIGHT THEME========*/
const themeButton =document.getElementById('theme-button')
const darkTheme ='dark-theme'
const iconTheme='ri-sun-line'
//previously selected topic (if user selected)

const selectedTheme =localStorage.getItem('selected-theme')
const selectedIcon=localStorage.getItem('selected-icon')
//we obtain the current theme that the interface has  by validating the dark theme  class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' :'light'
const getCurrentIcon =() => themeButton.classList.contains(iconTheme) ? 'ri-moon-line':'ri-sun-line'


//we validate if user previously chose a topic
if (selectedTheme){
    //if validation is fullfilled,we ask what the issue was to know if activated or deactivated dark
    document.body.classList[selectedTheme==='dark' ? 'add' :'remove'](darkTheme)
    themeButton.classList[selectedIcon==='ri-moon-line' ? 'add' :'remove'] (iconTheme)
}
// Activate /deactivate the theme manually with the button
themeButton.addEventListener('click',()=>{
    //add or remove the dark /icon theme)
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    //we save the theme and the current icon tht the user chose
    localStorage.setItem('selected-theme',getCurrentTheme())
    localStorage.setItem('selected-icon',getCurrentIcon)
})

const sr =scrollReveal({
    origin: 'top',
    distance: '60px',
    duration:2500,
    delay:400,
   // reset:true  //animation repeat
})
sr.reveal(`.home-prefill ,.about-image .contat-mail`,{origin:'right'})
sr.reveal(`.home-name, .home-info
           .about-container .section-title-1 .about-info .contact-social ,.contact-data`,{origin:'left'})
sr.reveal(`.services-card , .projects-card`,{interval:'100'})

