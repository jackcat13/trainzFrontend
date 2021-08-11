import { Component, OnInit, ViewChildren } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ExerciseEntryComponent } from '../exercise-entry/exercise-entry.component';
import { Exercise } from '../model/Exercise';
import { Program } from '../model/Program';
import { ProgramType } from '../model/ProgramType';
import { Training } from '../model/Training';
import { User } from '../model/User';
import { TrainingService } from '../service/training.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-training-list',
  templateUrl: './training-list.component.html',
  styleUrls: ['./training-list.component.css'],
  providers: [TrainingService, UserService]
})
export class TrainingListComponent implements OnInit {

  @ViewChildren(ExerciseEntryComponent) exerciseEntry!: ExerciseEntryComponent[];

  //Enums
  programTypesEnum = ProgramType;
  programTypesValues = Object.keys(this.programTypesEnum).filter(f => isNaN(Number(f)));
  filteredProgramTypesValues = of(this.programTypesValues)

  trainings: Training[] = [];
  selectedTraining!: Training;

  trainingTitle = new FormControl('');
  trainingDate = new FormControl('');
  programType = new FormControl('')
  programRepetitions = new FormControl('')
  exercisesNumber = new FormControl('')
  observedExercisesNumber: Observable<string[]> = of(this.exercisesNumber.value)
  arrayExercisesNumber: number[] = []
  
  isLoading = false;
  exercises: Exercise[] = []

  constructor(private service: TrainingService, private userService: UserService) {
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.service.getTrainings().subscribe(
      trainings => (this.trainings.push(...trainings)),
      err => console.error(err),
      () => {
        console.log("get all trainings service completed")
        this.isLoading = false;
      }
    );
    this.filteredProgramTypesValues = this.programType.valueChanges
        .pipe(
          startWith( "" ),
          map (v => this.programTypesValues.filter(f => f.toLowerCase().startsWith(v.toLowerCase())))
        );
    this.observedExercisesNumber = this.exercisesNumber.valueChanges
        .pipe(
          startWith( this.exercisesNumber.setValue(1) ),
          map (v => this.exercises = Array(this.exercisesNumber.value)),
          map (v => Array(this.exercisesNumber.value).fill(0) )
        );
  }

  onSelect(training: Training): void {
    this.selectedTraining = Object.assign({}, training);
  }

  createTraining(): void {
    let user: User = {id: this.userService.getUserIdLogged(), username: "", avatar: "", discriminator: 0, locale: ""}
    let program: Program = {type: this.programType.value, repetition: this.programRepetitions.value, exercises: []}
    this.exerciseEntry.map(entry => program.exercises.push(entry.getExercise()))
    let training: Training = {title: this.trainingTitle.value, date: this.trainingDate.value, user: user, program: program}
    this.service.createTraining(training).subscribe(
      training => this.trainings.push(training),
      err => console.error(err),
      () => console.log("get all trainings service completed")
    );
  }

  deleteTraining(training: Training): void {
    this.service.deleteTraining(training).subscribe(
      res => this.removeTrainingFromList(training._id!),
      err => console.error(err),
      () => console.log("delete training service completed")
    );
  }

  private removeTrainingFromList(trainingId: string): void {
    const removeIndex = this.trainings.findIndex(item => item.title === trainingId);
    this.trainings.splice(removeIndex, 1);
  }
}
