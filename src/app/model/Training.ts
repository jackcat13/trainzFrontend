import { Program } from "./Program";
import { User } from "./User";

export interface Training {
    _id?: string;
    title: string;
    date: Date;
    user: User;
    program?: Program;
}
