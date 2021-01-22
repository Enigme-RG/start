message = String.raw`Sm/*m_jz1~ glv0}z_⌂k!}ncm{;ooy{z+zzlhx%n m'l!*gyhl)sicz|.kocvv;yin'n|soyx}!*^_y||si_z(%xaiyu|~diu(/⌂mysi;ndmwi.socvv;n ys($snnvz%oihl(2ypm'u|xlolv06zpv}/*iyh~!%z[|k1x ypv"ymgh|%yiyz}.*g['~%moctm;zjoy(~og['i(v t'~+smyh((*\]j}!sgypt/*_ip~!xoyh~+smy|v!*gcz|!*__z(,ommvv*onyh}0ymczm/*\yym*~m_y(⌂kim't!*gsjm!6zfl(*yhykm;v\y}q~~dgl(⌂ydn'{;$znyw1! l(`



function ord(chaine){
    return chaine.charCodeAt(0)
}
function chr(number){
    return String.fromCharCode(number)
}

function crypt(chaine, key){
    var output = ""
    var key_place = 0
    for(var i=0; i<chaine.length; i++){
        output += chr( ( ( ord(chaine[i]) + ord(key[key_place]) ) % 95) + 33 )
        key_place = (++key_place)%key.length
    }
    return replaceall(output, "`", " ")
}

function decrypt(chaine, key){
    var output = ""
    var key_place = 0

    var chaine = replaceall(chaine, " ", "`")

    for(var i=0; i<chaine.length; i++){
        if(( (ord(chaine[i]) - ord(key[key_place]) + 124) % 95) + 33 == 127){
            output += " "
        }else{
            output += chr( ( (ord(chaine[i]) - ord(key[key_place]) + 124) % 95) + 33 )
        }
        key_place = (++key_place)%key.length
    }
    return output
}
function add_some(chaine){
    var output = 0
    for(var i=0; i<chaine.length; i++){
        output += ord(chaine[i])
    }
    return output
}

function myFunction(){

    var saisie = document.getElementById("input").value;

    if(saisie){
        if(add_some(saisie) == 413){
            document.getElementById("p1").style.color = "#E5BB6F"
            document.getElementById("p1").innerHTML = decrypt(message, saisie)
        }else{
            document.getElementById("p1").style.color = "red"
            document.getElementById("p1").innerHTML = "Mauvais code veuillez réessayer"
        }
    }
}



function replaceall(chaine, chars, replacechar){
    output = ""
    for(var i=0; i<chaine.length; i++){
        if(ord(chaine[i]) == ord(chars)){
            output+=replacechar
        }else{
            output+=chaine[i]
        }
    }
    return output
}

