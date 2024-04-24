import{_ as k}from"./chunks/articleMetadata.DtcIqI1h.js";import{_ as g,m as t,a as F,u as e,B as n,e as l,x as o,aj as r,o as p,p as m,q as u}from"./chunks/framework.BKaFImy5.js";import"./chunks/theme.P50tMOTR.js";const P=JSON.parse('{"title":"Git设置代理解决git clone太慢的问题","description":"Git设置代理解决git clone太慢的问题","frontmatter":{"title":"Git设置代理解决git clone太慢的问题","description":"Git设置代理解决git clone太慢的问题","date":"2020-02-01T12:33:03.000Z","tags":["Git"]},"headers":[],"relativePath":"blog/2020/git-clone-slow.md","filePath":"posts/blog/2020/git-clone-slow/README.md","lastUpdated":1713957316000}'),_={name:"blog/2020/git-clone-slow.md"},C=l("h1",{id:"git设置代理解决git-clone太慢的问题",tabindex:"-1"},[o("Git设置代理解决git clone太慢的问题 "),l("a",{class:"header-anchor",href:"#git设置代理解决git-clone太慢的问题","aria-label":'Permalink to "Git设置代理解决git clone太慢的问题"'},"​")],-1),b=r(`<h2 id="设置代理" tabindex="-1">设置代理 <a class="header-anchor" href="#设置代理" aria-label="Permalink to &quot;设置代理&quot;">​</a></h2><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --global</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> http.proxy</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> socks5://domain:port</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">//</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 栗子:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --global</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> http.proxy</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> socks5://127.0.0.1:2081</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>`,2),y=r('<ol><li>可以不要引号，实测也可以，反而加了引号有些网站不能访问</li><li>不需要设置 https.proxy ，仅设置 http.proxy就可以了</li><li>端口需要看本地的socks端口，不是固定</li></ol><p><img src="https://pic.yqqy.top/blog/20200201/efIkpyjqj5Ju.png" alt="mark"></p><p><img src="https://pic.yqqy.top/blog/20200201/GC449AV9djFA.png" alt="mark"></p><h2 id="取消代理" tabindex="-1">取消代理 <a class="header-anchor" href="#取消代理" aria-label="Permalink to &quot;取消代理&quot;">​</a></h2><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --global</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --unset</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> http.proxy</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>查看代理</p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --global</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --get</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> http.proxy</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>',7);function B(s,f,v,E,T,x){const h=k,c=t("ClientOnly"),d=t("font");return p(),F("div",null,[C,e(c,null,{default:n(()=>{var i,a;return[(((i=s.$frontmatter)==null?void 0:i.aside)??!0)&&(((a=s.$frontmatter)==null?void 0:a.showArticleMetadata)??!0)?(p(),m(h,{key:0,article:s.$frontmatter},null,8,["article"])):u("",!0)]}),_:1}),b,e(d,{color:"#F56C6C"},{default:n(()=>[o("注意点：")]),_:1}),y])}const w=g(_,[["render",B]]);export{P as __pageData,w as default};