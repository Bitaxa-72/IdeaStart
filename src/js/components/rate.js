export const rateStars = () => {
    const categories = ['relevance', 'uniqueness', 'potential', 'readiness'];

    categories.forEach((cat) => {
        const container = document.querySelector(`.rating-box__stars[data-category="${cat}"]`);
        if (!container) return;

        for (let i = 1; i <= 5; i++) {
            const star = document.createElement('span');
            star.classList.add('star');
            star.innerHTML = '★';
            star.dataset.value = i;

            star.addEventListener('click', () => {
                const allStars = container.querySelectorAll('.star');
                allStars.forEach((s, idx) => {
                    s.classList.toggle('active', idx < i);
                });

                container.dataset.rating = i;
            });

            container.appendChild(star);
        }
    });
};
