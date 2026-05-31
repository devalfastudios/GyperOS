const ICONS = {
    folder:'<svg viewBox="0 0 24 24" fill="#F8D775"><path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"/></svg>',
    file:'<svg viewBox="0 0 24 24" fill="#FFF"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>',
    trash:'<svg viewBox="0 0 24 24" fill="#ddd"><path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z"/></svg>',
    settings:'<svg viewBox="0 0 24 24" fill="#999"><path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L3.16 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.04.24.24.41.48.41h3.84c.24 0 .43-.17.47-.41l.36-2.54c.59-.24 1.13-.57 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58z"/></svg>',
    calc:'<svg viewBox="0 0 24 24" fill="#00d2ff"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-6 14H7v-2h6v2zm4-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>',
    browser:'<svg viewBox="0 0 24 24" fill="#38ef7d"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>',
    word:'<svg viewBox="0 0 24 24" fill="#2b5797"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>',
    excel:'<svg viewBox="0 0 24 24" fill="#217346"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>',
    clock:'<svg viewBox="0 0 24 24" fill="#e0e0e0"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>',
    store:'<svg viewBox="0 0 24 24" fill="#ff5f6d"><path d="M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z"/></svg>',
    paint:'<svg viewBox="0 0 24 24" fill="#ffbd2e"><path d="M7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3zm13.71-9.37l-1.34-1.34c-.39-.39-1.02-.39-1.41 0L9 12.25 11.75 15l8.96-8.96c.39-.39.39-1.02 0-1.41z"/></svg>',
    weather:'<svg viewBox="0 0 24 24" fill="#ffeb3b"><path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79 1.42-1.41zM4 10.5H1v2h3v-2zm9-9.16V1.33h-2v2.5h2zM12 5.5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm8.5 3.5l1.79-1.79-1.41-1.41-1.79 1.79 1.41 1.41zM23 10.5h-3v2h3v-2zm-2.85 9.14l-1.79-1.79-1.41 1.41 1.79 1.8 1.41-1.42zM13 22.45v-2.5h-2v2.5h2zm-7.45-2.91l1.8-1.79 1.41 1.41-1.79 1.8-1.42-1.42z"/></svg>',
    music:'<svg viewBox="0 0 24 24" fill="#e91e63"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg>',
    cal:'<svg viewBox="0 0 24 24" fill="#64b5f6"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/></svg>',
    task:'<svg viewBox="0 0 24 24" fill="#4caf50"><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/></svg>',
    close:'<svg viewBox="0 0 24 24" width="100%" height="100%"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="currentColor"/></svg>',
    max:'<svg viewBox="0 0 24 24" width="100%" height="100%"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" fill="currentColor"/></svg>',
    min:'<svg viewBox="0 0 24 24" width="100%" height="100%"><path d="M19 13H5v-2h14v2z" fill="currentColor"/></svg>',
    txtFile:'<svg viewBox="0 0 24 24" fill="#e0e0e0"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>',
};

const STORE_APPS = [
    {id:'vlc',name:'VLC',icon:'<svg viewBox="0 0 24 24" fill="#ff6600"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>',desc:'Медіаплеєр',rating:'★★★★★',size:'45MB',cat:'media'},
    {id:'gimp',name:'GIMP',icon:'<svg viewBox="0 0 24 24" fill="#5c5543"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/></svg>',desc:'Редактор зображень',rating:'★★★★☆',size:'120MB',cat:'graphics'},
    {id:'vscode',name:'VS Code',icon:'<svg viewBox="0 0 24 24" fill="#007acc"><path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99z"/></svg>',desc:'Редактор коду',rating:'★★★★★',size:'85MB',cat:'dev'},
    {id:'telegram',name:'Telegram',icon:'<svg viewBox="0 0 24 24" fill="#2ca5e0"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.2-.04-.28-.02-.12.02-1.96 1.25-5.54 3.69-.52.36-1 .53-1.42.52-.47-.01-1.37-.26-2.03-.48-.82-.27-1.47-.42-1.42-.88.03-.25.38-.51 1.07-.78 4.19-1.82 6.98-3.02 8.38-3.6 3.99-1.66 4.82-1.95 5.36-1.96.12 0 .38.03.55.18.14.12.18.28.2.45-.02.07-.02.13-.03.27z"/></svg>',desc:'Месенджер',rating:'★★★★★',size:'32MB',cat:'social'},
    {id:'discord',name:'Discord',icon:'<svg viewBox="0 0 24 24" fill="#7289da"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/></svg>',desc:'Голосовий чат',rating:'★★★★★',size:'67MB',cat:'social'},
    {id:'spotify',name:'Spotify',icon:'<svg viewBox="0 0 24 24" fill="#1db954"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>',desc:'Музика онлайн',rating:'★★★★★',size:'78MB',cat:'media'},
    {id:'obs',name:'OBS',icon:'<svg viewBox="0 0 24 24" fill="#302e31"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 3c4.97 0 9 4.03 9 9s-4.03 9-9 9-9-4.03-9-9 4.03-9 9-9z"/></svg>',desc:'Стрімінг та запис',rating:'★★★★☆',size:'95MB',cat:'media'},
    {id:'libreoffice',name:'LibreOffice',icon:'<svg viewBox="0 0 24 24" fill="#18A303"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/></svg>',desc:'Офісний пакет',rating:'★★★★☆',size:'210MB',cat:'office'},
    {id:'minecraft',name:'Minecraft',icon:'<svg viewBox="0 0 24 24" fill="#54a22b"><path d="M2 2h9v9H2V2zm11 0h9v9h-9V2zm-11 11h9v9H2v-9zm11 0h9v9h-9v-9z"/></svg>',desc:'Пісочниця',rating:'★★★★★',size:'320MB',cat:'games'},
    {id:'steam',name:'Steam',icon:'<svg viewBox="0 0 24 24" fill="#1b2838"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/></svg>',desc:'Ігровий магазин',rating:'★★★★☆',size:'150MB',cat:'games'},
];

