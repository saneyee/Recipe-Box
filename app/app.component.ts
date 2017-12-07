import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
  <h1>Recipe Box</h1>

   <h2 *ngFor="let currentRecipe of recipes">{{currentRecipe.title}}
   <button class="bg-info" (click)="editRecipe(currentRecipe)">Show</button></h2>

     <br>
     <div *ngIf="selectedRecipe">
     <hr>
     <h2>Title : {{selectedRecipe.title}}</h2>
     <h2>Ingredients : {{selectedRecipe.ingredient}}</h2>
     <h2>Direction : {{selectedRecipe.direction}}</h2>
     <hr>
     <div>
    <h2>Edit Recipe</h2>
    <br>
    <label>Enter New Ingredients:</label>
    <input [(ngModel)]="selectedRecipe.ingredient">
    <br>
    <br>
    <label>Enter Direction:</label>
    <input [(ngModel)]="selectedRecipe.direction">
    <br>
    <br>
    <button (click)="finishedEditing()">Done</button>
    </div>
    </div>
  </div>
  `
})


export class AppComponent {


  recipes: Recipe[] = [
    new Recipe('Bake a Cake','Flour,Eggs,Butter', 'xyz'),
    new Recipe('Prepare Salad','Onions,Lettuce,Tomatoes','xyz'),
    new Recipe('Chicken Pizza','Chicken cubes,Pizza base,Cheese','xyz')
  ];
  selectedRecipe = null;

  editRecipe(clickedRecipe) {
    this.selectedRecipe = clickedRecipe;
  }

finishedEditing() {
    this.selectedRecipe = null;
  }

  }
export class Recipe {
constructor(public title: string,public ingredient: string,public direction: string) { }
}
