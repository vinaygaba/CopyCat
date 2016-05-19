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

Credits
-----------------
Author: Vinay Gaba (vinaygaba@gmail.com)

<a href="https://plus.google.com/+Vinaygaba">
  <img alt="Follow me on Google+"
       src="https://github.com/gabrielemariotti/cardslib/raw/master/demo/images/g+64.png" />
</a>
<a href="https://twitter.com/vinaygaba">
  <img alt="Follow me on Twitter"
       src="https://github.com/gabrielemariotti/cardslib/raw/master/demo/images/twitter64.png" />
</a>
<a href="https://www.linkedin.com/in/vinaygaba">
  <img alt="Follow me on LinkedIn"
       src="https://github.com/gabrielemariotti/cardslib/raw/master/demo/images/linkedin.png" />
</a>


License
-------

    Copyright 2015 Vinay Gaba

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
