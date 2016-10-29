function bmiService(height, weight) // constructor.
{
    // object-scoped variabie.
    var _height = height;
    var _weight = weight;
    var _bmi = 0.0;

    // initialize.
    initialize();

    this.getBodyIndex = function()
    {
        if (_bmi == 0.0)
            _bmi = _weight / Math.pow((_height / 100), 2)

        return _bmi;
    };

    this.getBodyIndexLevel = function()
    {
        var result = "Unknown";

        if (_bmi < 18.5)
		    result = "Less";
	    else if (_bmi > 35.0)
		    result = "HeavyFat";
	    else
	    {
		    if (_bmi >= 18.5 && _bmi < 24)
		        result = "Normal";
		    else if (_bmi >= 24 && _bmi < 27)
		        result = "HigherWeight";
		    else if (_bmi >= 27 && _bmi < 30)
		        result = "LightFat";
		    else
		        result = "Fat";
	    }

        return result;
    };

    this.getResult = function()
    {
        var result = {};
        result.BodyIndex = this.getBodyIndex();
        result.BodyIndexLevel = this.getBodyIndexLevel();
        return result;    
    };

    function initialize()
    {
        if (typeof height == "string") {
            if (!parseInt(height)) {
                throw "Illegal height value.";
            }
            else {
                _height = parseInt(height);
            }
        }
        
        if (typeof weight == "string") {
            if (!parseInt(weight)) {
                throw "Illegal weight value.";
            }
            else {
                _weight = parseInt(weight);
            }
        }
    }
}