with(document){
bo=['bo.jpg','bo2.jpg','bo3.jpg','bo4.jpg','bo5.jpg','bo6.jpg','bo7.jpg','bo8.jpg','bo9.jpg','bo10.jpg','bo11.jpg','bo12.jpg','bo13.jpg','bo14.jpg','bo15.jpg','bo16.jpg','bo17.jpg','bo18.jpg','bo19.jpg','bo20.jpg','bo21.jpg','bo22.jpg','bo23.jpg','bo24.jpg','bo25.jpg','bo26.jpg']
for (i=0; i<bo.length; i++) {
    scp.innerHTML+='<div class="ms f"><div class=nt>'+(i+1)+'</div> <img src='+bo[i]+' width=100%> <div class=text>Bơ Bủm Bỉm '+(i+1)+'</div></div>'
    csd.innerHTML+='<span class=d onclick=cs('+(i+1)+')></span> '
}
function o(evt, page) {
    tabcontent = getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) tabcontent[i].style.display = "none"
    tablinks = getElementsByClassName("tablinks")
    for (i = 0; i < tablinks.length; i++) tablinks[i].className = tablinks[i].className.replace(" active", "")
    page.style.display = "block";
    evt.currentTarget.className += " active";
}
j = 1; s(j); function p(n) {s(j += n)}; function cs(n) {s(j = n)}
function s(n) {
  m=getElementsByClassName('ms'); d=getElementsByClassName('d'); if (n > m.length) j = 1; if (n < 1) j = m.length
  for (i = 0; i < m.length; i++) m[i].style.display = "none"
  for (i = 0; i < d.length; i++) d[i].className = d[i].className.replace(" z", "")
  m[j-1].style.display = "block"
  d[j-1].className += " z"}
defaultOpen.click()
acc = getElementsByClassName("accordion");
for (i = 0; i < acc.length; i++)
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let panel = this.nextElementSibling.style;
        if (panel.display === "block") panel.display = "none"; else panel.display = "block"
    })
function openNav() {
    mySidenav.style.width = "250px"; main.style.marginLeft = "250px";
    body.style.backgroundColor = 'rgba(0,0,0,.4)'
}
function closeNav() {
    mySidenav.style.width = 0; main.style.marginLeft= 0;
    body.style.backgroundColor = "white";
}
with (Math) {
countDownDate = new Date("Jan 1, 2028").getTime();
x = setInterval(function() {
    let now = new Date().getTime(); let distance = countDownDate - now; let months=floor(distance/(3600*24e3*28))
    let weeks=floor(distance/(3600*24e3*7)); let y=floor(distance/(3600*24e3*28*12))
    let days = floor(distance / (3600*24e3)); let hours = floor((distance % (3600*24e3)) / 36e5);
    let minutes = floor((distance % 36e5) / 6e4); let seconds = floor((distance % 6e4) / 1e3)
    mytime.innerHTML ='About '+y+' years or '+months+' months or '+weeks+' weeks; Exactly is '+ days + " days " + hours + " hours "+
        minutes + " minutes " + seconds + " seconds "
}, 1000)
birthday=new Date('May 22, 2018 20:15').getTime()
setInterval(function(){
    let n=new Date().getTime(); let d=n-birthday; let mo=round(d/(3600*24e3*28)); let w=floor(d/(3600*24e3*7))
    let da=floor(d/(3600*24e3)); let h=floor((d%(3600*24e3))/36e5)
    let m=floor((d%36e5)/6e4); let s=floor((d%6e4)/1e3)
    yearsold.innerHTML='About '+mo+' months or '+w+' weeks; Exactly is '+da+' days '+h+' hours '+m+' minutes '+s+' seconds'
}, 1000)}
lap=0; chu=0; anh=0
dec=vba.getElementsByTagName('img')
bcn=cn.getElementsByTagName('img')
anbot=anbo.getElementsByTagName('img')
}
name='Vũ Bảo An 武保安'; count=0
window.onload=function nhay() {
    let n=name.substring(count, name.length); let o=name.substring(0, count)
    namea.firstChild.nodeValue=n+' '+o; nameb.firstChild.nodeValue=o; namec.firstChild.nodeValue=n; count++
    if (count>name.length) count=0
    if (chu<4) {
        bcn[chu].style.display='none'; bcn[chu+1].style.display='block'
    }
    else {
        bcn[chu].style.display='none'; bcn[chu-4].style.display='block'
    }
    if (anh<2) {
    	anbot[anh].style.display='none'; anbot[anh+1].style.display='block'
    }
    else {
    	anbot[anh].style.display='none'; anbot[anh-2].style.display='block'
    }
	if (lap<2) {
		dec[lap].style.border=''; dec[lap+1].style.border='solid'
	}
	else {
		dec[lap].style.border=''; dec[lap-2].style.border='solid'
	}
	lap++; chu++; anh++
	if (lap>2) lap=0; if (chu>4) chu=0; if (anh>anbot.length-1) anh=0
	setTimeout(nhay,1000)
}