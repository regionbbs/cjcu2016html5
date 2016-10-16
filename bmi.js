function getBMIQualify(heightInCM, weightInKG)
{
	var heightInM = heightInCM / 100;
	var bmi = weightInKG / Math.pow(heightInM, 2);
	var result = "";
	var bmio = { "BMI": 0, "RESULT": ""}; // JSON.
			
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
			
	bmio.BMI = bmi;
	bmio.RESULT = result;
	return bmio;
}