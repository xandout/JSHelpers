Tabular Display
=========

Generate Excel 2003 XML Spreadsheet

**Usage**

	var data = {
		header: ['col1', 'col2', 'col3'],
		rows: [['data1', 'data2', 'data3'],['data1', 'data2', 'data3'],['data1', 'data2', 'data3']]
	}

	var xml = new EJS({url: 'sheet.ejs'}).render(data);

Generate Table

**Usage**

	var data = {
		header: ['col1', 'col2', 'col3'],
		rows: [['data1', 'data2', 'data3'],['data1', 'data2', 'data3'],['data1', 'data2', 'data3']]
	}
	var table = new EJS({url: 'table.ejs'}).render(data);


TODO
=========
* Allow	header = null

* Allow sheet naming

* Provide example to download completed spreadsheet

