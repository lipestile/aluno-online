class Nota {
    constructor(disciplina, a1, a2, a3) {
        this.disciplina = disciplina;
        this.a1 = a1;
        this.a2 = a2;
        this.a3 = a3;
    }

    mediaFinal() {
        return Math.max(
            0.4 * this.a1 + 0.6 * this.a2, 
            0.4 * this.a1 + 0.6 * this.a3, 
            0.4 * this.a3 + 0.6 * this.a2
        );
    }

    mediaCA() {
        if(this.mediaFinal() >= 9){
            return "SS";
        }else if (this.mediaFinal() >= 7  < 8.9 ){
            return "MS";
        
        }else if (this.mediaFinal() >= 5  < 6.9 ){
            return "MM";
        
        }else if (this.mediaFinal() >= 3  < 4.9 ){
            return "Mi";
        
        }else if (this.mediaFinal() >= 0.1  < 2.9 ){
            return "II";
        }
        else if (this.mediaFinal() == 0){
            return "SR";
        }
        
    }
}

module.exports = Nota;