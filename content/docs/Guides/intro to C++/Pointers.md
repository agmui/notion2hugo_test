---
sys:
  pageId: "52c4056b-e3ee-4b5c-a521-c7ea915d2f9a"
  createdTime: "2024-06-25T02:28:00.000Z"
  lastEditedTime: "2024-10-29T16:12:00.000Z"
  propFilepath: "docs/Guides/intro to C++/Pointers.md"
title: "Pointers"
date: "2024-10-29T16:12:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 112
toc: false
icon: ""
---

> NOTE: You will cover this in CSSE132 or CSSE332 so this will just be a light overview

> SECOND NOTE: a lot of the code here is written in pseudo code so it wont run

Pretend you one get one massive array and you are not allowed to make any new arrays

`array = [0,0,0,0……]`

Now say I want to store a _“person object”_  where we store age, height, and weight.

Lets just simply put the three numbers right next to each other:
`array = [``age,height,weight``,``age,height,weight``,``age,height,weight``,``age,height,weight``……]`

TODO: add picture 

If I were to get the 4th person in the list we would:

```cpp
age = array[9]
height = array[9+1]
weight = array[9+2]
```

effectively the 4th person’s object lives at index 9

Now for example if we have a function that multiplies a person's height and weight (BMI)

```cpp
void height_times_weight(person){
	...
}
```

to pass this _“person object”_ we could do one of two things

- copy the 3 values (age, height, weight) into the function
- just pass in the index, 9, the person is stored at

For Option 1 this might work sometimes but what if the person object had 100 things, or 1000, or even more!

That would make our program very slow, so passing in a single value 9 might be much easier.

```cpp
array = [0,0,0,0……]

void height_times_weight(person){
	array[person]
	...
}

int main(){
		height_times_weight(9)
}
```

This idea of passing index is called pointers.

**Syntax:** **`int* p`**

to create a pointer just put a `*` after the type

### **EX:**

```cpp
int* int_pointer;
float* float_pointer;
char* char_pointer;
Person* person_pointer;
```

in `height_times_weight()` we would write it like this:

```cpp

void height_times_weight(Person* person){
	...
}
```

To get the _“index”_ of something we use the `&` symbol

```cpp
Person person = {1,2,3}; 
// this is like storing 1,2,3 somehwere in array
// array = [..., 1,2,3, ...]

Person* person_pointer = &person;
// its like the indexOf function
// &person will simply return the index in array where person is stored
// like in the first example the 4th person was stored in array[9]
// so &person would return 9
```

Then to access what is in array:

```cpp
Person person = {1,2,3}; 

Person* person_pointer = &person;

int age = *person_pointer; // this is the same as array[9]

//Note: this does not give height but
// will give you the next person in array (5th person).
// This is because of pointer math and you will cover this in CSSE132
*(person_pointer + 1);
```

we put a `*` in front a pointer type to <u>dereference</u> or basically plug in the index into `array[]`

**HOWEVER****:**

this can be dangerous:

### EX:

```cpp
Person person = {1,2,3}; 

char* person_pointer = &person;
```

again `&person` gets the index its at in array, say 9 again.

But because its a `char*` it thinks

```cpp
array = [... 1,2,3...]
						 ^
						 //hmmm... this "1" here must be a char
```

the computer will think the 1 is a char which is BADDDD

essentially the type gives the pointer “context”

it makes sense of what is stored in array.

Like how units next to a number give it context types next to some binary give it context

You can interpret 5 meters as 5 degrees C which might not make sense just like how you can interpret the int 65 as a character which would translate to the character `A`. ([Using an ASCII translation table](http://www.unit-conversion.info/texttools/ascii/)) ([Another table](https://www.asciitable.com/))

	This is an artifact of how the data is stored in binary inside of memory. Computers do not know what an “A” or a “5” is, they only know what 1’s and 0’s are. So there are ways of storing different types of variables.  A five can be represented in binary as “0101”, but the character “A” is could be encoded as “01000001”

## Practice:

- do example of max of 2 `int* max(int* a, int* b)`
- `int add(int* a, int* b)`
- basic function that mutates a variable
- what does this function do:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bab24be3-c0b5-4cfd-bcef-10ef39280abe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFKJXRGI%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T180940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDzK4SvnbUWv9FiUK1d1tad9%2FbM%2BqSEvSZNlfZQ6AM4uAiEA28r81gp6brQYVoxAZLE9du6UyQxlk2lw65ir%2FM22gbMq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDHImV7IYkcdJYCJ6hircA8sXaVqXBORRgt3uXs1BNI5IQ6jYGXPrpT3QwqKSTzOwxH9%2FFUdxY8KzwXRuaqczQDXXAMMqAlyWqDxJUG%2Bm89sXXNEuH3KgyJhJhTlhAaf27iB1jQ95zq6Fws3Q4IEQYJF2V84uk8NqryCcbhAPzNLPtgiDzzY7PU39Wh1Pa0p99rIkldikNakoD%2BKkfRG2f0K%2Fju6eVXLdVOXgbn94pLDCfclnXPrwW8yCTeVO0%2FPgwnzBHQ3f%2B6l9VPwJ7ZLrnu72a4V%2F2u3iSpTwy1E5uQ7MRpiCWvCnYDf%2FbuWMlHnh3nlT0h%2Fy6T%2BHDp5GA3hD6eRHgRXsYUMP9TIKtKbXEtl3Tfg%2FyBrX6zgTmq4%2BKGXpwoDDOjf0JIAMOTsyLhMBFFE1ND3iBUda8WBk2bWhgdxWSodf9O7vgdlZxkQs%2F%2BHbHMRSlvwDjH8qb%2Be0KDinDzz7J2D8dzefOvaJ9g4m%2BzyfVnZPj3HxSqKlJ10D8nkGRoNaWcXCMMppVO2eXda6wXEWbwSn4Hof1b296obSY9%2FFwALwhkmzGWjW46QdTEHwOpHDOMtw4T9eec0bwkyBgLgj%2B6UmL1AuaiCX%2FVslstJIktXn%2BKIUQIsJ8BVkt1aZIEySexr8zYoXxFCMMJr748AGOqUBDhMlFSxiHH705sUomh%2FXcERsDEr%2BgyslPaMWJlpkvQ%2FyMJm5kKji%2BdNzWqjsvIQliuwqIM7gUYx6TtNlZsFiXXHwm6R7S0k4QvXq%2B0hYeyFF4vfp7VL52w5%2Bxr0OpiGVQ4nqi73ER9Nm3J8ZaZyoPTuLr5pDwTw5Z3L5YNxnOxPRfAdC9U5rIvbTKoYhe8BfpkEexDkZAsMPjaKjqvNuzz%2FLKhIG&X-Amz-Signature=fe5a33690d654e803a4273249bb00a01c5bb0b031644acbf623b3d581b452b5e&X-Amz-SignedHeaders=host&x-id=GetObject)

- warmup.c (from os)
- arraylist.c (from os)
- getting length of a c array
