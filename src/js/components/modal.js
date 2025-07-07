export const switchMenu = () => {
    const signIn = document.querySelector('[data-menu="signIn"]');
    const signUp = document.querySelector('[data-menu="signUp"]');
    const windowSignIn = document.querySelector('[data-window="firstWindow"]');
    const windowSignUp = document.querySelector('[data-window="secondWindow"]');

    const activeWindow = () => {
        signIn.addEventListener('click', () => {
            if (signIn.classList.contains('modal__signIn--active')) return;

            signIn.classList.toggle('modal__signIn--active');
            signUp.classList.remove('modal__signIn--active');
            windowSignIn.classList.toggle('modal__switchMenu--active');
            windowSignUp.classList.remove('modal__switchMenu--active');
        })

        signUp.addEventListener('click', () => {
            if (signUp.classList.contains('modal__signIn--active')) return;

            signUp.classList.toggle('modal__signIn--active');
            signIn.classList.remove('modal__signIn--active');
            windowSignUp.classList.toggle('modal__switchMenu--active');
            windowSignIn.classList.remove('modal__switchMenu--active');
        })
    }
    activeWindow();
}

export const modalWindow = () => {
    const modal = document.querySelector('.modal')
    const modalButton = document.querySelector('.ideas__stats-btn')

    modalButton.addEventListener('click', openModal)
    modal.addEventListener('click', closeModal)

    function openModal(e) {
        e.preventDefault()
        document.body.classList.toggle('body--opened-modal')
    }

    function closeModal(e) {
        e.preventDefault()

        const target = e.target

        if (target.closest('.modal__cancel') || target.classList.contains('modal')) {
            document.body.classList.remove('body--opened-modal')
        }

    }
}

