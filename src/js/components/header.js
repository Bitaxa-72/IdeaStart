export const dropDownIdeas = () => {
    const dropDownIdeasBtn = document.querySelector('[data-list="dropDownIdeas-btn"]');
    const dropDownIdeasList = document.querySelector('[data-list="dropDownIdeas"]');

    const closeDropdown = () => {
        dropDownIdeasList.classList.remove('dropdown--open');
    }

    dropDownIdeasBtn.addEventListener('click', () => {
        dropDownIdeasList.classList.toggle('dropdown--open');
    })
};

export const dropDownMenu = () => {
    const dropDownMenuBtn = document.querySelector('[data-list="dropDownMenu-btn"]');
    const dropDownMenuList = document.querySelector('[data-list="dropDownMenu"]');

    const closeDropdown = () => {
        dropDownMenuList.classList.remove('dropdown--open');
    }

    dropDownMenuBtn.addEventListener('click', () => {
        dropDownMenuList.classList.toggle('dropdown--open');
    })
};

