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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bab24be3-c0b5-4cfd-bcef-10ef39280abe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHXW67GU%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T042144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQDyVAlQuDLKnLq6oozlf1MW2Srz8%2Bs8C63MNduCmZ0Y%2FAIgHPaeYADT3MRd9OksaOxUEvD8%2F8k61uMt7Fm28GDuFmEq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDOlt9RRtp7edS96bBircA8pvxgjS9uA0VDubYfj2H1ARSz9ZxW71mVC2h2cFOwVuzfAVvqrjM4E6TnTAdlfwIAJs5i0mar9zbuZfDYN4kcTRU5b0L24e8Uxcsmyrho%2FdvSCxN0wU1dwqc%2BTDWWGwTUabo4%2Bw3oDXPgTSyTsFm6DFRgybeHpHePal1j%2BZds%2BS29x%2FodtbKL9ZSF%2FgfON3rJtlFikcPsCsyGtPfYg0yN8ckoG%2BF6lo4WYZlATe7N9Dd0SWsuS2MnCQCBrolHpjSIMxWwxcsnr8MyljCqEmOT3Slp5m55hCon%2FWcqBfsM5naE4YTWZ%2FJv%2BwgV7MRT7qxtaTcqrxPSkMPEIbdux%2B4kTOuZFbEKEfsy8t%2BhbCrbnjVmX3wH6%2Bt%2FVVmO1zIT7xeFEQ5%2BK4u3p%2FO7ff8haWjWBKsIO5lTxiMEhKwTW%2F061xO4xJa%2BOI8GaDdOdkuL1m%2FDHjTG4sNCKXyTEHv3bBWLq6%2BZiWGgLbDX%2F77feLaNHoijWaDzUPMa7opeoq%2BR9M0uhj%2Fs7hlA044bFU%2Bve%2F3Cla5fCnw07y9dk%2B%2BUasai5K%2BgXFCfYE7MMfkhgIkb8ZDtNAZ%2BiE42cLjyEPbVa1ti%2Fkuar2301nVhhxWQKjnJYZfBRB7u4JSpKYQWTgMKT%2BvcIGOqUBcS9BW31bJuD3QdbSnlWz%2FpK%2BtO3TgdNjto2WoptGP0O5tkujXd8oup0%2FVqDVDr2FBCkONZBZsyztCEA%2FmZqZQCNeL%2F4MZXuaeDUJBMR4vx5EzyoFny%2Faq1kVyI0rzX0d%2BzJiIUvDv4lKkSvmIxJo23eXeLfMeurhrIUlQsHvOzgHXKItbV3lZHvMvmwXO1flC9uEUXnF1c1Ajyur%2FiPXegQY1lnU&X-Amz-Signature=607ef41898f1147184931cc94c8003a26e88a8613e55156605e9ac8ab158e2b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

- warmup.c (from os)
- arraylist.c (from os)
- getting length of a c array
