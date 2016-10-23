Pendulum Waves LED simulator
============================

Inspired by the [Pendulum Waves video](https://www.youtube.com/watch?v=yVkdfJ9PkRQ).
This is an attempt to achieve something similar with LED lights, but instead of 
position in space of pendulums with different periods, a color gradient is used.

* The first strip just sweeps back and forth across the color spectrum.  Effects can be seen at intervals, but mostly looks jumbled.
* The second strip is the same but monochrome.  This time the effect is more pronounced.
* The third strip keeps the sweep isolated per color component, off by a phase of 1/3.

## To Run

Make sure NodeJS is installed.  On OS X, have [Homebrew](http://brew.sh/) installed, then run

```
brew install nodejs
```

Once NodeJS is installed

```
npm install
npm start
```

Then browse to http://localhost:8080