const sys = {
    config:{
        themeColor:'#00d2ff', winStyle:'win', radius:'8px',
        password:null, animations:true, activated:false,
        lang:'ukr', wallpaper:'linear-gradient(135deg,#0f2027,#203a43,#2c5364)',
        lockWall:'linear-gradient(135deg,#0f2027,#2c5364)',
        bootStyle:{color:'#00d2ff',bg:'#000',bar:false},
        timeOffset:0, brightness:100, volume:50, hz:144,
        autoStart:[], muted:false,
    },
    state:{
        brightness:100, volume:50, wifi:true, bt:false, dnd:false, plane:false, night:false,
        alarmTime:null, alarmTriggered:false,
    },
    apps:[], windows:{}, topZ:100,
    files:{
        "Desktop":{"Замітки.gsp":"Це файл збережений на столі"},
        "Gsys":{"_lock":true},
        "Docs":{"Привіт.gsp":"Тест"}
    },
    trash:{}, notifs:[], installedStoreApps:[],

    /* === BOOT === */
    boot:function(){
        const saved = localStorage.getItem('gyper_os_data_v5');
        if(saved){
            const data = JSON.parse(saved);
            this.config = {...this.config,...data.config};
            this.files = data.files||this.files;
            this.installedStoreApps = data.installedStoreApps||[];
        }
        this.state.brightness = this.config.brightness;
        this.state.volume = this.config.volume;
        document.getElementById('off-screen').style.display='none';
        document.getElementById('boot-screen').style.display='flex';
        this.applyBootStyle();
        if(!sessionStorage.getItem('booted')){
            setTimeout(()=>this.playBootSound(),500);
            sessionStorage.setItem('booted','true');
        } else { this.playBootSound(); }
        if(this.config.activated) document.getElementById('watermark').style.display='none';
        setTimeout(()=>{
            document.getElementById('boot-screen').style.display='none';
            document.getElementById('lock-screen').style.display='flex';
            document.getElementById('lock-screen').style.background=this.config.lockWall;
            this.updateLockClock();
        }, 3000);
        this.init();
    },

    init:function(){
        this.updateClock();
        setInterval(()=>this.tick(),1000);
        this.registerApp("calc","Калькулятор",ICONS.calc,this.renderCalc.bind(this));
        this.registerApp("browser","GBrowser",ICONS.browser,this.renderBrowser.bind(this));
        this.registerApp("word","GWord",ICONS.word,this.renderWord.bind(this));
        this.registerApp("table","GTable",ICONS.excel,this.renderTable.bind(this));
        this.registerApp("files","Провідник",ICONS.folder,this.renderFiles.bind(this));
        this.registerApp("settings","Налаштування",ICONS.settings,this.renderSettings.bind(this));
        this.registerApp("clock","Часи",ICONS.clock,this.renderClock.bind(this));
        this.registerApp("store","GStore",ICONS.store,this.renderStore.bind(this));
        this.registerApp("paint","Paint",ICONS.paint,this.renderPaint.bind(this));
        this.registerApp("weather","Погода",ICONS.weather,this.renderWeather.bind(this));
        this.registerApp("music","GMusic",ICONS.music,this.renderMusic.bind(this));
        this.registerApp("calendar","Календар",ICONS.cal,this.renderCal.bind(this));
        this.registerApp("taskmgr","Диспетчер",ICONS.task,this.renderTaskMgr.bind(this));
        this.registerApp("trash","Кошик",ICONS.trash,this.renderTrash.bind(this));
        // Installed store apps
        this.installedStoreApps.forEach(id=>{
            const sa=STORE_APPS.find(a=>a.id===id);
            if(sa && !this.apps.find(a=>a.id===id)){
                this.registerApp(sa.id,sa.name,sa.icon,()=>{});
            }
        });
        this.renderDesktop();
        this.renderTaskbar();
        this.renderSideMenu();
        document.getElementById('desktop').style.filter=`brightness(${this.state.brightness}%)`;
        document.getElementById('desktop').style.background=this.config.wallpaper;
        document.getElementById('desktop').style.backgroundSize='cover';
        document.addEventListener('click',e=>this.globalClick(e));
        document.addEventListener('keydown',e=>this.hotkeys(e));
        document.getElementById('desktop').addEventListener('contextmenu',e=>this.deskContext(e));
        this.config.autoStart.forEach(id=>this.openApp(id));
    },

    save:function(){
        localStorage.setItem('gyper_os_data_v5',JSON.stringify({
            config:this.config, files:this.files, installedStoreApps:this.installedStoreApps
        }));
    },
    saveSettings:function(){ this.config.brightness=this.state.brightness; this.config.volume=this.state.volume; this.save(); },

    /* === LOCK === */
    updateLockClock:function(){
        const now=new Date();
        const h=String(now.getHours()).padStart(2,'0');
        const m=String(now.getMinutes()).padStart(2,'0');
        const tel=document.getElementById('lock-time-disp');
        const del=document.getElementById('lock-date-disp');
        if(tel) tel.textContent=h+':'+m;
        if(del){
            const days=['Неділя','Понеділок','Вівторок','Середа','Четвер','П\'ятниця','Субота'];
            const months=['січня','лютого','березня','квітня','травня','червня','липня','серпня','вересня','жовтня','листопада','грудня'];
            del.textContent=days[now.getDay()]+', '+now.getDate()+' '+months[now.getMonth()];
        }
    },

    login:function(){
        const passVal=document.getElementById('lock-pass').value;
        if(this.config.password && passVal!==this.config.password){ alert("Невірний пароль!"); return; }
        document.getElementById('lock-screen').style.opacity='0';
        setTimeout(()=>{
            document.getElementById('lock-screen').style.display='none';
            document.getElementById('desktop').style.display='block';
            // Show login message
            const lm=document.getElementById('login-msg');
            const h=new Date().getHours();
            const greet=h<6?'Доброї ночі!':h<12?'Доброго ранку!':h<18?'Добрий день!':'Добрий вечір!';
            document.getElementById('login-msg-text').textContent=greet;
            lm.style.display='block';
            setTimeout(()=>{ lm.style.display='none'; },3000);
            this.notify("Система","Ласкаво просимо!",true);
        },500);
    },

    lock:function(){
        document.getElementById('desktop').style.display='none';
        document.getElementById('lock-screen').style.display='flex';
        document.getElementById('lock-screen').style.opacity='1';
        document.getElementById('lock-screen').style.background=this.config.lockWall;
        document.getElementById('lock-pass').value='';
        document.getElementById('quick-settings').classList.remove('open');
        this.updateLockClock();
        setInterval(()=>this.updateLockClock(),1000);
    },

    /* === POWER === */
    shutdown:function(){
        document.getElementById('quick-settings').classList.remove('open');
        document.getElementById('desktop').style.display='none';
        document.getElementById('lock-screen').style.display='none';
        document.getElementById('off-screen').style.display='flex';
    },
    restart:function(){ location.reload(); },
    doSleep:function(){
        const ol=document.createElement('div');
        ol.style.cssText='position:fixed;inset:0;z-index:9998;background:#000;opacity:0;transition:opacity 0.5s;cursor:pointer;';
        ol.title='Клікніть щоб прокинутися';
        document.body.appendChild(ol);
        setTimeout(()=>{ ol.style.opacity='1'; },50);
        ol.addEventListener('click',()=>{
            ol.style.opacity='0';
            setTimeout(()=>ol.remove(),500);
            this.notify("Система","Вихід зі сну",true);
        });
    },
    showPowerMenu:function(){ document.getElementById('power-menu-overlay').classList.add('open'); },
    hidePowerMenu:function(){ document.getElementById('power-menu-overlay').classList.remove('open'); },

    playBootSound:function(){
        try{
            const ctx=new(window.AudioContext||window.webkitAudioContext)();
            const o=ctx.createOscillator(); const g=ctx.createGain();
            o.connect(g); g.connect(ctx.destination);
            o.type='sine'; o.frequency.setValueAtTime(220,ctx.currentTime);
            o.frequency.exponentialRampToValueAtTime(440,ctx.currentTime+0.4);
            o.frequency.exponentialRampToValueAtTime(880,ctx.currentTime+1.2);
            g.gain.setValueAtTime(0.08,ctx.currentTime);
            g.gain.exponentialRampToValueAtTime(0.01,ctx.currentTime+2.5);
            o.start(); o.stop(ctx.currentTime+3);
        }catch(e){}
    },

    /* === APPS === */
    registerApp:function(id,name,icon,renderer){
        this.apps.push({id,name,icon,renderer,pinned:false,installed:true,process:null});
    },

    openApp:function(id,extra){
        const app=this.apps.find(a=>a.id===id);
        if(!app||!app.installed) return;
        if(this.windows[id]){ this.activateWin(id); return; }
        const win=document.createElement('div');
        win.id=`win-${id}`; win.className='window active';
        win.style.zIndex=++this.topZ;
        const isMac=this.config.winStyle==='mac';
        const ctrlClass=isMac?'wc-mac':'wc-win';
        const controls=isMac
            ?`<div class="win-btn close" onclick="sys.closeWin('${id}')">x</div><div class="win-btn min" onclick="sys.minWin('${id}')">-</div><div class="win-btn max" onclick="sys.maxWin('${id}')">+</div>`
            :`<div class="win-btn min" onclick="sys.minWin('${id}')">${ICONS.min}</div><div class="win-btn max" onclick="sys.maxWin('${id}')">${ICONS.max}</div><div class="win-btn close" onclick="sys.closeWin('${id}')">${ICONS.close}</div>`;
        win.innerHTML=`
            <div class="win-header" onmousedown="sys.dragStart(event,'${id}')">
                <div class="win-title">${app.icon} ${app.name}</div>
                <div class="win-controls ${ctrlClass}">${controls}</div>
            </div>
            <div class="win-body" id="body-${id}"></div>`;
        document.getElementById('windows-area').appendChild(win);
        this.windows[id]={max:false,min:false};
        app.process={pid:Math.random().toString(36).substring(7),startTime:Date.now(),memory:Math.floor(Math.random()*50)+20};
        app.renderer(id,extra);
        win.style.display='flex';
        this.renderTaskbar();
        win.addEventListener('mousedown',()=>this.activateWin(id));
        document.getElementById('side-menu').classList.remove('open');
        document.getElementById('sm-backdrop').style.display='none';
    },

    closeWin:function(id){
        const app=this.apps.find(a=>a.id===id);
        if(app) app.process=null;
        const el=document.getElementById(`win-${id}`);
        if(el){
            el.classList.remove('minimizing','unminimizing');
            el.classList.add('closing');
            setTimeout(()=>el.remove(),220);
        }
        delete this.windows[id];
        this.renderTaskbar(); this.save();
    },
    minWin:function(id){
        const w=document.getElementById(`win-${id}`);
        if(!w) return;
        w.classList.remove('unminimizing');
        w.classList.add('minimizing');
        setTimeout(()=>{ w.style.display='none'; w.classList.remove('minimizing'); },220);
        this.windows[id].min=true; this.renderTaskbar();
    },
    maxWin:function(id){
        const w=document.getElementById(`win-${id}`);
        if(this.windows[id].max){
            w.style.width='700px';w.style.height='500px';
            w.style.top='80px';w.style.left='100px';
            w.style.borderRadius=this.config.radius; this.windows[id].max=false;
        } else {
            w.style.width='100%';w.style.height=`calc(100% - var(--taskbar-h))`;
            w.style.top='0';w.style.left='0';w.style.borderRadius='0';
            this.windows[id].max=true;
        }
    },
    activateWin:function(id){
        const w=document.getElementById(`win-${id}`);
        if(!w) return;
        if(this.windows[id].min){
            w.style.display='flex';
            w.classList.remove('minimizing','closing');
            void w.offsetWidth; // reflow
            w.classList.add('unminimizing');
            setTimeout(()=>w.classList.remove('unminimizing'),280);
            this.windows[id].min=false;
        }
        w.style.zIndex=++this.topZ;
        document.querySelectorAll('.window').forEach(e=>e.classList.remove('active'));
        w.classList.add('active'); this.renderTaskbar();
    },
    dragStart:function(e,id){
        if(e.target.closest('.win-btn')) return;
        const w=document.getElementById(`win-${id}`);
        if(this.windows[id].max) return;
        let sx=e.clientX-w.getBoundingClientRect().left;
        let sy=e.clientY-w.getBoundingClientRect().top;
        const mm=(ev)=>{ w.style.left=(ev.clientX-sx)+'px'; w.style.top=Math.max(0,ev.clientY-sy)+'px'; };
        document.addEventListener('mousemove',mm);
        document.onmouseup=()=>{ document.removeEventListener('mousemove',mm); document.onmouseup=null; };
    },

    /* === SIDE MENU === */
    toggleSideMenu:function(){
        const m=document.getElementById('side-menu');
        const b=document.getElementById('sm-backdrop');
        const isOpen=m.classList.contains('open');
        if(isOpen){ m.classList.remove('open'); b.style.display='none'; }
        else { m.classList.add('open'); b.style.display='block'; document.getElementById('sm-search-input').focus(); }
    },
    closeSideMenu:function(){
        document.getElementById('side-menu').classList.remove('open');
        document.getElementById('sm-backdrop').style.display='none';
    },
    renderSideMenu:function(filter){
        const list=document.getElementById('sm-app-list');
        if(!list) return;
        const apps=this.apps.filter(a=>a.installed&&(!filter||a.name.toLowerCase().includes(filter.toLowerCase())));
        const appDescs={
            calc:'Обчислення', browser:'Веб-браузер', word:'Текстовий редактор',
            table:'Таблиці', files:'Файловий менеджер', settings:'Параметри ОС',
            clock:'Годинник та таймер', store:'Магазин додатків', paint:'Малювання',
            weather:'Прогноз погоди', music:'Музичний плеєр', calendar:'Календар',
            taskmgr:'Процеси та ресурси', trash:'Кошик'
        };
        // Tile colors for Win 8.1 style
        const tileColors={
            calc:'#1878d0',browser:'#107c10',word:'#2b579a',table:'#217346',
            files:'#e8a000',settings:'#5d5d5d',clock:'#1e4d78',store:'#c30052',
            paint:'#ff8c00',weather:'#0063b1',music:'#c3145a',calendar:'#0078d7',
            taskmgr:'#2d7d46',trash:'#555'
        };
        if(!filter){
            // Tiles grid on top
            const tilesHtml=`
                <div class="sm-label">Закріплені</div>
                <div class="sm-tiles-grid">
                    ${apps.slice(0,9).map(a=>`
                        <div class="sm-tile" style="background:${tileColors[a.id]||'#333'};"
                            data-app-id="${a.id}"
                            onclick="sys.openApp('${a.id}');sys.closeSideMenu();"
                            oncontextmenu="sys._sideMenuContext(event,'${a.id}')">
                            <div class="sm-tile-icon">${a.icon}</div>
                            <div class="sm-tile-name">${a.name}</div>
                        </div>`).join('')}
                </div>
                <div class="sm-label" style="margin-top:8px;">Всі додатки</div>
                ${apps.map(a=>`
                    <div class="sm-item" data-app-id="${a.id}"
                        onclick="sys.openApp('${a.id}');sys.closeSideMenu();"
                        oncontextmenu="sys._sideMenuContext(event,'${a.id}')">
                        <div class="sm-item-icon">${a.icon}</div>
                        <div class="sm-item-info">
                            <div class="sm-item-name">${a.name}</div>
                            <div class="sm-item-desc">${appDescs[a.id]||'Додаток'}</div>
                        </div>
                    </div>`).join('')}`;
            list.innerHTML=tilesHtml;
        } else {
            list.innerHTML=`<div class="sm-label">Результати пошуку</div>`+
                apps.map(a=>`
                    <div class="sm-item" data-app-id="${a.id}"
                        onclick="sys.openApp('${a.id}');sys.closeSideMenu();"
                        oncontextmenu="sys._sideMenuContext(event,'${a.id}')">
                        <div class="sm-item-icon">${a.icon}</div>
                        <div class="sm-item-info">
                            <div class="sm-item-name">${a.name}</div>
                            <div class="sm-item-desc">${appDescs[a.id]||'Додаток'}</div>
                        </div>
                    </div>`).join('');
        }
    },
    _sideMenuContext:function(e,id){
        e.preventDefault(); e.stopPropagation();
        const app=this.apps.find(a=>a.id===id);
        if(!app) return;
        const deskPinned=app.deskPinned;
        const tbPinned=app.tbPinned;
        this.contextMenu(e.clientX,e.clientY,[
            {label:'▶ Відкрити',action:()=>{ this.openApp(id); this.closeSideMenu(); }},
            {sep:true},
            {label:(deskPinned?'🖥 Прибрати з робочого столу':'🖥 Додати на робочий стіл'),action:()=>{
                app.deskPinned=!app.deskPinned;
                app.pinned=app.deskPinned||app.tbPinned;
                this.renderDesktop();
                this.notify(app.name, app.deskPinned?'Додано на робочий стіл':'Прибрано з робочого столу', true);
                this.save();
            }},
            {label:(tbPinned?'📌 Відкріпити від панелі':'📌 Закріпити на панелі задач'),action:()=>{
                app.tbPinned=!app.tbPinned;
                app.pinned=app.deskPinned||app.tbPinned;
                this.renderTaskbar();
                this.notify(app.name, app.tbPinned?'Закріплено на панелі задач':'Відкріплено від панелі', true);
                this.save();
            }},
        ]);
    },
    filterSideMenu:function(q){ this.renderSideMenu(q); },

    /* === NOTIFICATIONS === */
    notify:function(title,msg,force,isAlarm){
        if(this.state.dnd&&!force){ this.notifs.push({title,msg,time:new Date(),isAlarm}); return; }
        this.showToast(title,msg,new Date(),isAlarm);
        this.notifs.push({title,msg,time:new Date(),isAlarm});
    },
    showToast:function(title,msg,time,isAlarm){
        const c=document.getElementById('notif-center');
        const n=document.createElement('div'); n.className='toast';
        let btn=isAlarm?`<button class="toast-btn" onclick="sys.disableAlarm()">Вимкнути будильник</button>`:'';
        n.innerHTML=`<div class="toast-time">${time.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})}</div><strong>${title}</strong><br>${msg}${btn}`;
        n.onclick=(e)=>{ if(!e.target.closest('.toast-btn')){ n.classList.add('hiding'); setTimeout(()=>n.remove(),400); }};
        c.appendChild(n);
        if(!this.config.muted){
            try{
                const ctx=new(window.AudioContext||window.webkitAudioContext)();
                const o=ctx.createOscillator(); const g=ctx.createGain();
                o.frequency.value=isAlarm?800:600; g.gain.value=0.08;
                o.connect(g); g.connect(ctx.destination);
                o.start(); o.stop(ctx.currentTime+(isAlarm?0.3:0.1));
            }catch(e){}
        }
        setTimeout(()=>{ if(n.parentNode&&!isAlarm){ n.classList.add('hiding'); setTimeout(()=>n.remove(),400); }},5000);
    },
    disableAlarm:function(){
        this.state.alarmTime=null; this.state.alarmTriggered=false;
        const ai=document.getElementById('alarm-in'); if(ai) ai.value='';
        document.querySelectorAll('.toast').forEach(t=>{
            if(t.innerHTML.includes('Будильник')){ t.classList.add('hiding'); setTimeout(()=>t.remove(),400); }
        });
        this.notify("Будильник","Вимкнено",true);
    },
    toggleNotifPanel:function(){
        const p=document.getElementById('notif-panel');
        const h=document.getElementById('notif-history');
        if(p.classList.contains('open')){ p.classList.remove('open'); return; }
        h.innerHTML=this.notifs.length===0?'<p style="text-align:center;color:#777;padding:20px">Немає сповіщень</p>':'';
        this.notifs.forEach(n=>{
            const d=document.createElement('div');
            d.style="background:rgba(255,255,255,0.04);padding:10px;margin-bottom:5px;border-radius:6px;font-size:13px;cursor:pointer;border:1px solid rgba(255,255,255,0.06);";
            d.innerHTML=`<div style="font-size:10px;color:#aaa">${n.time.toLocaleTimeString()}</div><b>${n.title}</b><br>${n.msg}`;
            d.onclick=()=>d.remove();
            h.appendChild(d);
        });
        p.classList.add('open');
        document.getElementById('quick-settings').classList.remove('open');
    },
    clearNotifs:function(){ this.notifs=[]; this.toggleNotifPanel(); },

    /* === UI === */
    globalClick:function(e){
        if(!e.target.closest('.app-shortcut')) document.querySelectorAll('.app-shortcut').forEach(el=>el.classList.remove('selected'));
        if(!e.target.closest('#context-menu')) document.getElementById('context-menu').style.display='none';
        if(!e.target.closest('#quick-settings')&&!e.target.closest('#qs-btn')&&!e.target.closest('.tb-clock-area'))
            document.getElementById('quick-settings').classList.remove('open');
        if(!e.target.closest('#notif-panel')&&!e.target.closest('.tb-tray-icons'))
            document.getElementById('notif-panel').classList.remove('open');
        if(!e.target.closest('#power-menu-overlay>.power-dialog')&&e.target.id==='power-menu-overlay')
            this.hidePowerMenu();
    },
    toggleQS:function(){
        const qs=document.getElementById('quick-settings');
        qs.classList.toggle('open');
        document.getElementById('notif-panel').classList.remove('open');
    },
    deskContext:function(e){
        const onDesktop=e.target.id==='desktop'||e.target.id==='desktop-icons'||e.target.classList.contains('desktop-icons-area');
        if(onDesktop){
            e.preventDefault();
            this.contextMenu(e.clientX,e.clientY,[
                {label:"🔄 Оновити",action:()=>this.renderDesktop()},
                {sep:true},
                {label:"📁 Нова папка",action:()=>this._createFolderOnDesk()},
                {label:"📄 Новий текстовий документ",action:()=>this._createTextFileOnDesk()},
                {sep:true},
                {label:"🎨 Персоналізація",action:()=>this.openApp('settings','pers')},
                {label:"🖥️ Диспетчер",action:()=>this.openApp('taskmgr')},
                {label:"⚙️ Налаштування",action:()=>this.openApp('settings')}
            ]);
        }
    },
    _createFolderOnDesk:function(){
        const area=document.getElementById('desktop-icons');
        const el=document.createElement('div'); el.className='app-shortcut';
        el.innerHTML=`<div class="icon-lg" style="display:flex;align-items:center;justify-content:center;font-size:40px;">📁</div><span>Нова папка</span>`;
        el.onclick=(ev)=>{ if(ev.target.tagName!=='SPAN') el.classList.toggle('selected'); };
        const nameEl=el.querySelector('span');
        el.ondblclick=()=>{ nameEl.contentEditable='true'; nameEl.focus(); document.execCommand('selectAll',false,null); };
        area.appendChild(el);
        this.notify("Робочий стіл","Папку створено",true);
    },
    _createTextFileOnDesk:function(){
        let i=1; let fname='Новий документ.txt';
        while(this.files.Desktop&&this.files.Desktop[fname]){ fname=`Новий документ (${i++}).txt`; }
        if(!this.files.Desktop) this.files.Desktop={};
        this.files.Desktop[fname]='';
        this.renderDesktop(); this.save();
        this.notify("Робочий стіл",`«${fname}» створено`,true);
    },
    contextMenu:function(x,y,items){
        const m=document.getElementById('context-menu'); m.innerHTML='';
        items.forEach(i=>{
            if(i.sep){ m.innerHTML+='<div class="ctx-sep"></div>'; return; }
            const div=document.createElement('div'); div.className='ctx-item';
            div.innerText=i.label; div.onclick=()=>{ i.action(); m.style.display='none'; };
            m.appendChild(div);
        });
        m.style.left=Math.min(x,window.innerWidth-230)+'px';
        m.style.top=Math.min(y,window.innerHeight-(items.length*34))+'px';
        m.style.display='block';
    },

    /* === CLOCK/TICK === */
    updateClock:function(){
        const now=new Date(Date.now()+this.config.timeOffset*3600000);
        const h=String(now.getHours()).padStart(2,'0');
        const m=String(now.getMinutes()).padStart(2,'0');
        const s=String(now.getSeconds()).padStart(2,'0');
        const el=document.getElementById('tb-time'); if(el) el.textContent=h+':'+m;
        const de=document.getElementById('tb-date');
        if(de) de.textContent=now.toLocaleDateString('uk-UA',{day:'2-digit',month:'2-digit',year:'numeric'});
        const cf=document.getElementById('clock-face'); if(cf) cf.textContent=h+':'+m+':'+s;
    },
    tick:function(){
        this.updateClock();
        if(this.state.alarmTime&&!this.state.alarmTriggered){
            const now=new Date(); const t=`${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}`;
            if(t===this.state.alarmTime){ this.state.alarmTriggered=true; this.notify("Будильник","Час прокидатися!",true,true); }
        }
        // Progress music bar
        const mp=document.getElementById('music-prog-bar');
        if(mp && window._musicPlaying){
            let v=parseFloat(mp.style.width)||0;
            v+=0.05; if(v>100) v=0;
            mp.style.width=v+'%';
        }
    },
    hotkeys:function(e){
        if(e.key==='Escape') this.hidePowerMenu();
        if(e.key==='F9'){ document.querySelectorAll('.window').forEach(w=>{ if(w.style.display!=='none'){ w.style.display='none'; const id=w.id.replace('win-',''); if(this.windows[id]) this.windows[id].min=true; }}); this.renderTaskbar(); }
        if(e.key==='F8'){ this.config.muted=!this.config.muted; this.notify("Звук",this.config.muted?"Вимкнено":"Увімкнено",true); }
        if(e.key==='F6') this.setBrightness(this.state.brightness-10);
        if(e.key==='F7') this.setBrightness(this.state.brightness+10);
        if(e.key==='F2') this.setVol(this.state.volume-10);
        if(e.key==='F3') this.setVol(this.state.volume+10);
        if(e.key==='F5'){ e.preventDefault(); this.notify("Система","Оновлення вимкнено (F5)",true); }
    },
    setBrightness:function(v){
        let val=parseInt(v); if(val<1)val=1; if(val>100)val=100;
        this.state.brightness=val;
        document.getElementById('desktop').style.filter=`brightness(${val}%)`;
        const r=document.querySelector('.qs-slider[oninput*="setBrightness"]'); if(r) r.value=val;
        this.showOverlay('bright',val+'%'); this.saveSettings();
    },
    setVol:function(v){
        let val=parseInt(v); if(val<0)val=0; if(val>100)val=100;
        this.state.volume=val;
        const r=document.getElementById('vol-slider'); if(r) r.value=val;
        this.showOverlay('vol',val+'%'); this.saveSettings();
    },
    showOverlay:function(type,text){
        const o=document.getElementById(type+'-overlay');
        const b=document.getElementById(type+'-bar-vis');
        const t=document.getElementById(type+'-text');
        if(!o) return;
        o.classList.add('show'); b.style.width=text; t.innerText=text;
        clearTimeout(this[type+'Timer']);
        this[type+'Timer']=setTimeout(()=>o.classList.remove('show'),1500);
    },
    toggleSet:function(key){
        this.state[key]=!this.state[key];
        const el=document.getElementById('qs-'+key);
        if(el) el.classList.toggle('active',this.state[key]);
        if(key==='dnd'&&!this.state.dnd) this.notifs.filter(n=>!n.isAlarm).slice(-3).forEach(n=>this.showToast(n.title,n.msg,n.time));
    },
    toggleLang:function(){
        const el=document.getElementById('qs-lang');
        this.config.lang=this.config.lang==='ukr'?'en':'ukr';
        if(el) el.innerText=this.config.lang.toUpperCase();
        this.saveSettings();
    },

    /* === DESKTOP & TASKBAR === */
    renderDesktop:function(){
        const area=document.getElementById('desktop-icons'); area.innerHTML='';
        const desktopFiles=this.files.Desktop||{};
        this.apps.filter(a=>a.installed&&a.pinned).forEach(a=>{
            area.appendChild(this._makeShortcut(a.id,a.name,a.icon));
        });
        Object.keys(desktopFiles).forEach(fname=>{
            if(desktopFiles[fname].startsWith && desktopFiles[fname].startsWith('Ярлик:')){
                const appName=desktopFiles[fname].replace('Ярлик:','').trim();
                const app=this.apps.find(a=>a.name===appName);
                if(app) area.appendChild(this._makeShortcut(app.id,app.name,app.icon));
            } else {
                const el=document.createElement('div'); el.className='app-shortcut';
                el.innerHTML=ICONS.txtFile+`<span>${fname}</span>`;
                el.onclick=()=>{ el.classList.toggle('selected'); };
                el.ondblclick=()=>{ this.openApp('word',{file:fname}); };
                el.addEventListener('contextmenu',e=>{ e.preventDefault(); e.stopPropagation();
                    this.contextMenu(e.clientX,e.clientY,[
                        {label:'▶ Відкрити в GWord',action:()=>this.openApp('word',{file:fname})},
                        {sep:true},
                        {label:'🗑 Видалити',action:()=>{ delete this.files.Desktop[fname]; this.renderDesktop(); this.save(); }}
                    ]);
                });
                area.appendChild(el);
            }
        });
    },
    _makeShortcut:function(id,name,icon){
        const el=document.createElement('div'); el.className='app-shortcut';
        el.innerHTML=`<div class="icon-lg">${icon}</div><span>${name}</span>`;
        el.onclick=()=>el.classList.toggle('selected');
        el.ondblclick=()=>this.openApp(id);
        el.addEventListener('contextmenu',e=>{
            e.preventDefault(); e.stopPropagation();
            this.contextMenu(e.clientX,e.clientY,[
                {label:'Відкрити',action:()=>this.openApp(id)},
                {sep:true},
                {label:'Прибрати зі столу',action:()=>{ const app=this.apps.find(a=>a.id===id); if(app) app.pinned=false; this.renderDesktop(); }}
            ]);
        });
        return el;
    },
    renderTaskbar:function(){
        const c=document.getElementById('task-apps'); c.innerHTML='';
        this.apps.filter(a=>a.installed&&(a.pinned||a.tbPinned||this.windows[a.id])).forEach(a=>{
            const btn=document.createElement('div');
            btn.className='tb-btn'+(this.windows[a.id]?' running':'');
            if(this.windows[a.id]&&!this.windows[a.id].min) btn.classList.add('active');
            btn.title=a.name;
            btn.innerHTML=`<div class="icon-md">${a.icon}</div>`;
            btn.onclick=()=>{
                if(!this.windows[a.id]) this.openApp(a.id);
                else if(this.windows[a.id].min) this.activateWin(a.id);
                else if(document.getElementById(`win-${a.id}`)?.classList.contains('active'))
                    this.minWin(a.id);
                else this.activateWin(a.id);
            };
            btn.addEventListener('contextmenu',e=>{
                e.preventDefault(); e.stopPropagation();
                const isPinned=a.tbPinned||a.pinned;
                this.contextMenu(e.clientX,e.clientY,[
                    ...(this.windows[a.id]?[{label:'▶ Відкрити / Розгорнути',action:()=>this.activateWin(a.id)}]:[{label:'▶ Відкрити',action:()=>this.openApp(a.id)}]),
                    ...(this.windows[a.id]?[{label:'✕ Закрити',action:()=>this.closeWin(a.id)}]:[]),
                    {sep:true},
                    {label:(isPinned?'📌 Відкріпити від панелі':'📌 Закріпити на панелі'),action:()=>{
                        a.tbPinned=!isPinned; a.pinned=a.tbPinned||a.deskPinned;
                        this.renderTaskbar();
                        this.notify(a.name, a.tbPinned?'Закріплено на панелі':'Відкріплено від панелі', true);
                        this.save();
                    }},
                ]);
            });
            c.appendChild(btn);
        });
    },
    startAppClick:function(id){
        this.openApp(id);
        document.getElementById('side-menu').classList.remove('open');
        document.getElementById('sm-backdrop').style.display='none';
    },
    togglePin:function(id){ const a=this.apps.find(x=>x.id===id); if(a) a.pinned=!a.pinned; this.renderTaskbar(); },

    /* === SETTINGS === */
    renderSettings:function(id,extraTab){
        const b=document.getElementById(`body-${id}`);
        b.innerHTML=`
            <div class="settings-layout">
                <div class="set-sidebar" id="set-sidebar-${id}">
                    <div class="set-tab" onclick="sys.renderSetTab('${id}','about')">ℹ️ Про ОС</div>
                    <div class="set-tab" onclick="sys.renderSetTab('${id}','activation')">🔑 Активація</div>
                    <div class="set-tab" onclick="sys.renderSetTab('${id}','pers')">🎨 Персоналізація</div>
                    <div class="set-tab" onclick="sys.renderSetTab('${id}','display')">🖥️ Дисплей</div>
                    <div class="set-tab" onclick="sys.renderSetTab('${id}','sound')">🔊 Звук</div>
                    <div class="set-tab" onclick="sys.renderSetTab('${id}','conn')">📡 Підключення</div>
                    <div class="set-tab" onclick="sys.renderSetTab('${id}','region')">🌐 Мова та регіон</div>
                    <div class="set-tab" onclick="sys.renderSetTab('${id}','date')">🕐 Дата і час</div>
                    <div class="set-tab" onclick="sys.renderSetTab('${id}','storage')">💾 Пам'ять</div>
                    <div class="set-tab" onclick="sys.renderSetTab('${id}','security')">🔒 Безпека</div>
                    <div class="set-tab" onclick="sys.renderSetTab('${id}','power')">⚡ Живлення</div>
                    <div class="set-tab" onclick="sys.renderSetTab('${id}','autostart')">🚀 Автозавантаження</div>
                    <div class="set-tab" onclick="sys.renderSetTab('${id}','winmode')">🪟 Стиль вікон</div>
                </div>
                <div class="set-content" id="set-c-${id}"></div>
            </div>`;
        setTimeout(()=>sys.renderSetTab(id, extraTab||'about'), 50);
    },
    renderSetTab:function(wid,tab){
        const c=document.getElementById(`set-c-${wid}`);
        if(!c) return;
        document.querySelectorAll(`#set-sidebar-${wid} .set-tab`).forEach(t=>t.classList.remove('active'));
        const at=document.querySelector(`#set-sidebar-${wid} .set-tab[onclick*="'${tab}'"]`);
        if(at) at.classList.add('active');

        if(tab==='about'){
            c.innerHTML=`
                <h2 style="margin-bottom:16px;">Про систему</h2>
                <div class="set-section" style="text-align:center;padding:24px;">
                    <div style="font-size:48px;margin-bottom:8px;">⚡</div>
                    <div style="font-size:22px;font-weight:700;background:linear-gradient(135deg,#fff,var(--accent));-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:4px;">GyperOS</div>
                    <div style="font-size:13px;color:rgba(255,255,255,0.5)">Версія 3.0 Ultimate • ALFA Studio</div>
                </div>
                <div class="set-section">
                    ${[['Процесор','GyperCore i9-X'],['ОЗП','16 ГБ DDR5'],['Сховище','512 ГБ NVMe'],['Відеокарта','GyperGPU 12 ГБ'],['Ядро','Gyper-HTML v3.0'],['Статус активації',sys.config.activated?'✅ Активована':'❌ Не активована']].map(([l,v])=>`
                        <div class="set-row"><span>${l}</span><span style="color:var(--accent)">${v}</span></div>`).join('')}
                </div>
                <div class="set-section">
                    <h3 style="margin-bottom:10px;">Гарячі клавіші</h3>
                    ${[['F9','Згорнути всі вікна'],['F8','Вмк/Вимк звук'],['F6/F7','Яскравість ↓↑'],['F2/F3','Гучність ↓↑']].map(([k,d])=>`<div class="set-row"><kbd style="background:#333;padding:2px 6px;border-radius:4px;">${k}</kbd><span>${d}</span></div>`).join('')}
                </div>
                <button class="btn-glass" onclick="sys.checkUpdates(this)" style="margin-top:8px;">Перевірити оновлення</button>`;
        } else if(tab==='activation'){
            c.innerHTML=`
                <h2 style="margin-bottom:16px;">Активація системи</h2>
                <div class="set-section" style="text-align:center;padding:28px;">
                    <div style="font-size:52px;margin-bottom:12px;">${sys.config.activated?'✅':'🔑'}</div>
                    <div style="font-size:16px;font-weight:600;margin-bottom:6px;">${sys.config.activated?'Система активована':'Система не активована'}</div>
                    <div style="font-size:13px;color:rgba(255,255,255,0.5);margin-bottom:20px;">${sys.config.activated?'GyperOS активовано. Дякуємо за використання!':'Введіть ключ продукту для активації системи та видалення водяного знаку.'}</div>
                    ${!sys.config.activated?`
                        <input type="text" id="act-key" class="act-key-input" placeholder="XXXXX-XXXXX-XXXXX">
                        <div style="margin-top:12px;display:flex;gap:8px;justify-content:center;">
                            <button class="btn-glass" onclick="sys.activate()">Активувати</button>
                        </div>
                        <div style="margin-top:16px;font-size:11px;color:rgba(255,255,255,0.3);">Дійсні ключі: Gyp39activ, h42uiRM</div>
                    `:'<div style="color:#4caf50;font-size:14px;">✓ Ліцензія активна</div>'}
                </div>`;
        } else if(tab==='pers'){
            c.innerHTML=`
                <h2 style="margin-bottom:16px;">Персоналізація</h2>
                <div class="set-section">
                    <h3 style="margin-bottom:12px;">Шпалери</h3>
                    <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:8px;">
                        ${[
                            ['linear-gradient(135deg,#0f2027,#2c5364)','Океан'],
                            ['linear-gradient(135deg,#1a1a2e,#16213e,#0f3460)','Ніч'],
                            ['linear-gradient(135deg,#FF416C,#FF4B2B)','Захід'],
                            ['linear-gradient(135deg,#0a3d0a,#1a5c1a)','Ліс'],
                            ['linear-gradient(135deg,#1a0a3d,#3d0a1a)','Космос'],
                            ['radial-gradient(ellipse at 30% 40%,#0d1b4b,#060612)','Зорі'],
                        ].map(([bg,lbl])=>`
                            <div style="width:80px;cursor:pointer;text-align:center;" onclick="sys.config.wallpaper='${bg}';document.getElementById('desktop').style.background='${bg}';sys.saveSettings();sys.notify('Зовнішній вигляд','Шпалери змінено',true);">
                                <div style="width:80px;height:50px;border-radius:8px;background:${bg};border:2px solid rgba(255,255,255,0.15);transition:0.2s;" onmouseover="this.style.borderColor='var(--accent)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.15)'"></div>
                                <div style="font-size:10px;color:rgba(255,255,255,0.5);margin-top:3px;">${lbl}</div>
                            </div>`).join('')}
                        <div style="width:80px;cursor:pointer;text-align:center;" onclick="document.getElementById('wall-upl').click()">
                            <div style="width:80px;height:50px;border-radius:8px;background:#333;border:2px dashed rgba(255,255,255,0.2);display:flex;align-items:center;justify-content:center;font-size:22px;">+</div>
                            <div style="font-size:10px;color:rgba(255,255,255,0.5);margin-top:3px;">Своє</div>
                        </div>
                    </div>
                    <input type="file" id="wall-upl" class="hidden" onchange="sys.uploadWall(this)">
                </div>
                <div class="set-section">
                    <h3 style="margin-bottom:10px;">Акцентний колір</h3>
                    <div style="display:flex;gap:8px;flex-wrap:wrap;">
                        ${['#00d2ff','#7c4dff','#00e676','#ff4081','#ff6d00','#ffd740','#00e5ff','#e040fb'].map(col=>`
                            <div class="color-pick" style="background:${col}" onclick="document.documentElement.style.setProperty('--accent','${col}');sys.config.themeColor='${col}';sys.saveSettings();"></div>`).join('')}
                    </div>
                </div>
                <div class="set-section">
                    <div class="set-row"><span>Радіус кутів вікон</span>
                        <input type="range" min="0" max="20" value="8" class="qs-slider" style="width:120px;" oninput="document.documentElement.style.setProperty('--win-radius',this.value+'px');sys.config.radius=this.value+'px';sys.saveSettings();">
                    </div>
                    <div class="set-row"><span>Екран блокування</span>
                        <div style="display:flex;gap:6px;">
                            ${[['#000','Чорний'],['linear-gradient(135deg,#0f2027,#2c5364)','Синій']].map(([bg,lbl])=>`
                                <div class="color-pick" style="background:${bg}" title="${lbl}" onclick="sys.config.lockWall='${bg}';sys.saveSettings();"></div>`).join('')}
                        </div>
                    </div>
                    <div class="set-row"><span>Стиль завантаження</span>
                        <select class="set-input" onchange="sys.config.bootStyle.bar=(this.value==='bar');sys.applyBootStyle();sys.saveSettings();">
                            <option value="spin">Кружок</option>
                            <option value="bar">Смужка</option>
                        </select>
                    </div>
                </div>`;
        } else if(tab==='display'){
            c.innerHTML=`
                <h2 style="margin-bottom:16px;">Дисплей</h2>
                <div class="set-section">
                    <div class="set-row"><span>Яскравість</span>
                        <input type="range" min="30" max="150" value="${sys.state.brightness}" class="qs-slider" style="width:120px;" oninput="sys.setBrightness(this.value)">
                    </div>
                    <div class="set-row"><span>Роздільна здатність</span>
                        <select class="set-input"><option>1920×1080</option><option>2560×1440</option><option>3840×2160</option></select>
                    </div>
                    <div class="set-row"><span>Частота оновлення</span>
                        <select class="set-input" onchange="sys.config.hz=this.value;sys.saveSettings();">
                            <option value="60">60 Hz</option><option value="120">120 Hz</option><option value="144" selected>144 Hz</option>
                        </select>
                    </div>
                    <div class="set-row"><span>Масштаб</span>
                        <select class="set-input"><option>100%</option><option>125%</option><option>150%</option></select>
                    </div>
                    <div class="set-row"><span>HDR</span>
                        <button class="set-toggle" onclick="this.classList.toggle('on')"></button>
                    </div>
                </div>`;
        } else if(tab==='sound'){
            c.innerHTML=`
                <h2 style="margin-bottom:16px;">Звук</h2>
                <div class="set-section">
                    <div class="set-row"><span>Гучність системи</span>
                        <input type="range" min="0" max="100" value="${sys.state.volume}" class="qs-slider" style="width:120px;" oninput="sys.setVol(this.value)">
                    </div>
                    <div class="set-row"><span>Вихідний пристрій</span>
                        <select class="set-input"><option>Динаміки</option><option>Навушники</option><option>HDMI</option></select>
                    </div>
                    <div class="set-row"><span>Звуки системи</span>
                        <button class="set-toggle on" onclick="this.classList.toggle('on');sys.config.muted=!this.classList.contains('on');sys.saveSettings();"></button>
                    </div>
                    <div class="set-row"><span>Покращення басів</span>
                        <button class="set-toggle" onclick="this.classList.toggle('on')"></button>
                    </div>
                </div>`;
        } else if(tab==='conn'){
            c.innerHTML=`
                <h2 style="margin-bottom:16px;">Підключення</h2>
                <div class="set-section">
                    <div class="set-row"><span>Wi-Fi</span><div style="display:flex;align-items:center;gap:8px;"><span style="font-size:12px;color:var(--accent)">langate26_5G</span><button class="set-toggle on" onclick="sys.toggleSet('wifi');this.classList.toggle('on')"></button></div></div>
                    <div class="set-row"><span>Bluetooth</span><button class="set-toggle" onclick="sys.toggleSet('bt');this.classList.toggle('on')"></button></div>
                    <div class="set-row"><span>Режим польоту</span><button class="set-toggle" onclick="sys.toggleSet('plane');this.classList.toggle('on')"></button></div>
                    <div class="set-row"><span>VPN</span><button class="set-toggle" onclick="this.classList.toggle('on')"></button></div>
                    <div class="set-row"><span>Проксі</span><select class="set-input"><option>Вимкнено</option><option>Авто</option><option>Ручне</option></select></div>
                </div>`;
        } else if(tab==='region'){
            c.innerHTML=`
                <h2 style="margin-bottom:16px;">Мова та регіон</h2>
                <div class="set-section">
                    <div class="set-row"><span>Мова системи</span>
                        <select class="set-input" onchange="sys.config.lang=this.value;document.getElementById('qs-lang').innerText=this.value.toUpperCase();sys.saveSettings();">
                            <option value="ukr" ${sys.config.lang==='ukr'?'selected':''}>Українська</option>
                            <option value="en" ${sys.config.lang==='en'?'selected':''}>English</option>
                            <option value="ru">Русский</option>
                            <option value="de">Deutsch</option>
                            <option value="pl">Polski</option>
                        </select>
                    </div>
                    <div class="set-row"><span>Регіон</span><span style="color:var(--accent)">Україна</span></div>
                    <div class="set-row"><span>Формат дати</span>
                        <select class="set-input"><option>ДД.ММ.РРРР</option><option>MM/DD/YYYY</option><option>YYYY-MM-DD</option></select>
                    </div>
                    <div class="set-row"><span>24-годинний формат</span><button class="set-toggle on" onclick="this.classList.toggle('on')"></button></div>
                </div>`;
        } else if(tab==='date'){
            c.innerHTML=`
                <h2 style="margin-bottom:16px;">Дата і час</h2>
                <div class="set-section">
                    <div class="set-row"><span>Часовий пояс</span>
                        <select class="set-input" onchange="sys.config.timeOffset=parseInt(this.value);sys.updateClock();sys.saveSettings();">
                            <option value="0">UTC+0</option><option value="2">Київ (UTC+2)</option><option value="3">UTC+3</option>
                        </select>
                    </div>
                    <div class="set-row"><span>Авто-синхронізація</span><button class="set-toggle on" onclick="this.classList.toggle('on')"></button></div>
                </div>`;
        } else if(tab==='storage'){
            c.innerHTML=`
                <h2 style="margin-bottom:16px;">Пам'ять</h2>
                <div class="set-section">
                    <div style="background:#333;height:18px;border-radius:9px;overflow:hidden;margin-bottom:10px;">
                        <div style="width:4%;background:var(--accent);height:100%;border-radius:9px;"></div>
                    </div>
                    <p>Вільно: 240 ГБ з 250 ГБ</p>
                    <p style="color:#aaa;font-size:12px;margin-top:4px;">Система займає ~10 ГБ</p>
                </div>`;
        } else if(tab==='security'){
            c.innerHTML=`
                <h2 style="margin-bottom:16px;">Безпека</h2>
                <div class="set-section">
                    <div class="set-row"><span>Пароль</span>
                        <div style="display:flex;gap:6px;align-items:center;">
                            <input type="password" id="new-pass" class="set-input" placeholder="Новий пароль" style="width:140px;">
                            <button class="btn-glass" style="padding:5px 10px;" onclick="sys.config.password=document.getElementById('new-pass').value||null;sys.saveSettings();sys.notify('Безпека','Пароль збережено',true);">OK</button>
                        </div>
                    </div>
                    <div class="set-row"><span>Екран блокування</span><button class="set-toggle on" onclick="this.classList.toggle('on')"></button></div>
                    <div class="set-row"><span>Шифрування диска</span><button class="set-toggle on" onclick="this.classList.toggle('on')"></button></div>
                    <div class="set-row"><span>Брандмауер</span><button class="set-toggle on" onclick="this.classList.toggle('on')"></button></div>
                </div>`;
        } else if(tab==='power'){
            c.innerHTML=`
                <h2 style="margin-bottom:16px;">Живлення</h2>
                <div class="set-section">
                    <div class="set-row"><span>Режим живлення</span><select class="set-input"><option>Збалансований</option><option>Продуктивність</option><option>Економія</option></select></div>
                    <div class="set-row"><span>Вимкнення дисплея</span><select class="set-input"><option>5 хвилин</option><option>10 хвилин</option><option>Ніколи</option></select></div>
                    <div class="set-row"><span>Режим сну</span><select class="set-input"><option>30 хвилин</option><option>1 година</option><option>Ніколи</option></select></div>
                    <div class="set-row"><span>Швидке завантаження</span><button class="set-toggle on" onclick="this.classList.toggle('on')"></button></div>
                </div>
                <div class="set-section">
                    <p style="margin-bottom:10px;font-size:13px;color:rgba(255,255,255,0.6)">Дії живлення</p>
                    <div style="display:flex;gap:8px;flex-wrap:wrap;">
                        <button class="btn-glass" onclick="sys.doSleep()">💤 Сон</button>
                        <button class="btn-glass" onclick="sys.lock()">🔒 Блокувати</button>
                        <button class="btn-glass" onclick="sys.showPowerMenu()">⚡ Живлення</button>
                    </div>
                </div>`;
        } else if(tab==='autostart'){
            c.innerHTML=`
                <h2 style="margin-bottom:16px;">Автозавантаження</h2>
                <div class="set-section">
                    ${sys.apps.filter(a=>a.installed).map(a=>`
                        <div class="set-row">
                            <div style="display:flex;align-items:center;gap:8px;">${a.icon}<span>${a.name}</span></div>
                            <button class="set-toggle ${sys.config.autoStart.includes(a.id)?'on':''}" onclick="
                                const i=sys.config.autoStart.indexOf('${a.id}');
                                if(i>=0) sys.config.autoStart.splice(i,1); else sys.config.autoStart.push('${a.id}');
                                this.classList.toggle('on'); sys.saveSettings();">
                            </button>
                        </div>`).join('')}
                </div>`;
        } else if(tab==='winmode'){
            c.innerHTML=`
                <h2 style="margin-bottom:16px;">Стиль вікон</h2>
                <div class="set-section">
                    <div class="set-row"><span>Кнопки управління</span>
                        <select class="set-input" onchange="sys.config.winStyle=this.value;sys.saveSettings();">
                            <option value="win" ${sys.config.winStyle==='win'?'selected':''}>Windows (права сторона)</option>
                            <option value="mac" ${sys.config.winStyle==='mac'?'selected':''}>macOS (ліва сторона)</option>
                        </select>
                    </div>
                    <div class="set-row"><span>Закріпити Браузер</span><button class="set-toggle ${sys.apps.find(a=>a.id==='browser')?.pinned?'on':''}" onclick="sys.togglePin('browser');this.classList.toggle('on')"></button></div>
                    <div class="set-row"><span>Закріпити Провідник</span><button class="set-toggle ${sys.apps.find(a=>a.id==='files')?.pinned?'on':''}" onclick="sys.togglePin('files');this.classList.toggle('on')"></button></div>
                    <div class="set-row"><span>Закріпити Налаштування</span><button class="set-toggle ${sys.apps.find(a=>a.id==='settings')?.pinned?'on':''}" onclick="sys.togglePin('settings');this.classList.toggle('on')"></button></div>
                </div>`;
        }
    },

    activate:function(){
        const k=document.getElementById('act-key');
        if(!k) return;
        if(k.value==='Gyp39activ'||k.value==='h42uiRM'){
            this.config.activated=true;
            document.getElementById('watermark').style.display='none';
            this.saveSettings();
            const wid=Object.keys(this.windows).find(w=>w==='settings');
            if(wid) this.renderSetTab(wid,'activation');
            this.notify("Активація","Систему успішно активовано!",true);
        } else { 
            k.style.borderColor='#e81123';
            setTimeout(()=>k.style.borderColor='',1000);
            this.notify("Активація","Невірний ключ",true); 
        }
    },
    checkUpdates:function(btn){ btn.innerText="Перевірка..."; setTimeout(()=>btn.innerText="✓ Оновлень немає. Остання версія.",2000); },
    uploadWall:function(input){
        const file=input.files[0]; if(!file) return;
        const reader=new FileReader();
        reader.onload=e=>{
            sys.config.wallpaper=`url(${e.target.result})`;
            document.getElementById('desktop').style.background=`url(${e.target.result})`;
            document.getElementById('desktop').style.backgroundSize='cover';
            sys.saveSettings();
        };
        reader.readAsDataURL(file);
    },
    applyBootStyle:function(){
        document.getElementById('boot-screen').style.color=this.config.bootStyle.color;
        if(this.config.bootStyle.bar){
            document.getElementById('boot-spinner').style.display='none';
            document.getElementById('boot-bar').style.display='block';
        } else {
            document.getElementById('boot-spinner').style.display='block';
            document.getElementById('boot-bar').style.display='none';
        }
    },

    /* === GSTORE === */
    renderStore:function(id){
        const b=document.getElementById(`body-${id}`);
        const cats=['all','media','social','dev','graphics','office','games'];
        const catLabels={all:'Всі',media:'Медіа',social:'Соціальні',dev:'Dev',graphics:'Графіка',office:'Офіс',games:'Ігри'};
        const renderGrid=(filter='all')=>{
            const apps=filter==='all'?STORE_APPS:STORE_APPS.filter(a=>a.cat===filter);
            return apps.map(a=>{
                const inst=sys.installedStoreApps.includes(a.id);
                return `<div class="gstore-card">
                    <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px;">
                        <div style="width:42px;height:42px;border-radius:10px;background:rgba(255,255,255,0.07);display:flex;align-items:center;justify-content:center;">${a.icon}</div>
                        <div><div style="font-size:14px;font-weight:600;">${a.name}</div><div style="font-size:11px;color:rgba(255,255,255,0.45);">${a.desc}</div></div>
                    </div>
                    <div style="display:flex;justify-content:space-between;align-items:center;">
                        <div><div style="font-size:11px;color:#ffd54f;">${a.rating}</div><div style="font-size:10px;color:rgba(255,255,255,0.4);">${a.size}</div></div>
                        <button class="install-btn ${inst?'installed':''}" id="sbtn-${a.id}" onclick="sys.storeInstall('${a.id}','${id}')">${inst?'Видалити':'Встановити'}</button>
                    </div>
                </div>`;
            }).join('');
        };
        b.innerHTML=`
            <div style="height:100%;display:flex;flex-direction:column;">
                <div style="padding:14px;border-bottom:1px solid rgba(255,255,255,0.08);">
                    <input style="width:100%;background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.1);border-radius:8px;padding:8px 12px;color:white;font-size:13px;outline:none;" placeholder="🔍 Пошук у GStore..." oninput="sys._gsSearch(this.value,'${id}')">
                    <div style="display:flex;gap:6px;margin-top:10px;flex-wrap:wrap;">
                        ${cats.map((c,i)=>`<button style="padding:5px 12px;border-radius:6px;border:none;cursor:pointer;font-size:11px;font-weight:600;transition:0.15s;background:${i===0?'rgba(0,210,255,0.2)':'rgba(255,255,255,0.06)'};color:${i===0?'var(--accent)':'rgba(255,255,255,0.7)'};" 
                            onclick="this.parentNode.querySelectorAll('button').forEach(b=>{b.style.background='rgba(255,255,255,0.06)';b.style.color='rgba(255,255,255,0.7)'});this.style.background='rgba(0,210,255,0.2)';this.style.color='var(--accent)';document.getElementById('gs-grid-${id}').innerHTML=sys._gsGridHtml('${id}');" 
                            data-cat="${c}">${catLabels[c]}</button>`).join('')}
                    </div>
                </div>
                <div style="flex:1;overflow-y:auto;padding:14px;" class="scroll">
                    <div style="font-size:11px;color:rgba(255,255,255,0.4);margin-bottom:10px;">Встановлено: ${this.installedStoreApps.length} / ${STORE_APPS.length}</div>
                    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;" id="gs-grid-${id}">${renderGrid()}</div>
                </div>
            </div>`;
        this._gsCurrentFilter=renderGrid;
    },
    _gsGridHtml:function(winId){
        const active=document.querySelector(`#body-${winId} [data-cat][style*="var(--accent)"]`);
        const cat=active?active.getAttribute('data-cat'):'all';
        const apps=cat==='all'?STORE_APPS:STORE_APPS.filter(a=>a.cat===cat);
        return apps.map(a=>{
            const inst=sys.installedStoreApps.includes(a.id);
            return `<div class="gstore-card">
                <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px;">
                    <div style="width:42px;height:42px;border-radius:10px;background:rgba(255,255,255,0.07);display:flex;align-items:center;justify-content:center;">${a.icon}</div>
                    <div><div style="font-size:14px;font-weight:600;">${a.name}</div><div style="font-size:11px;color:rgba(255,255,255,0.45);">${a.desc}</div></div>
                </div>
                <div style="display:flex;justify-content:space-between;align-items:center;">
                    <div><div style="font-size:11px;color:#ffd54f;">${a.rating}</div><div style="font-size:10px;color:rgba(255,255,255,0.4);">${a.size}</div></div>
                    <button class="install-btn ${inst?'installed':''}" id="sbtn-${a.id}" onclick="sys.storeInstall('${a.id}','${winId}')">${inst?'Видалити':'Встановити'}</button>
                </div>
            </div>`;
        }).join('');
    },
    _gsSearch:function(q,winId){
        const grid=document.getElementById(`gs-grid-${winId}`); if(!grid) return;
        const apps=q?STORE_APPS.filter(a=>a.name.toLowerCase().includes(q.toLowerCase())):STORE_APPS;
        grid.innerHTML=apps.map(a=>{
            const inst=sys.installedStoreApps.includes(a.id);
            return `<div class="gstore-card"><div style="display:flex;align-items:center;gap:10px;margin-bottom:8px;"><div style="width:42px;height:42px;border-radius:10px;background:rgba(255,255,255,0.07);display:flex;align-items:center;justify-content:center;">${a.icon}</div><div><div style="font-size:14px;font-weight:600;">${a.name}</div><div style="font-size:11px;color:rgba(255,255,255,0.45);">${a.desc}</div></div></div><div style="display:flex;justify-content:space-between;align-items:center;"><div><div style="font-size:11px;color:#ffd54f;">${a.rating}</div><div style="font-size:10px;color:rgba(255,255,255,0.4);">${a.size}</div></div><button class="install-btn ${inst?'installed':''}" id="sbtn-${a.id}" onclick="sys.storeInstall('${a.id}','${winId}')">${inst?'Видалити':'Встановити'}</button></div></div>`;
        }).join('');
    },
    storeInstall:function(appId,winId){
        const btn=document.getElementById(`sbtn-${appId}`);
        if(this.installedStoreApps.includes(appId)){
            this.installedStoreApps=this.installedStoreApps.filter(x=>x!==appId);
            const ai=this.apps.findIndex(a=>a.id===appId);
            if(ai>=0) this.apps.splice(ai,1);
            if(btn){ btn.textContent='Встановити'; btn.classList.remove('installed'); }
            this.renderDesktop(); this.renderTaskbar(); this.renderSideMenu();
            this.notify("GStore",STORE_APPS.find(a=>a.id===appId)?.name+" видалено",true);
        } else {
            if(btn){ btn.textContent='...'; btn.disabled=true; }
            this.notify("GStore","Встановлення...",true);
            setTimeout(()=>{
                this.installedStoreApps.push(appId);
                const sa=STORE_APPS.find(a=>a.id===appId);
                if(sa && !this.apps.find(a=>a.id===appId)){
                    this.registerApp(sa.id,sa.name,sa.icon,()=>{
                        document.getElementById(`body-${sa.id}`).innerHTML=`<div style="height:100%;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:12px;"><div style="font-size:64px;">${sa.icon.includes('svg')? '' : sa.icon}</div><div style="font-size:18px;">${sa.name}</div><div style="font-size:13px;color:rgba(255,255,255,0.5);">${sa.desc}</div></div>`;
                    });
                }
                if(btn){ btn.textContent='Видалити'; btn.classList.add('installed'); btn.disabled=false; }
                this.save();
                this.renderDesktop(); this.renderTaskbar(); this.renderSideMenu();
                this.notify("GStore",sa?.name+" встановлено ✓",true);
            },1500);
        }
        this.save();
    },

    /* === CLOCK APP === */
    renderClock:function(id){
        const b=document.getElementById(`body-${id}`);
        b.innerHTML=`
            <div class="clock-app">
                <div class="clock-big" id="clock-face">00:00:00</div>
                <div class="clock-date">${new Date().toLocaleDateString('uk-UA',{weekday:'long',year:'numeric',month:'long',day:'numeric'})}</div>
                <div style="display:flex;gap:20px;width:100%;max-width:500px;">
                    <div style="flex:1;background:rgba(255,255,255,0.06);padding:12px;border-radius:10px;border:1px solid rgba(255,255,255,0.08);">
                        <h4 style="margin-bottom:8px;">⏰ Будильник</h4>
                        <input type="time" id="alarm-in" value="${this.state.alarmTime||''}" class="set-input" style="width:100%;margin-bottom:6px;">
                        <button class="btn-glass" style="padding:5px 10px;width:100%;" onclick="sys.state.alarmTime=document.getElementById('alarm-in').value;sys.state.alarmTriggered=false;sys.notify('Будильник','Встановлено на '+document.getElementById('alarm-in').value,true);">Встановити</button>
                    </div>
                    <div style="flex:1;background:rgba(255,255,255,0.06);padding:12px;border-radius:10px;text-align:center;border:1px solid rgba(255,255,255,0.08);">
                        <h4 style="margin-bottom:8px;">⏱ Таймер</h4>
                        <div class="timer-ui" id="timer-ui">00:00</div>
                        <div style="display:flex;gap:4px;margin-top:8px;justify-content:center;">
                            <button class="btn-glass" style="padding:4px 8px;font-size:11px;" onclick="sys.startTimer(60)">1м</button>
                            <button class="btn-glass" style="padding:4px 8px;font-size:11px;" onclick="sys.startTimer(300)">5м</button>
                            <button class="btn-glass" style="padding:4px 8px;font-size:11px;" onclick="sys.startTimer(600)">10м</button>
                        </div>
                    </div>
                </div>
            </div>`;
    },
    startTimer:function(sec){
        const ui=document.getElementById('timer-ui'); if(!ui) return;
        ui.classList.add('active'); let s=sec;
        const int=setInterval(()=>{
            s--; const m=Math.floor(s/60); const ss=s%60;
            ui.innerText=String(m).padStart(2,'0')+':'+String(ss).padStart(2,'0');
            if(s<=0){ clearInterval(int); ui.classList.remove('active'); this.notify("Таймер","Час вийшов!",true); }
        },1000);
    },

    /* === BROWSER === */
    renderBrowser:function(id){
        const b=document.getElementById(`body-${id}`);
        b.innerHTML=`
            <div style="height:100%;display:flex;flex-direction:column;">
                <div style="padding:6px 8px;background:rgba(255,255,255,0.04);display:flex;gap:6px;align-items:center;border-bottom:1px solid rgba(255,255,255,0.08);">
                    <button class="tb-btn" style="min-width:30px;height:30px;font-size:16px;" onclick="">←</button>
                    <button class="tb-btn" style="min-width:30px;height:30px;font-size:16px;" onclick="">→</button>
                    <button class="tb-btn" style="min-width:30px;height:30px;font-size:14px;" onclick="sys.goUrl('${id}')">↺</button>
                    <input type="text" id="url-${id}" placeholder="Введіть запит або адресу..." style="flex:1;background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.1);border-radius:8px;color:white;padding:6px 10px;font-size:13px;outline:none;" onkeydown="if(event.key==='Enter') sys.goUrl('${id}')">
                    <button class="btn-glass" style="padding:5px 12px;font-size:12px;" onclick="sys.goUrl('${id}')">Перейти</button>
                </div>
                <iframe id="web-${id}" style="flex:1;background:white;border:none;" sandbox="allow-same-origin allow-scripts"></iframe>
            </div>`;
        this.goUrl(id);
    },
    goUrl:function(id){
        const q=document.getElementById(`url-${id}`)?.value||'';
        const iframe=document.getElementById(`web-${id}`);
        if(!iframe) return;
        if(q.startsWith('http')){ iframe.src=q; return; }
        iframe.contentDocument.open();
        iframe.contentDocument.write(`<html><body style="background:#fff;color:#000;font-family:'Segoe UI';padding:20px;"><h2 style="color:#1a1a1a;">Пошук: "${q}"</h2><p style="color:#666;">Це симуляція браузера. Реальні запити заблоковані з міркувань безпеки.</p><hr style="margin:16px 0;"><h3>Результати:</h3><div style="margin-top:10px;"><a href="#" style="color:#1558d6;display:block;margin-bottom:8px;">${q} — GyperOS Wiki</a><a href="#" style="color:#1558d6;display:block;">${q}.gsp — Gyper Documents</a></div></body></html>`);
        iframe.contentDocument.close();
    },

    /* === FILES === */
    renderFiles:function(id){
        const b=document.getElementById(`body-${id}`);
        const showFolder=(folder)=>{
            const files=this.files[folder]||{};
            b.innerHTML=`
                <div style="display:flex;align-items:center;gap:6px;padding:8px;background:rgba(255,255,255,0.04);border-bottom:1px solid rgba(255,255,255,0.08);">
                    <button class="tb-btn" style="min-width:28px;height:28px;font-size:13px;" onclick="sys.renderFiles('${id}')">←</button>
                    <div style="flex:1;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);border-radius:6px;padding:5px 10px;font-size:12px;color:rgba(255,255,255,0.6);">📂 /${folder}</div>
                    <button class="tb-btn" style="min-width:28px;height:28px;font-size:13px;" onclick="let n=prompt('Ім\'я нового файлу:'); if(n){ sys.files['${folder}'][n]='; sys.renderFiles('${id}'); sys.save();}">+</button>
                </div>
                <div class="file-grid scroll" style="height:calc(100% - 46px);">
                    ${Object.keys(files).filter(f=>f!=='_lock').map(f=>`
                        <div class="file-icon" ondblclick="sys.openApp('word')" oncontextmenu="event.preventDefault();event.stopPropagation();sys.contextMenu(event.clientX,event.clientY,[{label:'Відкрити',action:()=>sys.openApp('word')},{sep:true},{label:'Видалити',action:()=>{delete sys.files['${folder}']['${f}'];showFolder('${folder}');sys.save();}}])">
                            ${ICONS.txtFile}<span>${f}</span>
                        </div>`).join('')}
                </div>`;
        };
        const folders=Object.keys(this.files);
        b.innerHTML=`
            <div style="display:flex;align-items:center;gap:6px;padding:8px;background:rgba(255,255,255,0.04);border-bottom:1px solid rgba(255,255,255,0.08);">
                <div style="flex:1;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);border-radius:6px;padding:5px 10px;font-size:12px;color:rgba(255,255,255,0.6);">📂 /home/user</div>
            </div>
            <div class="file-grid scroll" style="height:calc(100% - 46px);">
                ${folders.map(f=>`<div class="file-icon" ondblclick="sys.renderFilesFolder('${id}','${f}')">
                    ${ICONS.folder}<span>${f}</span>
                </div>`).join('')}
            </div>`;
    },
    renderFilesFolder:function(id,folder){
        const b=document.getElementById(`body-${id}`);
        const files=this.files[folder]||{};
        b.innerHTML=`
            <div style="display:flex;align-items:center;gap:6px;padding:8px;background:rgba(255,255,255,0.04);border-bottom:1px solid rgba(255,255,255,0.08);">
                <button class="tb-btn" style="min-width:28px;height:28px;" onclick="sys.renderFiles('${id}')">←</button>
                <div style="flex:1;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);border-radius:6px;padding:5px 10px;font-size:12px;color:rgba(255,255,255,0.6);">📂 /${folder}</div>
            </div>
            <div class="file-grid scroll" style="height:calc(100% - 46px);">
                ${Object.keys(files).filter(f=>f!=='_lock').map(f=>`<div class="file-icon" ondblclick="sys.openApp('word')">${ICONS.txtFile}<span>${f}</span></div>`).join('')}
            </div>`;
    },

    /* === PAINT === */
    renderPaint:function(id){
        const b=document.getElementById(`body-${id}`);
        b.innerHTML=`
            <div style="height:100%;display:flex;flex-direction:column;">
                <div class="paint-toolbar">
                    <input type="color" id="p-color-${id}" value="#000000" title="Колір">
                    <input type="range" min="1" max="30" id="p-size-${id}" value="4" style="width:80px;" title="Розмір">
                    <select id="p-tool-${id}" class="set-input"><option value="pen">Олівець</option><option value="line">Лінія</option><option value="rect">Прямокутник</option><option value="circle">Коло</option></select>
                    <button class="btn-glass" style="padding:4px 8px;" onclick="sys.clearPaint('${id}')">Очистити</button>
                    <button class="btn-glass" style="padding:4px 8px;" onclick="sys.saveCanvas('${id}')">Зберегти PNG</button>
                </div>
                <canvas id="cvs-${id}" class="paint-canvas"></canvas>
            </div>`;
        setTimeout(()=>{
            const cvs=document.getElementById(`cvs-${id}`);
            if(!cvs) return;
            const ctx=cvs.getContext('2d');
            cvs.width=cvs.clientWidth; cvs.height=cvs.clientHeight;
            let painting=false; let startX,startY;
            const getCoords=e=>{const r=cvs.getBoundingClientRect();return{x:e.clientX-r.left,y:e.clientY-r.top};};
            cvs.onmousedown=e=>{
                painting=true;
                const{x,y}=getCoords(e); startX=x; startY=y;
                ctx.lineWidth=document.getElementById(`p-size-${id}`).value;
                ctx.strokeStyle=document.getElementById(`p-color-${id}`).value;
                ctx.fillStyle=document.getElementById(`p-color-${id}`).value;
                ctx.beginPath(); ctx.moveTo(x,y);
            };
            cvs.onmousemove=e=>{
                if(!painting) return;
                const{x,y}=getCoords(e);
                if(document.getElementById(`p-tool-${id}`).value==='pen'){
                    ctx.lineTo(x,y); ctx.stroke(); ctx.beginPath(); ctx.moveTo(x,y);
                }
            };
            cvs.onmouseup=e=>{
                if(!painting) return; painting=false;
                const{x,y}=getCoords(e);
                const tool=document.getElementById(`p-tool-${id}`).value;
                if(tool==='line'){ctx.beginPath();ctx.moveTo(startX,startY);ctx.lineTo(x,y);ctx.stroke();}
                else if(tool==='rect'){ctx.strokeRect(startX,startY,x-startX,y-startY);}
                else if(tool==='circle'){ctx.beginPath();ctx.arc((startX+x)/2,(startY+y)/2,Math.abs(x-startX)/2,0,2*Math.PI);ctx.stroke();}
            };
        },100);
    },
    clearPaint:function(id){const cvs=document.getElementById(`cvs-${id}`);if(cvs){const ctx=cvs.getContext('2d');ctx.clearRect(0,0,cvs.width,cvs.height);}},
    saveCanvas:function(id){
        const cvs=document.getElementById(`cvs-${id}`); if(!cvs) return;
        const url=cvs.toDataURL('image/png');
        const a=document.createElement('a'); a.href=url;
        a.download=prompt("Ім'я файлу:","Малюнок.png");
        if(a.download){document.body.appendChild(a);a.click();document.body.removeChild(a);}
    },

    /* === WEATHER === */
    weatherData:{
        "Київ":{temp:22,desc:"Сонячно",icon:'☀️',style:"linear-gradient(to bottom,#2980b9,#6dd5fa)"},
        "Чернівці":{temp:19,desc:"Частково хмарно",icon:'⛅',style:"linear-gradient(to bottom,#485563,#29323c)"},
        "Львів":{temp:18,desc:"Дощ",icon:'🌧',style:"linear-gradient(to bottom,#757f9a,#d7dde8)"},
        "Одеса":{temp:25,desc:"Хмарно",icon:'☁️',style:"linear-gradient(to bottom,#333,#666)"},
    },
    renderWeather:function(id){
        const b=document.getElementById(`body-${id}`);
        b.innerHTML=`<div style="height:100%;display:flex;flex-direction:column;padding:16px;">
            <select id="weather-city-${id}" class="set-input" style="width:160px;margin-bottom:16px;" onchange="sys.updateWeather('${id}',this.value)">
                ${Object.keys(sys.weatherData).map(c=>`<option>${c}</option>`).join('')}
            </select>
            <div id="weather-info-${id}" style="flex:1;display:flex;flex-direction:column;justify-content:center;align-items:center;"></div>
        </div>`;
        this.updateWeather(id,"Чернівці");
        const sel=document.getElementById(`weather-city-${id}`);
        if(sel) for(let i=0;i<sel.options.length;i++) if(sel.options[i].value==='Чернівці') sel.selectedIndex=i;
    },
    updateWeather:function(id,city){
        const data=this.weatherData[city];
        const info=document.getElementById(`weather-info-${id}`);
        if(!info) return;
        info.innerHTML=`
            <div style="font-size:72px;margin-bottom:8px;">${data.icon}</div>
            <div style="font-size:56px;font-weight:200;line-height:1;">${data.temp}°C</div>
            <div style="font-size:18px;color:rgba(255,255,255,0.7);margin-top:8px;">${city}</div>
            <div style="font-size:14px;color:rgba(255,255,255,0.5);margin-top:4px;">${data.desc}</div>
            <div style="display:flex;gap:12px;margin-top:16px;">
                ${[['💧','Вологість','65%'],['💨','Вітер','12 км/г'],['🌡','Відчувається','${data.temp-2}°C']].map(([ic,lb,vl])=>`
                    <div style="background:rgba(255,255,255,0.08);border-radius:10px;padding:10px 14px;text-align:center;border:1px solid rgba(255,255,255,0.1);">
                        <div style="font-size:20px;">${ic}</div>
                        <div style="font-size:10px;color:rgba(255,255,255,0.5);margin-top:2px;">${lb}</div>
                        <div style="font-size:13px;font-weight:600;">${vl}</div>
                    </div>`).join('')}
            </div>`;
        document.getElementById(`body-${id}`).style.background=data.style;
    },

    /* === CALENDAR === */
    renderCal:function(id){
        const b=document.getElementById(`body-${id}`);
        const now=new Date();
        const year=now.getFullYear(), month=now.getMonth();
        const firstDay=new Date(year,month,1).getDay();
        const daysInMonth=new Date(year,month+1,0).getDate();
        const today=now.getDate();
        const startOffset=(firstDay===0)?6:firstDay-1;
        let grid=`<div class="calendar-grid">`;
        ["Пн","Вт","Ср","Чт","Пт","Сб","Нд"].forEach(d=>grid+=`<div class="day-header">${d}</div>`);
        for(let i=0;i<startOffset;i++) grid+=`<div></div>`;
        for(let d=1;d<=daysInMonth;d++) grid+=`<div class="day-cell ${d===today?'current':''}">${d}</div>`;
        grid+=`</div>`;
        b.innerHTML=`<div style="padding:20px;"><h2 style="text-align:center;margin-bottom:16px;">${now.toLocaleDateString('uk-UA',{year:'numeric',month:'long'})}</h2>${grid}</div>`;
    },

    /* === TASK MANAGER === */
    renderTaskMgr:function(id){
        const b=document.getElementById(`body-${id}`);
        b.innerHTML=`<div style="padding:14px;display:flex;flex-direction:column;height:100%;">
            <h2 style="margin-bottom:12px;">Диспетчер завдань</h2>
            <h3 style="margin-bottom:8px;">Запущені процеси</h3>
            <div class="task-list scroll" id="process-list"></div>
            <h3 style="margin-top:16px;margin-bottom:8px;">Автозавантаження</h3>
            <div class="task-list scroll" style="font-size:13px;color:#aaa;">${sys.config.autoStart.length?sys.config.autoStart.join(', '):'Немає'}</div>
        </div>`;
        this.updateTaskList();
    },
    updateTaskList:function(){
        const list=document.getElementById('process-list'); if(!list) return;
        const running=this.apps.filter(a=>a.process);
        list.innerHTML=running.length===0?'<p style="color:#aaa;">Немає активних процесів.</p>':
            running.map(a=>`<div style="display:flex;justify-content:space-between;align-items:center;padding:6px 0;border-bottom:1px solid #333;font-size:13px;">
                <div>${a.icon}<strong style="margin-left:6px;">${a.name}</strong><span style="font-size:11px;color:#aaa;margin-left:8px;">PID:${a.process.pid} | RAM:${a.process.memory}MB</span></div>
                <button class="btn-glass" style="background:#e81123;padding:4px 10px;font-size:11px;" onclick="sys.terminateProcess('${a.id}')">Завершити</button>
            </div>`).join('');
    },
    terminateProcess:function(id){
        if(confirm(`Завершити процес ${this.apps.find(a=>a.id===id)?.name}?`)){ this.closeWin(id); this.updateTaskList(); }
    },

    /* === MUSIC === */
    renderMusic:function(id){
        const b=document.getElementById(`body-${id}`);
        b.innerHTML=`<div style="padding:20px;display:flex;flex-direction:column;align-items:center;gap:14px;height:100%;overflow:auto;">
            <div id="music-art" style="width:150px;height:150px;border-radius:18px;background:linear-gradient(135deg,#1a0a3d,#0d1b4b);display:flex;align-items:center;justify-content:center;font-size:64px;box-shadow:0 16px 40px rgba(0,0,0,0.5);transition:transform 0.3s;">🎵</div>
            <div style="text-align:center;"><div id="music-title" style="font-size:16px;font-weight:700;">Neon Dreams</div><div id="music-artist" style="font-size:13px;color:rgba(255,255,255,0.5);">SynthWave</div></div>
            <div style="width:100%;max-width:280px;">
                <div style="height:3px;background:rgba(255,255,255,0.1);border-radius:2px;cursor:pointer;" onclick="let p=event.offsetX/this.offsetWidth*100;document.getElementById('music-prog-bar').style.width=p+'%'">
                    <div id="music-prog-bar" style="height:100%;width:35%;background:linear-gradient(90deg,var(--accent),#7c4dff);border-radius:2px;transition:width 0.1s;"></div>
                </div>
                <div style="display:flex;justify-content:space-between;font-size:10px;color:rgba(255,255,255,0.4);margin-top:3px;"><span>1:12</span><span>3:24</span></div>
            </div>
            <div style="display:flex;align-items:center;gap:16px;">
                <button class="tb-btn" style="height:36px;min-width:36px;font-size:18px;" onclick="sys.notify('Музика','Перемішано',true)">🔀</button>
                <button class="tb-btn" style="height:36px;min-width:36px;font-size:18px;" onclick="sys.notify('Музика','Попередній',true)">⏮</button>
                <button id="music-play-btn" style="width:50px;height:50px;border-radius:50%;border:none;cursor:pointer;background:linear-gradient(135deg,var(--accent),#7c4dff);color:white;font-size:20px;display:flex;align-items:center;justify-content:center;box-shadow:0 8px 24px rgba(0,210,255,0.3);transition:0.2s;" onclick="window._musicPlaying=!window._musicPlaying;this.textContent=window._musicPlaying?'⏸':'▶';document.getElementById('music-art').style.animation=window._musicPlaying?'spin 8s linear infinite':'none';">▶</button>
                <button class="tb-btn" style="height:36px;min-width:36px;font-size:18px;" onclick="sys.notify('Музика','Наступний',true)">⏭</button>
                <button class="tb-btn" style="height:36px;min-width:36px;font-size:18px;">🔁</button>
            </div>
            <div style="width:100%;max-width:280px;display:flex;flex-direction:column;gap:4px;">
                ${[['🎵','Neon Dreams','SynthWave'],['🎶','Dark Matter','Quantum'],['🎸','Electric Sky','Volt']].map(([ic,t,a])=>`
                    <div style="display:flex;align-items:center;gap:10px;padding:8px;border-radius:10px;cursor:pointer;transition:0.15s;" onmouseover="this.style.background='rgba(255,255,255,0.07)'" onmouseout="this.style.background=''" onclick="document.getElementById('music-title').textContent='${t}';document.getElementById('music-artist').textContent='${a}'">
                        <span style="font-size:18px;">${ic}</span>
                        <div><div style="font-size:13px;font-weight:600;">${t}</div><div style="font-size:11px;color:rgba(255,255,255,0.4);">${a}</div></div>
                    </div>`).join('')}
                <div style="margin-top:8px;">
                    <button class="btn-glass" style="padding:5px 10px;font-size:12px;width:100%;" onclick="document.getElementById('music-up').click()">+ Завантажити трек</button>
                    <input type="file" id="music-up" class="hidden" accept="audio/*" onchange="sys.notify('Музика','Трек додано',true)">
                </div>
            </div>
        </div>`;
        window._musicPlaying=false;
    },

    /* === WORD === */
    renderWord:function(id,extra){
        const fname=extra&&extra.file?extra.file:null;
        const initContent=fname&&this.files.Desktop&&this.files.Desktop[fname]?this.files.Desktop[fname]:'';
        document.getElementById(`body-${id}`).innerHTML=`
            <div style="height:100%;display:flex;flex-direction:column;">
                <div style="padding:5px 8px;background:rgba(255,255,255,0.04);display:flex;gap:4px;align-items:center;border-bottom:1px solid rgba(255,255,255,0.08);">
                    <button class="btn-glass" style="padding:4px 8px;font-size:11px;" onclick="document.execCommand('bold')"><b>B</b></button>
                    <button class="btn-glass" style="padding:4px 8px;font-size:11px;" onclick="document.execCommand('italic')"><i>I</i></button>
                    <button class="btn-glass" style="padding:4px 8px;font-size:11px;" onclick="document.execCommand('underline')"><u>U</u></button>
                    <div style="flex:1;font-size:11px;color:rgba(255,255,255,0.4);padding-left:8px;">${fname?'📄 '+fname:'Без назви'}</div>
                    <button class="btn-glass" style="padding:4px 8px;font-size:11px;" onclick="sys._saveWordDoc('${id}','${fname||''}')">💾 Зберегти</button>
                    ${!fname?`<button class="btn-glass" style="padding:4px 8px;font-size:11px;" onclick="sys._saveWordDocAs('${id}')">💾 Зберегти як...</button>`:''}
                </div>
                <div id="word-editor-${id}" contenteditable="true" style="flex:1;width:100%;background:#fff;color:#000;padding:20px;border:none;font-size:14px;outline:none;font-family:'Segoe UI';overflow-y:auto;">${initContent}</div>
            </div>`;
    },
    _saveWordDoc:function(id,fname){
        const content=document.getElementById(`word-editor-${id}`).innerText;
        if(fname){
            if(!this.files.Desktop) this.files.Desktop={};
            this.files.Desktop[fname]=content;
            this.save();
            this.notify("GWord",`«${fname}» збережено ✓`,true);
        } else {
            this._saveWordDocAs(id);
        }
    },
    _saveWordDocAs:function(id){
        const name=prompt("Назва файлу:","Документ.txt");
        if(!name) return;
        const fname=name.endsWith('.txt')?name:name+'.txt';
        const content=document.getElementById(`word-editor-${id}`).innerText;
        if(!this.files.Desktop) this.files.Desktop={};
        this.files.Desktop[fname]=content;
        this.renderDesktop(); this.save();
        this.notify("GWord",`«${fname}» збережено на робочому столі ✓`,true);
    },

    /* === TABLE === */
    renderTable:function(id){
        let html=`<div class="table-grid">`;
        html+=`<div class="table-cell table-header"></div>`;
        for(let c=1;c<=10;c++) html+=`<div class="table-cell table-header">${String.fromCharCode(64+c)}</div>`;
        for(let r=1;r<=20;r++){
            html+=`<div class="table-cell table-header" style="text-align:center;">${r}</div>`;
            for(let c=1;c<=10;c++) html+=`<div class="table-cell" contenteditable="true"></div>`;
        }
        html+=`</div>`;
        document.getElementById(`body-${id}`).innerHTML=html;
    },

    /* === CALC === */
    renderCalc:function(id){
        const b=document.getElementById(`body-${id}`);
        b.innerHTML=`<div style="height:100%;display:flex;flex-direction:column;padding:12px;gap:8px;background:#000;">
            <div style="background:#111;border-radius:10px;padding:14px;text-align:right;flex-shrink:0;">
                <div id="calc-expr-${id}" style="font-size:12px;color:#555;min-height:14px;"></div>
                <div id="calc-res-${id}" style="font-size:36px;font-weight:200;color:#fff;">0</div>
            </div>
            <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:6px;flex:1;">
                ${[['C','±','%','÷'],['7','8','9','×'],['4','5','6','−'],['1','2','3','+'],['0','.','⌫','=']].flat().map(b=>`
                    <button onclick="sys._calcPress('${id}','${b}')" style="border-radius:10px;border:none;cursor:pointer;font-size:18px;font-weight:600;
                        background:${b==='='?'linear-gradient(135deg,var(--accent),#7c4dff)':['÷','×','−','+'].includes(b)?'rgba(0,210,255,0.15)':b==='C'?'rgba(232,17,35,0.18)':'rgba(255,255,255,0.08)'};
                        color:${['÷','×','−','+'].includes(b)?'var(--accent)':b==='C'?'#e81123':'#fff'};
                        transition:0.15s;" onmouseover="this.style.filter='brightness(1.2)'" onmouseout="this.style.filter=''">
                        ${b}
                    </button>`).join('')}
            </div>
        </div>`;
        window[`_calcExpr_${id}`]='';
    },
    _calcPress:function(id,b){
        const res=document.getElementById(`calc-res-${id}`);
        const expr=document.getElementById(`calc-expr-${id}`);
        let e=window[`_calcExpr_${id}`]||'';
        if(b==='C'){e='';res.textContent='0';expr.textContent='';}
        else if(b==='='){
            try{const r=eval(e.replace(/×/g,'*').replace(/÷/g,'/').replace(/−/g,'-'));
                expr.textContent=e+'=';res.textContent=r;e=String(r);}
            catch{res.textContent='Помилка';}
        }
        else if(b==='⌫'){e=e.slice(0,-1)||'';res.textContent=e||'0';}
        else if(b==='±'){e=e.startsWith('-')?e.slice(1):'-'+e;res.textContent=e;}
        else{e+=b;res.textContent=e;}
        window[`_calcExpr_${id}`]=e;
    },

    /* === TRASH === */
    renderTrash:function(id){ document.getElementById(`body-${id}`).innerHTML='<div style="padding:20px;text-align:center;padding-top:60px;"><div style="font-size:64px;margin-bottom:16px;">🗑</div><p style="color:#aaa;">Кошик порожній</p></div>'; },
};

// ... твой предыдущий код (функция renderTrash и т.д.)

/* --- Логика контекстного меню ПКМ --- */
const cm = document.getElementById('desktop-cm');

document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    cm.style.left = e.clientX + 'px';
    cm.style.top = e.clientY + 'px';
    cm.classList.remove('hidden');
});

window.addEventListener('click', () => {
    cm.classList.add('hidden');
});

function createNewFolder() {
    const folder = document.createElement('div');
    folder.className = 'desktop-icon'; 
    folder.innerHTML = `
        <div class="icon-img folder-icon">📁</div>
        <div class="icon-text">Новая папка</div>
    `;
    // Здесь укажи ID контейнера твоего рабочего стола, если он есть, например document.getElementById('desktop').appendChild(folder);
    document.body.appendChild(folder); 
}
/* ------------------------------------ */

window.onload=()=>sys.boot();
