# Welcome to Deckdown

## Deckdown is
a brand new way to create slide decks

***
It take a markdown file, and creates a _reveal.js_ powered slide deck

## How?

## Markdown!

***

Markdown, according to it's creators:

> Markdown is intended to be as easy-to-read and easy-to-write as is feasible.
> A Markdown-formatted document should be publishable as-is, as plain text, without looking like it’s been marked up with tags or formatting instructions.

Reade more on [Daring Fireball](http://daringfireball.net/projects/markdown/syntax#philosophy)

***

Markdown is *compiled* to HTML. 

Deckdown slides are created anytime a new header `<h1>-<h6>` or horizontal rule `<hr>` tag is encountered. 

***

When creating a slid deck for _Deckdown_, just write markdown, and deckdown figures out the rest.

### A Basic Deck

Here is a basic deck, written in markdown. It creates two slides: 

```markdown
#Intro
Welcome to this presentation

##Thanks for listening
Stay in touch! alan@13protons.com
```

## So, why make a deck using *Deckdown*?

# CODE!

Markdown makes it easy to write code, and even specify what language should be used to highlight the syntax 

Use 3 backticks (called code fences) to specify some code, like this: 

``````
    ```
      //code goes here
    ```
``````
***
Then specify it's language by adding it after the fence: 

``````
    ```javascript
      //code goes here
      var sum = var1 + var2;
    ```
``````
#### Here's some Java:

```java
public class Factorial
{
	public static void main(String[] args)
	{	final int NUM_FACTS = 100;
		for(int i = 0; i < NUM_FACTS; i++)
			System.out.println( i + "! is " + factorial(i));
	}
	
	public static int factorial(int n)
	{	int result = 1;
		for(int i = 2; i <= n; i++)
			result *= i;
		return result;
	}
}
```

#### And Some C:

```c
  #include<stdio.h>

  main()
  {
     int n;

     printf("Enter an integer\n");
     scanf("%d",&n);

     if ( n%2 == 0 )
        printf("Even\n");
     else
        printf("Odd\n");

     return 0;
  }
```
#### Maybe some Phython?

```python
  prices = {'apple': 0.40, 'banana': 0.50}
  my_purchase = {
      'apple': 1,
      'banana': 6}
  grocery_bill = sum(prices[fruit] * my_purchase[fruit] for fruit in my_purchase)
  print 'I owe the grocer $%.2f' % grocery_bill
```

### You get the point

***
View this document's [source code](https://gist.github.com/alanguir/db718cea7e23338bb3bc) to see more, and don't forget to read up on the [markdown spec](http://daringfireball.net/projects/markdown/syntax) for more info about how to write markdown. 

# Happy Decking :)