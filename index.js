function check_words(e){
    var max_words=50;
    var words=this.value.split(' ');
    if(words.length > max_words)
    {
        window.alert("exceeds word limit(word limit = 50 words), please rewrite");
        e.preventDefault();
    }
}
var texta=document.getElementById("fruitdesc");
texta.addEventListener("keydown",check_words);
texta.addEventListener("keyup",check_words);
var db = firebase.firestore();
    function storeData()
    {
    var fname=document.getElementById("fruitname").value;
    var url=document.getElementById("fruiturl").value;
    var description =document.getElementById("fruitdesc").value;
    db.collection("fruits").add({
        name:fname,
        url:url,
        description:description
     })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });

    }
    const list_div = document.querySelector("#list_div");
    db.collection("fruits").get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          list_div.innerHTML += "<div><p>Name: "+ doc.data().name +"</p><p>URL: "+doc.data().url+"</p><p>Desription: "+doc.data().description+"</p><br></div>"
        });
    });
    
    














    /*function getdata(){
        var fruits=document.getElementById("fruit2").value;
        var docRef = db.collection("fruits").doc("SF");

         docRef.get().then(function(doc) {
         if (doc.exists) {
               console.log("Document data:", doc.data());
          } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});

    }
    const getdata = document.querySelector("#getdata");
    getdata.addEventListener("click",function()
    {
        var fruits=document.getElementById("fruit2").value;
         var docRef = db.collection("fruits").doc("SF");
        docRef.get().then(function(doc){
           var name=doc.val().name;
           var url=doc.val().url;
           var description=doc.val().description;
           document.getElementById("namef").innerHTML=name;
           document.getElementById("urlf").innerHTML=url;
           document.getElementById("descf").innerHTML=description;

        });
    })
    /*function getdata()
    {
       var ref=firebase.database().ref("fruits");
       ref.on("value",function(snapshot){
           snapshot.forEach(function(childSnapshot){
               var childData = childSnapshot.val();
               var id = childData.name;
               console.log(childData);
           });
       }); 

    } 
    const getdata= document.querySelector("#getdata");
    getdata.addEventListener("click",function(){
        docRef.get().then(function(doc){
            const name=doc.val().name;
            const url=doc.val().url;
            const description=doc.val().description;  
            document.getElementById("namef").innerHTML=name;
            document.getElementById("urlf").innerHTML=url;
            document.getElementById("descf").innerHTML=description;
 
    
        })

    })*/