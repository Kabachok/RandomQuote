var quoteCollection = [
						"You can have everything in life you want, if you will just help other people get what they want.///Zig Ziglar", 
						"I never teach my pupils. I only attempt to provide the conditions in which they can learn.///Albert Einstein",
						"Don't cry because it's over, smile because it happened.///Dr. Seuss",
						"I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.///Marilyn Monroe",
						"Don't be afraid of your fears. They're not there to scare you. They're there to let you know that something is worth it.///C. JoyBell C.",
						"Thinking something does not make it true. Wanting something does not make it real.///Michelle Hodkin",
						"The unhappiest people in this world, are those who care the most about what other people think.///",
						"No one loses anyone, because no one owns anyone. That is the true experience of freedom: having the most important thing in the world without owning it.///Paulo Coelho",
						"Success is not final, failure is not fatal: it is the courage to continue that counts.///Winston S. Churchill",
						"If at first you don't succeed, try, try again. Then quit. No use being a damn fool about it.///W.C. Fields",
						"Try not to become a man of success. Rather become a man of value.///Albert Einstein",
						"It is better to fail in originality than to succeed in imitation.///Herman Melville",
						"The worst part of success is trying to find someone who is happy for you.///Bette Midler",
						"Have no fear of perfection - you'll never reach it.///Salvador Dali",
						"Success is stumbling from failure to failure with no loss of enthusiasm.///Winston S. Churchill",
						"Our greatest glory is not in never falling, but in rising every time we fall.///Oliver Goldsmith",
						"A friend is someone who knows all about you and still loves you.///Elbert Hubbard",
						"The only true wisdom is in knowing you know nothing.///Socrates",
						"Any fool can know. The point is to understand.///Albert Einstein"
					  ];


$(document).ready(function(){
	/*Since there is only one button at this page, 
	I did not give it any special class except the defaults.*/
	$(".btn").click(function(){
		var quote = getQuote();
		$(".quote-body").html(quote[0]);
		$(".quote-author").html(quote[1]);
	});
	$(".btn").click();
});

function getQuote(){
	var len = quoteCollection.length;
	var randomIndex = Math.floor((Math.random()*len)+1);
	var quoteRec = quoteCollection[randomIndex];
	var quoteData = quoteRec.split("///");
	return quoteData;
}
// TODO: create a random number randomIndex

// TODO: select an item from the quoteCollection at the randomIndex position

// TODO: send choosen item to the html document