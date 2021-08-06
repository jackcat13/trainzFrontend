import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Training } from '../model/Training';
import { TrainingService } from '../service/training.service';

@Component({
  selector: 'app-training-list',
  templateUrl: './training-list.component.html',
  styleUrls: ['./training-list.component.css'],
  providers: [TrainingService]
})
export class TrainingListComponent implements OnInit {

  trainings: Training[] = [];
  selectedTraining!: Training;

  trainingTitle = new FormControl('');
  trainingDate = new FormControl('');
  
  isLoading = false;

  constructor(private service: TrainingService) {}

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
  }

  onSelect(training: Training): void {
    this.selectedTraining = Object.assign({}, training);
  }

  createTraining(): void {
    this.service.createTraining(this.trainingTitle.value, this.trainingDate.value).subscribe(
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
