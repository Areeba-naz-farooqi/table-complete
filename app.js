// for(var i=0; i<=10; i++){
//     console.log(i)
// }
var table =+prompt("Enter table number");
 document.write("<h1>Tables</h1>");
var tablelength =+prompt("Enter the length");
for(var i = 1; i<=tablelength; i++){
    console.log(table + "x" + i + "=" + i*table);
    document.write(table + "x" + i + "=" + i*table + "<br>")
}
