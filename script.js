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
    black: { img: 's1-black.png' },
    white: { img: 's1-white.png' }, 
    blue:  { img: 's1-blue.png' }
};

function changeColor(colorKey, label) {
    const previewImg = document.getElementById('main-mouse-image');
    const labelEl = document.getElementById('current-color-name'); // IDを合わせました
    const dots = document.querySelectorAll('.dot');

    if (!previewImg) return; // エラー防止

    // 1. フェードアウト
    previewImg.style.opacity = '0';

    setTimeout(() => {
        // 画像と文字を差し替え
        previewImg.src = mouseStyles[colorKey].img;
        if (labelEl) labelEl.innerText = label;

        // 3. ドットのアクティブ表示切り替え
        dots.forEach(dot => dot.classList.remove('active'));
        
        // 現在のイベントターゲット（ホバーしたドット）を強調
        if (window.event && window.event.target) {
            window.event.target.classList.add('active');
        }

        // 4. フェードイン
        previewImg.style.opacity = '1';
    }, 200); 
}

// もとの集合画像の情報を定義
const defaultImage = 'strike-1_3color.png';
const defaultLabel = 'Shadow Black'; // または 'Choose Your Style' など

function resetColor() {
    const previewImg = document.getElementById('main-mouse-image');
    const labelEl = document.getElementById('current-color-name');
    const dots = document.querySelectorAll('.dot');

    if (!previewImg) return;

    // 1. フェードアウト
    previewImg.style.opacity = '0';

    setTimeout(() => {
        // 2. もとの画像とラベルに戻す
        previewImg.src = defaultImage;
        if (labelEl) labelEl.innerText = defaultLabel;

        // 3. 全てのドットから active クラスを消す
        dots.forEach(dot => dot.classList.remove('active'));

        // 4. フェードイン
        previewImg.style.opacity = '1';
    }, 200);
}