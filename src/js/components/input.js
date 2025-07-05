export const nameFile = () => {
    const fileInput = document.querySelector('.file-input');
    const filePlaceholder = document.querySelector('.file-placeholder');

    if (fileInput && filePlaceholder) {
        fileInput.addEventListener('change', () => {
            const fileName = fileInput.files.length > 0 ? fileInput.files[0].name : 'File attach';
            filePlaceholder.textContent = fileName;
        });
    }

}

export const tagSet = () => {
    (function initTagsInput() {
        const tagWrapper = document.querySelector('#idea-tag');
        if (!tagWrapper) return;

        const tagInput = tagWrapper.querySelector('.tag-input-field');
        if (!tagInput) return;

        let tags = [];

        tagInput.addEventListener('keydown', (e) => {
            if ((e.key === 'Enter' || e.key === ',') && tagInput.value.trim() !== '') {
                e.preventDefault();
                const tag = tagInput.value.trim();

                if (!tags.includes(tag) && tags.length < 5) {
                    tags.push(tag);
                    renderTags();
                }

                tagInput.value = '';
            }
        });

        tagWrapper.addEventListener('click', (e) => {
            if (e.target.classList.contains('tag-close')) {
                const index = e.target.dataset.index;
                tags.splice(index, 1);
                renderTags();
            }
        });

        function renderTags() {
            tagWrapper.querySelectorAll('.tag').forEach(el => el.remove());

            tags.forEach((tag, index) => {
                const tagEl = document.createElement('span');
                tagEl.className = 'tag';
                tagEl.innerHTML = `
        ${tag}
        <span class="tag-close" data-index="${index}">&times;</span>
      `;
                tagWrapper.insertBefore(tagEl, tagInput);
            });
        }
    })();


}

export const imageGallery = () => {
    (function () {
        const uploadBox = document.querySelector('#uploadBox');
        const input = document.querySelector('#imageUploadInput');
        const preview = document.querySelector('.image-preview-list');
        const text = uploadBox?.querySelector('.upload-text p');
        const MAX_FILES = 5;

        if (!uploadBox || !input || !preview || !text) return;

        uploadBox.addEventListener('click', () => input.click());

        input.addEventListener('change', () => {
            const files = Array.from(input.files);
            const limitedFiles = files.slice(0, MAX_FILES);

            preview.innerHTML = ''; // очистим старое

            limitedFiles.forEach(file => {
                if (!file.type.startsWith('image/')) return;

                const reader = new FileReader();
                reader.onload = () => {
                    const img = document.createElement('img');
                    img.src = reader.result;
                    preview.appendChild(img);
                };
                reader.readAsDataURL(file);
            });

            text.textContent = `Click to upload images (${limitedFiles.length}/${MAX_FILES})`;
        });
    })();

}
