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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bab24be3-c0b5-4cfd-bcef-10ef39280abe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RMP26AC%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA4pmBzmYIauB18F2dSP2%2FlYouAzpPiECcoYTpLiSVqFAiEA03B222UjuSq5WtilyZ%2Fz%2FzY5uU9C7ZYvWOgWARNCUhsq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDE%2FycErg%2BAyHV9GrRircA1c7q1y49WSeDir9b%2B48VIBCV4YHmRn46NTWs1AIf7QLio5Xzf7rml%2BU8f2uDRrnEZzy5owjmIndDDegMcIJxrK05emFAiMZMfJ356WLVQJxI3hqryGtR6IRs0dHNi9%2FgbnVJKZ6OqBkBGks0iNzhZ0ZKATKl1nibk%2B4GotwuwfBBsq%2BqZnJpZmTk3DFwsiF26VtLQwM3a1BruZ9jw%2Br4%2Fq%2B0bWIzG5Z2cll576xDUR08tKuAWPvQX7YckZLlmpgH7czOqtn1%2FCtw3n5NEFbl8lHjrqU7lK3x7M066yZ3wF5KbNEjubBLttwBoXjCZEMkggh1BjS0WxDi%2FFts4%2B0m4DLl9innQZgiqJlyAddp4Iiv8UwORD6Mio8bCKmxTZp0gkBsBcwSBv5q%2B2GYv6xTAfLgJwqHLeUr%2BfDzHYaU88Qxob9bTQfoWgc2lgAMmUcbDxRbu3FKXFhWmPLlH7niy0XRtTCVIitNcwqyjYN%2FePg1nRdHa2tGBONxpUFVS1sJ6ksdx7P3gk12bpZ9ni54ELhDFp3srEgVswuJNyrYa4ptVurE8wv1VwPTpa1YlthRsdPC8QeWU9hBsT8fUBC%2B%2BM1MolM4E%2FpItcQVAC3yTpzOI6LVHpZbv75WQWsMJu0ztAGOqUBP7m5dWht8UL8%2BaDVy0vZ8aI89A9QEe2Fy1OxNL%2FuTYy8OPKuxKyYKlXn7HtDEALjQN%2BB9uMzH1vTuUytd07r6gGqKt65DF7NojL7%2F8m63TsBkJKIV6GNDpfCxmPF2DRUpfm3L%2Bkyvu1BtEf1ukISPy31mNvfS74afgHMm07LJMaVq5YkRquHf7RpR6i3zVym12ONrpz71KCKXWjDzsm%2F%2BHA8W7nQ&X-Amz-Signature=40e99ac3903ebd6eb9569bd963dde9223ae1d7edf9442f55eb7cbbe0f3f0e874&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

- warmup.c (from os)
- arraylist.c (from os)
- getting length of a c array
