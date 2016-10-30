function bmiServiceMale() {}

bmiServiceMale.prototype = new bmiServiceBase();
bmiServiceMale.prototype.getBodyIndex = function(height, weight)
{
    var bmi = weight / Math.pow((height / 100), 2);
    return bmi;
};
bmiServiceMale.prototype.getBodyIndexLevel = function(height, weight)
{
    var bmi = this.getBodyIndex(height, weight);
        var result = "Unknown";

        if (bmi < 18.5)
		    result = "Less";
	    else if (bmi > 35.0)
		    result = "HeavyFat";
	    else
	    {
		    if (bmi >= 18.5 && bmi < 24)
		        result = "Normal";
		    else if (bmi >= 24 && bmi < 27)
		        result = "HigherWeight";
		    else if (bmi >= 27 && bmi < 30)
		        result = "LightFat";
		    else
		        result = "Fat";
	    }

        return result;
}