window.addEventListener('DOMContentLoaded', (Event)=>{
getVisitcount();
})

const functionApi='';
    
const getVisitcount =() => {
let count= 30;
fetch (functionApi).then(Response => {
    return Response.jason()
}). (response =>{
console.log("website called function API.");
count= response.count;
document.getElementById("counter").innerText= count;
}).catch (function (error){
    console.log(error);
});
return count;
}