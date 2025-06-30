// Script para modal de leitura de capítulos do Solo Leveling
// Cada capítulo pode ter uma imagem diferente (exemplo: imagens fictícias)

document.addEventListener('DOMContentLoaded', function() {
    const chapterLinks = document.querySelectorAll('.chapter-list a');
    const chapterImages = {
        1: [
            'https://meo.comick.pictures/1-Ss0qR0UARif3r.jpg',
            'https://meo.comick.pictures/2--CHl4HJgWR_gO.jpg',
            'https://meo.comick.pictures/3-n4plAWlbyeUot.jpg',
            'https://meo.comick.pictures/4-Oth-bF5t1OBBr.jpg',
            'https://meo.comick.pictures/5-_4cPPqI4hBUdl.jpg',
            'https://meo.comick.pictures/6-uwOiIrzYB8JkT.jpg'
        ],
        2: [
            'https://meo.comick.pictures/1-toSYiLa7P59px.jpg',
            'https://meo.comick.pictures/2-px2SfFjGl3NaR.jpg',
            'https://meo.comick.pictures/3-2Qverw2ggBlYH.jpg',
            'https://meo.comick.pictures/4-rg4KLjtqL0Kfp.jpg',
            'https://meo.comick.pictures/5-8p61dBTtjnqMr.jpg',
            'https://meo.comick.pictures/6-L32QsG0EOnfva.jpg',
            'https://meo.comick.pictures/7-Z_vNRFCc4p5N4.jpg',
            'https://meo.comick.pictures/8-bYAqa0ei3btVH.jpg'
        ],
        3: ['https://static.wikia.nocookie.net/sololeveling/images/9/9e/Cap3.jpg'],
        4: ['https://static.wikia.nocookie.net/sololeveling/images/1/1e/Cap4.jpg'],
        5: ['https://static.wikia.nocookie.net/sololeveling/images/2/2e/Cap5.jpg'],
        6: ['https://static.wikia.nocookie.net/sololeveling/images/3/3e/Cap6.jpg'],
        7: ['https://static.wikia.nocookie.net/sololeveling/images/4/4e/Cap7.jpg'],
        8: ['https://static.wikia.nocookie.net/sololeveling/images/5/5e/Cap8.jpg'],
        9: ['https://static.wikia.nocookie.net/sololeveling/images/6/6e/Cap9.jpg'],
        10: ['https://static.wikia.nocookie.net/sololeveling/images/7/7e/Cap10.jpg']
    };

    function showChapterModal(imgs, title, chapterNum) {
        const modal = document.createElement('div');
        modal.className = 'modal-manhwa';
        let imgsHtml = '';
        if (Array.isArray(imgs)) {
            imgsHtml = imgs.map(src => `<img src="${src}" alt="${title}" style="max-width:100%;border-radius:8px;box-shadow:0 2px 12px #000a;margin-bottom:1rem;">`).join('');
        } else {
            imgsHtml = `<img src="${imgs}" alt="${title}" style="max-width:100%;border-radius:8px;box-shadow:0 2px 12px #000a;margin-bottom:1rem;">`;
        }
        // Botões anterior e próximo capítulo
        let prevBtn = '';
        let nextBtn = '';
        if (chapterImages[chapterNum - 1]) {
            prevBtn = `<button class=\"prev-chapter-modal\" style=\"margin-right:1rem;background:#7dcfff;color:#23263a;border:none;border-radius:6px;padding:0.7rem 1.5rem;font-size:1.1rem;font-weight:600;cursor:pointer;transition:background 0.2s;\">Capítulo Anterior</button>`;
        }
        if (chapterImages[chapterNum + 1]) {
            nextBtn = `<button class=\"next-chapter-modal\" style=\"margin-left:1rem;background:#7dcfff;color:#23263a;border:none;border-radius:6px;padding:0.7rem 1.5rem;font-size:1.1rem;font-weight:600;cursor:pointer;transition:background 0.2s;\">Próximo Capítulo</button>`;
        }
        modal.innerHTML = `
            <div class=\"modal-bg\"></div>
            <div class=\"modal-content\" style=\"max-height:90vh;overflow-y:auto;\">
                <h2 style=\"color:#7dcfff;\">${title}</h2>
                ${imgsHtml}
                <div style=\"display:flex;justify-content:center;margin-top:1.5rem;\">
                    ${prevBtn}
                    <button class=\"close-modal\">Fechar</button>
                    ${nextBtn}
                </div>
            </div>
        `;
        document.body.appendChild(modal);
        modal.querySelector('.close-modal').onclick = () => modal.remove();
        modal.querySelector('.modal-bg').onclick = () => modal.remove();
        const nextChapterBtn = modal.querySelector('.next-chapter-modal');
        if (nextChapterBtn) {
            nextChapterBtn.onclick = () => {
                modal.remove();
                const nextImgs = chapterImages[chapterNum + 1];
                showChapterModal(nextImgs, `Capítulo ${chapterNum + 1}`, chapterNum + 1);
            };
        }
        const prevChapterBtn = modal.querySelector('.prev-chapter-modal');
        if (prevChapterBtn) {
            prevChapterBtn.onclick = () => {
                modal.remove();
                const prevImgs = chapterImages[chapterNum - 1];
                showChapterModal(prevImgs, `Capítulo ${chapterNum - 1}`, chapterNum - 1);
            };
        }
    }

    chapterLinks.forEach((link, idx) => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const chapterNum = idx + 1;
            const imgs = chapterImages[chapterNum] || chapterImages[1];
            showChapterModal(imgs, `Capítulo ${chapterNum}`, chapterNum);
        });
    });
});
