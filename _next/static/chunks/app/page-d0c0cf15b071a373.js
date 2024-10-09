!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="bf212ce6-6ac5-480b-af60-0b96990faffa",e._sentryDebugIdIdentifier="sentry-dbid-bf212ce6-6ac5-480b-af60-0b96990faffa")}catch(e){}}(),(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{12030:function(e,t,a){Promise.resolve().then(a.bind(a,75257))},63819:function(e,t,a){"use strict";a.d(t,{ZP:function(){return p},n$:function(){return c},Ev:function(){return u},Yq:function(){return m}});let s=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=(e,a)=>{if("path"in e)return"root"===a?`${e.domain||""}${t}`:`${e.domain||""}${t}/${e.path}`;if(!e.root)throw Error("Missed `root` property in links object");return s(e,`${e.root.domain||""}${t}/${e.root.path}`)};return Object.keys(e).reduce((t,s)=>(t[s]=a(e[s],s),t),{})};var o=e=>{let t={},a=(e,s)=>{e.title?t[e.domain?`${e.domain}${s?.path?"/":""}${s?.path||""}/${e.path}`:`${s?.path?"/":""}${s?.path||""}/${e.path}`]=e.title:"root"in e?Object.keys(e).map(t=>{a(e[t],"root"===t?void 0:e.root)}):console.error("No root",e)};return Object.keys(e).forEach(t=>{a(e[t])}),t},r=a(59253);let n={home:{path:"",title:r.Z.home},osEth:{path:"#osETH",title:r.Z.osETH},vaults:{path:"#vaults",title:r.Z.vaults},operator:{path:"#operator",title:r.Z.operator}},i="https://app.stakewise.io";var l={home:{domain:i,path:"",title:r.Z.vaults},vaults:{domain:i,path:"vaults",title:r.Z.vaults},operate:{domain:i,path:"operate",title:r.Z.operator}};let d=s(n),c=o(n),u=s(l),m=o(l);var p=d},54765:function(e,t,a){"use strict";a.d(t,{Dp:function(){return d},et:function(){return l},zt:function(){return i}});var s=a(82062),o=a(55792),r=a(72652);let n=s.Z.getSDK({chainId:r.Zc.Mainnet}),{Provider:i,useData:l,useInit:d}=(0,o.Z)(n,()=>n)},52277:function(e,t,a){"use strict";var s=a(7653),o=a(7384),r=a(88244),n=a.n(r);t.Z=e=>{let t=(0,s.useRef)(),a=(0,s.useCallback)(a=>{let s=e(a);return t.current&&n()(s,t.current)||(t.current=s),t.current},[]);return(0,o.v9)(a)}},75257:function(e,t,a){"use strict";a.d(t,{default:function(){return tq}});var s,o,r=a(27573),n=a(7653),i=a(45531),l=a.n(i),d=a(99582),c=a(67148),u=a(65880),m=a(82827),p=a.n(m),f=n.memo(e=>{let{className:t,items:a}=e,s=(0,n.useMemo)(()=>a.concat(a),[a]);return(0,r.jsx)("div",{className:l()(t,"relative"),children:(0,r.jsx)("div",{className:l()(p().slider,"overflow-hidden"),children:(0,r.jsx)("div",{className:l()(p().sliderTrack,"flex justify-between items-center gap-40"),children:s.map((e,t)=>{let{path:a,width:s,height:o,alt:n}=e;return(0,r.jsx)(u.default,{width:s,height:o,priority:!0,src:a,alt:n},`${t}-${n}`)})})})})}),h={en:"StakeWise partners",ru:"Партнеры StakeWise",fr:"Partenaires StakeWise",es:"Socios de StakeWise",pt:"Parceiros StakeWise",de:"StakeWise-Partner",zh:"StakeWise合作伙伴"};let _=[{path:"/images/partners/chorus.svg",alt:"chorus",width:157,height:50},{path:"/images/partners/beaconchain.svg",alt:"beaconchain",width:127,height:50},{path:"/images/partners/blockshard.svg",alt:"blockshard",width:157,height:50},{path:"/images/partners/datanexus.svg",alt:"datanexus",width:137,height:80},{path:"/images/partners/bricktowers.svg",alt:"bricktowers",width:157,height:50},{path:"/images/partners/cryptomanufaktur.svg",alt:"cryptomanufaktur",width:187,height:80},{path:"/images/partners/blockscape.svg",alt:"blockscape",width:157,height:50},{path:"/images/partners/dsrv.svg",alt:"dsrv",width:157,height:50},{path:"/images/partners/everstake.svg",alt:"everstake",width:157,height:50},{path:"/images/partners/frens.svg",alt:"frens",width:157,height:50},{path:"/images/partners/finoa.svg",alt:"finoa",width:157,height:50},{path:"/images/partners/gateway.svg",alt:"gateway",width:157,height:50},{path:"/images/partners/gnosischain.svg",alt:"gnosischain",width:157,height:50},{path:"/images/partners/hashquark.svg",alt:"hashquark",width:157,height:50},{path:"/images/partners/infstones.svg",alt:"infstones",width:157,height:50},{path:"/images/partners/meria.svg",alt:"meria",width:157,height:50},{path:"/images/partners/kysenpool.svg",alt:"kysenpool",width:157,height:50},{path:"/images/partners/launchnodes.svg",alt:"launchnodes",width:157,height:50},{path:"/images/partners/oneinfra.svg",alt:"oneinfra",width:50,height:50},{path:"/images/partners/luganodes.svg",alt:"luganodes",width:157,height:50},{path:"/images/partners/nodeset.svg",alt:"nodeset",width:157,height:50},{path:"/images/partners/matrixed.svg",alt:"matrixed",width:157,height:50},{path:"/images/partners/piertwo.svg",alt:"piertwo",width:100,height:50},{path:"/images/partners/redstone.svg",alt:"redstone",width:157,height:50},{path:"/images/partners/stake-fish.svg",alt:"stake-fish",width:157,height:50},{path:"/images/partners/telekom.svg",alt:"telekom",width:107,height:50},{path:"/images/partners/stakely.svg",alt:"stakely",width:157,height:50},{path:"/images/partners/sensei-node.svg",alt:"sensei-node",width:157,height:50},{path:"/images/partners/serenita.svg",alt:"serenita",width:157,height:50},{path:"/images/partners/p2p.svg",alt:"p2p",width:157,height:50},{path:"/images/partners/stakingreward.svg",alt:"stakingreward",width:187,height:80},{path:"/images/partners/verilog.svg",alt:"verilog",width:157,height:50},{path:"/images/partners/a41.svg",alt:"a41",width:157,height:50}];var b=n.memo(e=>{let{className:t}=e,{isMobile:a}=d.Z.useData();return(0,r.jsxs)("div",{className:l()(t,"pt-96"),children:[(0,r.jsx)(c.xv,{className:"opacity-60 text-center",size:a?"h20":"h24",color:"coal",message:h}),(0,r.jsx)(f,{className:"mt-32",items:_})]})}),x=a(63819);(s=o||(o={})).StakeWithOsETH="Stake with osETH",s.StakeWithVaults="Stake with Vaults",s.BecomeAnOperator="Become an Operator",s.StartEarningBanner="Start earning banner",s.StakeInSecondsBanner="Stake in seconds banner",s.ProtectHolderBanner="Protect holder banner",s.ChainsBanner="Chains banner",s.PerformingVaultsBanner="Performing Vaults banner",s.IntroducingVaultsVideo="Introducing Vaults",s.StakeLiquidBanner="Stake liquid banner",s.FindPerfectValueBanner="Find perfect Value banner",s.FarmBorrowBanner="Farm borrow banner",s.ControlNodesBanner="Control nodes banner",s.SoloStakingVideo="The Future of Solo Staking";var g=a(23947),v=a(95030),k=a(87659),T=a(12117),E=a.n(T),C=n.memo(e=>{let{className:t,bgColor:a="coal",icon:s,title:o,eventName:i,description:d,buttonTitle:u,dataTestId:m,href:p}=e,f=l()(t,E().container,E()[a],"flex flex-col flex-1 items-center text-center rounded-16 px-32 py-40 shadow-coal"),h="sun"===a?"coal":"sun",_=(0,n.useCallback)(()=>{v.h.sendEvent("clickMarketingBannerBtn",{type:i})},[i]);return(0,r.jsxs)("div",{className:f,children:[(0,r.jsx)(c.JO,{name:s,size:45,color:h}),(0,r.jsx)(c.xv,{className:l()("mt-16 px-16",{"flex-1":!d}),message:o,color:h,size:"h24",html:!0}),p?(0,r.jsx)(k.default,{href:p,target:"_blank","data-testid":m,children:(0,r.jsx)(c.zx,{className:"mt-20",size:"sl",rounded:!0,bordered:!0,bgColor:h,title:u,onClick:_})}):(0,r.jsx)(c.zx,{className:"mt-20",size:"sl",rounded:!0,disabled:!0,bordered:!0,bgColor:h,title:u}),d&&(0,r.jsx)(c.xv,{className:"mt-36",message:d,color:h,size:"t16m",html:!0})]})}),w={whichStakingTitle:{en:`
      <span style="opacity: 0.3">Which staking method is</span> <br> right for you?
    `,ru:`
      <span style="opacity: 0.3">Какой метод стейкинга подходит</span> <br> вам?
    `,fr:`
      <span style="opacity: 0.3">Quelle m\xe9thode de jalonnement vous convient</span> <br> le mieux&nbsp;?
    `,es:`
      <span style="opacity: 0.3">\xbfQu\xe9 m\xe9todo de staking es</span> <br> el adecuado para ti?
    `,pt:`
      <span style="opacity: 0.3">Qual m\xe9todo de staking \xe9</span> <br> ideal para voc\xea?
    `,de:`
      <span style="opacity: 0.3">Welche Staking-Methode ist die</span> <br> richtige f\xfcr Sie?
    `,zh:`
      <span style="opacity: 0.3">哪种质押方法适合</span> <br>您？
    `},simpleSecure:{en:"Simple and secure <br> staking with <br> osETH.",ru:"Простой и безопасный <br> стейкинг с помощью <br> osETH.",fr:"Implantation simple et s\xe9curis\xe9e <br> avec <br> osETH.",es:"Apuesta sencilla y segura <br> con <br> osETH.",pt:"Staking simples e seguro <br> com <br> osETH.",de:"Einfaches und sicheres <br> Abstecken mit <br> osETH.",zh:"使用osETH进行简单而安全<br>的质押。<br>"},stakingMarketplace:{en:"Staking <br> marketplace with <br> unbeatable terms.",ru:"Ставки <br> на рынке с <br> непревзойденными условиями.",fr:"Implanter <br> une place de march\xe9 \xe0 des <br> conditions imbattables.",es:"Marketplace de apuestas <br> con <br> t\xe9rminos inmejorables.",pt:"Mercado de staking <br> com <br> termos imbat\xedveis.",de:"Staking-Marktplatz <br> mit <br> unschlagbaren Konditionen.",zh:"以无与伦比的条款质押<br>市场。<br>"},liquidStaking:{en:"Liquid staking <br> for your <br>solo validators.",ru:"Ликвидный одиночный стейкинг <br> для ваших <br> валидаторов.",fr:"Staking solo liquide <br> pour vos <br> validateurs.",es:"Apuesta individual l\xedquida <br> para sus <br> validadores.",pt:"Staking solo l\xedquido <br> para os seus <br> validadores.",de:"Liquid Solo Staking <br> f\xfcr Ihre <br> Validatoren.",zh:"为您的验证者提供液体单独质押<br> 。 <br>"},liquidSolo:{en:`
      Liquid solo staking <span style="opacity: 0.5">for anyone who can run a node. Open your own Vault and</span>
      accept delegations <span style="opacity: 0.5">from others.</span> No collateral needed.
    `,ru:`
      Ликвидный одиночный стейкинг <span style="opacity: 0.5">для всех, кто может запустить ноду. Откройте собственное хранилище и</span>
      принимайте делегации <span style="opacity: 0.5">от других.</span> Обеспечение не требуется.
    `,fr:`
      Mise en solo liquide <span style="opacity: 0.5">pour tous ceux qui peuvent ex\xe9cuter un nœud. Ouvrez votre propre coffre-fort et</span>
      acceptez les d\xe9l\xe9gations <span style="opacity: 0.5">des autres.</span> Aucune garantie requise.
    `,es:`
      Apuesta individual l\xedquida <span style="opacity: 0.5">para cualquier persona que pueda ejecutar un nodo. Abra su propia B\xf3veda y</span>
      acepte delegaciones <span style="opacity: 0.5">de otros.</span> No se necesita garant\xeda.
    `,pt:`
      Staking solo l\xedquido <span style="opacity: 0.5">para qualquer pessoa que possa executar um n\xf3. Abra o seu pr\xf3prio Cofre e</span>
      aceite delega\xe7\xf5es <span style="opacity: 0.5">de outras pessoas.</span> Nenhuma garantia necess\xe1ria.
    `,de:`
      Liquid Solo Staking <span style="opacity: 0.5">f\xfcr jeden, der einen Knoten betreiben kann. \xd6ffne deinen eigenen Tresor und</span>
      akzeptiere Delegationen <span style="opacity: 0.5">von anderen.</span> Keine Sicherheiten erforderlich.
    `,zh:`
      任何<span style="opacity: 0.5">可以运行节点的人都可以进行液体单独质押。 打开您自己的避难所并</span>
接受<span style="opacity: 0.5">其他人的委托。</span>无需抵押品。
    `},buyOsEth:{en:`
      Get osETH <span style="opacity: 0.5">and start staking in seconds.
      Staking has never been easier.</span> Earn staking rewards every second <span style="opacity: 0.5">by holding osETH.</span>
    `,ru:`
      Получите osETH <span style="opacity: 0.5">и начните делать ставки через несколько секунд.
      Стейкинг никогда не был проще.</span> Зарабатывайте награды за стейкинг каждую секунду<span style="opacity: 0.5">, удерживая osETH.</span>
    `,fr:`
      Achetez osETH <span style="opacity: 0.5">et commencez \xe0 jalonner en quelques secondes.
      Le jalonnement n'a jamais \xe9t\xe9 aussi facile.</span> Gagnez des r\xe9compenses de jalonnement chaque seconde <span style="opacity: 0.5">en tenant osETH.</span>
    `,es:`
      Compre osETH <span style="opacity: 0.5">y empiece a apostar en segundos.
      Apostar nunca ha sido tan f\xe1cil.</span> Gana recompensas de apuestas cada segundo <span style="opacity: 0.5">sosteniendo osETH.</span>
    `,pt:`
      Compre osETH <span style="opacity: 0.5">e comece a fazer staking em segundos.
      Fazer staking nunca foi t\xe3o f\xe1cil.</span> Ganhe recompensas de staking a cada <span style="opacity: 0.5">segundo segurando osETH.</span>
    `,de:`
      Kaufen Sie osETH <span style="opacity: 0.5">und beginnen Sie in Sekundenschnelle mit dem Abstecken.
      Abstecken war noch nie so einfach.</span> Verdiene jede Sekunde Einsatzbelohnungen, <span style="opacity: 0.5">indem du osETH h\xe4ltst.</span>
    `,zh:`
      购买osETH<span style="opacity: 0.5">并在几秒钟内开始质押。
      质押从未如此简单。</span> <span style="opacity: 0.5">按住osETH ，每秒赚取质押奖励。</span>
    `},browsePools:{en:`
      Browse Vaults<span style="opacity: 0.5"> and stake with the node operators that meet your criteria.</span>
      Higher yield, more decentralization and control.
    `,ru:`
      Просмотрите хранилища<span style="opacity: 0.5"> и сделайте ставку с помощью операторов узлов, которые соответствуют вашим критериям.</span>
      Более высокая доходность, большая децентрализация и контроль.
    `,fr:`
      Parcourez les coffres-forts<span style="opacity: 0.5"> et misez avec les op\xe9rateurs de nœuds qui r\xe9pondent \xe0 vos crit\xe8res.</span>
      Rendement plus \xe9lev\xe9, plus de d\xe9centralisation et de contr\xf4le.
    `,es:`
      Navegue por las b\xf3vedas<span style="opacity: 0.5"> y apueste con los operadores de nodos que cumplan con sus criterios.</span>
      Mayor rendimiento, m\xe1s descentralizaci\xf3n y control.
    `,pt:`
      Navegue pelos Vaults<span style="opacity: 0.5"> e fa\xe7a staking com os operadores de n\xf3 que atendem aos seus crit\xe9rios.</span>
      Maior rendimento, mais descentraliza\xe7\xe3o e controle.
    `,de:`
      Durchsuchen Sie Vaults<span style="opacity: 0.5"> und setzen Sie mit den Knotenoperatoren, die Ihren Kriterien entsprechen.</span>
      H\xf6here Ausbeute, mehr Dezentralisierung und Kontrolle.
    `,zh:`
      浏览Vault<span style="opacity: 0.5">并与符合您条件的节点运营商进行质押。</span>
      更高的产量，更多的去中心化和控制。
    `},stakeWithVaults:{en:"Stake with Vaults",ru:"Ставка с помощью хранилищ",fr:"Implanter avec des coffres",es:"Estaca con b\xf3vedas",pt:"Aposta com Cofres",de:"Pfahl mit Gew\xf6lben",zh:"与Vault进行质押"},becomeAnOperator:{en:"Become an Operator",ru:"Стать оператором",fr:"Devenir op\xe9rateur",es:"Convi\xe9rtase en operador",pt:"Torne-se um operador",de:"Betreiber werden",zh:"成为运营商"}},S=n.memo(e=>{let{className:t}=e,{isMobile:a}=d.Z.useData();return(0,r.jsxs)("section",{className:l()(t,"mt-96"),children:[(0,r.jsx)(c.xv,{message:w.whichStakingTitle,color:"moon",size:a?"h40":"h60",html:!0}),(0,r.jsxs)("div",{className:l()("flex gap-20",{"flex-col mt-48":a,"mt-72":!a}),children:[(0,r.jsx)(C,{bgColor:"sun",icon:"icon/lock",href:x.Ev.home,title:w.simpleSecure,eventName:o.StakeWithOsETH,dataTestId:"landing-small-card-which-stake-oseth-button",buttonTitle:g.Z.buttonTitle.stakeWithOsEth}),(0,r.jsx)(C,{bgColor:"fancy",icon:"icon/cube",href:x.Ev.vaults,title:w.stakingMarketplace,buttonTitle:w.stakeWithVaults,eventName:o.StakeWithVaults,dataTestId:"landing-small-card-which-stake-vaults-button"}),(0,r.jsx)(C,{icon:"icon/fingerprint",href:x.Ev.operate,title:w.liquidStaking,buttonTitle:w.becomeAnOperator,eventName:o.BecomeAnOperator,dataTestId:"landing-small-card-which-stake-operate-button"})]})]})}),y=a(82062),j=a(66996),z=a(42982),H=a(54765),N=a(52277),q=a(98120),B=a(87584),W=a(33268),V=a(48230),I=a(67135),A={en:"You will receive",ru:"Вы получите",fr:"Vous recevrez",es:"Recibir\xe1",pt:"Receber\xe1",de:"Sie erhalten",zh:"您会收到"},Z=n.memo(e=>{let{className:t,tooltip:a,receiveMessage:s,receiveIcon:o,isFetching:n}=e;return(0,r.jsxs)("div",{className:l()(t,"flex flex-1 justify-between items-center"),children:[(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)(V.Z,{message:A,size:"t14m",color:"stone"}),!!a&&(0,r.jsx)(I.Z,{content:a,dataTestId:"swap-rate-tooltip",children:(0,r.jsx)(W.Z,{className:"ml-4",name:"icon/info",color:"stone",dataTestId:"swap-rate-icon"})})]}),n?(0,r.jsx)(B.Z,{h:20,w:70}):(0,r.jsxs)("div",{className:"flex justify-end items-center",children:[(0,r.jsx)(V.Z,{message:s,size:"t14m",color:"moon",dataTestId:"swap-receive"}),o&&(0,r.jsx)(I.Z,{wrapperClassName:"ml-4",content:o.tooltip,dataTestId:"swap-receive-tooltip",children:(0,r.jsx)("div",{className:"flex justify-center items-center w-18 h-18 rounded-full","data-testid":"swap-receive-icon","data-icon-direction":"arrows/up"===o.iconName?"up":"down",children:(0,r.jsx)(W.Z,{color:o.iconColor,name:o.iconName,size:16})})})]})]})}),D=a(79535),F={en:"Transaction price",ru:"Цена сделки",fr:"Prix de l'op\xe9ration",es:"Precio de la transacci\xf3n:",pt:"Pre\xe7o da transa\xe7\xe3o ...",de:"Transaction Preis",zh:"交易價格"},P=n.memo(e=>{let{className:t,gas:a,nativeToken:s,isFetching:o}=e;return(0,r.jsxs)("div",{className:l()(t,"flex flex-1 justify-between items-center cursor-default"),children:[(0,r.jsx)(V.Z,{message:F,size:"t14m",color:"stone"}),o?(0,r.jsx)(B.Z,{h:20,w:70}):(0,r.jsx)(D.Z,{token:s,amount:a,color:"moon",size:"t14m"})]})}),M=n.memo(e=>{let{className:t,gas:a,tooltip:s,nativeToken:o,receiveIcon:n,receiveMessage:i,isFetching:d,withTransactionPrice:c}=e;return(0,r.jsxs)("div",{className:l()(t,"flex flex-col",{"pt-16 border-bottom border-top border-moon/10":c}),children:[(0,r.jsx)(Z,{tooltip:s,receiveIcon:n,receiveMessage:i,isFetching:d}),c&&(0,r.jsx)("div",{className:"mt-16 mb-16",children:(0,r.jsx)(P,{gas:a||0n,nativeToken:o,isFetching:d})})]})}),R=a(75544),L=n.memo(e=>{let{className:t,maxAmount:a,field:s}=e,{value:o}=z.Z.useFieldValue(s),i=(0,n.useMemo)(()=>{let e=(0,j.dF)(a);return{percent:new q.Z(e).divide(100).toString(),maxBalance:e}},[a]),l=(0,n.useRef)(i);l.current=i;let d=(0,n.useCallback)(e=>{if(100===e)s.setValue(l.current.maxBalance);else{let t=new q.Z(e).multiply(l.current.percent).decimals(9).toString();s.setValue(t)}},[s]),c="0";return Number(o)&&(c=new q.Z(o||"0").divide(i.percent).decimals(2).toString()),(0,r.jsx)(R.Z,{className:t,value:Number(c),color:"jungle",step:.5,onChange:d})}),O=a(50950),G=n.memo(e=>{let{className:t,field:a,label:s,balance:o,token:n,withRangeSlider:i,loading:l,customRangeSlider:d,onMaxButton:c}=e,u=i?(0,r.jsx)(L,{className:"mt-16",field:a,maxAmount:o}):void 0;return(0,r.jsx)(O.Z,{className:t,label:s,field:a,token:n,loading:l,tokenBalance:o,bottomNode:d||u,dataTestId:"stake-widget-input",onMaxButtonClick:c})}),K=a(47616),Y=n.memo(e=>{let{className:t,field:a,title:s,loading:o,disabled:i,onClick:l}=e,{value:d,error:c}=z.Z.useFieldValue(a),u=!Number(d)||!!c,m=(0,n.useCallback)(()=>{d&&"function"==typeof l&&l((0,j.fi)(d))},[d,l]);return(0,r.jsx)(K.ZP,{className:t,disabled:u||i,bgColor:"coal-fancy-ocean",loading:o,title:s,size:"xl",fullWidth:!0,rounded:!0,"data-loading":o,dataTestId:"stake-widget-submit",onClick:m})}),$=a(7384),U=a(34893),J={en:"APY",ru:"APY",fr:"APY",es:"APY",pt:"APY",de:"APY",zh:"APY"};let X=(0,U.P1)([e=>e.mintToken.isFetching,e=>e.mintToken.apy],(e,t)=>({isFetching:e,apy:t}));var Q=n.memo(e=>{let{className:t,dataTestId:a}=e,{isMobile:s}=d.Z.useData(),{apy:o,isFetching:n}=(0,$.v9)(X),i=y.Z.formatApy(Number(o));return(0,r.jsxs)("div",{className:l()(t,"flex-1 py-16 px-24 rounded-12"),children:[(0,r.jsx)(V.Z,{className:"flex-1 mb-8",size:s?"t12":"t14",message:J,color:"moon"}),n?(0,r.jsx)(B.Z,{delay:1,h:24,w:60}):(0,r.jsx)(V.Z,{size:s?"t18m":"h20",color:"moon",message:i,dataTestId:a})]})}),ee=a(28824),et={en:"Proj. annual reward",ru:"Годовая прибыль",fr:"B\xe9n\xe9fice annuel",es:"Beneficio anual",pt:"Recompensa anual",de:"J\xe4hrlicher Gewinn",zh:"年度奖励率"};let ea=e=>e.mintToken.isFetching;var es=n.memo(e=>{let{className:t,rewards:a,token:s,dataTestId:o}=e,{isDesktop:n}=d.Z.useData(),i=(0,$.v9)(ea);return(0,r.jsxs)("div",{className:l()(t,"flex-1 py-16 px-24 ml-12 rounded-12"),children:[(0,r.jsx)(V.Z,{className:"flex-1 mb-8",message:et,color:"moon",size:n?"t14":"t12"}),i?(0,r.jsx)(B.Z,{delay:1,h:24,w:60}):(0,r.jsx)(ee.ZP,{value:a,token:s,size:n?"xl":"md",dataTestId:o})]})}),eo=a(93057),er=a.n(eo),en=n.memo(e=>{let{className:t,contentClassName:a,rewards:s,token:o}=e;return(0,r.jsxs)("div",{className:l()(t,"flex"),children:[(0,r.jsx)(Q,{className:l()(er().container,a),dataTestId:"reward-stats-apy"}),(0,r.jsx)(es,{className:l()(er().container,a),rewards:s,token:o,dataTestId:"reward-stats-reward"})]})}),ei=a(41498),el=a.n(ei);let ed=e=>{let{className:t,contentClassName:a,children:s,headNode:o}=e,n=l()(el().content,"flex flex-col p-24 rounded-16",a,{"mt-12":!!o});return(0,r.jsxs)("div",{className:l()(t,el().container),children:[o,(0,r.jsx)("div",{className:n,children:s})]})};ed.Info=M,ed.Input=G,ed.Button=Y,ed.RewardsStats=en;var ec=()=>{let[e,t]=(0,n.useState)(null),a=(0,n.useCallback)(async()=>{try{let{tvl:e}=await y.Z.fetch("https://app.stakewise.io/api/stakewise-tvl");t(BigInt(e))}catch(e){v.D.exception("Fetch Stakewise TVL error",e),t(244000000n)}},[]);return(0,n.useEffect)(()=>{a()},[a]),e},eu={en:"stakers",ru:"стакеры",fr:"stakers",es:"estacado",pt:"stakers",de:"staker",zh:"激振器"},em={en:"staked",ru:"в стекинге",fr:"jalonn\xe9",es:"estacado",pt:"apostado",de:"abgesteckt",zh:"动用"},ep={en:"rewards paid",ru:"выплаченные вознаграждения",fr:"r\xe9compenses pay\xe9es",es:"recompensas pagadas",pt:"recompensas pagas",de:"ausgezahlte Pr\xe4mien",zh:"已支付奖励"};let ef=e=>{let[t]=(0,j.dF)(e).split(".");return Number(t).toLocaleString("en-US")},eh=e=>({usdRate:e.fiatRates.data.ETH.USD});var e_=n.memo(e=>{let{className:t}=e,a=ec(),{isMobile:s}=d.Z.useData(),{usdRate:o}=(0,N.Z)(eh),i="",u="";if(a&&o){let e=BigInt(a);i=ef(e),u=ef(e/100n*777n/100n)}let m=(0,n.useMemo)(()=>[{title:eu,icon:"icon/users",value:"5,000+",id:"stakers"},{id:"staked",value:i,isNativeToken:!0,icon:"icon/rewards",title:em,isFetching:null===a||!i},{id:"rewards-paid",icon:"icon/trophy",isNativeToken:!0,value:u,title:ep,isFetching:null===a||!u}],[a,u,i]);return(0,r.jsx)("div",{className:l()(t,"flex mt-40",{"gap-24":!s,"gap-16":s}),children:m.map((e,t)=>{let{icon:a,value:o,title:n,isFetching:i,isNativeToken:d,id:u}=e;return(0,r.jsxs)("div",{className:"flex flex-col items-center",children:[(0,r.jsx)(c.JO,{className:"opacity-30",name:a,size:24,color:"coal"}),i?(0,r.jsx)(c.N$,{className:"mt-8",textSize:s?"t18b":"h24",w:s?100:128}):(0,r.jsxs)("div",{className:l()("mt-8 flex justify-center items-center",{"min-w-[128rem]":!s,"min-w-[100rem]":s}),children:[d&&(0,r.jsx)(c.TR,{className:"mr-4",name:"token/ETH",size:s?16:24}),(0,r.jsx)(c.xv,{className:"opacity-70",message:o,color:"coal",size:s?"t18b":"h24",dataTestId:`landing-info-${u}`})]}),(0,r.jsx)(c.xv,{className:"mt-8 opacity-70",message:n,color:"coal",size:"t14m"})]},t)})})}),eb=a(26612),ex=a(31281),eg={title:{en:"Stake ETH <br> on your terms.",ru:"Делайте ставки ETH <br> на своих условиях.",fr:"Stake ETH <br> \xe0 vos conditions.",es:"Apuesta ETH <br> a tu manera.",pt:"Fa\xe7a staking de ETH <br> nos seus termos.",de:"Setzen Sie ETH <br> zu Ihren Bedingungen ein.",zh:"按照您的条件质押ETH。<br>"},receiveTooltip:{en:`
      {mintToken} is a slashing-resistant liquid staking token. <br />
      It accrues staking rewards when held. <br />
      Conversion rate: {rate}
    `,ru:`
      {mintToken} - это устойчивый к порезам жидкий токен стейкинга. <br />
      Он накапливает награды за стейкинг, когда удерживается. <br />
      Коэффициент конверсии: {rate}
    `,fr:`
      {mintToken} est un jeton de jalonnement liquide r\xe9sistant aux coupures. <br />
      Il accumule des r\xe9compenses de jalonnement lorsqu'il est d\xe9tenu. <br />
      Taux de conversion: {rate}
    `,es:`
      {mintToken} es un token de replanteo l\xedquido resistente a los cortes. <br />
      Acumula recompensas cuando se lleva a cabo. <br />
      Tasa de conversi\xf3n: {rate}
    `,pt:`
      {mintToken} \xe9 um token de staking l\xedquido resistente a cortes. <br />
      Ele acumula recompensas de staking quando mantido. <br />
      Taxa de convers\xe3o: {rate}
    `,de:`
      {mintToken} ist ein schlagfester fl\xfcssiger Staking-Token. <br />
      Es entstehen Einsatzbelohnungen, wenn es gehalten wird. <br />
      Konversionsrate: {rate}
    `,zh:`
      {mintToken}是一种耐砍伐的液体质押令牌。 <br />
      它在举行时获得质押奖励。<br />
      转化率： {rate}
    `},description:{en:`
      Go Solo or Pool with others. <br>
      Stake or unstake in seconds. <br>
      Use your stake in DeFi.
    `,ru:`
      Отправляйтесь в одиночку или в бассейн с другими. <br>
      Ставка или отмена ставки в секундах. <br>
      Используйте свою долю в DeFi.
    `,fr:`
      Allez en solo ou en groupe avec d'autres personnes. <br>
      Implantez ou d\xe9tachez en quelques secondes. <br>
      Utilisez votre participation dans DeFi.
    `,es:`
      Ir solo o a la piscina con otras personas. <br>
      Apuesta o desapuesta en segundos. <br>
      Utiliza tu participaci\xf3n en DeFi.
    `,pt:`
      V\xe1 sozinho ou jogue com outras pessoas. <br>
      Fa\xe7a staking ou unstake em segundos. <br>
      Use a sua aposta no DeFi.
    `,de:`
      Gehe alleine oder mit anderen in den Pool. <br>
      Setzen oder l\xf6sen Sie den Einsatz in Sekundenschnelle. <br>
      Nutze deinen Anteil an DeFi.
    `,zh:`
      与其他人单独或共用泳池。 <br>
      在几秒钟内质押或取消质押。 <br>
      使用您在DeFi中的股份。
    `}},ev=e=>{let{field:t,onError:a}=e,s=H.et(),o=(0,n.useRef)(),r=s.config.tokens.mintToken,i=s.config.tokens.depositToken,l=(0,n.useMemo)(()=>({tooltip:void 0,receiveMessage:`0.00 ${r}`}),[r]),[d,c]=(0,ex.R1)(l),u=(0,n.useCallback)(async()=>{try{let{value:e,error:a}=t;if(a||!Number(e)){c({receiveMessage:l.receiveMessage,tooltip:void 0});return}if(!o.current){let e=await s.osToken.getSharesFromAssets({amount:eb.tb.amount1}),t=new q.Z(e).divide(eb.tb.amount1).decimals(4).toString();o.current=Number(t).toFixed(5).replace(/0+$/,"").replace(/\.$/,"")}let n=new q.Z(e||"0").multiply(Number(o.current).toFixed(4)).decimals(2).toString(),d=y.Z.formatTokenValue(n),u={...eg.receiveTooltip,values:{rate:`1 ${i} = ${o.current} ${r}`,mintToken:r}},m=`${d} ${r}`;c({tooltip:u,receiveMessage:m})}catch(e){a(!0),c({receiveMessage:l.receiveMessage,tooltip:void 0}),v.D.exception("Landing useReceive err",e)}},[s,t,r,i,l,c,a]);return(0,n.useEffect)(()=>(t.subscribe("change",u),u(),()=>{t.unsubscribe("change",u)}),[t,u]),d};let ek=(e,t)=>new q.Z(e).multiply(t).decimals(9).toString(),eT=(e,t)=>new q.Z(e||"0").divide(t).decimals(2).toString(),eE=(e,t)=>Number(e)<t?String(t):e;var eC=n.memo(e=>{let{className:t,maxAmount:a,field:s}=e,{value:o}=z.Z.useFieldValue(s),i=(0,n.useMemo)(()=>{let e=(0,j.dF)(a);return{percent:new q.Z(e).divide(100).toString(),maxBalance:e}},[a]),l=(0,n.useRef)(i);l.current=i;let d=(0,n.useCallback)(e=>{let t="0";t=100===e?l.current.maxBalance.replace(/\.0+$/,""):e<=20?ek(e,.5):e<=40?ek(e,1.25):e<=60?ek(e,8.33):e<=80?ek(e,62.5):ek(e,l.current.percent),s.setValue(t)},[s]),u="0",m=Number(o||"0");return u=m?m<=10?eT(m,.5):m<=50?eE(eT(m,1.25),20):m<=500?eE(eT(m,8.33),40):m<=5e3?eE(eT(m,62.5),60):eE(eT(m,i.percent),80):"0",(0,r.jsx)(c.ym,{className:t,value:Number(u),color:"jungle",step:.2,onChange:d})});let ew=e=>({apy:e.mintToken.apy}),eS=(0,j.fi)("100000");var ey=n.memo(e=>{let{className:t}=e,a=H.et(),{isMobile:s}=d.Z.useData(),{apy:o}=(0,N.Z)(ew),[i,u]=(0,n.useState)(!1),m=(0,n.useRef)((0,j.fi)("100000000000")),p=z.Z.useField({pattern:"^[0-9]+[.]?[0-9]{0,18}$",valueType:"string",validators:[z.Z.validators.numberWithDot,z.Z.validators.sufficientBalance(m)],initialValue:"1"}),{value:f}=z.Z.useFieldValue(p),{tooltip:h,receiveMessage:_}=ev({field:p,onError:u}),b=(0,n.useMemo)(()=>{if(!f)return"0";let e=y.Z.validateTokenAmount(f)?f:"0";return new q.Z(e).divide(100).multiply(o).decimals(5).toString()},[f,o]);return(0,r.jsxs)("section",{className:l()(t,{"flex gap-24 pt-96":!s,"pt-48":s}),children:[(0,r.jsxs)("div",{className:l()("flex flex-col",{"items-center text-center":s,"w-full":!s}),children:[(0,r.jsx)(c.xv,{className:l()("fancyTomatoText",{"pr-20":s}),size:s?"h60":"h90",color:"coal",message:eg.title,html:!0}),(0,r.jsx)(c.xv,{className:"opacity-60 mt-40",size:s?"h20":"h24",color:"coal",message:eg.description,html:!0}),(0,r.jsx)(e_,{})]}),(0,r.jsxs)(ed,{className:l()({"mt-40":s,"w-full":!s}),contentClassName:"shadow-md",headNode:(0,r.jsx)(ed.RewardsStats,{contentClassName:"shadow-md",rewards:b,token:a.config.tokens.depositToken}),children:[(0,r.jsx)(ed.Input,{token:a.config.tokens.depositToken,balance:eS,customRangeSlider:(0,r.jsx)(eC,{className:"mt-16",maxAmount:eS,field:p}),field:p,withRangeSlider:!0}),!i&&(0,r.jsx)(ed.Info,{className:"mt-16",tooltip:h,nativeToken:"ETH",receiveMessage:_}),(0,r.jsx)(c.zx,{className:"mt-32",dataTestId:"landing-stake-widget-stake-button",title:g.Z.links.stake,href:x.Ev.home,target:"_blank",bgColor:"coal",size:"xl",fullWidth:!0,rounded:!0})]})]})}),ej=n.memo(e=>{let{className:t,title:a,color:s="coal",icon:o}=e;return(0,r.jsxs)("div",{className:l()(t,"flex items-center pb-12 border-bottom border-stone/30"),children:[(0,r.jsx)(c.JO,{name:o,size:16,color:s}),(0,r.jsx)(c.xv,{className:"uppercase ml-8",message:a,color:s,size:"t14m"})]})}),ez={soloStaking:{en:"Solo staking",ru:"Индивидуальный стейкинг",fr:"Implantation solo",es:"Estacar",pt:"Estaqueamento solo",de:"Solo-Staking",zh:"单人质押"},goSolo:{en:"go solo.",ru:"идти в одиночку.",fr:"Allez en solo. ",es:"ir solo.",pt:"ir sozinho.",de:"alleine gehen.",zh:"独自一人去。"},useNodeWise:{en:`
      Install our Operator Software <br>
      to run Solo nodes on StakeWise. <br>
      We provide extensive guides and
      community support to <br>
      help you get started.
    `,ru:`
      Установите наше операторское программное обеспечение <br>
      для запуска Solo нод на StakeWise. <br>
      Мы предоставляем обширные руководства и
      поддержку сообщества <br>
      помочь вам начать.
    `,fr:`
      Installez notre logiciel op\xe9rateur <br>
      pour ex\xe9cuter des nœuds Solo sur StakeWise. <br>
      Nous fournissons des guides complets et
      un soutien communautaire aux <br>
      vous aider \xe0 d\xe9marrer.
    `,es:`
      Instale nuestro software de operador <br>
      para ejecutar nodos Solo en StakeWise. <br>
      Ofrecemos extensas gu\xedas y
      apoyo comunitario a <br>
      para ayudarte a empezar.
    `,pt:`
      Instale o nosso software de operador <br>
      para executar n\xf3s Solo no StakeWise. <br>
      Fornecemos guias abrangentes e
      apoio da comunidade para <br>
      ajud\xe1-lo a come\xe7ar.
    `,de:`
      Installieren Sie unsere Bedienersoftware <br>
      um Solo-Knoten auf StakeWise auszuf\xfchren. <br>
      Wir bieten umfangreiche Anleitungen und
      Community-Support f\xfcr <br>
      helfen Ihnen, loszulegen.
    `,zh:`
      安装我们的操作员软件 <br>
      在StakeWise上运行Solo节点。 <br>
      我们提供广泛的指南和社 区支持， <br>
      帮助您开始。
    `},itIsEasy:{en:"It is easy to",ru:"Это легко",fr:"C'est facile de",es:"Es f\xe1cil de",pt:"\xc9 f\xe1cil de",de:"Es ist einfach zu",zh:"很容易"}},eH=a(86905),eN=a.n(eH),eq=n.memo(e=>{let{className:t}=e,{isMobile:a}=d.Z.useData(),[s,i]=(0,ex.XI)(),u=(0,n.useCallback)(()=>{(0,c.mT)({dataTestId:"landing-solo-staking-video-modal",title:"The Future of Solo Staking",id:"4hCi4MwGw50"}),v.h.sendEvent("clickWatchVideo",{title:o.SoloStakingVideo})},[]);return(0,r.jsxs)("div",{className:l()(t,eN().container,"relative overflow-hidden flex flex-1 flex-col rounded-16 pt-48 bg-coal shadow-stone",{"p-24":a,"p-32":!a}),ref:s,children:[(0,r.jsx)(c.UZ,{className:l()(eN().circles,"absolute"),src:"./video/hypnosis.mp4",isStarted:i}),(0,r.jsx)(c.xv,{className:"fancyGrayText relative",size:"h40",color:"sun",message:ez.itIsEasy,html:!0}),(0,r.jsx)(c.xv,{className:"relative",size:a?"h40":"h100",color:"sun",message:ez.goSolo,html:!0}),(0,r.jsxs)("div",{className:"relative flex flex-1 flex-col justify-end mt-40",children:[(0,r.jsx)(c.xv,{className:"opacity-70",size:a?"t18b":"h20",color:"sun",message:ez.useNodeWise,html:!0}),(0,r.jsx)("div",{className:"flex justify-end mt-40",children:(0,r.jsx)(c.zx,{size:"sl",rounded:!0,bordered:!0,bgColor:"sun",title:g.Z.buttonTitle.watchAVideo,dataTestId:"landing-solo-staking-watch-video-button",onClick:u})})]})]})}),eB={youAreIn:{en:"You<br> are in<br>  control.",ru:"Вы находитесь в контроле.",fr:"Et vous \xeates celui qui contr\xf4le.",es:"Tienes el control.",pt:"Est\xe1 no controle.",de:"Sie haben die Kontrolle. ",zh:"一切在您<br> <br>掌握之中。"},stayIn:{en:`
      Stay in charge of your stake<br> 
      every step of the way.<br> 
      Maximise performance and<br>
      keep custody of your keys by<br>
      running nodes from home.
    `,ru:`
      Отвечайте за свою ставку<br> 
      на каждом шагу.<br> 
      Максимальная производительность и<br>
      хранение ваших ключей<br>
      запуска узлов из дома.
    `,fr:`
      Restez en charge de votre mise<br> 
      \xe0 chaque \xe9tape du processus.<br> 
      Maximisez les performances et<br>
      gardez la garde de vos cl\xe9s en<br>
      ex\xe9cution de nœuds \xe0 partir de la maison.
    `,es:`
      Mant\xe9ngase a cargo de su participaci\xf3n<br> 
      en cada paso del camino.<br> 
      Maximice el rendimiento y<br>
      mantenga la custodia de sus llaves<br>
      ejecutando nodos desde casa.
    `,pt:`
      Mantenha-se no comando da sua aposta<br> 
      a cada passo do caminho.<br> 
      Maximize o desempenho e<br>
      mantenha a cust\xf3dia das suas chaves<br>
      executando n\xf3s a partir de casa.
    `,de:`
      Bleiben Sie f\xfcr Ihren Einsatz verantwortlich<br> 
      jeden Schritt des Weges.<br> 
      Maximieren Sie die Leistung und<br>
      bewahren Sie Ihre Schl\xfcssel auf, indem Sie<br>
      knoten von zu Hause aus ausf\xfchren.
    `,zh:`
      掌控您的赌注<br> 
      每一步。<br> 
      通过以下方式最大限度地提高性能并<br>
保管您的钥匙：<br>
      从家里运行节点。
    `}},eW=a(35186),eV=a.n(eW),eI=n.memo(e=>{let{className:t}=e,{isMobile:a}=d.Z.useData(),[s,i]=(0,ex.XI)(),u=(0,n.useCallback)(()=>{v.h.sendEvent("clickMarketingBannerBtn",{type:o.ControlNodesBanner})},[]);return(0,r.jsxs)("div",{className:l()(t,eV().container,"flex flex-1 flex-col items-start rounded-16 pt-48 bg-coal shadow-stone",{"p-24":a,"p-32":!a}),ref:s,children:[(0,r.jsx)(c.UZ,{className:eV().controlBg,src:"./video/settings.mp4",isStarted:i}),(0,r.jsx)(c.xv,{className:"mt-48 fancyPurpleText",size:a?"h40":"h48",color:"sun",message:eB.youAreIn,html:!0}),(0,r.jsxs)("div",{className:l()("flex flex-1 flex-col w-full",{"mt-32":a,"mt-56":!a}),children:[(0,r.jsx)(c.xv,{className:"opacity-70",size:a?"t18b":"h20",color:"sun",message:eB.stayIn,html:!0}),(0,r.jsx)("div",{className:"flex flex-1 justify-end items-end mt-40",children:(0,r.jsx)(k.default,{target:"_blank",href:x.Ev.operate,"data-testid":"landing-control-card-create-vault-button",children:(0,r.jsx)(c.zx,{size:"sl",rounded:!0,bordered:!0,bgColor:"sun",title:g.Z.buttonTitle.createVault,onClick:u})})})]})]})}),eA={farmBorrow:{en:"Farm, borrow and trade crypto with staked ETH.",ru:"Ферма, заимствование и торговля криптовалютой со стейкинговыми ETH.",fr:"Fermez, empruntez et \xe9changez des crypto-monnaies avec des ETH jalonn\xe9s.",es:"Cultive, pida prestado y opere con criptomonedas con ETH apostado.",pt:"Faz farm, empresta e negocia criptomoedas com ETH em staking.",de:"Bewirtschaften, leihen und handeln Sie Krypto mit einer abgesteckten ETH.",zh:"使用质押的ETH耕种、借款和交易加密货币。"},putDefi:{en:`
      Put DeFi opportunities at your fingertips with osETH. Finally available for solo validators.
    `,ru:`
      Поместите возможности DeFi под рукой с помощью osETH. Наконец, доступно для сольных валидаторов.
    `,fr:`
      Mettez les opportunit\xe9s DeFi \xe0 port\xe9e de main avec osETH. Enfin disponible pour les validateurs solitaires.
    `,es:`
      Pon las oportunidades de DeFi al alcance de tu mano con osETH. Finalmente disponible para validadores individuales.
    `,pt:`
      Coloque as oportunidades DeFi ao seu alcance com o osETH. Finalmente dispon\xedvel para validadores individuais.
    `,de:`
      Stellen Sie DeFi-M\xf6glichkeiten mit osETH zur Verf\xfcgung. Endlich f\xfcr Solo-Validatoren verf\xfcgbar.
    `,zh:`
      使用osETH ，让DeFi机会触手可及。最终可供单人验证者使用。
    `}},eZ=a(66479),eD=a.n(eZ),eF=n.memo(e=>{let{className:t}=e,{isMobile:a}=d.Z.useData(),[s,i]=(0,ex.XI)(),u=(0,n.useCallback)(()=>{v.h.sendEvent("clickMarketingBannerBtn",{type:o.FarmBorrowBanner})},[]);return(0,r.jsxs)("div",{className:l()(t,"flex flex-col rounded-16 pt-48 bg-coal shadow-stone",{"p-24":a,"p-32":!a}),ref:s,children:[(0,r.jsxs)("div",{className:"flex flex-1 flex-col",children:[(0,r.jsx)(c.xv,{className:l()("fancyBlueText",{"w-[50%]":!a}),size:a?"h40":"h48",color:"sun",message:eA.farmBorrow,html:!0}),(0,r.jsx)(c.xv,{className:l()("mt-56 opacity-70",{"w-[50%]":!a}),size:a?"t18b":"h20",color:"sun",message:eA.putDefi})]}),(0,r.jsxs)("div",{className:"relative flex flex-col items-end",children:[(0,r.jsx)(c.UZ,{className:l()(eD().arrowBg,{absolute:!a,"mt-56":a}),src:"./video/arrows.mp4",isStarted:i}),(0,r.jsx)(k.default,{target:"_blank",href:x.Ev.operate,"data-testid":"landing-arrows-card-create-vault-button",children:(0,r.jsx)(c.zx,{className:a?"mt-60":"mt-96",size:"sl",rounded:!0,bordered:!0,bgColor:"sun",title:g.Z.buttonTitle.createVault,onClick:u})})]})]})}),eP={en:"Become an operator",ru:"Стать оператором",fr:"Devenir op\xe9rateur",es:"Convi\xe9rtete en operador",pt:"Torne-se um operador",de:"Betreiber werden",zh:"成为运营商"},eM={en:"Liquid staking for your<br> solo validators.",ru:"Ликвидный стейкинг для ваших<br> сольных валидаторов.",fr:"Staking liquide pour vos<br> validateurs solitaires.",es:"Apuesta l\xedquida para sus<br> validadores individuales.",pt:"Staking l\xedquido para os seus<br> validadores individuais.",de:"Liquid Staking f\xfcr Ihre<br> Solo-Validatoren.",zh:"为您的个人验证者提供液体质押。<br>"},eR=a(67009),eL=a.n(eR),eO=n.memo(e=>{let{className:t}=e,{isMobile:a}=d.Z.useData();return(0,r.jsx)("section",{className:l()(t,eL().wrapper,"pt-96 py-48"),"data-testid":"landing-stake-with-operator-section",id:"operator",children:(0,r.jsxs)("div",{className:"mainWrapper",children:[(0,r.jsx)(ej,{icon:"icon/fingerprint",title:eP,color:"sun"}),(0,r.jsx)("div",{className:"mt-24",children:(0,r.jsx)(c.xv,{size:a?"h32":"h48",color:"sun",message:eM,html:!0})}),(0,r.jsxs)("div",{className:"flex flex-col mt-48",children:[(0,r.jsx)(eF,{}),(0,r.jsxs)("div",{className:l()("flex gap-20 mt-20",{"flex-col":a}),children:[(0,r.jsx)(eI,{}),(0,r.jsx)(eq,{})]})]})]})})}),eG={en:"Security & audits",ru:"Безопасность и аудит",fr:"S\xe9curit\xe9 et audits",es:"Seguridad y auditor\xedas",pt:"Seguran\xe7a e auditorias",de:"Sicherheit und Audits",zh:"安全和审计"},eK={en:"Audited by the best.",ru:"Проверено лучшими.",fr:"Audit\xe9 par les meilleurs.",es:"Auditado por los mejores.",pt:"Auditado pelos melhores.",de:"Gepr\xfcft von den Besten.",zh:"由最优秀的人士审核。"},eY={en:"See reports",ru:"Посмотреть отчеты",fr:"Voir les rapports",es:"Observa los informes.",pt:"Ver relat\xf3rios",de:"Berichte anzeigen",zh:"查看报告"},e$=a(19240),eU=a.n(e$);let eJ=[{path:"/images/audits/sigma.png",alt:"sigma prime",width:117,height:49},{path:"/images/audits/halborn.png",alt:"halborn",width:113,height:15},{path:"/images/audits/hats-finance.png",alt:"hats-finance",width:43,height:43}];var eX=n.memo(e=>{let{className:t}=e,{isMobile:a}=d.Z.useData(),s=(0,n.useCallback)(()=>{v.h.sendEvent("clickAuditReportsBtn")},[]);return(0,r.jsxs)("section",{className:l()(t,"pt-96"),children:[(0,r.jsx)(ej,{icon:"icon/successShield",title:eG}),(0,r.jsxs)("div",{className:l()("flex justify-between mt-48",{"flex-col":a}),children:[(0,r.jsx)(c.xv,{size:a?"h32":"h48",color:"coal",message:eK,html:!0}),(0,r.jsx)("div",{className:l()("flex flex-1 gap-20",{"flex-col mt-40 items-center":a,"ml-96 justify-between":!a}),children:eJ.map((e,t)=>{let{path:a,width:s,height:o,alt:n}=e;return(0,r.jsx)("div",{className:l()(eU().card,"flex flex-col items-center justify-center bg-sun rounded-16 shadow-coal"),children:(0,r.jsx)(u.default,{width:s,height:o,priority:!0,src:a,alt:n})},`${t}-${n}`)})})]}),(0,r.jsx)(k.default,{className:l()("flex mt-48",{"justify-center":a}),href:"https://github.com/stakewise/v3-core/tree/main/audits",target:"_blank","data-testid":"landing-security-audits-button",children:(0,r.jsx)(c.zx,{size:"sl",rounded:!0,bordered:!0,bgColor:"coal",title:eY,onClick:s})})]})}),eQ=n.memo(e=>{let{className:t}=e,{isMobile:a}=d.Z.useData();return(0,r.jsx)("section",{className:l()(t,"pt-96"),children:(0,r.jsxs)("div",{className:l()("flex justify-between gap-20",{"flex-col":a}),children:[(0,r.jsx)(C,{bgColor:"sun",icon:"icon/lock",href:x.Ev.home,title:w.simpleSecure,description:w.buyOsEth,eventName:o.StakeWithOsETH,dataTestId:"landing-small-card-premier-staking-oseth-button",buttonTitle:g.Z.buttonTitle.stakeWithOsEth}),(0,r.jsx)(C,{bgColor:"fancy",icon:"icon/cube",href:x.Ev.vaults,description:w.browsePools,title:w.stakingMarketplace,buttonTitle:w.stakeWithVaults,eventName:o.StakeWithVaults,dataTestId:"landing-small-card-premier-staking-vaults-button"}),(0,r.jsx)(C,{icon:"icon/fingerprint",href:x.Ev.operate,title:w.liquidStaking,description:w.liquidSolo,buttonTitle:w.becomeAnOperator,eventName:o.BecomeAnOperator,dataTestId:"landing-small-card-premier-staking-operate-button"})]})})}),e0={earnUp:{en:`
      Earn more ETH<br>
      by staking in<br>
      top-performing Vaults.
    `,ru:`
      Зарабатывайте больше ETH<br>,
      делая ставки в<br>
      самых эффективных хранилищах.
    `,fr:`
      Gagnez plus d'ETH <br>
      en investissant dans des<br>
      coffres-forts tr\xe8s performants.
    `,es:`
      Gana m\xe1s ETH <br>
      apostando en b\xf3vedas de<br>
      alto rendimiento.
    `,pt:`
      Ganhe mais ETH <br>
      apostando em Vaults de<br>
      melhor desempenho.
    `,de:`
      Verdiene mehr ETH<br>,
      indem du in den<br>
      besten Tresoren steckst.
    `,zh:`
      通过押注表现最佳的Vault赚取更多以太坊<br>
      <br>。
    `},vaultsMaximize:{en:`
      Vaults maximize your earnings with auto-compounding,<br>
      flawless uptime, lower fees, and tokenless staking.
    `,ru:`
      Хранилища максимизируют ваш доход с помощью автоматического сложения,<br>
      безупречное время безотказной работы, более низкие сборы и бесконтактный стейкинг.
    `,fr:`
      Les coffres-forts maximisent vos revenus avec l'auto-compounding,<br>
      une disponibilit\xe9 sans faille, des frais r\xe9duits et un jalonnement sans jeton.
    `,es:`
      Las b\xf3vedas maximizan tus ganancias con la composici\xf3n autom\xe1tica,<br>
      tiempo de actividad impecable, tarifas m\xe1s bajas y apuestas sin tokens.
    `,pt:`
      Os cofres maximizam seus ganhos com a composi\xe7\xe3o autom\xe1tica,<br>
      tempo de atividade impec\xe1vel, taxas mais baixas e staking sem tokens.
    `,de:`
      Tresore maximieren Ihre Einnahmen mit automatischer Compoundierung,<br>
      einwandfreie Betriebszeit, niedrigere Geb\xfchren und tokenloses Abstecken.
    `,zh:`
      Vault通过自动复合功能最大限度地提高您的收入，<br>
      完美的正常运行时间、更低的费用和无标记的质押。
    `}},e1=a(70857),e6=a.n(e1),e3=n.memo(e=>{let{className:t}=e,{isMobile:a}=d.Z.useData(),[s,i]=(0,ex.XI)(),u=(0,n.useCallback)(()=>{v.h.sendEvent("clickMarketingBannerBtn",{type:o.PerformingVaultsBanner})},[]);return(0,r.jsxs)("div",{className:l()(t,e6().dollarContainer,"relative flex flex-col rounded-16 shadow-coal overflow-hidden"),ref:s,children:[(0,r.jsx)(c.UZ,{className:"absolute top-0 right-0 rounded-16 overflow-hidden",src:a?"./video/mobile-dollar.mp4":"./video/dollar.mp4",isStarted:i}),(0,r.jsxs)("div",{className:l()("flex flex-col z-1",{"p-24":a,"p-32":!a}),children:[(0,r.jsxs)("div",{className:"flex flex-1 flex-col",children:[(0,r.jsx)(c.xv,{size:a?"h40":"h60",color:"sun",message:e0.earnUp,html:!0}),(0,r.jsx)(c.xv,{className:l()({"mt-24":a,"mt-48":!a}),size:a?"t18b":"h20",color:"sun",message:e0.vaultsMaximize,html:!0})]}),(0,r.jsx)("div",{className:"flex justify-end mt-72",children:(0,r.jsx)(k.default,{target:"_blank",href:x.Ev.vaults,"data-testid":"landing-dollar-card-browse-vaults-button",children:(0,r.jsx)(c.zx,{size:"sl",rounded:!0,bordered:!0,bgColor:"sun",title:g.Z.buttonTitle.browseVaults,onClick:u})})})]})]})}),e2={title:{en:"Unmatched <br> capital control.",ru:"Непревзойденный <br> контроль за движением капитала.",fr:"Contr\xf4le du capital in\xe9gal\xe9.<br>",es:"Control de capital inigualable.<br>",pt:"Controle de capital inigual\xe1vel.<br>",de:"Un\xfcbertroffene <br> Kapitalkontrolle.",zh:"无与伦比<br>的资本控制。"},description:{en:`
      Stake any amount of ETH and earn ETH rewards. Unstake at any time. You are in control with non-custodial staking.
    `,ru:`
      Стейкайте любое количество ETH и зарабатывайте награды ETH. Отмените ставку в любое время. Вы контролируете некастодиальный стейкинг.
    `,fr:`
      Stakez n'importe quel montant d'ETH et gagnez des r\xe9compenses ETH. D\xe9tachez \xe0 tout moment. Vous avez le contr\xf4le avec le jalonnement non privatif de libert\xe9.
    `,es:`
      Apuesta cualquier cantidad de ETH y gana recompensas de ETH. Retire su participaci\xf3n en cualquier momento. T\xfa tienes el control con el staking sin custodia.
    `,pt:`
      Aposte qualquer quantia de ETH e ganhe recompensas de ETH. Desfa\xe7a a qualquer momento. Est\xe1 no controlo com staking sem cust\xf3dia.
    `,de:`
      Setzen Sie einen beliebigen Betrag an ETH und verdienen Sie ETH-Belohnungen. L\xf6sen Sie den Einsatz jederzeit. Sie haben die Kontrolle \xfcber das nicht freiheitsentziehende Abstecken.
    `,zh:`
      质押任何数量的ETH并获得ETH奖励。随时取消质押。您可以控制非托管质押.
    `}},e4=n.memo(e=>{let{className:t}=e,{isMobile:a}=d.Z.useData(),s=(0,n.useCallback)(()=>{(0,c.mT)({dataTestId:"landing-introducing-vaults-video-modal",title:"Introducing Vaults",id:"Y_jqEqqw1kQ"}),v.h.sendEvent("clickWatchVideo",{title:o.IntroducingVaultsVideo})},[]);return(0,r.jsxs)("div",{className:l()(t,"flex flex-col rounded-16 pt-48 bg-sun shadow-coal",{"p-24":a,"p-32":!a}),children:[(0,r.jsx)(c.xv,{size:a?"h40":"h48",color:"coal",message:e2.title,html:!0}),(0,r.jsx)(c.xv,{className:l()("opacity-60 flex-1",{"mt-24":a,"mt-40":!a}),size:a?"t18b":"h20",color:"coal",message:e2.description}),(0,r.jsx)(u.default,{className:"mt-32",src:"/images/icons/boat.svg",width:285,height:86,alt:"boatImage"}),(0,r.jsx)("div",{className:"flex flex-col items-end justify-end mt-56",children:(0,r.jsx)(c.zx,{size:"sl",rounded:!0,bordered:!0,bgColor:"coal",title:g.Z.buttonTitle.watchAVideo,dataTestId:"landing-capital-card-watch-video-button",onClick:s})})]})}),e5=a(34096),e9=a.n(e5),e7=n.memo(e=>{let{className:t,isFlipped:a,children:s,dataTestId:o}=e;return(0,r.jsx)("div",{className:l()(t,e9().flipCardBack,"flex flex-1 flex-col",{[e9().animated]:!a}),"data-testid":o,children:s})}),e8=n.memo(e=>{let{className:t,isFlipped:a,children:s,dataTestId:o}=e;return(0,r.jsx)("div",{className:l()(t,e9().flipCardFront,"flex flex-1 flex-col",{[e9().animated]:a}),"data-testid":o,children:s})}),te=n.memo(e=>{let{className:t,children:a}=e;return(0,r.jsx)("div",{className:l()(t,"flex flex-1 flex-col items-end justify-end mt-40"),children:a})});let tt=e=>{let{className:t,isFlipped:a,children:s}=e;return(0,r.jsx)("div",{className:l()(t,e9().flipCard,"flex flex-1 z-1"),children:n.Children.map(s,e=>n.cloneElement(e,{className:l()(e?.props?.className,e9().flipCardInner,"flex",{[e9().flipped]:a})}))})};tt.FrontCard=e=>(0,r.jsx)(e8,{...e}),tt.BackCard=e=>(0,r.jsx)(e7,{...e}),tt.ToggleButton=e=>(0,r.jsx)(te,{...e});var ta={makeYourStake:{en:`
      Make your<br>
      stake liquid<br> 
      with osETH.
    `,ru:`
      Сделайте свою<br>
      ставку ликвидной<br> 
      с помощью<br>
      osETH.
    `,fr:`
      Faites votre<br>
      pieu liquide<br> 
      avec<br>
      osETH.
    `,es:`
      Haz que tu<br>
      estaca sea l\xedquida<br> 
      con<br>
      osETH.
    `,pt:`
      Torne a sua<br>
      aposta l\xedquida<br> 
      com<br>
      osETH.
    `,de:`
      Machen Sie Ihren<br>
      Einsatz mit osETH      fl\xfcssig<br> 
      <br>
    `,zh:`
      使用osETH让您的<br>
质押变成液体<br> 
      <br>
    `},mintOsEth:{en:"Mint osETH to make your stake liquid.",ru:"Минти osETH, чтобы сделать вашу ставку ликвидной.",fr:"Menthe osETH pour rendre votre pieu liquide.",es:"Menta osETH para hacer tu estaca l\xedquida.",pt:"Menta osETH para tornar a sua aposta l\xedquida.",de:"Minze osETH, um Ihren Pfahl fl\xfcssig zu machen.",zh:"薄荷osETH使您的木桩变成液体。"},yourStake:{en:"Your stake in any Vault can be made liquid by minting osETH for up to 90% of your stake.",ru:"Вашу долю в любом хранилище можно сделать ликвидной, отчеканив osETH до 90% вашей доли.",fr:"Votre participation dans n'importe quel coffre-fort peut \xeatre liquid\xe9e en frappant de l'osETH jusqu'\xe0 90\xa0% de votre participation.",es:"Su participaci\xf3n en cualquier B\xf3veda puede hacerse l\xedquida acu\xf1ando osETH por hasta el 90% de su participaci\xf3n.",pt:"Sua aposta em qualquer Cofre pode ser liquidificada ao cunhar osETH por at\xe9 90% da sua aposta.",de:"Ihr Anteil an einem beliebigen Vault kann durch Pr\xe4gen von osETH f\xfcr bis zu 90 % Ihres Anteils verfl\xfcssigt werden.",zh:"您可以通过铸造osETH使您在任何Vault中的股份变为液体，最高可达您股份的90 ％。"},noMatter:{en:"No matter how much osETH you mint, you will continue to earn the full ETH rewards on your stake in the Vault.",ru:"Независимо от того, сколько монет вы чеканите, вы будете продолжать получать полные вознаграждения ETH за свою долю в хранилище.",fr:"Quelle que soit la quantit\xe9 d'osETH que vous frappez, vous continuerez \xe0 gagner la totalit\xe9 des r\xe9compenses ETH sur votre mise dans le coffre-fort.",es:"No importa cu\xe1nto osETH acu\xf1e, continuar\xe1 ganando las recompensas completas de ETH en su participaci\xf3n en la B\xf3veda.",pt:"N\xe3o importa quanto osETH voc\xea cunhe, voc\xea continuar\xe1 a ganhar as recompensas completas de ETH na sua aposta no Vault.",de:"Egal, wie viel osETH Sie pr\xe4gen, Sie erhalten weiterhin die vollen ETH-Belohnungen f\xfcr Ihren Einsatz im Tresor.",zh:"无论您铸造了多少osETH ，您都将继续在避难所的赌注中获得完整的ETH奖励。"},theMainLiquid:{en:`
      osETH is the main liquid staking token for the StakeWise ecosystem. 
      It features in-built slashing protection and accrues yield from a highly diversified set of node operators, 
      offering decentralization and additional security to StakeWise users.
    `,ru:`
      osETH - основной ликвидный стейкинг-токен для экосистемы StakeWise. 
      Он имеет встроенную защиту от обрезания и накапливает доход от высокодиверсифицированного набора операторов узлов, 
      предлагая децентрализацию и дополнительную безопасность пользователям StakeWise.
    `,fr:`
      osETH est le principal jeton de jalonnement liquide pour l'\xe9cosyst\xe8me StakeWise. 
      Il dispose d'une protection int\xe9gr\xe9e contre les coupures et augmente le rendement d'un ensemble tr\xe8s diversifi\xe9 d'op\xe9rateurs de nœuds, 
      offrant une d\xe9centralisation et une s\xe9curit\xe9 suppl\xe9mentaire aux utilisateurs de StakeWise.
    `,es:`
      osETH es el principal token de staking l\xedquido para el ecosistema StakeWise. 
      Cuenta con protecci\xf3n contra cortes incorporada y acumula rendimiento de un conjunto altamente diversificado de operadores de nodos, 
      ofreciendo descentralizaci\xf3n y seguridad adicional a los usuarios de StakeWise.
    `,pt:`
      o osETH \xe9 o principal token de staking l\xedquido para o ecossistema StakeWise. 
      Possui prote\xe7\xe3o de corte embutida e acumula rendimento de um conjunto altamente diversificado de operadores de n\xf3s, 
      oferecendo descentraliza\xe7\xe3o e seguran\xe7a adicional aos utilizadores do StakeWise.
    `,de:`
      osETH ist der wichtigste Liquid Staking Token f\xfcr das StakeWise-\xd6kosystem. 
      Es verf\xfcgt \xfcber einen integrierten K\xfcrzungsschutz und sammelt Ertr\xe4ge aus einer sehr diversifizierten Reihe von Knotenoperatoren, 
      bietet StakeWise-Benutzern Dezentralisierung und zus\xe4tzliche Sicherheit.
    `,zh:`
      osETH是StakeWise生态系统的主要液体质押代币。 
      它具有内置的削减保护功能，并从高度多元化的节点运营商中获得产量， 
      为StakeWise用户提供去中心化和额外的安全性。
    `}},ts=a(57217),to=a.n(ts),tr=n.memo(e=>{let{className:t}=e,{isMobile:a}=d.Z.useData(),[s,i]=(0,ex.XI)(),[m,p]=(0,n.useState)(!1),f=(0,n.useCallback)(()=>{m||v.h.sendEvent("clickLearnMoreBtn",{type:o.StakeLiquidBanner}),p(!m)},[m]),h="landing-liquid-staking-card";return(0,r.jsx)(tt,{isFlipped:m,children:(0,r.jsxs)("div",{className:l()(t,to().container,"rounded-16 p-32 pt-48 bg-coal shadow-coal"),children:[(0,r.jsxs)(tt.FrontCard,{isFlipped:m,dataTestId:`${h}-front-side`,children:[(0,r.jsxs)("div",{className:"flex flex-col items-center text-center",ref:s,children:[(0,r.jsx)(u.default,{src:"/images/icons/tap.png",width:70,height:57,alt:"tapImage"}),(0,r.jsx)(c.xv,{className:"my-60 fancyPinkText",size:a?"h40":"h48",color:"sun",message:ta.makeYourStake,html:!0}),(0,r.jsx)(c.UZ,{className:to().waterGlassBg,src:"video/water-glass.mp4",isStarted:i})]}),(0,r.jsx)(tt.ToggleButton,{children:(0,r.jsx)(c.zx,{size:"sl",rounded:!0,bordered:!0,bgColor:"sun",title:g.Z.buttonTitle.learnMore,dataTestId:`${h}-learn-more-button`,onClick:f})})]}),(0,r.jsxs)(tt.BackCard,{isFlipped:m,dataTestId:`${h}-back-side`,children:[(0,r.jsx)(c.xv,{size:"h20",color:"sun",message:ta.mintOsEth}),(0,r.jsx)(c.xv,{className:"opacity-60 mt-36",size:"t16m",color:"sun",message:ta.yourStake}),(0,r.jsx)(c.xv,{className:"opacity-60 mt-24",size:"t16m",color:"sun",message:ta.noMatter}),(0,r.jsx)(c.xv,{className:"opacity-60 mt-24",size:"t16m",color:"sun",message:ta.theMainLiquid}),(0,r.jsx)(tt.ToggleButton,{children:(0,r.jsx)(c.zx,{size:"sl",rounded:!0,bordered:!0,bgColor:"sun",title:g.Z.buttonTitle.close,dataTestId:`${h}-close-button`,onClick:f})})]})]})})}),tn={findYourPerfect:{en:`
      Find your<br>
      perfect<br>
      Vault.
    `,ru:`
      Найдите<br>
      идеальное<br>
      хранилище.
    `,fr:`
      Trouvez votre<br>
      coffre-fort parfait<br>.
    `,es:`
      Encuentra tu<br>
      B\xf3veda perfecta<br>.
    `,pt:`
      Encontre o seu<br>
      Cofre perfeito<br>.
    `,de:`
      Finde deinen<br>
      perfekten<br>
      Tresor.
    `,zh:`
      找到完美的<br>
      <br>
避难所。
    `},stakeInVault:{en:`
      Stake in Vaults that meet<br>
      your criteria for<br>
      decentralisation, fees,<br>
      client diversity, and more.<br>
      Agree custom terms with<br>
      select operators for a fully<br>
      tailored solution.
    `,ru:`
      Доля в хранилищах, которые соответствуют<br>
      ваши критерии<br>
      децентрализации, сборы,<br>
      разнообразие клиентов и многое другое.<br>
      Согласуйте пользовательские условия с<br>
      выбрать операторов для полностью<br>
      индивидуального решения.
    `,fr:`
      Implantez des vo\xfbtes qui se rencontrent<br>
      vos crit\xe8res de<br>
      d\xe9centralisation, de frais,<br>
      diversit\xe9 des clients, et plus encore.<br>
      Acceptez les conditions personnalis\xe9es avec<br>
      s\xe9lectionner les op\xe9rateurs pour une solution enti\xe8rement<br>
      sur mesure.
    `,es:`
      Apuesta en b\xf3vedas que cumplan<br>
      sus criterios de<br>
      descentralizaci\xf3n, tarifas,<br>
      diversidad de clientes y m\xe1s.<br>
      Aceptar t\xe9rminos personalizados con<br>
      seleccionar operadores para una soluci\xf3n totalmente<br>
      personalizada.
    `,pt:`
      Aposta em Cofres que atendem<br>
      os seus crit\xe9rios de<br>
      descentraliza\xe7\xe3o, taxas,<br>
      diversidade de clientes e muito mais.<br>
      Acordar termos personalizados com<br>
      selecionar operadores para uma solu\xe7\xe3o totalmente<br>
      personalizada.
    `,de:`
      Setzen Sie auf Tresore, die sich treffen<br>
      ihre Kriterien f\xfcr<br>
      Dezentralisierung, Geb\xfchren,<br>
      kundenvielfalt und mehr.<br>
      Vereinbaren Sie benutzerdefinierte Bedingungen mit<br>
      w\xe4hlen Sie Bediener f\xfcr eine vollst\xe4ndig<br>
      ma\xdfgeschneiderte L\xf6sung.
    `,zh:`
      在满足以下条件的Vault中持股比例：<br>
      您的去中心化标准<br>、
费用、<br>
      客户多元化等等。<br>
      同意自定义条款<br>
      选择运营商以获得完全<br>
量身定制的解决方案。
    `}},ti=a(94215),tl=a.n(ti),td=n.memo(e=>{let{className:t}=e,{isMobile:a}=d.Z.useData(),[s,i]=(0,ex.XI)(),u=(0,n.useCallback)(()=>{v.h.sendEvent("clickMarketingBannerBtn",{type:o.FindPerfectValueBanner})},[]);return(0,r.jsxs)("div",{className:l()(t,"relative flex flex-col mt-20 rounded-16 pt-48 bg-sun shadow-coal",{"p-24":a,"p-32":!a}),ref:s,children:[(0,r.jsx)(c.xv,{size:a?"h40":"h48",color:"coal",message:tn.findYourPerfect,html:!0}),(0,r.jsx)(c.xv,{className:"mt-32 opacity-60",size:a?"t18b":"h20",color:"coal",message:tn.stakeInVault,html:!0}),(0,r.jsx)(c.UZ,{className:l()({[tl().vaultBg]:!a,"absolute top-0":!a,"pt-48":a}),src:"./video/vaults.mp4",isStarted:i}),(0,r.jsx)("div",{className:"flex justify-end mt-32",children:(0,r.jsx)(k.default,{target:"_blank",href:x.Ev.vaults,"data-testid":"landing-vaults-card-browse-vaults-button",children:(0,r.jsx)(c.zx,{size:"sl",rounded:!0,bordered:!0,bgColor:"coal",title:g.Z.buttonTitle.browseVaults,onClick:u})})})]})}),tc={en:"Stake with vaults",ru:"Ставка с хранилищами",fr:"Piquet avec vo\xfbtes",es:"Estaca con b\xf3vedas",pt:"Aposta com cofres",de:"Pfahl mit Gew\xf6lben",zh:"用金库抵押"},tu={en:"Staking <br> marketplace.",ru:"Маркетплейс <br> стейкинга",fr:"Mise en place <br> de march\xe9.",es:"Mercado de <br> apuestas.",pt:"Mercado de <br> staking.",de:"Staking <br> Marktplatz.",zh:"质押 <br> 市场。"},tm=n.memo(e=>{let{className:t}=e,{isMobile:a}=d.Z.useData();return(0,r.jsxs)("section",{className:l()(t,"pt-96"),"data-testid":"landing-stake-with-vaults-section",id:"vaults",children:[(0,r.jsx)(ej,{icon:"icon/cube",title:tc}),(0,r.jsx)("div",{className:"mt-24",children:(0,r.jsx)(c.xv,{size:a?"h32":"h48",color:"coal",message:tu,html:!0})}),(0,r.jsxs)("div",{className:"flex flex-col my-48",children:[(0,r.jsx)(e3,{}),(0,r.jsxs)("div",{className:l()("flex gap-20 mt-20",{"flex-col":a}),children:[(0,r.jsx)("div",{className:"flex-1 flex",children:(0,r.jsx)(e4,{})}),(0,r.jsx)(tr,{})]}),(0,r.jsx)(td,{})]})]})}),tp={earnStats:{en:"Earn ETH every second when you hold osETH.",ru:"Зарабатывайте ETH каждую секунду, удерживая osETH.",fr:"Gagnez de l'ETH chaque seconde lorsque vous tenez osETH.",es:"Gane ETH cada segundo cuando sostenga osETH.",pt:"Ganhe ETH a cada segundo ao segurar o osETH.",de:"Verdienen Sie jede Sekunde ETH, wenn Sie osETH halten.",zh:"当您持有osETH时，每秒可赚取ETH。"},osETHRepresents:{en:"osETH represents your stake and grows in value as you earn staking rewards.",ru:"osETH представляет вашу ставку и растет в цене по мере того, как вы получаете вознаграждение от стейкинга.",fr:"osETH repr\xe9sente votre mise et prend de la valeur \xe0 mesure que vous gagnez des r\xe9compenses de mise.",es:"osETH representa su apuesta y crece en valor a medida que gana recompensas de apuestas.",pt:"osETH representa a sua aposta e cresce em valor \xe0 medida que ganha recompensas de staking.",de:"osETH repr\xe4sentiert Ihren Einsatz und gewinnt an Wert, wenn Sie Einsatzbelohnungen verdienen.",zh:"osETH代表您的赌注，随着 您获得赌注奖励而增长。"}},tf=a(22476),th=a.n(tf),t_=n.memo(e=>{let{className:t}=e,{isMobile:a}=d.Z.useData(),[s,i]=(0,ex.XI)(),u=(0,n.useCallback)(()=>{v.h.sendEvent("clickMarketingBannerBtn",{type:o.StartEarningBanner})},[]);return(0,r.jsxs)("div",{className:l()(t,th().container,"flex flex-col rounded-16 bg-coal shadow-coal",{"px-24 pb-24":a,"px-32 pb-32":!a}),ref:s,children:[(0,r.jsxs)("div",{className:l()("flex",{"flex-col":a}),children:[(0,r.jsxs)("div",{className:"flex flex-1 flex-col pt-48",children:[(0,r.jsx)(c.xv,{className:"fancyOrangeText",size:a?"h40":"h60",color:"sun",message:tp.earnStats}),!a&&(0,r.jsx)(c.xv,{className:"mt-48",size:"h20",color:"sun",message:tp.osETHRepresents})]}),(0,r.jsx)("div",{className:l()("flex flex-col justify-end",{"items-end":a,"ml-96":!a}),children:(0,r.jsx)(c.UZ,{className:th().coinsBg,src:"./video/coins.mp4",isStarted:i})})]}),(0,r.jsx)("div",{className:l()("flex flex-1 flex-row-reverse justify-between mt-40",{"flex-col items-end":a}),children:(0,r.jsx)(c.zx,{className:th().earningButton,size:"sl",rounded:!0,bgColor:"sun",href:x.Ev.home,title:g.Z.buttonTitle.startEarning,dataTestId:"landing-earn-card-start-earning-button",onClick:u})})]})}),tb={stakeUnstakeInSeconds:{en:"Stake & unstake <br> in seconds.",ru:"Ставка",fr:"Stake",es:"Participaci\xf3n",pt:"Montante da aposta",de:"Einsatz",zh:"质押"},swapEthForOsETH:{en:`
      Swap ETH for osETH to start staking. Return osETH at any time to receive your stake and rewards.
    `,ru:`
      Обменяйте ETH на osETH, чтобы начать делать ставки. Возвращайте osETH в любое время, чтобы получить свою ставку и награды.
    `,fr:`
      \xc9changez ETH pour osETH pour commencer le jalonnement.
      Renvoyez osETH \xe0 tout moment pour recevoir votre mise et vos r\xe9compenses.
    `,es:`
      Cambie ETH por osETH para comenzar a apostar. Devuelva osETH en cualquier momento para recibir su apuesta y recompensas.
    `,pt:`
      Troque ETH por osETH para come\xe7ar a fazer staking. Devolva o osETH a qualquer momento para receber sua aposta e recompensas.
    `,de:`
      Tauschen Sie ETH gegen osETH, um mit dem Abstecken zu beginnen.
      Geben Sie osETH jederzeit zur\xfcck, um Ihren Einsatz und Ihre Belohnungen zu erhalten.
    `,zh:`
      将ETH交换为osETH以开始质押。随时退还osETH以获得 您的质押和奖励。
    `}},tx=a(17803),tg=a.n(tx),tv=n.memo(e=>{let{className:t}=e,{isMobile:a}=d.Z.useData();return(0,r.jsxs)("div",{className:l()(t,tg().fancySummerBg,"flex flex-col flex-1 pt-48 rounded-16 shadow-coal",{"p-24":a,"p-32":!a}),children:[(0,r.jsx)(c.xv,{size:a?"h40":"h48",color:"coal",message:tb.stakeUnstakeInSeconds,html:!0}),(0,r.jsx)(c.xv,{className:l()("opacity-60",{"mt-24":a,"mt-40":!a}),size:a?"t18b":"h20",color:"coal",message:tb.swapEthForOsETH}),(0,r.jsx)("div",{className:"flex flex-1 flex-col items-end justify-end mt-56",children:(0,r.jsx)(u.default,{width:110,height:75,src:"/images/icons/timer.webp",alt:"timer"})})]})}),tk={osEthHasAnExcessReserve:{en:"osETH has an excess reserve of <br> staked ETH to protect holders <br> against slashing.",ru:"osETH имеет избыточный резерв <br> ETH для защиты держателей <br> от сокращения.",fr:"osETH a une r\xe9serve exc\xe9dentaire d'<br>ETH jalonn\xe9 pour prot\xe9ger les supports <br> contre les entailles.",es:"osETH tiene un exceso de reserva de <br> ETH apostado para proteger a los titulares <br> contra cortes.",pt:"a osETH tem uma reserva em excesso de <br> ETH em staking para proteger os detentores <br> contra cortes.",de:"osETH verf\xfcgt \xfcber eine \xfcbersch\xfcssige Reserve an <br> abgesteckter ETH, um die Halter vor Aufschl\xe4gen zu sch\xfctzen.<br>",zh:"osETH拥有多余的质押ETH储备，<br>以保护持有人免受<br>削减。"},nonCustodialSlash:{en:"Non-custodial & slashing-free.",ru:"Не связанный с тюремным заключением",fr:"Non gardien",es:"autoridad parental",pt:"Sem cust\xf3dia",de:"Nicht sorgeberechtigt",zh:"非监护"},ensureRisk:{en:`
      To ensure the risks of any Vault remain isolated and do not spill over to osETH holders, 
      StakeWise V3 requires over 1 ETH for every osETH that stakers in Vaults want to mint. 
      Hence the name of the token, overcollateralized staked ETH.
    `,ru:`
      Чтобы гарантировать, что риски любого хранилища остаются изолированными и не перетекают на держателей osETH, 
      StakeWise V3 требует более 1 ETH на каждый osETH, который стейкеры в хранилищах хотят отчеканить. 
      Отсюда и название токена ETH с избыточным обеспечением.
    `,fr:`
      Pour s'assurer que les risques de toute chambre forte restent isol\xe9s et ne se r\xe9percutent pas sur les d\xe9tenteurs d'osETH, 
      StakeWise V3 n\xe9cessite plus de 1 ETH pour chaque osETH que les stakers de Vaults veulent frapper. 
      D'o\xf9 le nom du jeton, surcollat\xe9ralis\xe9 ETH jalonn\xe9.
    `,es:`
      Para garantizar que los riesgos de cualquier B\xf3veda permanezcan aislados y no se extiendan a los titulares de osETH, 
      StakeWise V3 requiere m\xe1s de 1 ETH por cada osETH que los stakers de Vaults quieran acu\xf1ar. 
      De ah\xed el nombre del token, overcollateralized staked ETH.
    `,pt:`
      Para garantir que os riscos de qualquer Cofre permane\xe7am isolados e n\xe3o se espalhem para os detentores de osETH, 
      O StakeWise V3 requer mais de 1 ETH para cada osETH que os stakers em Vaults querem cunhar. 
      Da\xed o nome do token, ETH em staking com garantia excessiva.
    `,de:`
      Um sicherzustellen, dass die Risiken eines Vault isoliert bleiben und nicht auf osETH-Inhaber \xfcbergreifen, 
      StakeWise V3 erfordert \xfcber 1 ETH f\xfcr jeden osETH, den Staker in Vaults pr\xe4gen m\xf6chten. 
      Daher der Name des Token, overcollateralized staked ETH.
    `,zh:`
      为了确保任何Vault的风险保持隔离，并且不会溢出到osETH持有者， 
      StakeWise V3对于Vault中的质押者想要铸造的每个osETH都需要超过1个ETH。 
      因此，代币的名称是超额抵押的质押ETH。
    `},protectHolders:{en:`
      Thanks to this requirement, osETH has an excess ETH backing so that if slashing happens, 
      there is always a reserve of ETH that absorbs the slashing losses before osETH holders are affected. 
      This protects osETH holders from losing their principal, 
      making osETH a safer option for staking and DeFi protocol integrations.
    `,ru:`
      Благодаря этому требованию, osETH имеет избыточную ETH-поддержку, поэтому, если произойдет слэш, 
      всегда есть резерв ETH, который поглощает убытки от сокращения до того, как это повлияет на держателей osETH. 
      Это защищает держателей osETH от потери основного долга, 
      что делает osETH более безопасным вариантом для интеграции стейкинга и протокола DeFi.
    `,fr:`
      Gr\xe2ce \xe0 cette exigence, osETH dispose d'un support ETH exc\xe9dentaire de sorte que si une coupure se produit, 
      il y a toujours une r\xe9serve d'ETH qui absorbe les pertes de coupe avant que les d\xe9tenteurs d'osETH ne soient affect\xe9s. 
      Cela prot\xe8ge les d\xe9tenteurs d'osETH de la perte de leur principal, 
      faisant d'osETH une option plus s\xfbre pour le staking et les int\xe9grations de protocoles DeFi.
    `,es:`
      Gracias a este requisito, osETH tiene un respaldo de ETH en exceso, de modo que si se produce un corte, 
      siempre hay una reserva de ETH que absorbe las p\xe9rdidas por corte antes de que los titulares de osETH se vean afectados. 
      Esto protege a los titulares de osETH de perder a su principal, 
      haciendo de osETH una opci\xf3n m\xe1s segura para el staking y las integraciones de protocolos DeFi.
    `,pt:`
      Gra\xe7as a esse requisito, o osETH tem um excesso de suporte de ETH para que, se houver corte, 
      h\xe1 sempre uma reserva de ETH que absorve as perdas cortantes antes que os detentores de osETH sejam afetados. 
      Isso protege os detentores de osETH de perder seu principal, 
      tornando o osETH uma op\xe7\xe3o mais segura para integra\xe7\xf5es de staking e protocolo DeFi.
    `,de:`
      Dank dieser Anforderung hat osETH einen \xfcbersch\xfcssigen ETH-Backing, so dass, wenn es zu K\xfcrzungen kommt, 
      es gibt immer eine ETH-Reserve, die die K\xfcrzungsverluste aufnimmt, bevor osETH-Inhaber betroffen sind. 
      Dies sch\xfctzt die Inhaber von osETH vor dem Verlust ihres Kapitals, 
      osETH zu einer sichereren Option f\xfcr Staking- und DeFi-Protokollintegrationen zu machen.
    `,zh:`
      由于这一要求， osETH拥有过多的ETH支持，因此如果发生削减， 
      在osETH持有者受到影响之前，总会有ETH储备来吸收削减损失。 
      这可以保护osETH持有人免于失去本金， 
      使osETH成为质押和DeFi协议集成的更安全选择。
    `}},tT=a(36544),tE=a.n(tT),tC=n.memo(e=>{let{className:t}=e,{isMobile:a}=d.Z.useData();return(0,r.jsxs)("div",{className:l()(t,tE().container,"flex flex-col flex-1 pt-48 rounded-16 bg-sun shadow-coal",{"p-24":a,"p-32":!a}),children:[(0,r.jsx)(u.default,{src:"/images/icons/safe.svg",width:"146",height:"185",alt:"bank"}),(0,r.jsx)(c.xv,{className:"mt-40",size:a?"h40":"h48",color:"coal",message:tk.nonCustodialSlash,html:!0}),(0,r.jsx)(c.xv,{className:l()("opacity-60",{"mt-24":a,"mt-40":!a}),size:a?"t18b":"h20",color:"coal",message:tk.osEthHasAnExcessReserve,html:!0})]})}),tw={poweredByADecentralized:{en:"Powered by a <br> decentralized <br> network of Vaults.",ru:"Работает на <br> децентрализованной <br> сети хранилищ.",fr:"Aliment\xe9 par un r\xe9seau <br> d\xe9centralis\xe9 <br> de coffres.",es:"Impulsado por una red <br> descentralizada <br> de B\xf3vedas.",pt:"Alimentado por uma rede <br> descentralizada <br> de Cofres.",de:"Angetrieben durch ein <br> dezentrales <br> Netzwerk von Vaults.",zh:"由分<br>散的<br>避难所网络提供支持。"},osEthIsBacked:{en:`
      osETH is backed by a decentralized network of 
      staking Vaults created by individuals and 
      organizations using StakeWise smart contracts.
    `,ru:`
      osETH поддерживается децентрализованным
      сеть хранилищ стейкинга, созданных
      отдельных лиц и организаций, использующих
      смарт-контракты StakeWise.
    `,fr:`
      osETH est adoss\xe9 \xe0 un syst\xe8me d\xe9centralis\xe9
      r\xe9seau de coffres \xe0 jalonnement cr\xe9\xe9s par
      les particuliers et les organisations utilisant
      des contrats intelligents StakeWise.
    `,es:`
      osETH est\xe1 respaldado por un sistema
      red de b\xf3vedas de replanteo creada por
      individuos y organizaciones que utilizan
      contratos inteligentes de StakeWise.
    `,pt:`
      o osETH \xe9 apoiado por um sistema descentralizado
      rede de Vaults de staking criados por
      indiv\xedduos e organiza\xe7\xf5es que usam
      contratos inteligentes StakeWise.
    `,de:`
      osETH wird durch eine dezentrale 
      netzwerk von Staking Vaults erstellt von
      einzelpersonen und Organisationen, die StakeWise Smart Contracts verwenden.
    `,zh:`
      osETH由去中心化的
      由创建的质押保管库网络
      使用StakeWise智能合约的个人和组织 。
    `},osEthPowered:{en:"osETH is powered by a decentralized network of Vaults",ru:"osETH работает на децентрализованной сети хранилищ",fr:"osETH est aliment\xe9 par un r\xe9seau d\xe9centralis\xe9 de coffres",es:"osETH funciona con una red descentralizada de b\xf3vedas",pt:"o osETH \xe9 alimentado por uma rede descentralizada de Cofres",de:"osETH wird von einem dezentralen Netzwerk von Vaults betrieben",zh:"osETH由分散的Vault网络提供支持"},osEthEcosystem:{en:"osETH is the main liquid staking token for the StakeWise ecosystem.",ru:"osETH - основной ликвидный стейкинг-токен для экосистемы StakeWise.",fr:"osETH est le principal jeton de jalonnement liquide pour l'\xe9cosyst\xe8me StakeWise.",es:"osETH es el principal token de staking l\xedquido para el ecosistema StakeWise.",pt:"o osETH \xe9 o principal token de staking l\xedquido para o ecossistema StakeWise.",de:"osETH ist der wichtigste Liquid Staking Token f\xfcr das StakeWise-\xd6kosystem.",zh:"osETH是StakeWise生态系统的主要液体质押代币."},becauseOsEth:{en:`
      Because osETH is a reflection of the ETH staked across the whole StakeWise marketplace, 
      it accrues yield from a highly diverse set of node operators. Decentralisation is ensured by design.
    `,ru:`
      Поскольку osETH является отражением ETH, поставленного на весь рынок StakeWise, 
      он накапливает доход от очень разнообразного набора операторов узлов. Децентрализация обеспечивается конструкцией.
    `,fr:`
      Parce que osETH est un reflet de l'ETH implant\xe9 sur l'ensemble du march\xe9 StakeWise, 
      il accumule le rendement d'un ensemble tr\xe8s diversifi\xe9 d'op\xe9rateurs de nœuds. La d\xe9centralisation est assur\xe9e par la conception.
    `,es:`
      Debido a que osETH es un reflejo de la ETH apostada en todo el mercado de StakeWise, 
      acumula rendimiento de un conjunto muy diverso de operadores de nodos. La descentralizaci\xf3n est\xe1 garantizada por el dise\xf1o.
    `,pt:`
      Como o osETH \xe9 um reflexo do ETH apostado em todo o mercado StakeWise, 
      ele acumula rendimento de um conjunto altamente diversificado de operadores de n\xf3. A descentraliza\xe7\xe3o \xe9 garantida pelo design.
    `,de:`
      Da osETH ein Spiegelbild der ETH auf dem gesamten StakeWise-Marktplatz ist, 
      er erwirtschaftet Ertr\xe4ge aus einem sehr vielf\xe4ltigen Satz von Knotenoperatoren. Die Dezentralisierung wird durch das Design sichergestellt.
    `,zh:`
      因为osETH反映了整个StakeWise市场上的ETH ， 
      它从高度多样化的节点运营商中获得收益。 通过设计确保去中心化。
    `}},tS=a(29989),ty=a.n(tS),tj=n.memo(e=>{let{className:t}=e,{isMobile:a}=d.Z.useData(),[s,i]=(0,ex.XI)(),[m,p]=(0,n.useState)(!1),f=(0,n.useCallback)(()=>{m||v.h.sendEvent("clickLearnMoreBtn",{type:o.ChainsBanner}),p(!m)},[m]),h="landing-chains-card";return(0,r.jsx)(tt,{isFlipped:m,children:(0,r.jsxs)("div",{className:l()(t,ty().container,"relative flex flex-col rounded-16 shadow-coal bg-sun mt-20",{"pt-48 p-32":!a}),children:[(0,r.jsxs)(tt.FrontCard,{isFlipped:m,dataTestId:`${h}-front-side`,children:[(0,r.jsxs)("div",{className:"flex flex-col",ref:s,children:[!a&&(0,r.jsx)(c.UZ,{className:l()(ty().chainBg,"rounded-16 absolute right-0 top-0"),src:"./video/chain.mp4",isStarted:i}),(0,r.jsx)(c.xv,{className:l()("relative",{"pt-48 px-24":a,"mt-24":!a}),size:a?"h40":"h48",color:"coal",message:tw.poweredByADecentralized,html:!0}),(0,r.jsx)(c.xv,{className:l()("opacity-60 mt-48 relative",{"px-24":a,[ty().halfWidthText]:!a}),size:a?"t18b":"h20",color:"coal",message:tw.osEthIsBacked}),a&&(0,r.jsx)(c.UZ,{className:"mt-32",src:"./video/mobile-chain.mp4",isStarted:i})]}),(0,r.jsx)(tt.ToggleButton,{className:l()({"pb-32 pr-32":a}),children:(0,r.jsx)(c.zx,{size:"sl",rounded:!0,bordered:!0,bgColor:"coal",title:g.Z.buttonTitle.learnMore,dataTestId:`${h}-learn-more-button`,onClick:f})})]}),(0,r.jsxs)(tt.BackCard,{className:l()(ty().backCard),isFlipped:m,dataTestId:`${h}-back-side`,children:[(0,r.jsxs)("div",{className:l()("flex flex-col justify-center",{"pt-32 px-32":a,[ty().halfWidthText]:!a}),children:[(0,r.jsx)(c.xv,{size:"h20",color:"coal",message:tw.osEthPowered}),(0,r.jsx)(c.xv,{className:"opacity-60 mt-36",size:"t16m",color:"coal",message:tw.osEthEcosystem}),(0,r.jsx)(c.xv,{className:"opacity-60 mt-24",size:"t16m",color:"coal",message:tw.becauseOsEth})]}),!a&&(0,r.jsx)(u.default,{className:ty().phone,width:220,height:445,src:"/images/phone.png",alt:"phone"}),(0,r.jsx)(tt.ToggleButton,{className:l()({"p-32":a,"pl-96":!a}),children:(0,r.jsx)(c.zx,{size:"sl",rounded:!0,bordered:!0,bgColor:"coal",title:g.Z.buttonTitle.close,dataTestId:`${h}-close-button`,onClick:f})})]})]})})}),tz={en:"stake with oseth token",ru:"ставка с токеном oseth",fr:"piquet avec jeton oseth",es:"estaca con ficha de oseth",pt:"aposta com token oseth",de:"pfahl mit Oseth-Token",zh:"质押oseth代币"},tH={en:"Simple & secure <br> staking.",ru:"Простой",fr:"Simple",es:"Simple",pt:"Simples",de:"Einfach",zh:"简单"},tN=n.memo(e=>{let{className:t}=e,{isMobile:a}=d.Z.useData();return(0,r.jsxs)("section",{className:l()(t,"pt-96"),"data-testid":"landing-stake-with-oseth-section",id:"osETH",children:[(0,r.jsx)(ej,{icon:"icon/lock",title:tz}),(0,r.jsx)("div",{className:"mt-24",children:(0,r.jsx)(c.xv,{size:a?"h32":"h48",color:"coal",message:tH,html:!0})}),(0,r.jsxs)("div",{className:"flex flex-col mt-48",children:[(0,r.jsx)(t_,{}),(0,r.jsxs)("div",{className:l()("flex gap-20 mt-20",{"flex-col":a}),children:[(0,r.jsx)(tv,{}),(0,r.jsx)(tC,{})]}),(0,r.jsx)(tj,{})]})]})}),tq=n.memo(()=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(ey,{className:"mainWrapper"}),(0,r.jsx)(eQ,{className:"mainWrapper"}),(0,r.jsx)(b,{className:"mainWrapper"}),(0,r.jsx)(tN,{className:"mainWrapper"}),(0,r.jsx)(tm,{className:"mainWrapper"}),(0,r.jsx)(eO,{}),(0,r.jsx)(eX,{className:"mainWrapper"}),(0,r.jsx)(S,{className:"mainWrapper"})]}))},82827:function(e){e.exports={"rotate-360":"Carousel_rotate-360__7ocHa",rotate360:"Carousel_rotate360__r6HMB",slider:"Carousel_slider__PNuJi",sliderTrack:"Carousel_sliderTrack__cUnpC",scroll:"Carousel_scroll__eDxD9","top-bottom":"Carousel_top-bottom__dFUj_","top-bottom-offset-left":"Carousel_top-bottom-offset-left__fSEmm","bottom-top":"Carousel_bottom-top__bJCaR","bottom-top-offset-left":"Carousel_bottom-top-offset-left__ZfAJV","right-left":"Carousel_right-left__RYwDe","left-right":"Carousel_left-right__9oGzL","fade-in":"Carousel_fade-in__qO0vz","scale-up":"Carousel_scale-up__UlrbP","show-content-from-top":"Carousel_show-content-from-top__cofrR","show-content-from-bottom":"Carousel_show-content-from-bottom__dJIYl","fade-in-and-scale":"Carousel_fade-in-and-scale__dpLZ3","fade-out-and-reduce":"Carousel_fade-out-and-reduce__e5puV"}},34096:function(e){e.exports={"rotate-360":"FlipCard_rotate-360__ap3dP",rotate360:"FlipCard_rotate360__dhINC",flipCard:"FlipCard_flipCard__suHih",flipCardInner:"FlipCard_flipCardInner__yP0Ry",flipped:"FlipCard_flipped__GFn7g",flipCardFront:"FlipCard_flipCardFront__JsP9u",flipCardBack:"FlipCard_flipCardBack__4OUhB",animated:"FlipCard_animated__Y5bs7","top-bottom":"FlipCard_top-bottom__LejQs","top-bottom-offset-left":"FlipCard_top-bottom-offset-left__iB8cn","bottom-top":"FlipCard_bottom-top__2vVIu","bottom-top-offset-left":"FlipCard_bottom-top-offset-left__Kb2FY","right-left":"FlipCard_right-left__NMc6O","left-right":"FlipCard_left-right__fHqda","fade-in":"FlipCard_fade-in__WvA3b","scale-up":"FlipCard_scale-up__fMhLs","show-content-from-top":"FlipCard_show-content-from-top__4RBv2","show-content-from-bottom":"FlipCard_show-content-from-bottom__qERhK","fade-in-and-scale":"FlipCard_fade-in-and-scale__LuSpN","fade-out-and-reduce":"FlipCard_fade-out-and-reduce__d3atg"}},12117:function(e){e.exports={"rotate-360":"SmallCard_rotate-360__l2NdW",rotate360:"SmallCard_rotate360__oQydy",container:"SmallCard_container__icGNW",coal:"SmallCard_coal__U8W9z",sun:"SmallCard_sun__5Cwzz",fancy:"SmallCard_fancy__P5GXW","top-bottom":"SmallCard_top-bottom__Ja33j","top-bottom-offset-left":"SmallCard_top-bottom-offset-left__F5n6W","bottom-top":"SmallCard_bottom-top__Fgm3M","bottom-top-offset-left":"SmallCard_bottom-top-offset-left__fv77g","right-left":"SmallCard_right-left__dVwDs","left-right":"SmallCard_left-right__0_abb","fade-in":"SmallCard_fade-in__A7uZg","scale-up":"SmallCard_scale-up___B9Hc","show-content-from-top":"SmallCard_show-content-from-top__LN46Z","show-content-from-bottom":"SmallCard_show-content-from-bottom__WnMQ7","fade-in-and-scale":"SmallCard_fade-in-and-scale__y7Drq","fade-out-and-reduce":"SmallCard_fade-out-and-reduce__153vl"}},19240:function(e){e.exports={"rotate-360":"SecurityAudits_rotate-360__ncZOq",rotate360:"SecurityAudits_rotate360__P8pQe",card:"SecurityAudits_card__2D29S","top-bottom":"SecurityAudits_top-bottom__Y98eV","top-bottom-offset-left":"SecurityAudits_top-bottom-offset-left__FxJ0W","bottom-top":"SecurityAudits_bottom-top__SeCF5","bottom-top-offset-left":"SecurityAudits_bottom-top-offset-left__GCSLG","right-left":"SecurityAudits_right-left__kaZKw","left-right":"SecurityAudits_left-right__mmJiP","fade-in":"SecurityAudits_fade-in__opeYH","scale-up":"SecurityAudits_scale-up__1stIM","show-content-from-top":"SecurityAudits_show-content-from-top__5Ov7O","show-content-from-bottom":"SecurityAudits_show-content-from-bottom__N2j2k","fade-in-and-scale":"SecurityAudits_fade-in-and-scale__mH88T","fade-out-and-reduce":"SecurityAudits_fade-out-and-reduce__lrSJE"}},29989:function(e){e.exports={"rotate-360":"ChainCard_rotate-360__U5AdW",rotate360:"ChainCard_rotate360__eYDd5",chainBg:"ChainCard_chainBg__WyEiv",halfWidthText:"ChainCard_halfWidthText___lNKN",phone:"ChainCard_phone__SNRBm",container:"ChainCard_container__YgC7k",backCard:"ChainCard_backCard__r6LD_","top-bottom":"ChainCard_top-bottom__vK45R","top-bottom-offset-left":"ChainCard_top-bottom-offset-left__aJsrR","bottom-top":"ChainCard_bottom-top__SRxI9","bottom-top-offset-left":"ChainCard_bottom-top-offset-left__8qxU0","right-left":"ChainCard_right-left__wRfnI","left-right":"ChainCard_left-right__JYIj5","fade-in":"ChainCard_fade-in__e3iyX","scale-up":"ChainCard_scale-up__LgADc","show-content-from-top":"ChainCard_show-content-from-top__sgiZf","show-content-from-bottom":"ChainCard_show-content-from-bottom__QHXSn","fade-in-and-scale":"ChainCard_fade-in-and-scale__eBOIm","fade-out-and-reduce":"ChainCard_fade-out-and-reduce__LFJWH"}},22476:function(e){e.exports={"rotate-360":"EarnCard_rotate-360__0Isuy",rotate360:"EarnCard_rotate360__LO2H9",container:"EarnCard_container__J746A",earningButton:"EarnCard_earningButton__ohtgr",coinsBg:"EarnCard_coinsBg__PSyau","top-bottom":"EarnCard_top-bottom__mcERn","top-bottom-offset-left":"EarnCard_top-bottom-offset-left___0A5g","bottom-top":"EarnCard_bottom-top__77dLM","bottom-top-offset-left":"EarnCard_bottom-top-offset-left__P570u","right-left":"EarnCard_right-left__LKyI7","left-right":"EarnCard_left-right__I1HOB","fade-in":"EarnCard_fade-in__JVhA6","scale-up":"EarnCard_scale-up__T11wZ","show-content-from-top":"EarnCard_show-content-from-top__MdfK4","show-content-from-bottom":"EarnCard_show-content-from-bottom__L9G5B","fade-in-and-scale":"EarnCard_fade-in-and-scale__twnAi","fade-out-and-reduce":"EarnCard_fade-out-and-reduce__7WUpH"}},36544:function(e){e.exports={"rotate-360":"ProtectCard_rotate-360__6EcDZ",rotate360:"ProtectCard_rotate360__c_Gb9",container:"ProtectCard_container__Mr_R3","top-bottom":"ProtectCard_top-bottom__ZFyoV","top-bottom-offset-left":"ProtectCard_top-bottom-offset-left__09nIi","bottom-top":"ProtectCard_bottom-top__M2GXJ","bottom-top-offset-left":"ProtectCard_bottom-top-offset-left__48XR0","right-left":"ProtectCard_right-left__b0uZW","left-right":"ProtectCard_left-right__h3iBY","fade-in":"ProtectCard_fade-in__VghdV","scale-up":"ProtectCard_scale-up__nJ9OH","show-content-from-top":"ProtectCard_show-content-from-top__54_JZ","show-content-from-bottom":"ProtectCard_show-content-from-bottom__zEREj","fade-in-and-scale":"ProtectCard_fade-in-and-scale__Db6lx","fade-out-and-reduce":"ProtectCard_fade-out-and-reduce__65P48"}},17803:function(e){e.exports={"rotate-360":"TimerCard_rotate-360__j4_OD",rotate360:"TimerCard_rotate360__1zpsX",fancySummerBg:"TimerCard_fancySummerBg__kCSIl",timerBg:"TimerCard_timerBg__Snyz7","top-bottom":"TimerCard_top-bottom__64Hqh","top-bottom-offset-left":"TimerCard_top-bottom-offset-left___BfNc","bottom-top":"TimerCard_bottom-top__Jd_Bf","bottom-top-offset-left":"TimerCard_bottom-top-offset-left__xw8g9","right-left":"TimerCard_right-left__qYpvG","left-right":"TimerCard_left-right__ttNPg","fade-in":"TimerCard_fade-in__GnBti","scale-up":"TimerCard_scale-up__Ki1CS","show-content-from-top":"TimerCard_show-content-from-top__TAXHf","show-content-from-bottom":"TimerCard_show-content-from-bottom__7ZtSs","fade-in-and-scale":"TimerCard_fade-in-and-scale__V_Vv1","fade-out-and-reduce":"TimerCard_fade-out-and-reduce__XnPu6"}},66479:function(e){e.exports={"rotate-360":"ArrowCard_rotate-360__cJU0f",rotate360:"ArrowCard_rotate360__TW4MB",arrowBg:"ArrowCard_arrowBg__8zkQl","top-bottom":"ArrowCard_top-bottom___LW_3","top-bottom-offset-left":"ArrowCard_top-bottom-offset-left__5yVf3","bottom-top":"ArrowCard_bottom-top__5LFLn","bottom-top-offset-left":"ArrowCard_bottom-top-offset-left__CWZLD","right-left":"ArrowCard_right-left__lpXvi","left-right":"ArrowCard_left-right__HlHRe","fade-in":"ArrowCard_fade-in__xTAhB","scale-up":"ArrowCard_scale-up__hdmir","show-content-from-top":"ArrowCard_show-content-from-top__GM1se","show-content-from-bottom":"ArrowCard_show-content-from-bottom__ob3TR","fade-in-and-scale":"ArrowCard_fade-in-and-scale__Ec_uI","fade-out-and-reduce":"ArrowCard_fade-out-and-reduce__ZnRj9"}},35186:function(e){e.exports={"rotate-360":"ControlCard_rotate-360__7zrbF",rotate360:"ControlCard_rotate360__lvr_b",container:"ControlCard_container__7011Y",controlBg:"ControlCard_controlBg__8RJ_V","top-bottom":"ControlCard_top-bottom__H7GGs","top-bottom-offset-left":"ControlCard_top-bottom-offset-left__2HIxG","bottom-top":"ControlCard_bottom-top__Bk0EL","bottom-top-offset-left":"ControlCard_bottom-top-offset-left__Tj9K8","right-left":"ControlCard_right-left__9HPF7","left-right":"ControlCard_left-right__878gc","fade-in":"ControlCard_fade-in__ZtMk_","scale-up":"ControlCard_scale-up__Vk0lJ","show-content-from-top":"ControlCard_show-content-from-top__wTzzP","show-content-from-bottom":"ControlCard_show-content-from-bottom__Tj6zZ","fade-in-and-scale":"ControlCard_fade-in-and-scale__2w37B","fade-out-and-reduce":"ControlCard_fade-out-and-reduce__KLKR0"}},86905:function(e){e.exports={"rotate-360":"SoloCard_rotate-360__Q_YG_",rotate360:"SoloCard_rotate360__znMr9",container:"SoloCard_container__O_K6C",circles:"SoloCard_circles__fJxCe","top-bottom":"SoloCard_top-bottom__4lX6G","top-bottom-offset-left":"SoloCard_top-bottom-offset-left__vIbFi","bottom-top":"SoloCard_bottom-top__IXNJb","bottom-top-offset-left":"SoloCard_bottom-top-offset-left__Hudep","right-left":"SoloCard_right-left__2yYE9","left-right":"SoloCard_left-right__fkptR","fade-in":"SoloCard_fade-in__lVWPm","scale-up":"SoloCard_scale-up__dAHKc","show-content-from-top":"SoloCard_show-content-from-top__lJ8OX","show-content-from-bottom":"SoloCard_show-content-from-bottom__xKK3t","fade-in-and-scale":"SoloCard_fade-in-and-scale__Ict3m","fade-out-and-reduce":"SoloCard_fade-out-and-reduce____8O6"}},67009:function(e){e.exports={"rotate-360":"StakeWithPools_rotate-360___0q92",rotate360:"StakeWithPools_rotate360__nqI6Q",wrapper:"StakeWithPools_wrapper__mB2Q_","top-bottom":"StakeWithPools_top-bottom__f99LR","top-bottom-offset-left":"StakeWithPools_top-bottom-offset-left__VUa39","bottom-top":"StakeWithPools_bottom-top__62vNg","bottom-top-offset-left":"StakeWithPools_bottom-top-offset-left__e7gKR","right-left":"StakeWithPools_right-left__ve08Q","left-right":"StakeWithPools_left-right__rXePc","fade-in":"StakeWithPools_fade-in__cH5a9","scale-up":"StakeWithPools_scale-up__PRBHB","show-content-from-top":"StakeWithPools_show-content-from-top__IN1MH","show-content-from-bottom":"StakeWithPools_show-content-from-bottom__bii0e","fade-in-and-scale":"StakeWithPools_fade-in-and-scale__k7dT8","fade-out-and-reduce":"StakeWithPools_fade-out-and-reduce__qZvbG"}},70857:function(e){e.exports={"rotate-360":"DollarCard_rotate-360__daQXL",rotate360:"DollarCard_rotate360__Yb9QO",dollarContainer:"DollarCard_dollarContainer__8KtIe","top-bottom":"DollarCard_top-bottom__dD9uv","top-bottom-offset-left":"DollarCard_top-bottom-offset-left__V9nRj","bottom-top":"DollarCard_bottom-top__m7to8","bottom-top-offset-left":"DollarCard_bottom-top-offset-left__zk3Op","right-left":"DollarCard_right-left__zMjd9","left-right":"DollarCard_left-right__ilfhk","fade-in":"DollarCard_fade-in__AjCkK","scale-up":"DollarCard_scale-up__Y5vZZ","show-content-from-top":"DollarCard_show-content-from-top__a8c_A","show-content-from-bottom":"DollarCard_show-content-from-bottom__xn4Hb","fade-in-and-scale":"DollarCard_fade-in-and-scale__GK252","fade-out-and-reduce":"DollarCard_fade-out-and-reduce__t4Bdt"}},57217:function(e){e.exports={"rotate-360":"LiquidCard_rotate-360__bNU13",rotate360:"LiquidCard_rotate360__KfKEO",container:"LiquidCard_container__ozowk",waterGlassBg:"LiquidCard_waterGlassBg__94HKx","top-bottom":"LiquidCard_top-bottom__b7k_5","top-bottom-offset-left":"LiquidCard_top-bottom-offset-left__DAsH4","bottom-top":"LiquidCard_bottom-top__lcrG2","bottom-top-offset-left":"LiquidCard_bottom-top-offset-left__YcqDD","right-left":"LiquidCard_right-left__Je0Fa","left-right":"LiquidCard_left-right__BUQu_","fade-in":"LiquidCard_fade-in___XQOM","scale-up":"LiquidCard_scale-up__67V_O","show-content-from-top":"LiquidCard_show-content-from-top__In5UH","show-content-from-bottom":"LiquidCard_show-content-from-bottom__9iX0w","fade-in-and-scale":"LiquidCard_fade-in-and-scale__bYV7l","fade-out-and-reduce":"LiquidCard_fade-out-and-reduce__DpWXz"}},94215:function(e){e.exports={"rotate-360":"VaultsCard_rotate-360__CS0i1",rotate360:"VaultsCard_rotate360__Ak2ju",vaultBg:"VaultsCard_vaultBg__imBYi","top-bottom":"VaultsCard_top-bottom__W6qeH","top-bottom-offset-left":"VaultsCard_top-bottom-offset-left__ae_xE","bottom-top":"VaultsCard_bottom-top__2LC9y","bottom-top-offset-left":"VaultsCard_bottom-top-offset-left___HmSj","right-left":"VaultsCard_right-left__tRf_E","left-right":"VaultsCard_left-right__dZvzH","fade-in":"VaultsCard_fade-in__VOhme","scale-up":"VaultsCard_scale-up__PozQD","show-content-from-top":"VaultsCard_show-content-from-top__ZA819","show-content-from-bottom":"VaultsCard_show-content-from-bottom__ZSAV6","fade-in-and-scale":"VaultsCard_fade-in-and-scale__9jLtV","fade-out-and-reduce":"VaultsCard_fade-out-and-reduce__rBlSV"}},93057:function(e){e.exports={"rotate-360":"RewardsStats_rotate-360__KdzeX",rotate360:"RewardsStats_rotate360__u6hta",container:"RewardsStats_container__ZAPBG","top-bottom":"RewardsStats_top-bottom__sqkEu","top-bottom-offset-left":"RewardsStats_top-bottom-offset-left__Nv5vR","bottom-top":"RewardsStats_bottom-top__RTA2e","bottom-top-offset-left":"RewardsStats_bottom-top-offset-left__kyq6l","right-left":"RewardsStats_right-left__flwxs","left-right":"RewardsStats_left-right__btRD_","fade-in":"RewardsStats_fade-in__8Dw0t","scale-up":"RewardsStats_scale-up__2yQHi","show-content-from-top":"RewardsStats_show-content-from-top__bo_MW","show-content-from-bottom":"RewardsStats_show-content-from-bottom__Dj127","fade-in-and-scale":"RewardsStats_fade-in-and-scale__SN82E","fade-out-and-reduce":"RewardsStats_fade-out-and-reduce__MmuMu"}},41498:function(e){e.exports={"rotate-360":"StakeWidget_rotate-360__tbn_N",rotate360:"StakeWidget_rotate360__UWSYY",container:"StakeWidget_container__X8fWe","fade-in":"StakeWidget_fade-in__9kj3p",content:"StakeWidget_content__mpfNw","top-bottom":"StakeWidget_top-bottom__DE_bL","top-bottom-offset-left":"StakeWidget_top-bottom-offset-left__EsYGd","bottom-top":"StakeWidget_bottom-top__sMkF9","bottom-top-offset-left":"StakeWidget_bottom-top-offset-left__YGs6g","right-left":"StakeWidget_right-left__BRGO0","left-right":"StakeWidget_left-right__d_yL_","scale-up":"StakeWidget_scale-up__B5YzN","show-content-from-top":"StakeWidget_show-content-from-top__UNMD3","show-content-from-bottom":"StakeWidget_show-content-from-bottom__Qqw2B","fade-in-and-scale":"StakeWidget_fade-in-and-scale__DN20t","fade-out-and-reduce":"StakeWidget_fade-out-and-reduce__1WwPF"}}},function(e){e.O(0,[709,533,705,267,880,969,293,722,744],function(){return e(e.s=12030)}),_N_E=e.O()}]);