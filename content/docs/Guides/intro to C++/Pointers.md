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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bab24be3-c0b5-4cfd-bcef-10ef39280abe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOI62GN7%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T133039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIBsel77wO4GVfILj8BuFBTgLyF9i48pXqBSyAoIh422EAiEAutDjegxjfp0Ti%2B3zLO%2FNo1AG%2B%2F881qHV1s%2B0YUF2Nu8q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDKcDf%2BMhTQUg4p%2FozircAznbeVWQRKUhSJlxCMVwxtRey%2BJpZ4G3vRIWZ7koN7dVdH4wVb6DIB7FEkcBAVPBYLQuOIOI2%2BTLPUj1uf4Pd1If9Uio7YlVV6o4kjYRuXaDBLgt7lKfDxJYJQE7Li%2FgLGxNC82k7fTv%2BhjAtkw1%2FSrHkHb0kjkSrdbZ5G3d79zN4QfHw4Ai2B1ece9cRcZFy8jEvEWPiePM8abMcvcxl3pwgTH9ySb0mwx6lohqH4snyAYuApYaSQM0ps8FOeGUvr2Qe1%2B2TqpO1EBq%2BZpvvDXVOT%2B58mdgAPe7%2BrhHCO%2Bhgb%2BObsIZW8o%2FbzyVexhyWBr8cNHgLapDOGc2U1qtmwNq7VoI03DXjp2QiiKF%2Ff4gML%2BVHSXH0PWG%2BS9IY%2BWODujpm0AQmJ4599c1qC67GYJIi3QuX5cuHP2911O%2BTGvstReYlnFeADe0IjIADFnXg4opbTsEv1U2NCa8MGr4KmXVtvkDrpWvAxvSOZwhWlrsVOKmNs9sJupB4K0dVqFwpB7QVmqTK%2BTYCXCCMkjJzACE08aKC1aFD%2F901%2FeVi9dnTUEam0vXieJ7K83eNNT6qhAlJHmjZisAvbzeiIOnnF08rjnfftnp3KeczDOnFYCg79O3ucfyGIexMW91MLDaiMQGOqUBUi56ZiIcr%2FWwcX%2F0m46wZCx9dePR6ca3nGrfWEa65RM0V2irF5zMYyrqb8JAwuqfZCE7fVp1GebLbws3ofD0AtIotccrByaZ%2BqQTQtQT%2FD12qCkOZaCPN0hDvPQSAFo8eAY991uf%2BbpMIJjFctlwIupWcDYu%2BdlchK9Fi55ILmg6%2B5I9heGqbInQiYRbFXuWlzrtS29%2BFe9LNe9tMDTjDv56IDdp&X-Amz-Signature=f358f09cdd1fc74fb02db2de8d3e2373ae52049e409926cacb2d540ace999bd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

- warmup.c (from os)
- arraylist.c (from os)
- getting length of a c array
