function continentes(pais:string)
{
    let conti:String;
    let europa =["España","Italia","Portugal","Sucia"];
    let america =["RepublicaDominicana","EEUU","Mexico"]
    let africa =["Libano","marruecos","Cabo Verde"]
    let asia =["china","Thailandia","Corea","Japon"]
    
    if(europa.includes(pais)){
        conti ="Europa"
    } else if(america.includes(pais)){
        conti ="America"
    }
    console.log(continentes);
}
console.log("Mexico");

