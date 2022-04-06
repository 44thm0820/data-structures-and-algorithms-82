# Stack-queue-brackets
<!-- Short summary or background information -->
Multi-bracket Validation.

## Challenge
<!-- Description of the challenge -->
Code Challenge: Class 13

Stack-queue-brackets

Feature Tasks
Write a function called validate brackets
Arguments: string
Return: boolean
representing whether or not the brackets in the string are balanced
There are 3 types of brackets:

Round Brackets : ()
Square Brackets : []
Curly Brackets : {}
Example
Input	Output
{}	TRUE
{}(){}	TRUE
()[[Extra Characters]]	TRUE
(){}[[]]	TRUE
{}{Code}[Fellows](())	TRUE
[({}]	FALSE
(](	FALSE
{(})	FALSE

Consider these small examples and why they fail.

Input	Output	Why
{	FALSE	error unmatched opening { remaining.
)	FALSE	error closing ) arrived without corresponding opening.
[}	FALSE	error closing }. Doesn’t match opening (.

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
I followed the directions from the readings and lecture as my approach to build out the methods. O(1) space and time.

## API
<!-- Description of each method publicly available to your Stack and Queue-->


### Stack methods

1. Push - Nodes or items that are put into the stack are pushed
2. Pop - Nodes or items that are removed from the stack are popped. When you attempt to pop an empty stack an exception will be raised.
3. Top - This is the top of the stack.
4. Peek - When you peek you will view the value of the top Node in the stack. When you attempt to peek an empty stack an exception will be raised.
5. IsEmpty - returns true when stack is empty otherwise returns false.

### Queue methods

1. Enqueue - Nodes or items that are added to the queue.
2. Dequeue - Nodes or items that are removed from the queue. If called when the queue is empty an exception will be raised.
3. Front - This is the front/first Node of the queue.
5. Back - This is the back/rear/last Node of the queue.
6. Peek - When you peek you will view the value of the front Node in the queue. If called when the queue is empty an exception will be raised.
7. IsEmpty - returns true when queue is empty otherwise returns false.