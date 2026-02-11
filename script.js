// スクロール検知アニメーションの設定
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });

// 全てのfeature-cardとspecテーブルにクラスを適用
document.querySelectorAll('.feature-card, .specs, table').forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
});

// 画像パスの定義
const mouseStyles = {
    'all': { img: 'strike-1_3color.png', label: 'STRIKE-1 Full Lineup' },
    'black': { img: 's1-black.png', label: 'Shadow Black' },
    'white': { img: 's1-white.png', label: 'Polar White' },
    'blue': { img: 's1-blue.png', label: 'Nova Blue' },
};

/**
 * カラー変更関数
 * @param {string} colorKey - mouseStylesのキー ('all', 'black' など)
 * @param {HTMLElement} element - クリックされたドット要素 (this)
 */

function changeColor(colorKey, element) {
    const previewImg = document.getElementById('main-mouse-image');
    const labelEl = document.getElementById('current-color-name');
    const dots = document.querySelectorAll('.dot');

    if (!previewImg || !mouseStyles[colorKey]) return;

    // 1. フェードアウト
    previewImg.style.opacity = '0';

    setTimeout(() => {
        // 2. 画像と文字を差し替え
        previewImg.src = mouseStyles[colorKey].img;
        if (labelEl) labelEl.innerText = mouseStyles[colorKey].label;

        // 3. ドットのアクティブ表示切り替え
        dots.forEach(dot => dot.classList.remove('active'));
        if (element) {
            element.classList.add('active');
        }

        // 4. フェードイン
        previewImg.style.opacity = '1';
    }, 200); 
}