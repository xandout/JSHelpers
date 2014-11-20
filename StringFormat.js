var fmt = function(string, params) {
	var str = string;
	for (param in params){
		str = str.replace(RegExp("\\{" + param + "\\}", "gi"), params[param]);
	}
	return str;
}