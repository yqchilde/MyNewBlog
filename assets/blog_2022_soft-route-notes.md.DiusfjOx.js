import{_ as e}from"./chunks/articleMetadata.DtcIqI1h.js";import{_ as n,m as r,a as c,u as h,B as d,e as s,x as g,aj as m,o as l,p as u,q as k}from"./chunks/framework.BKaFImy5.js";import"./chunks/theme.P50tMOTR.js";const E=JSON.parse('{"title":"玩软路由的一些笔记","description":"玩软路由也有两个月了，逐渐开始不想折腾了，特此记录一下一些配置，以防止日后生疏忘记。","frontmatter":{"title":"玩软路由的一些笔记","description":"玩软路由也有两个月了，逐渐开始不想折腾了，特此记录一下一些配置，以防止日后生疏忘记。","date":"2022-08-29T08:49:39.000Z","tags":["软路由"]},"headers":[],"relativePath":"blog/2022/soft-route-notes.md","filePath":"posts/blog/2022/soft-route-notes/README.md","lastUpdated":1713957316000}'),b={name:"blog/2022/soft-route-notes.md"},q=s("h1",{id:"玩软路由的一些笔记",tabindex:"-1"},[g("玩软路由的一些笔记 "),s("a",{class:"header-anchor",href:"#玩软路由的一些笔记","aria-label":'Permalink to "玩软路由的一些笔记"'},"​")],-1),y=m(`<div class="danger custom-block"><p class="custom-block-title">吐槽</p><p>本文开始之前要批评一款软路由产品《以N5105这颗CPU制作的软路由成品》，这是一台被某些UP吹起来的机器，说句垃圾不为过吧毕竟很多人整天为了它心烦，在发本文时N5105我已经出手卖掉而且仍有不兼容的问题，主要表现在PVE虚拟机上再虚拟化一些服务出来会有概率卡死机问题，以及其他的兼容性问题，售后群里天天都能看到吐槽的，大无语了，咸鱼是它最好的归属。</p></div><div class="tip custom-block"><p class="custom-block-title">赞</p><p>本文使用的机器是《以奔腾7505这颗CPU制作的软路由成品》，目前用了有一周了，在PVE下第一次感觉到这么的稳定。</p></div><h2 id="虚拟机服务" tabindex="-1">虚拟机服务 <a class="header-anchor" href="#虚拟机服务" aria-label="Permalink to &quot;虚拟机服务&quot;">​</a></h2><h3 id="ikuai" tabindex="-1">iKuai <a class="header-anchor" href="#ikuai" aria-label="Permalink to &quot;iKuai&quot;">​</a></h3><h4 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h4><p>博主使用iKuai作为主路由，起拨号上网以及其他网络管理功能</p><p>固件下载地址： <a href="https://www.ikuai8.com/component/download" target="_blank" rel="noreferrer">https://www.ikuai8.com/component/download</a>，下载ISO镜像导入到pve-local里，如图</p><p><img src="https://pic.yqqy.top/blog/202208290958939.png" alt="img"></p><ol><li>右上角点击 &lt;创建虚拟机&gt;</li></ol><p><img src="https://pic.yqqy.top/blog/202208291013559.png" alt=""></p><ol start="2"><li>操作系统配置</li></ol><p><img src="https://pic.yqqy.top/blog/202208291014407.png" alt=""></p><ol start="3"><li>系统配置</li></ol><p><img src="https://pic.yqqy.top/blog/202208291014310.png" alt=""></p><ol start="4"><li>磁盘配置</li></ol><p><img src="https://pic.yqqy.top/blog/202208291048429.png" alt=""></p><ol start="5"><li>CPU配置</li></ol><p><img src="https://pic.yqqy.top/blog/202208291055653.png" alt=""></p><ol start="6"><li>内存配置</li></ol><p><img src="https://pic.yqqy.top/blog/202208291056704.png" alt=""></p><ol start="7"><li>网络配置</li></ol><p><img src="https://pic.yqqy.top/blog/202208291058116.png" alt=""></p><ol start="8"><li>网卡直通</li></ol><p><img src="https://pic.yqqy.top/blog/202208291112421.png" alt=""></p><p><img src="https://pic.yqqy.top/blog/202208291124108.png" alt=""></p><ol start="9"><li>修改引导顺序</li></ol><p><img src="https://pic.yqqy.top/blog/202208291114446.png" alt=""></p><h4 id="ikuai配置" tabindex="-1">iKuai配置 <a class="header-anchor" href="#ikuai配置" aria-label="Permalink to &quot;iKuai配置&quot;">​</a></h4><p>待补充</p><h3 id="openwrt" tabindex="-1">openwrt <a class="header-anchor" href="#openwrt" aria-label="Permalink to &quot;openwrt&quot;">​</a></h3><h4 id="安装-1" tabindex="-1">安装 <a class="header-anchor" href="#安装-1" aria-label="Permalink to &quot;安装&quot;">​</a></h4><ol start="0"><li>由于博主使用openwrt仅做旁路由，估不需要直通网卡</li><li>博主使用了esir的固件安装，网盘地址<a href="https://drive.google.com/drive/folders/1uRXg_krKHPrQneI3F2GNcSVRoCgkqESr" target="_blank" rel="noreferrer">https://drive.google.com/drive/folders/1uRXg_krKHPrQneI3F2GNcSVRoCgkqESr</a>，博主用的插件少，仅选择精品小包，选择最新的 <code>uefi.img.gz</code> 结尾的镜像下载到本地。使用命令 <code>gzip -d 镜像目录</code> 解压镜像得到 <code>.img</code> 结尾的镜像。</li><li>上传镜像，同ikuai上传一样方式，上传到pve-local，提前复制好上传后保存的路径</li><li>右上角点击 &lt;创建虚拟机&gt;</li></ol><p><img src="https://pic.yqqy.top/blog/202208291153945.png" alt=""></p><ol start="4"><li>操作系统配置</li></ol><p><img src="https://pic.yqqy.top/blog/202208291155143.png" alt=""></p><ol start="5"><li>系统配置</li></ol><p><img src="https://pic.yqqy.top/blog/202208291014310.png" alt=""></p><ol start="6"><li>磁盘配置</li></ol><p><img src="https://pic.yqqy.top/blog/202208291335935.png" alt=""></p><ol start="7"><li>CPU配置</li></ol><p><img src="https://pic.yqqy.top/blog/202208291335712.png" alt=""></p><ol start="8"><li>内存配置</li></ol><p><img src="https://pic.yqqy.top/blog/202208291336394.png" alt=""></p><ol start="9"><li>网络配置</li></ol><p><img src="https://pic.yqqy.top/blog/202208291058116.png" alt=""></p><ol start="10"><li>移除硬盘</li></ol><p><img src="https://pic.yqqy.top/blog/202208291348314.png" alt=""></p><ol start="11"><li>导入硬盘，在 <code>PVE</code> shell里输入命令 <code>qm importdisk 虚拟机id 镜像路径 local-lvm</code> 导入硬盘，返回虚拟机硬件配置，选择未使用的硬盘，格式为 <code>sata</code></li></ol><p><img src="https://pic.yqqy.top/blog/202208291406163.png" alt=""></p><ol start="12"><li>调整引导顺序，注意只勾选sata，并将其上移到第一位</li></ol><p><img src="https://pic.yqqy.top/blog/202208291408236.png" alt=""></p><h4 id="openwrt配置" tabindex="-1">openwrt配置 <a class="header-anchor" href="#openwrt配置" aria-label="Permalink to &quot;openwrt配置&quot;">​</a></h4><p>待补充</p><h3 id="点心云" tabindex="-1">点心云 <a class="header-anchor" href="#点心云" aria-label="Permalink to &quot;点心云&quot;">​</a></h3><p>博主的家宽上行只有30M，这种小水管为什么还要跑什么pcdn呢，现阶段属于是机器闲着也是闲着，况且机器负载太低了，硬盘又不缺，每天跑跑回本个电费+网费而已。</p><h4 id="安装-2" tabindex="-1">安装 <a class="header-anchor" href="#安装-2" aria-label="Permalink to &quot;安装&quot;">​</a></h4><ol><li>下载镜像，<a href="https://dianxinai.com/download" target="_blank" rel="noreferrer">https://dianxinai.com/download</a></li><li>下载iso的镜像就用装iKuai的方式装，img的镜像就用openwrt的方式装</li><li>博主选择用img方式安装，与openwrt不同的是，在第5步系统安装里，要选择uefi方式引导（增加稳定性👻）</li></ol><p><img src="https://pic.yqqy.top/blog/202208291427925.png" alt=""></p><ol start="4"><li>磁盘这里选择好12G，大多数教程推荐16G，其实够用就行</li></ol><p><img src="https://pic.yqqy.top/blog/202208291429716.png" alt=""></p><ol start="5"><li>使用 <code>qm importdisk</code> 导入硬盘</li></ol><p><img src="https://pic.yqqy.top/blog/202208291451016.png" alt=""></p><ol start="6"><li>回到系统中，双击按sata方式添加</li></ol><p><img src="https://pic.yqqy.top/blog/202208291452321.png" alt=""></p><ol start="7"><li>修改引导顺序，选中刚添加的sata盘，并将其移到第一位</li></ol><p><img src="https://pic.yqqy.top/blog/202208291457541.png" alt=""></p><p><img src="https://pic.yqqy.top/blog/202208291458321.png" alt=""></p><ol start="8"><li>进入控制台中进行装机，选择ok进行装机，这一步时间很长</li></ol><p><img src="https://pic.yqqy.top/blog/202208291459641.png" alt=""></p><ol start="9"><li>装机完成后会再次回到上图页面中，此时停止虚拟机，回到系统硬件设置中，将刚才添加的sata盘分离并删除</li></ol><p><img src="https://pic.yqqy.top/blog/202208291505278.png" alt=""></p><ol start="10"><li>添加数据盘，这里使用了直通硬盘，直通一块新的盘，如果本地盘足够大可以直接添加本地盘。使用命令 <code>ls -l /dev/disk/by-id/</code> 查看</li></ol><p><img src="https://pic.yqqy.top/blog/202208291507621.png" alt=""></p><p>使用命令 <code>qm set 虚拟机id -sata1 /dev/disk/by-id/ata-GLOWAY_STK960GS3-S7_002203065121</code> 可直通，请注意命令需要替换成自己的硬件信息</p><p><img src="https://pic.yqqy.top/blog/202208291509685.png" alt=""></p><ol start="11"><li>开机启动，出现二维码，App添加应用</li></ol><h4 id="配置网络" tabindex="-1">配置网络 <a class="header-anchor" href="#配置网络" aria-label="Permalink to &quot;配置网络&quot;">​</a></h4><p>待补充</p><h3 id="ubuntu" tabindex="-1">ubuntu <a class="header-anchor" href="#ubuntu" aria-label="Permalink to &quot;ubuntu&quot;">​</a></h3><ol><li>ubuntu系统依托于PVE-LXC容器搭建，更轻，使用前先替换LXC容器源到国内，不然在线下载会很慢</li></ol><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查找相应文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">grep</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -rn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;download.proxmox.com&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/share/perl5/PVE/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">*</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 替换容器源</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sed</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -i.bak</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;s#http://download.proxmox.com/images#https://mirrors.ustc.edu.cn/proxmox/images#g&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/share/perl5/PVE/APLInfo.pm</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 写入容器源信息</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">wget</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -O</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /var/lib/pve-manager/apl-info/mirrors.ustc.edu.cn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://mirrors.ustc.edu.cn/proxmox/images/aplinfo.dat</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ol start="2"><li>下载模板</li></ol><p><img src="https://pic.yqqy.top/blog/202208291522312.png" alt=""></p><ol start="3"><li><p>右上角&lt;创建CT&gt; ，取消勾选无特权的容器，其他步骤都很简单</p></li><li><p>LXC本身就是一个容器，如果想要在内部继续使用docker等容器技术，需要开启嵌套，并且需要在<code>PVE</code>里的shell编辑 <code>vim /etc/pve/lxc/容器id.conf</code> ，添加</p></li></ol><p><img src="https://pic.yqqy.top/blog/202208291525159.png" alt=""></p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 添加如下内容</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">lxc.apparmor.profile:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> unconfined</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">lxc.cgroup.devices.allow:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> a</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">lxc.cap.drop:</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="实用的docker服务" tabindex="-1">实用的Docker服务 <a class="header-anchor" href="#实用的docker服务" aria-label="Permalink to &quot;实用的Docker服务&quot;">​</a></h2><p>NPM(nginx-proxy-manager)</p><p>写的累了抽空补充</p>`,89);function F(a,f,C,_,v,P){const p=e,o=r("ClientOnly");return l(),c("div",null,[q,h(o,null,{default:d(()=>{var t,i;return[(((t=a.$frontmatter)==null?void 0:t.aside)??!0)&&(((i=a.$frontmatter)==null?void 0:i.showArticleMetadata)??!0)?(l(),u(p,{key:0,article:a.$frontmatter},null,8,["article"])):k("",!0)]}),_:1}),y])}const A=n(b,[["render",F]]);export{E as __pageData,A as default};
