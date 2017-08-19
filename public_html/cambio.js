function converter() {
    var de = document.getElementById('de').value;
    var para = document.getElementById('para').value;
    var valor = parseFloat(document.getElementById('valor').value);

    if (valor === "NaN") {
        alert("Valor inválido");

    } else {
        var usd = 1;
        var brl = 3.89209554;
        var gbp = 0.654086405;
        var eur = 0.878059489;

        var temp;

        if (de === "BRL") {
            temp = valor / brl;
        } else if (de === "USD") {
            temp = valor / usd;
        } else if (de === "GBP") {
            temp = valor / gbp;
        } else if (de === "EUR") {
            temp = valor / eur;
        }
        
        var final;
        
        if (para === "BRL") {
            final = temp * brl;
        } else if (para === "USD") {
            final = temp * usd;
        } else if (para === "GBP") {
            final = temp * gbp;
        } else if (para === "EUR") {
            final = temp * eur;
        }
        document.getElementById('resp').textContent = final;
    }





}

