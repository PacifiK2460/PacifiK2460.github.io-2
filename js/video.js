var CL = [];
$("*").each(function() {
    if (this.class) {
        CL.push(this.class);
    }
});
var ID = [];
$("*").each(function() {
    if (this.id) {
        ID.push(this.id);
    }
});

console.log(CL)
console.log(ID)