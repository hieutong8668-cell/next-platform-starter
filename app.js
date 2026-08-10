const screens=[...document.querySelectorAll('.screen')];
function show(id){screens.forEach(s=>s.classList.toggle('active',s.id===id))}
const modal=document.getElementById('authModal');
function openAuth(type='login'){modal.classList.add('open');setTab(type)}
function closeAuth(){modal.classList.remove('open')}
function setTab(type){document.querySelectorAll('[data-tab]').forEach(x=>x.classList.toggle('active',x.dataset.tab===type));document.querySelectorAll('.form').forEach(f=>f.classList.remove('active'));document.getElementById(type==='login'?'loginForm':'registerForm').classList.add('active')}
document.querySelectorAll('.login-open').forEach(b=>b.addEventListener('click',()=>openAuth('login')));
document.querySelectorAll('.register-open').forEach(b=>b.addEventListener('click',()=>openAuth('register')));
document.querySelector('.auth-close').addEventListener('click',closeAuth);
modal.addEventListener('click',e=>{if(e.target===modal)closeAuth()});
document.querySelectorAll('[data-tab]').forEach(b=>b.addEventListener('click',()=>setTab(b.dataset.tab)));
function runConnect(){closeAuth();show('connect');let p=0;const n=document.getElementById('percent'),bar=document.getElementById('barFill'),st=document.getElementById('status');const t=setInterval(()=>{p=Math.min(100,p+Math.ceil(Math.random()*6));n.textContent=p+'%';bar.style.width=p+'%';st.textContent=p<28?'Đang xác thực tài khoản...':p<62?'Đang kết nối máy chủ...':p<90?'Đang đồng bộ dữ liệu...':'Đang hoàn tất...';if(p>=100){clearInterval(t);setTimeout(()=>show('lobby'),520)}},95)}
document.getElementById('loginForm').addEventListener('submit',e=>{e.preventDefault();runConnect()});
document.getElementById('registerForm').addEventListener('submit',e=>{e.preventDefault();runConnect()});
document.querySelectorAll('[data-go]').forEach(b=>b.addEventListener('click',()=>show(b.dataset.go)));
const menu=document.getElementById('sideMenu');
const menuBtn=document.getElementById('menuBtn');if(menuBtn&&menu)menuBtn.addEventListener('click',()=>menu.classList.toggle('open'));
const logoutBtn=document.getElementById('logoutBtn');if(logoutBtn)logoutBtn.addEventListener('click',()=>{if(menu)menu.classList.remove('open');show('welcome')});
function toast(msg,screen){const el=screen==='games'?document.getElementById('toastGames'):document.getElementById('toast');if(!el)return;el.textContent=msg;el.classList.add('show');setTimeout(()=>el.classList.remove('show'),1400)}
document.querySelectorAll('[data-toast]').forEach(b=>b.addEventListener('click',()=>toast(b.dataset.toast,document.getElementById('games').classList.contains('active')?'games':'lobby')));
document.querySelectorAll('.categories button').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('.categories button').forEach(x=>x.classList.remove('active'));b.classList.add('active')}));
