document.head.innerHTML+="<style>*{font-family:monospace;}</style>";let l="map",o="onclick",e=e=>document.createElement(e),t=()=>e("button"),n=()=>e("div"),a=(e,t)=>e.appendChild(t),i=e=>a(b,e),r=e=>Array(e).fill(!1),c=(e,t)=>e.innerText=t?"x":"-",u=new AudioContext,m=!0,d=0,p=130,s=[[.3,.02,180,65],[.02,.02,400,200],[.1,.1,300,100],[.05,.02,9e3,9e3]],y=r(4)[l](()=>r(16));y[l]((e,r)=>{let u=n();i(u),e[l]((e,n)=>{let i=t();c(i),i[o]=(()=>{let e=!y[r][n];y[r][n]=e,c(i,e)}),a(u,i)})});let T=n();i(T);let f=r(16)[l](()=>{let e=t();return c(e),a(T,e),e});f[l](e=>a(T,e)),(x=(()=>{m||(y[l]((e,t)=>e[d]&&(([e,t,n,a],i="linearRampToValueAtTime")=>{let r=u.createOscillator(),c=u.createGain(),m=u.currentTime;r.frequency.value=n,r.frequency[i](a,m+t),c.gain[i](0,m+e),r.start(),r.connect(c),c.connect(u.destination)})(s[t])),f[l]((e,t)=>c(e,t===d)),15==d++&&(d=0)),setTimeout(x,15e3/p)}))();let A=t();A.innerText="▶/❙❙",A[o]=(()=>m=!m),i(A);let g=e("input");g.type="number",g.value=p,g[o]=(e=>p=e.target.value),i(g);
