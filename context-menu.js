// context-menu.js
// Контекстне меню робочого столу (ПКМ) обробляється в gyper_script.js через sys.deskContext()
// Цей файл потрібний тільки для функції createNewFolder(), яка викликається з #desktop-cm

function createNewFolder() {
    const desktopIcons = document.getElementById('desktop-icons');
    if (!desktopIcons) return;
    const folder = document.createElement('div');
    folder.className = 'app-shortcut';
    folder.innerHTML = `
        <div class="icon-lg" style="font-size:40px;display:flex;align-items:center;justify-content:center;">📁</div>
        <span>Нова папка</span>
    `;
    folder.onclick = () => folder.classList.toggle('selected');
    desktopIcons.appendChild(folder);
    document.getElementById('desktop-cm').classList.add('hidden');
}
