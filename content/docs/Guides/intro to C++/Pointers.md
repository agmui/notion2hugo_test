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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bab24be3-c0b5-4cfd-bcef-10ef39280abe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLSSEEHS%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T200805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQCawPMDTdpP8tEZElv%2Fink0tDfGWeiZjLDas%2BSrZYbCqwIhAMGfk%2BMsNzDFRI7EQLmoKm%2BNNEVat3GlAT4z7l%2BnxzqfKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgykAPG0s%2FhcDt30vF8q3ANhvq0GSNezlQhJQiKQr0mtrn%2ForANsEeiFt%2Bv9C5LVNGcUmdhwJ9vRSmw%2FYQ24VBcFDP0%2BhWWiNMHf4zxRQfjCSwclwyxprc9Y5QQH5g71pDyhErKEOPYwtQi5yeDsh65NfMa%2FcHadjZoOgNfogcD8zhdGhJPbiBmLXalTAYKH5uv9EzhAadXVH%2B%2FRHmx6WXWt2JX%2BLQ1pJFEcG0ZcyorXRUlVUDvtox9EM%2FzUz9pPxsbnddW6jsWoEzySN68Cbg2Y4WFoiiGoj9zSmiVWk%2BqlI2Pbx1xSIVanceTAN3FUqX08OjvsRy9ncB2F%2F6FwLxvI5dXNlJMPFJRYK9PuuDiWa4bwFKIuu2XPBRIQLElZVjDbcNI5hdzNXDI6P5%2FJkQ9oY9h%2FoSPIub6YHacSYNBKY98SGSeiaRE0bQI%2F8b96AMNNbsjeR2RpKp7PSy8kDp%2FyoEKS80ql1aiq%2FZwwerHo16OruMVJdLipPNyl3y7nm9Nz5Dbg3d9teMM3BQGThV2%2FwwAe%2Blq9RYDnEMqb%2FDRvmQEknu15h4XkHMX4pA8zGmHhv2VdNTQh3jUt2P9u4DwxHbehO1DgmDiSLaMK2JPmZ7IaWZZJfgFzY%2F86cus0jIxfXZhDceh29xvmsTDy%2Beq%2FBjqkAWNmUWgsSn6eE3P%2BH8%2BFBRdJomqKkTL5Nd9q1drYv5X3wlRF58tsMm97LOdY%2FeEmiiJaw0K6z0SHMbmKAaV6fi3K4gYrQb7Oll82ecQ49Pw5LqWDFZuej8TERe3buyEVuCL%2Bc305%2B7RZ1xPnKkgNmVSHfgBjQQJPKv2D%2FAjNSZC2uYEmFDhhbNWDzyEeXa979FBdAo65I713zE147JDJ3rLG51ht&X-Amz-Signature=98a187693c2e9fabba659030de05ba93bdce778eb741cf25aa452414dc0d2c15&X-Amz-SignedHeaders=host&x-id=GetObject)

- warmup.c (from os)
- arraylist.c (from os)
- getting length of a c array
