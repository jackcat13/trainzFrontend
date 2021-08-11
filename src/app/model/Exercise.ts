import { ExerciseResultCondifence } from './ExerciseResultCondifence';
import { ExerciseTitle } from './ExerciseTitle';
import { ExerciseVariation } from './ExerciseVariation';

export interface Exercise{
    title: ExerciseTitle;
    variation: ExerciseVariation;
    series: number;
    repetitions: number;
    mass: number;
    restTime: number;
    additionalInformation: string;
    resultConfidence: ExerciseResultCondifence;
    resultComments: string;
}