var appel = String.raw`HbWfwXXfGlvFXsdXWfkKewNWvVXgfrFrYF aUe Qa⌂qiQhkaXlGevFbbUrTX[WfwG vVTbfrSh]aW]VWZV\jW!ai]W\dNWqaacgfaXfXbqGdvNXsUbFXwSh]ahfWfsSiGmwTX[WqgCes_XUfYIXwUgia_UqcCZ]aW]ad\EeifXOXfV`

var message = String.raw`5bFXw{r=(K?z+`

function press_button(x){
    
    var content = document.getElementById("numero-tel").innerHTML
    
    if(content.length < 14 && x!=-1){
        if(content[0] == "-"){ 
            document.getElementById("numero-tel").innerHTML = `${x}`
        }else{
            
            numero = `${content}${x}`
            numero = formate_num(numero)
            
            document.getElementById("numero-tel").innerHTML = numero
            
        }
    
    }else if(x==-1){
        
        numero = content.substring(0,content.length-1)
        numero = formate_num(numero)

        document.getElementById("numero-tel").innerHTML = numero
        if(content.length == 1){
            document.getElementById("numero-tel").innerHTML = "-"
        }
    } 
}


function formate_num(chaine){
    chaine = replaceall(chaine, " ", "")
    count = 0
    output = ""
    for(var i = 0 ; i < chaine.length ; i++){
        if(count == 2){
            output += " "
            count = 0
        }
        output += chaine[i]
        count += 1
    }
    return output
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
function ord(chaine){
    return chaine.charCodeAt(0)
}
function chr(number){
    return String.fromCharCode(number)
}


function Call(){
    var content = document.getElementById("numero-tel").innerHTML
    if(content.length == 14){
        if(count_char(content) == 631){
            document.getElementById("reussite").innerHTML = decrypt(appel, content)
            document.getElementById("reussite-2").innerHTML = decrypt(message, content)
            setTimeout(clear_error, 3000)
        }
    }else{
        document.getElementById("call-error").innerHTML = "Erreur veuillez inserer un numéro correcte."
        setTimeout(clear_error, 3000)
    }
}

function clear_error(){
    document.getElementById("call-error").innerHTML = ""
}

function ord(chaine){
    return chaine.charCodeAt(0)
}
function chr(number){
    return String.fromCharCode(number)
}

function count_char(chaine){
    count = 0
    for(var i=0; i<chaine.length; i++){
        count += ord(chaine[i])
    }
    return count
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