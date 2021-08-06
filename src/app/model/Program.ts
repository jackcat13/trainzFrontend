import { Exercise } from "./Exercise";
import { ProgramType } from "./ProgramType";

export interface Program{
    type: ProgramType;
    repetition: number;
    exercices: Exercise[];
}