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
            const webColorValues = rgb.map((colorValue) => window.decimal2HexPadded(Math.floor(colorValue)));
            const webColor = '#' + webColorValues.join('');
            this.$.led.style.fill = webColor;
        },
    });
})();
