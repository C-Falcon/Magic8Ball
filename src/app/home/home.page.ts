import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private answers = ['An apple.', 'A banana.', 'An orange.',
  'Mixed fruits.', 'Cereal.', 'Eggs.',
  'Pancakes.', 'Waffles.', 'Bacon & Sausage.',
  'Oatmeal.', 'Biscuits.', 'Ask again later.',
  'Cinnamon Rolls.', 'Dont eat breakfast today.']

  constructor(private toastCtrl: ToastController) {}

  giveAnswer() {
    let answer = this.answers[Math.floor(Math.random() * this.answers.length)];
    this.presentToast(answer);
  }

  async presentToast(answer) {
    const toast = await this.toastCtrl.create({
      message: answer,
      duration: 5000,
      position: 'top'
    });
    toast.present();
  }

}
