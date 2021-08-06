import { ExerciseResultCondifence } from './ExerciseResultCondifence';
import { ExerciseTitle } from './ExerciseTitle';
import { ExerciseVariation } from './ExerciseVariation';

export interface Exercise{
    title: ExerciseTitle;
    variation: ExerciseVariation;
    repetitions: number;
    restTime: number;
    additionalInformation: string;
    resultConfidence: ExerciseResultCondifence;
    resultComments: string;
}