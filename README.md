Typewriter-ext
==============

Typewriter provides an easy way to print out text on the web. It comes with a
few different configuration options that are all documented below.

See some examples [here](http://connoratherton.com/typewriter).

Typewriter-ext also adds a few more features to the original, such as
+ removing text type writer style
+ takes a JSON file / Array to write out different words

### Letter by letter, fixed interval.

``` js
let tw = new Typewriter('.example-1-output', {
    text: 'I love printing text! Pity my intervals are the same each time.',
    interval: 100
});

tw.type();
```

### Letter by letter, random natural human interval.

``` js
let tw = new Typewriter('.example-2-output', {
    text: 'My intervals are randomised to look like a human is typing.',
    interval: 'human'
});

tw.type();
```

### Word by work, fixed interval

``` js
let tw = new Typewriter('.example-3-output', {
    text: 'I LOVE PRINTING THE MOST!',
    interval: 500,
    words: true
});

tw.type();
```

### Letter by letter, random natural human interval with bounds specified and a callback on completion.

``` js
let tw = new Typewriter('.example-4-output', {
    text: 'Woah! So glad this is the last example I have to sit through.',
    interval: 'human',
    lowerBound: 30,
    upperBound: 130
});

tw.type(() => console.log('Finished typing now'));
```

### All options

``` js
let tw = new Typewriter('selector', {
    text: 'The text to write into the selector',
    words: false, // Optional. Defaults to false.
    interval: 'human' || 300, // Optional. Defaults to human.
    lowerBound: 30 || null, // Optional. Defaults to 30ms
    upperBound: 200 || null // Optional. Defaults to 200ms
});

tw.type(callback)
```