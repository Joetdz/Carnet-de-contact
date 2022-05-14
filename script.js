
/* le preveiw de l'image choisit*/
const img= document.querySelector("#picture");
const preveiw=document.querySelector("#preview")
const profil=document.querySelector(".profile")
    img.addEventListener('change', function() {   
        preveiw.src=URL.createObjectURL(this.files[0])
    })
/* on cache la boite modele du contact */
const divContact=document.querySelector(".contact")
        divContact.style.display = 'none';
/* recuperer le formulaire*/
let modification=false
const form=document.querySelector("form")
 /* on gere la reinitialisation de son formulaire */
 
const Reinit= document.querySelector("#reinit")
Reinit.addEventListener("click", function(e){
    e.preventDefault();
    form.reset();
    preveiw.src=" ";
    modification=false
    document.querySelector("#creer").textContent="creer"
})


/*traitement quand le formulaire est soumis*/ 
form.addEventListener('submit', function(e){ 
    e.preventDefault();
    profil.src=preveiw.src
    let numero = document.querySelector("#numero");
    let firstnameval=document.querySelector("#firstname").value
    let nameval= document.querySelector("#name").value
    let bioval= document.querySelector("#bio").value
    let groupval= document.querySelector("#group").value

     /* les valeurs de la nouvelle div  */
    let firstnameOutput= document.querySelector("#prenom")
    let nameOutput= document.querySelector("#nom")
    let groupeOutput= document.querySelector("#groupe")
    let bioOutput= document.querySelector("#plus")

    firstnameOutput.textContent=firstnameval 
    nameOutput.textContent=nameval
    groupeOutput.textContent=groupval
    bioOutput.textContent=bioval
    
    const divId= Math.random();
    let ContactId=document.querySelector("#identifiant")
    ContactId.textContent="divId"
   
    let newContact= divContact.cloneNode(true);
    if(modification==false){ 
        document.querySelector(".list").appendChild(newContact)
        newContact.style.display = '';
        console.log( divContact);
        console.log( newContact);
        this.reset();
        preveiw.src=" ";
    }
    const removeContact= document.querySelector(".contact")
    removeContact.addEventListener('click', function(e){
    removeContact.remove();
})
       

/* modification du contact*/ 
newContact.addEventListener('click', function(){
    modification=true
    if(modification==true){  
        document.querySelector("#creer").textContent="modif"
        const  imgRequired=document.querySelector("#picture").required=false
        let newdivId= newContact.querySelector("#id").value
        document.querySelector("#firstname").value= newContact.querySelector("#prenom").textContent
        document.querySelector("#name").value= newContact.querySelector("#nom").textContent
        document.querySelector("#bio").value=newContact.querySelector("#plus").textContent
        document.querySelector("#group").value=newContact.querySelector("#groupe").textContent
        preveiw.src=newContact.querySelector(".profile").src
        const btnModif=document.querySelector("#creer")
        btnModif.addEventListener('click', function(){

            
            console.log( divContact);
            console.log( newContact);
            console.log(newdivI);

            preveiw.src=" ";  
        })

    }
})


     



})



