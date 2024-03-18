

class Calculator{
    constructor( results){
        this.results = results;
    };
 
    getResults(){
        // this.setClearsResults();
        console.log(this.results);
    }
    setClearsResults(){
        console.clear();
    }
}
class twoNumbers extends Calculator{
    constructor(a, b, results){
      super(results);
      this.a = a;
      this.b = b;
    }
    add (){
        this.results= this.a + this.b
        this.getResults();
    }
    subsract(){
        this.results= this.a - this.b
        this.getResults();
    }
    multiply(){
        this.results = this.a * this.b
        this.getResults();
    }
    division(){
        this.results= this.a / this.b
        this.getResults();
    }

}
class threeNumbers extends twoNumbers{
    constructor(a, b, c, results){
        super(a, b, results);
        this.c = c;
    }
    add (){
        this.results= this.a + this.b + this.c
        this.getResults();
    }
    subsract(){
        this.results= this.a - this.b - this.c
        this.getResults();
    }
    multiply(){
        this.results = this.a * this.b * this.c
        this.getResults();
    }
    division(){
        this.results= this.a / this.b / this.c
        this.getResults();
    }
}
class arrayNumbers extends threeNumbers{
    constructor( a, results=0){
        super(a[0],results);
        this.a = a
    }
    add (){
        this.results=0;
        for(let i=0; i<this.a.length; i++){
            this.results+= this.a[i] 
        this.getResults();
    }
    }
};
let twoNumber =  new twoNumbers(20, 10);
twoNumber.add() 
twoNumber.subsract();
twoNumber.multiply();
twoNumber.division();
let threeNumber = new threeNumbers( 20, 15, 10);
threeNumber.add()
threeNumber.multiply();
let arrayNumber = new arrayNumbers(10,20,30);
arrayNumber.add()

