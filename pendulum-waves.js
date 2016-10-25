(function () {
    Polymer({
        is: 'pendulum-waves',
        properties: {
            stripSpectrum: {
                type: Array,
                value: () => {
                    return new Array(15).fill({
                        position: 0,
                        red: 0,
                        green: 0,
                        blue: 0,
                    });
                },
            },
            stripMonochrome: {
                type: Array,
                value: () => {
                    return new Array(15).fill({
                        position: 0,
                        red: 0,
                        green: 0,
                        blue: 0,
                    });
                },
            },
            stripPhased: {
                type: Array,
                value: () => {
                    return new Array(15).fill({
                        positions: [
                            0,
                            2 * Math.PI / 3,
                            4 * Math.PI / 3,
                        ],
                        red: 0,
                        green: 0,
                        blue: 0,
                    });
                },
            },
        },
        attached: function () {
            setInterval(() => {
                this.stripSpectrum = this.stripSpectrum.map((value, index) => {
                    const step = index * 0.005 + 0.01;
                    if (value.position >= 2 * Math.PI) {
                        value.position = value.position - 2 * Math.PI;
                    }
                    const newValue = {};
                    newValue.position = value.position + step;
                    const normalized = (Math.sin(newValue.position) + 1) / 2;
                    const rgb = window.waveLengthToRGB(380 + 401 * normalized);
                    newValue.red = rgb[0];
                    newValue.green = rgb[1];
                    newValue.blue = rgb[2];
                    return newValue;
                });

                this.stripMonochrome = this.stripMonochrome.map((value, index) => {
                    const step = index * 0.010 + 0.02;
                    if (value.position >= 2 * Math.PI) {
                        value.position = value.position - 2 * Math.PI;
                    }
                    const newValue = {};
                    newValue.position = value.position + step;
                    const normalized = (Math.sin(newValue.position) + 1) / 2;
                    newValue.red =  255 * normalized;
                    newValue.green = 0;
                    newValue.blue = 0;
                    return newValue;
                });

                this.stripPhased = this.stripPhased.map((value, index) => {
                    const step = index * 0.010 + 0.02;
                    const newValue = {};
                    newValue.positions = value.positions.map((position) => {
                        let newPosition;
                        if (position >= 2 * Math.PI) {
                            newPosition = position - 2 * Math.PI;
                        } else  {
                            newPosition = position;
                        }
                        newPosition = newPosition + step;
                        return newPosition;
                    });
                    const redNormalized = (Math.sin(newValue.positions[0]) + 1) / 2;
                    const greenNormalized = (Math.sin(newValue.positions[1]) + 1) / 2;
                    const blueNormalized = (Math.sin(newValue.positions[2]) + 1) / 2;
                    newValue.red =  255 * redNormalized;
                    newValue.green = 255 * greenNormalized;
                    newValue.blue = 255 * blueNormalized;
                    return newValue;
                });
            }, 50);
        },
    });
})();

