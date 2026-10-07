/* SUN MC: edit these if your details change */
var DC="https://discord.gg/KNPfUsSNhY",CUR="\u20b9",RK={sun:["Sun",69],sunplus:["Sun +",129],star:["Star",199]};
window.SUNMC_BUILD="1007-957ce08f";try{console.info("SUN MC build 1007-957ce08f")}catch(x){}
(function(){
var $=function(i){return document.getElementById(i)},T=$("toast"),tm,W=document.querySelector(".wipe"),RM=window.matchMedia&&matchMedia("(prefers-reduced-motion:reduce)").matches;
function toast(t){T.textContent=t;T.classList.add("on");clearTimeout(tm);tm=setTimeout(function(){T.classList.remove("on")},2200)}
/* COPY: 1) legacy copy inside the click, 2) Clipboard API, 3) text stays visible + selected so you can copy by hand */
function legacy(t){var ok=false,a=document.createElement("textarea");a.value=t;a.setAttribute("readonly","");a.style.cssText="position:fixed;top:0;left:0;width:1px;height:1px;padding:0;border:0;opacity:0;font-size:16px";document.body.appendChild(a);a.focus({preventScroll:true});a.select();try{a.setSelectionRange(0,t.length)}catch(x){}try{ok=document.execCommand("copy")}catch(x){}a.remove();return ok}
function copy(t,cb){var done=false;function fin(v){if(done)return;done=true;cb(v)}
var viaApi=navigator.clipboard&&navigator.clipboard.writeText&&window.isSecureContext;
if(legacy(t)){fin(true);return}
if(viaApi){navigator.clipboard.writeText(t).then(function(){fin(true)},function(){fin(false)});setTimeout(function(){fin(false)},1500)}else fin(false)}
function pick(el){try{var r=document.createRange();r.selectNodeContents(el);var s=getSelection();s.removeAllRanges();s.addRange(r)}catch(x){}}
document.addEventListener("click",function(e){var c=e.target.closest("[data-copy]");if(c){var v=c.getAttribute("data-copy");copy(v,function(ok){toast(ok?"Copied: "+v:"Copy blocked by your browser. Long-press the address to copy it.")});return}
var b=e.target.closest("[data-buy]"),s=$("o-rank");if(b&&s)s.value=b.getAttribute("data-buy");
if(e.target.closest(".nl a")){var n=$("nt");if(n)n.checked=false}});
var s=$("o-rank");if(s){var q=new URLSearchParams(location.search).get("rank");if(q&&RK[q])s.value=q}
var go=$("o-go"),again=$("o-again"),last="";
function flash(btn,txt){var o=btn.getAttribute("data-t")||btn.textContent;btn.setAttribute("data-t",o);btn.textContent=txt;btn.classList.add("ok");setTimeout(function(){btn.textContent=o;btn.classList.remove("ok")},1800)}
if(go)go.addEventListener("click",function(){var r=RK[$("o-rank").value],u=$("o-mc").value.trim(),m=$("o-msg");m.hidden=false;m.className="msg";
if(!u){m.textContent="Enter your Minecraft username.";$("o-mc").focus();return}
last="SUN MC rank order\nRank: "+r[0]+"\nPrice: "+CUR+r[1]+"\nMinecraft: "+u;
$("o-txt").textContent=last;$("o-prev").hidden=false;
copy(last,function(ok){pick($("o-txt"));if(ok){m.className="msg ok";m.textContent="Order copied. Paste it in a ticket on our Discord to finish payment.";flash(go,"Copied \u2713")}else{m.textContent="Your browser blocked auto copy. The order is selected below: press Copy (or Ctrl+C), then open Discord."}})});
if(again)again.addEventListener("click",function(){if(!last)return;copy(last,function(ok){pick($("o-txt"));if(ok){flash(again,"Copied \u2713");toast("Order copied")}else toast("Press Ctrl+C / long-press to copy the selected text")})});
/* page transitions */
document.addEventListener("click",function(e){if(!W||RM||e.defaultPrevented||e.button||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;var a=e.target.closest("a[href]");if(!a||(a.target&&a.target!=="_self")||a.hasAttribute("download"))return;var u;try{u=new URL(a.href,location.href)}catch(x){return}
if(u.origin!==location.origin||!/^(https?|file):$/.test(u.protocol))return;if(u.pathname===location.pathname&&u.search===location.search)return;
e.preventDefault();W.classList.add("go");setTimeout(function(){location.href=a.href},650)});
addEventListener("pageshow",function(e){if(e.persisted&&W)W.classList.remove("go")});
document.addEventListener("pointermove",function(e){var c=e.target.closest&&e.target.closest(".fc,.rc,.st");if(!c)return;var r=c.getBoundingClientRect();c.style.setProperty("--mx",e.clientX-r.left+"px");c.style.setProperty("--my",e.clientY-r.top+"px")},{passive:true});
})();
