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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bab24be3-c0b5-4cfd-bcef-10ef39280abe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEKPBQWI%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T121535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB0Gs83GMTaQkch%2FVauMU5%2FwWVkmxhzWIMqgt%2BrgK47iAiAg5PGsgzwZZImqYPJyw2w7NqfM%2FhazdBX8nzlPaJY40iqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuYbgK%2BTUKCloffr2KtwD4RHhaqKr64S8i9HStJOcgC%2BnaGZvPQMpGVCyb76C4lPNPmX2vmxUIFiMvrJdITwS2UrGCzpPcEck4XN8ord0HC7Lfb7P%2FAJPiXa9UIeNp%2ByEpV1hiaW1DQiwxYtpQNKby7HHQ3%2FRErSjfkhpZxfN5iI%2Fa%2FvRTD05iYrOunw6aSlt5rMzZpDbBN2rq5ZbNJEDWoGYwGpWIraCrdC56uRyw0jh0TsRsFixcv09O%2BVCyNsWGlsZj%2Fg5PlBzr7s9wQD%2BnwC6XDm7m8dBNwMGz3luFuB1rhDQdUWWZw0d9zCccB7EO7zaxZOGvvZOKpUsDMGP4FgT5E5K4MgLDZRs8pDTsLK%2FTdF08CnvTM8kSBGKAXjyFvFu2aUO3oZZC9bTZh%2FT9EuGbOeGxCzL7asmrHBKH3LqdegX6L%2FCUdbE1Hf%2FZXlDCoXtGOgGT83uDaDle8FQi%2BcRQ3%2FWOMCm74sznEX4FQAZ7w%2BZ3okgfZO4VPdOPBxjtelP3xPaO1L9tWd8eNZW6ee09rpdkIO16ND18edY%2FXlORGb836D9D7QXRdwG%2BUD0s9ckHXqwENagPH4uLkORXIoPIJjO2%2FDjgdFfHjkLDWosc%2F6H88OX0xtmanfdoko9taJfSUeBTkJz0gYwjYnhwQY6pgHx4uvdvvhus1hRxgrcVEMhfBM9yy53RA%2F%2BT4t6xjypNFyhBR9A5jo3gk5W25ny7hqJXlZofE0AjVZjoGVbfx4a74e%2FVDN62sCYfGcmso6QFsyru%2BMGmoDBJ%2FFhxJzhxeuy0mj6rUgBr3ucPzSDRp5P4Fjk5%2F%2BmT7hWXxyPOvV5oRLOI5SzwQ%2BeRPHQ3lm%2B9wyVh1e5W5WIIN9%2FWbqYN7YOaGyUQzR5&X-Amz-Signature=8ef7c9546e5fe1a5af0c2494ec02a281de021223dc46cc9825417450923a0edb&X-Amz-SignedHeaders=host&x-id=GetObject)

- warmup.c (from os)
- arraylist.c (from os)
- getting length of a c array
