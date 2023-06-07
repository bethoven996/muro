const llevoParaguas=(clima)=>{
    // if(clima=== "lluvioso"){
    //     return "si, llevalo"
    // }else {
    //     return "no, no lo lleve"
    // }

    return clima === "lluvioso" ? "si,llevalo" :"no, no lo lleves"

    // si quiero omitir el else debo usar &&
}
llevoParaguas(lluvioso)
// en operaciones booleanas me va a devolver el primer false o el ultimo true 
// en operaciones or es al revez 
