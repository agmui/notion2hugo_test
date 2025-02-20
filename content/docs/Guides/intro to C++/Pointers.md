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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bab24be3-c0b5-4cfd-bcef-10ef39280abe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UILBMQXF%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T040951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDZjGj6jN6m3uRMDBPMKlxK0zlqXdhHRoWzyQlre3gcaAiAuQ3OXWAn8s5J5uFLP6jPSirmGulHgFE0LIjqZL0S40iqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsuzWytDhADw1LgPKKtwDONUPMjxbMwc6PuAH%2FB2S5IJusO5Dv1oDcN9rVQBEjjgAJ1Dxu9C6LqOKf%2Bmseup53W8%2FYjlv%2FR3chscg0z436rOrG7OteqFtpADRmjv0%2BO%2BTf%2FMzNIGLsEGzAx4SLEGM40lKzTBz%2FZ2Ba%2F80APRXFLa%2FA9S%2FbTnJDV3KjtqwW%2FAIkr2xEXI3%2F4xOkG%2Bh9AyeAf%2F09JKCS7KaigaackQN%2B6kPACmT7s5p7ZPdTWkYCq%2FCL6VH2DLU%2FJTAs0poy2ibNMG%2Fed3knP8eqU1CjPv2HmO31DR3DCykgmxCs2Syb%2Ff10qdpzNCORAY3F0Y0WdKXVhHHMjy7DRAsO9b%2FvHhbu8N5Re51ffz0KEFQpPeZ9w5qiiua%2FTAfpfkMoRHiU5ooOiSd0HSYb3LP5bAICO1qje97Y5KpF%2BYyGbK%2FV04SLyOSyuPRgsTpBI1QP3MFckKBVxCt3wyNo01kCWDs4yHvO0EwzQx52T2ikYWX9BMzQgIuPoxTMaKIXopAzpNRvBl4tmmrBucXtMstWbvC%2Fd%2BKc9%2FQSADjA60s9%2Bm9an1IMGsmeJOa08cSFtADibRdw21iVSKpIsYEIA9hG8HnvWMCGHHIVE0G5DskOTyZyYlqqRyicwvdsdv4egGTUVwwucPavQY6pgHKrXW0mifZ6Cn8I7SmyW28unnlq%2FCmpLISSU27PQ0xz3UHrQgJwE6GUdtfHR79MQtVX83GY0%2Bvl8AbImtA1r1hIW8unGI9WqLr7QkTxK7O3p3z6HnNuJNqPHHwFnq2LDy%2FUy%2BaI29dZNF6cHupNaeHH2wtOPRry9VHFhPrSdCmCKx1qLka1yVMgv7cdWJDap%2Be0VTNbnNpN4ktpXJTmjLKB%2BEyHVey&X-Amz-Signature=e24249b56c64f22d1af9c6fe3f04a36575a88accf7d2584a6603298682bfb20c&X-Amz-SignedHeaders=host&x-id=GetObject)

- warmup.c (from os)
- arraylist.c (from os)
- getting length of a c array
