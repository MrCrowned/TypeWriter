/*
 * typewriter.js
 * Promise-based ES6 Port of the original typewriter.js
 *
 * Original Copyright 2014, Connor Atherton - http://connoratherton.com/
 * Released under the MIT Licence
 * http://opensource.org/licenses/MIT
 * 
 * Github:  http://github.com/ConnorAtherton/typewriter
 */
'use strict';

class Typewriter {

  constructor(element, optin) {
    if (!element) throw new Error('A selector or element must be specified');
    if (!optin.text) throw new Error('Typewriter needs text to type');

    this.options = {
      element: document.querySelector(element) || element,
      text: optin.text,
      words: optin.words || false,
      interval: optin.interval || 'human',
      lowerBound: optin.lowerBound || 30,
      upperBound: optin.upperBound || 200
     }
  }
     
  randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  _isNumber(number) {
    return !isNaN(parseFloat(number)) && isFinite(number);
  }
  getIntervalSpeed() {
    if (this._isNumber(this.options.interval)) { 
        return this.options.interval; 
    } else {
        return randomIntFromInterval(this.options.lowerBound, this.options.upperBound);
    }
  }

  // Type styles
  typeByLettersConstantInterval() {
    let numberOfLetters = this.options.text.length,
        currentPosition = 0;

    let interval = window.setInterval(() => {
      if (currentPosition === numberOfLetters) {
        window.clearInterval(interval);
        Promise.resolve();
      } else {
        this.options.element.innerHTML += this.options.text[currentPosition];
        currentPosition++;
      }
    }, this.getIntervalSpeed());
  }

  typeByLettersRandomisedInterval() {
    let numberOfLetters = this.options.text.length,
        currentPosition = 0;

    this.repeat(numberOfLetters, currentPosition);
  }

  repeat(numberOfLetters, currentPosition) {
    if (numberOfLetters === 0) { Promise.resolve(); };

    let interval = this.getIntervalSpeed.call(),
        timer;

    this.options.element.innerHTML += this.options.text[currentPosition];

    timer = setTimeout(() => {
      numberOfLetters--; currentPosition++;
      this.repeat(numberOfLetters, currentPosition);
    }, interval);
  }

  typeByWords() {
    let words = this.options.text.split(' '),
        numberOfWords = words.length,
        currentPosition = 0;

    let interval = window.setInterval(() => {
      if (currentPosition === numberOfWords) {
        window.clearInterval(interval);

        Promise.resolve();
      } else {
        this.options.element.innerHTML += (words[currentPosition] + ' ');
        currentPosition++;
      }
    }, this.getIntervalSpeed());
  }

  type() {
    (this.options.words ? typeByWords() :
    this._isNumber(this.options.interval) ? this.typeByLettersConstantInterval() : this.typeByLettersRandomisedInterval())
      .then(console.log("Finished typing"))
      .always(console.log("always always"));
  }

  rollBacktype(currentWord) {
    let startingWord = element.textContent;

  }
}