import{r as h,w as b,d as p}from"./index-388cf647.js";import{U as r}from"./index-bf21310b.js";const w=[{back:"#8d5524",front:"#ffdbac"},{back:"#c68642",front:"#ffdbac"},{back:"#e0ac69",front:"#8d5524"},{back:"#f1c27d",front:"#8d5524"},{back:"#ffdbac",front:"#8d5524"}],k=h(w);function m(t,{dataProvider:e}){const c=b(!1),o=()=>r(c);let s=null;return{fetch:async(n=!1,i)=>{if(o()&&!n)return;const a=performance.now().toString();s=a,c.set(!0);const u=r(t);try{i!==void 0&&t.set(i);const l=await e();s===a&&t.set(l)}catch(l){throw s===a&&i!==void 0&&t.set(u),l}finally{s===a&&(c.set(!1),s=null)}},fetching:c,isFetching:o,subscribe:n=>t.subscribe(n),cache:t}}const y=async()=>{let t="https://api.sheety.co/0a415664d31b034a8a8ca1c9b06f8a40/wimb/main",e=await(await fetch(t)).json(),c=e.main.map(a=>a.quote);t="https://api.sheety.co/0a415664d31b034a8a8ca1c9b06f8a40/wimb/popCulture",e=await(await fetch(t)).json();let o=e.popCulture.map(a=>a.quote);t="https://api.sheety.co/0a415664d31b034a8a8ca1c9b06f8a40/wimb/socialMedia",e=await(await fetch(t)).json();let s=e.socialMedia.map(a=>a.quote);t="https://api.sheety.co/0a415664d31b034a8a8ca1c9b06f8a40/wimb/nsfw",e=await(await fetch(t)).json();let f=e.nsfw.map(a=>a.quote);t="https://api.sheety.co/0a415664d31b034a8a8ca1c9b06f8a40/wimb/legal",e=await(await fetch(t)).json();let n=e.legal.map(a=>a.quote);return[...c,...o,...s,...f,...n]},d=m(b([]),{dataProvider:()=>y()});d.fetch();const q=p(d,t=>{let e=Math.floor(t.length/5);return t.slice(0,e)});export{d as b,q as c,k as s};