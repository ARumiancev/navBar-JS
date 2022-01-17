Užduotis:

// Pridėti prie responsive navigation meniu projekto linkų efektus su hover.+
// Pridėti selected klasę su javascript, tam linkui, kurį paspaudžiate.
// Sutvarkyti, kad paspaudus linką prie mobile dydžio meniu nesusiskliaustų.
// Susiskliaudimas turėtų būti tik paspaudus burger antrą kartą.
// Papildomai: padaryti efektus su :before ir :after.


var anchors = document.getElementsByTagName("a");
var burger = document.getElementById("burger");

burger.addEventListener("click", function(){
    for(var x of anchors){
        x.classList.toggle("block");
    }
    this.classList.toggle("rotateZ");
});

// anchors.addEventListener("click",function(){
//     for (var y of anchors){
//         anchors[y].classList.remove("selected");
//     }
//     this.classList.add("selected.");
// })


for(var y of anchors){
    y.addEventListener("click", function(event){
        event.preventDefault();
      for(var i = 0; i < anchors.length; i++){
          anchors[i].classList.remove("selected");
      }
      this.classList.add("selected");
    });
}