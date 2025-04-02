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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bab24be3-c0b5-4cfd-bcef-10ef39280abe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4J42EYO%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T070901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIHPAlW27D4lawoCcIHNVtF9Z%2FdmlpaH7B6f1w1FRCSSCAiEAwrEQlzCJqB%2FoKaysFmEBEB9h1mempMW7lh66ypFLPrsqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMU4pPznUgxDyAzCwSrcA91ZHafECPytP5P6sOnxr4ArhxeLzmo1FChAh%2FPheYxSfHMldNwgX4dzaecrlxPryCb%2BpFKHuUBAOk1WyoW3NLv3UnfBX6mRP9hl%2F4oGPwexgkTW7rzBjaj9NLuCcoMYe%2FBIXmtMrVahXHU08L9mlfkNoj54ON9ksoluITRL0oOsLlWNH2ZewO4HxBrXXuG2FwwW0UgLDXPsweaLSTiGFhovRrB1ucM8fFqC36xVSxTQlUdPj2Pv4v0aX6adLFO2tHm1DRiuaHgGJF1vWRdXXuIDdzacZKW2SzpU7JysOalMvaQVxN0be0DUqRZWB%2FH%2BghcaL9JLhT1HlrLp4uEjzyfXo6EjPom9CoY0z1IfDYSm%2BYwi8iMtZbI2g7HOsGRuGOPgE3ca%2FCCEr4ZKACTByo5zx3nMUjOW%2BA7aqOsBT8NRsfVO%2Bv%2B5O6LhF4L66La%2FqCQwGOmFseiQ23yYrSfu3m2a33ehW5WpplyF2kZ5OzthXURHFNi7byeTxby1ikGS%2FAlmUUDu%2BB6dd%2BUaWZBPpeu2bptblZws2v5BsjMj85RVURLmgrUfiCuKubNyjDVSOYme7IyziD1b8TFcEZhM2ZT2lqWjL4jJBs6%2FVhgHj5nno3HfZaJvAkYnRnVFMJa1s78GOqUBiVYM%2FgGcVkB21e6wTJal5gVxubCyWBR1db82pLUduanfWlKBl9b0lp%2F1l470THLM4WDRD3uu1iBsLRStVr7GUzztSlpD4joiL%2BDevINohJkjtFffOx5zFUHwrETj6IQq3E9lzoxKvBvmrQzEGaFxHh3IC%2F57xR3TpTGmSJrINbL%2BgtX%2B%2FXPdHHvjk8%2FABArHzdN82rdnarQpTsQcpGUEakCb0UwL&X-Amz-Signature=ecf6e685a8e6909ff85e217a1a13d4993625cf2d9c2cee0f8bbdbd211d64a08c&X-Amz-SignedHeaders=host&x-id=GetObject)

- warmup.c (from os)
- arraylist.c (from os)
- getting length of a c array
