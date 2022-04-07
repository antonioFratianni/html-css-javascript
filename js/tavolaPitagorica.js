function construct(){
    let base = 10;
    let A = new Array();
    for (i=0; i<base; i++) {
    A[i]=i+1;
    }
    let B = A;
    document.write('<p><table class="Tab">');
    document.write('<tr><td class ="Op">*</td>')
    for (i=0; i<B.length; i++) {
    document.write('<td class="Tab">'+B[i]+'</td>')
    }
    document.write('</tr>')
    for (i=0; i<A.length; i++) {
        document.write('<tr><td class="Tab">'+ A[i]);
        for (j=0; j<B.length; j++) {
        document.write('<td class="Tab">')
          document.write(A[i]*B[j]);
        document.write('</td>')
     }
     document.write('</tr>')
     }
    document.write('</table></p>');
    document.close()
}