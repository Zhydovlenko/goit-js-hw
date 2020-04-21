'use strict';

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = document.querySelector(selector);
    this.targetDate = targetDate;
    this.refs = {
      days: this.selector.querySelector('[data-value="days"]'),
      hours: this.selector.querySelector('[data-value="hours"]'),
      mins: this.selector.querySelector('[data-value="mins"]'),
      secs: this.selector.querySelector('[data-value="secs"]'),
    };
    this.time = 0;

    this.getRemainingTime();
  }

  getRemainingTime() {
    const timer = setInterval(() => {
      this.time = this.targetDate - Date.now();
      this.showTimer(timer);
    }, 1000);

    this.showTimer(timer);
  }

  showTimer(timer) {
    if (this.time < 0) {
      clearInterval(timer);
      return console.log('Time is up!');
    }

    this.refs.days.innerHTML = Math.floor(this.time / (1000 * 60 * 60 * 24));
    this.refs.hours.innerHTML = Math.floor(
      (this.time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    this.refs.mins.innerHTML = Math.floor(
      (this.time % (1000 * 60 * 60)) / (1000 * 60),
    );
    this.refs.secs.innerHTML = Math.floor((this.time % (1000 * 60)) / 1000);
  }
}

new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2020'),
});
