var app = angular.module('quoteBook');

app.controller('mainCtrl', function(QuotingService) {

var vm = this;

this.quoteData = QuotingService.getData();

this.help = function(a, b) {
	var x = {};
	x.text = a;
	x.author = b;
	vm.quoteData = QuotingService.addData(x);
	$cookies.putObject(text, a);
	$cookies.putObject(author, b);
}

this.dumb = function(a) {
	vm.quoteData = QuotingService.removeData(a);
	$cookies = vm.quoteData;
}

this.whatToChoose = [
{
	name: '',
	value: 99
},
{
	name: "Add Quote",
	value: 0
},
{
	name: "Remove Quote",
	value: 1
},
{
	name: "Filter Quotes",
	value: 2
},
];


});