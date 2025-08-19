interface User{
    readonly id:number;
    name:string;
    email:string;
    age?:number;
}

function updateUser<T>(user:User,updates:Partial<User>){
    if(updates.id) return "id không thể thay đỏi";
    return {...user,...updates}
}



const user: User = {id: 1,name: "Hoan",email: "Hoan@example.com",};

const updates = {id: 2,name: "Dung",};


console.log(updateUser(user,updates));




const user1: User = {id: 1,name: "Quang",email: "Quang@example.com",};

const updates1 = {name: "hung",};


console.log(updateUser(user1,updates1));