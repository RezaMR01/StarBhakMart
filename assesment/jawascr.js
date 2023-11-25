var cart = [];

function addtocart(name,count,price){
    var existingItem = cart.find(element => element.name === name);
    if (!existingItem) {
        cart.push({ name: name, count: count, price: price});
    }
    else {
        existingItem.count ++;
    }
    console.log("a")
    showcartlist()
}

function removefromcart(index){
    cart.splice(index, 1);
    showcartlist();
}

function showcartlist() {
    $(".sidebar").empty();
    console.log("p");
    cart.forEach(
        function (cart, index) {
            var quantity = cart.price * cart.count;
            $(".sidebar").append(`
            <div class="item">
                <div style="display: flex; height: 20px;">
                    <p class="namaitm" style="display: flex;">`+cart.name+`
                        <h3 style="margin-left: 110px; margin-top: -1px; font-size: medium;">Rp.`+quantity+`</h3>
                    </p>
                </div>
                <div style="display: flex;">
                    <p style="font-size: small; margin-bottom: 0;" >Unit Price: 
                        <p style="margin-bottom: 0; margin-left: 8px; margin-top: 10px; "><b>Rp.`+cart.price+`</b></p>
                    </p>
                    <p style="margin-bottom: 0%; margin-top: 10px; margin-left: 8px;">Quantity: </p>
                    <p style="margin-bottom: 0%; margin-top: 10px; margin-left: 8px; text-align: right; width: 30px;">`+cart.count+`</p>
                </div>
                <div class="del" onclick="removefromcart(`+index+`)">
                    <img src="img/delete.png" style="width: 30px; height: 30px; float: right;" onclick="    ">
                </div>
            </div>
            `)
        }
    )
    var total = 0;
    for (let i = 0; i < cart.length; i++) {
        total = total + (cart[i].count * cart[i].price)
    }
    var tax = total * 0.1;
    var aftertax = total +tax;

    $("#textax").text("Rp. "+tax);
    $("#harga").text("Rp."+aftertax);
    console.log(cart);
}