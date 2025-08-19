function withDefault<T = string>(a?: T): T {
    if(a === undefined){
        return "default" as T;
        
    }
    return a;
}

console.log(withDefault()); 
console.log(withDefault(42)); 
console.log(withDefault(true)); 