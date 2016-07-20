class Language{     //Language would be assigned to an IIF
    name:string
    constructor(name){
        this.name = name;
    }
    summary(){      //summary would be decalred in Language.prototype part
        return this.name
    }
}