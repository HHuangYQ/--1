const $siteList=$(".siteList"),$lastLi=$siteList.find("li.last"),x=localStorage.getItem("x"),xObject=JSON.parse(x),hashMap=xObject||[{logo:"D",url:"https://developer.mozilla.org/zh-CN/"},{logo:"B",url:"https://www.bilibili.com"}],simplifyUrl=e=>e.replace("https://","").replace("http://","").replace("www.","").replace(/\/.*/,""),render=()=>{$siteList.find("li:not(.last)").remove(),hashMap.forEach(((e,s)=>{const l=$(`<li>\n        <div class="site">\n        <div class="logo">${e.logo}</div>\n        <div class="link">${simplifyUrl(e.url)}</div>\n        <div  class ='close'><svg class="icon" >\n        <use xlink:href="#icon-close"></use>\n    </svg>\n    </div>\n        </div>\n        </li>`).insertBefore($lastLi);l.on("click",(()=>{window.open(e.url)})),l.on("click",".close",(e=>{e.stopPropagation(),hashMap.splice(s,1),render()}))}))};render(),$(".addButton").on("click",(()=>{let e=window.prompt("请输入您要添加的网址：");0!=e.indexOf("http")&&(e="https://"+e),console.log(e),hashMap.push({logo:simplifyUrl(e)[0].toUpperCase(),url:e}),render()})),window.onbeforeunload=()=>{const e=JSON.stringify(hashMap);localStorage.setItem("x",e)},$(document).on("keypress",(e=>{const{key:s}=e;for(let e=0;e<hashMap.length;e++)hashMap[e].logo.toLowerCase()===s&&window.open(hashMap[e].url)}));
//# sourceMappingURL=index.0a7582fb.js.map
