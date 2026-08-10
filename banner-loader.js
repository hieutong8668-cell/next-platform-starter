(()=>{
  const img=document.getElementById('bannerMain');
  if(!img)return;
  const url='assets/banner-main-20260811.b64?v=20260811-0621';
  const fail=()=>{document.documentElement.classList.add('banner-failed');img.classList.add('ready')};
  fetch(url,{cache:'no-store'})
    .then(r=>{if(!r.ok)throw new Error('HTTP '+r.status);return r.text()})
    .then(text=>{
      const raw=text.trim();
      if(!raw||raw.slice(0,4)!=='UklG')throw new Error('invalid banner data');
      const bin=atob(raw);
      const bytes=new Uint8Array(bin.length);
      for(let i=0;i<bin.length;i++)bytes[i]=bin.charCodeAt(i);
      const blobUrl=URL.createObjectURL(new Blob([bytes],{type:'image/webp'}));
      img.onload=()=>{img.classList.add('ready');document.documentElement.classList.add('banner-loaded');URL.revokeObjectURL(blobUrl)};
      img.onerror=()=>{URL.revokeObjectURL(blobUrl);fail()};
      img.src=blobUrl;
    })
    .catch(fail);
})();