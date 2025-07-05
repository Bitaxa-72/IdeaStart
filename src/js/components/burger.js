export const useBurger = () => {
    console.log('useBurger is running...');

    const burgerBtn = document.querySelector('[data-burger="btn"]');
    const sidebarMenu = document.querySelector('[data-burger="sidebar"]');
    const overlay = document.querySelector('[data-burger="overlay"]');

    const closeSidebar = () => {
        overlay.addEventListener('click', () =>{
            sidebarMenu.classList.remove('mobile--menu');
            overlay.classList.remove('active');
        })
    }

    burgerBtn.addEventListener('click', () => {
        sidebarMenu.classList.toggle('mobile--menu');
        overlay.classList.toggle('active');
    })

    closeSidebar();

    
}