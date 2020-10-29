var equa = document.getElementById("equacao")
var join_plus = ""


function insert (number) { 
    
    document.getElementById("equacao").value =  `${join_plus}` + `${number}`
    join_plus = join_plus + number

}

function calcular () {
    var x = 0
    var y = 0
    var array = join_plus.split('')
    var ops = [0..y]
    var join = [0..x]

    for (var i = 0; i <= array.length; i++) {

        if (array[i] >= 0 || array[i] <= 9 || array[i] == '.') {

            if (join[x] != null) {
                join[x] = join[x] + `${array[i]}`
            }
            else {
                join[x] = array[i]
            }
        }

        else {
            x++
            ops[y] = array[i]
            y++
        }

    }

    var resultado = parseFloat(join[0])

    for (var i = 0; i <= join.length; i++) {

        try { 
           if (ops[i] == "+") {
                resultado = resultado + parseFloat(join[i+1])
           }        
           
           else if (ops[i] == "-") {
                resultado = resultado - parseFloat(join[i+1])
           }
           
           else if (ops[i] == "/") {
            resultado = resultado / parseFloat(join[i+1])
           }

           else if (ops[i] == "x") {
            resultado = resultado * parseFloat(join[i+1])
           }

        }
        catch{
            document.getElementById("equacao").value = 'ERROR'
        }

    }
    console.log(resultado)
    document.getElementById("equacao").value = resultado
    join_plus = resultado

}

function limpar () {
    document.getElementById("equacao").value = ""
    join_plus = ""
}