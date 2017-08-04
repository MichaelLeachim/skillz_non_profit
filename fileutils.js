(function(){
    window.coords = function(){
        return {x: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
                y: Math.max(document.documentElement.clientHeight, window.innerHeight || 0)}
    }
    var X = XLSX;
    window.ls_set = function(key,val) {
        return localStorage.setItem(key,val);
    }
    window.ls_get = function(key){
        return localStorage.getItem(key)
    }
    window.ls_drop = function(key){
        return localStorage.removeItem(key);
    }
    window.load_from_server = function(url,cb){
        console.log("Something")
        var oReq;
        if(window.XMLHttpRequest) oReq = new XMLHttpRequest();
        else if(window.ActiveXObject) oReq = new ActiveXObject('MSXML2.XMLHTTP.3.0');
        else throw "XHR unavailable for your browser";
        oReq.open("GET", url, true);
        if(typeof Uint8Array !== 'undefined') {
	    oReq.responseType = "arraybuffer";
	    oReq.onload = function(e) {
                console.log("Data loaded")
		if(typeof console !== 'undefined')console.log("onload", new Date());
		var arraybuffer = oReq.response;
		var data = new Uint8Array(arraybuffer);
		var arr = new Array();
		for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
                try{
                    var wb = X.read(arr.join(""),{type:'binary'});
                    return cb({"json":to_json(wb),"err":null});
                }catch(err){
                    return cb({"json":null,"err":err});
                }
	    };
        } else {
            console.log("ASLDKJASKDJ")
	    oReq.setRequestHeader("Accept-Charset", "x-user-defined");	
	    oReq.onreadystatechange = function() {
                if(oReq.readyState == 4 && oReq.status == 200) {
		    var ff = convertResponseBodyToText(oReq.responseBody);
		    if(typeof console !== 'undefined') console.log("onload", new Date());
                    try{
                        var wb = X.read(ff,{type:'binary'});
                        return cb({"json":to_json(wb),"err":null});
                    }catch(err){
                        return cb({"json":null,"err":err});
                    }
	        }
            }
        }
        oReq.send();
    }
    
    var to_json =  function (workbook) {
	var result = {};
	workbook.SheetNames.forEach(function(sheetName) {
	    var roa = X.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
	    if(roa.length > 0){
		result[sheetName] = roa;
	    }
	});
	return result;
    }
    window.make_excel_reader = function(file_item,cb){
        var reader = new FileReader();
        reader.onload = function(e){
            try{
                var data = e.target.result;
                wb = X.read(data,{type:'binary'});
                return cb({"json":to_json(wb),"err":null});
            }catch(err){
                return cb({"json":null,"err":err});
            }
        }
        reader.readAsBinaryString(file_item);
        return null
    }
    
    function datenum(v, date1904) {
	if(date1904) v+=1462;
	var epoch = Date.parse(v);
	return (epoch - new Date(Date.UTC(1899, 11, 30))) / (24 * 60 * 60 * 1000);
    }
    function sheet_from_array_of_arrays(data, opts) {
	var ws = {};
	var range = {s: {c:10000000, r:10000000}, e: {c:0, r:0 }};
	for(var R = 0; R != data.length; ++R) {
	    for(var C = 0; C != data[R].length; ++C) {
		if(range.s.r > R) range.s.r = R;
		if(range.s.c > C) range.s.c = C;
		if(range.e.r < R) range.e.r = R;
		if(range.e.c < C) range.e.c = C;
		var cell = {v: data[R][C] };
		if(cell.v == null) continue;
		var cell_ref = X.utils.encode_cell({c:C,r:R});
		if(typeof cell.v === 'number') cell.t = 'n';
		else if(typeof cell.v === 'boolean') cell.t = 'b';
		else if(cell.v instanceof Date) {
		    cell.t = 'n'; cell.z = X.SSF._table[14];
		    cell.v = datenum(cell.v);
		}
		else cell.t = 's';
		ws[cell_ref] = cell;
	    }
	}
	if(range.s.c < 10000000) ws['!ref'] = X.utils.encode_range(range);
	return ws;
    }
    /* original data */
    function Workbook() {
	if(!(this instanceof Workbook)) return new Workbook();
	this.SheetNames = [];
	this.Sheets = {};
    }
    function s2ab(s) {
	var buf = new ArrayBuffer(s.length);
	var view = new Uint8Array(buf);
	for (var i=0; i!=s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
	return buf;
    }
    function save_file(fname,data){
        var blob = new Blob(data,{type:"application/octet-stream"});
        saveAs(blob,fname);
    }
    window.js_arrays_to_xlsx = function(fname,data){
        var wb = new Workbook();
        data.forEach(function(item){
            wb.SheetNames.push(item["name"]);
            wb.Sheets[item["name"]] = sheet_from_array_of_arrays(item["data"]);
        })
        var wbout = X.write(wb, {bookType:'xlsx', bookSST:true, type: 'binary'});
        return save_file(fname,[s2ab(wbout)])
    }
})()
