export class Users {
    users : UserHoppies[] = [];
}

export class UserHoppies {
    name : string = "";
    hoppys : Hoppy[] = [];
}

export class Hoppy {
    passion : string = "";
    start : number = 0;
    hoppy : string = "";
}