(function () {
    Polymer({
        is: 'neo-pixel',
        properties: {
            id: {
                type: Number,
            },
            red: {
                type: Number,
            },
            green: {
                type: Number,
            },
            blue: {
                type: Number,
            },
        },
        observers: [
            '_colorUpdated(red, green, blue)',
        ],
        _colorUpdated: function (red, green, blue) {
            const rgb = [red, green, blue];
            const webColorValues = rgb.map(value => decimal2HexPadded(Math.floor(value)));
            const webColor = '#' + webColorValues.join('');
            this.$.led.style.fill = webColor;
        },
    });
})();
