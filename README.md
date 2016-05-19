:smiley_cat: CopyCat :smiley_cat:
===========

Have you every wanted to have multiple items in your clipboard? Some links that you wanted to keep handy? Messages/Email templates that you use a lot ? CopyCat makes all of this possible with the convenience of your Command Line :computer:


Setup
------
The setup is easy. Just run the following command in your terminal and you are good to go :raised_hands:
```bash
$npm install copyct
```

Usage
------
Using CopyCat is super simple! You basically use it as a key value store. Here are a few examples:

```bash
//Adding a Key-Value pair to CopyCat

$copycat -a "Comeback","That's what she said!"
Comeback saved!

$copycat -a "HackerNews","http://news.ycombinator.com"
HackerNews saved!


//Retrieving the Value from CopyCat
//This will copy "That's what she said!" to your clipboard
$copycat -g "Comeback"
Contents of the system clipboard replaced by Comeback
```
