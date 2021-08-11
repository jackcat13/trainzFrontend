import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { of } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Exercise } from '../model/Exercise';
import { ExerciseResultCondifence } from '../model/ExerciseResultCondifence';
import { ExerciseTitle } from '../model/ExerciseTitle';
import { ExerciseVariation } from '../model/ExerciseVariation';

@Component({
  selector: 'app-exercise-entry',
  templateUrl: './exercise-entry.component.html',
  styleUrls: ['./exercise-entry.component.css']
})
export class ExerciseEntryComponent implements OnInit {

  exerciseTitle = new FormControl('')
  exerciseVariation = new FormControl('')
  exerciseRepetition = new FormControl('')
  exerciseMass = new FormControl('');
  exerciseRestTime = new FormControl('')
  exerciseAdditionalInformation = new FormControl('');
  exerciseResultConfidence = new FormControl('');
  exerciseResultComments = new FormControl('');

  //enums
  excerciceTitleEnum = ExerciseTitle;
  exerciceTitleValues = Object.keys(this.excerciceTitleEnum).filter(f => isNaN(Number(f))).sort();
  filteredexerciceTitleValues = of(this.exerciceTitleValues)
  excerciceVariationEnum = ExerciseVariation;
  exerciceVariationValues = Object.keys(this.excerciceVariationEnum).filter(f => isNaN(Number(f))).sort();
  filteredexerciceVariationValues = of(this.exerciceVariationValues)
  excerciceResultConfidenceEnum = ExerciseResultCondifence;
  exerciceResultConfidenceValues = Object.keys(this.excerciceResultConfidenceEnum).filter(f => isNaN(Number(f))).sort();
  filteredexerciceResultConfidenceValues = of(this.exerciceResultConfidenceValues)

  @Input()
  entryId!: number;

  constructor() { }

  ngOnInit(): void {
    this.filteredexerciceVariationValues = this.exerciseVariation.valueChanges
        .pipe(
          startWith( "" ),
          map (v => this.exerciceVariationValues.filter(f => f.toLowerCase().startsWith(v.toLowerCase())))
        );
    this.filteredexerciceTitleValues = this.exerciseTitle.valueChanges
        .pipe(
          startWith( "" ),
          map (v => this.exerciceTitleValues.filter(f => f.toLowerCase().startsWith(v.toLowerCase())))
        );
    this.filteredexerciceResultConfidenceValues = this.exerciseResultConfidence.valueChanges
        .pipe(
          startWith( "" ),
          map (v => this.exerciceResultConfidenceValues.filter(f => f.toLowerCase().startsWith(v.toLowerCase())))
        );
  }

  getExercise(): Exercise{
    return {title: this.exerciseTitle.value,
      variation: this.exerciseVariation.value,
      mass: this.exerciseMass.value,
      restTime: this.exerciseRestTime.value,
      repetitions: this.exerciseRepetition.value,
      additionalInformation: this.exerciseAdditionalInformation.value,
      resultConfidence: this.exerciseResultConfidence.value,
      resultComments: this.exerciseResultComments.value
    }
  }

}
