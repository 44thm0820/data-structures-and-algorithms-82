# Linked-List-zip
<!-- Short summary or background information -->

## Challenge
<!-- Description of the challenge -->
Code Challenge: Class 07

Zip two linked lists.

## Features

- Write the following method for the Linked List class:

#### Linked List methods

- Write a function called zip lists
- Arguments: 2 linked lists
- Return: New Linked List, zipped as noted below
- Zip the two linked lists together into one so that the nodes alternate between the two lists and return a reference to the the zipped list.
- Try and keep additional space down to O(1)
- You have access to the Node class and all the properties on the Linked List class as well as the methods created in previous challenges.


#### Example

`zipLists(list1, list2)`
| Arg `list1`	| Arg `list2`	| Output |
| ----------- | ----------- | ------ |
| `[1] -> [3] -> [2] -> null` |	`[5] -> [9] -> [4] -> null` |	`[1] -> [5] -> [3] -> [9] -> [2] -> [4] -> null` |
| `[1] -> [3] -> null` |	`[5] -> [9] -> [4] -> null`	| `[1] -> [5] -> [3] -> [9] -> [4] -> null` |
| `[1] -> [3] -> [2] -> null`	| `[5] -> [9] -> null` | `[1] -> [5] -> [3] -> [9] -> [2] -> null` |


# Unit Tests

Write tests to prove the following functionality:

On this, and all future challenges, write tests for any cases that help you ensure your code is working as expected. Think through different edge cases to determine what tests will ensure your code is covered.

Utilize the Single-responsibility principle: any methods you write should be clean, reusable, abstract component parts to the whole challenge. You will be given feedback and marked down if you attempt to define a large, complex algorithm in one function definition.

For each method that you define, write test assertions for the following conditions at minimum:

- “Happy Path” - Expected outcome
- Expected failure
- Edge Case (if applicable/obvious)
- Unit tests must be passing before you submit your final solution code.

## Writing Unit Tests

Questions Unit Test Should Answer

1. What are you testing?
2. What should it do?
3. What is the actual output?
4. What is the expected output?

Shoulds of Unit Testing

1. Should test a single aspect of a component
  - Usually this means test should contain only a single assert
2. Tests should not rely on running in any particular order
3. Should be able to run repeatedly with same results given same input
4. Should be fast
5. Should be run often
6. Many tools allow tests to run on file save, or even after every keystroke!
7. Prefer simple assert statements
  - Frameworks often contain advanced, and sometimes very handy, assertions.
    - E.g. `assertRendersTemplate('home.html')`
    - These are awesome, but use sparingly. Simple asserts are usually more readable.

Example Tests

Given a function like…
````
def sum(a,b):
  """ sum two numeric arguments """
  
  if isinstance(a, (int, float)) and isinstance(b, (int, float)):
    return a + b

  raise TypeError('argument must be int or float')
````
Test the ‘Happy Path’ cases

```
def test_should_sum_two_integers():
    expected = 3
    actual = sum(1,2)
    assert expected is actual, "sum of 1 and 2 should be 3"
```
```
def test_should_sum_two_larger_integers():
    expected = 1333332
    actual = sum(1234567,98765)
    assert expected is actual, "sum of 1234567 and 98765 should be 1333332"
```
Test with less obvious values. E.g. zero and negative numbers
```
def test_should_sum_negative_numbers():
    expected = 3
    actual = sum(5,-2)
    assert expected is actual, "sum of 5 and -2 should be 3"
```
Test default argument values as needed

```
def test_should_handle_single_argument():
    expected = 2
    actual = sum(2)
    assert expected is actual, "sum of 2 and nothing should be 2 because 2nd argument defaults to 0"
```

Test acceptable argument types
  - Note: Different languages handle floating point precision differently. Adjust your assertion as needed.

```
def test_should_sum_floats():
    expected = 5.0
    actual = sum(3.5,1.5)
    assert expected == actual, "sum of 3.5 and 1.5 should be 5.0"
```

```
def test_should_sum_integer_and_float():
    expected = 5.5
    actual = sum(3.5,2)
    assert expected == actual, "sum of 3.5 and 2 should be 5.5"
```

Test unsupported argument types
```
def test_should_accept_only_numbers():
    # consult docs for how your test framework handles testing exceptions
    with pytest.raises(TypeError):
        sum('1',3)
```

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
I used a while loop to traverse both linked lists, each iteration, from list1 first and list2 second, inserting the value found in each node in the linked list. O(n) time.



## API
<!-- Description of each method publicly available to your Linked List -->
