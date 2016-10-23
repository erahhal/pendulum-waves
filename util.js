(function () {
    /*
        Taken from:
        http://stackoverflow.com/questions/1472514/convert-light-frequency-to-rgb

        Which was taken from Earl F. Glynn's web page:
        http://www.efg2.com/Lab/ScienceAndEngineering/Spectra.htm
    */
    const waveLengthToRGB = (wavelength) => {
        const gamma = 0.80;
        const intensityMax = 255;

        let factor;
        let red;
        let green
        let blue;

        if (wavelength >= 380 && wavelength < 440) {
            red = -(wavelength - 440) / (440 - 380);
            green = 0.0;
            blue = 1.0;
        } else if (wavelength >= 440 && wavelength < 490) {
            red = 0.0;
            green = (wavelength - 440) / (490 - 440);
            blue = 1.0;
        } else if (wavelength >= 490 && wavelength < 510) {
            red = 0.0;
            green = 1.0;
            blue = -(wavelength - 510) / (510 - 490);
        } else if (wavelength >= 510 && wavelength < 580) {
            red = (wavelength - 510) / (580 - 510);
            green = 1.0;
            blue = 0.0;
        } else if (wavelength >= 580 && wavelength < 645) {
            red = 1.0;
            green = -(wavelength - 645) / (645 - 580);
            blue = 0.0;
        } else if (wavelength >= 645 && wavelength < 781) {
            red = 1.0;
            green = 0.0;
            blue = 0.0;
        } else {
            red = 0.0;
            green = 0.0;
            blue = 0.0;
        }

        // Let the intensity fall off near the vision limits

        if (wavelength >= 380 && wavelength < 420) {
            factor = 0.3 + 0.7 * (wavelength - 380) / (420 - 380);
        } else if (wavelength >= 420 && wavelength < 701) {
            factor = 1.0;
        } else if (wavelength >= 701 && wavelength < 781) {
            factor = 0.3 + 0.7 * (780 - wavelength) / (780 - 700);
        } else {
            factor = 0.0;
        }

        rgb = new Array();

        // Don't want 0^x = 1 for x <> 0
        rgb[0] = red == 0.0 ? 0 : Math.round(intensityMax * Math.pow(red * factor, gamma));
        rgb[1] = green == 0.0 ? 0 : Math.round(intensityMax * Math.pow(green * factor, gamma));
        rgb[2] = blue == 0.0 ? 0 : Math.round(intensityMax * Math.pow(blue * factor, gamma));

        return rgb;
    }

    const decimal2HexPadded = (number) => {
        let hexNumber = (+number).toString(16);
        if (hexNumber.length < 2) {
            hexNumber = '0' + hexNumber;
        }
        return hexNumber;
    }

    const getSpectrumGradient = (value) => {
        if (value < 0 || value > 1) {
            throw new Error('value range must be between 0 and 1');
        }

        const rgb = waveLengthToRGB(380 + 401 * value);
        const webColorValues = rgb.map(value => decimal2HexPadded(Math.floor(value)));
        const webColor = '#' + webColorValues.join('');
        return webColor;
    };

    window.waveLengthToRGB = waveLengthToRGB;
    window.decimal2HexPadded = decimal2HexPadded;
    window.getSpectrumGradient = getSpectrumGradient;
})();
