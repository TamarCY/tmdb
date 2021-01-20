class Actor {
    constructor(fname, lname, birthday, imdbLink, imageURL){
        this.fname = fname;
        this.lname = lname;
        this.birthday = birthday;
        this.imdbLink = imdbLink;
        this.imageURL = imageURL;
    }
    calcAge(){
        const currentYear = new Date().getFullYear();
        const age = currentYear - this.birthday;
         return age;
    }
}

export default Actor;
