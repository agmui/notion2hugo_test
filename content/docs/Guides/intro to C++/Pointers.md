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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bab24be3-c0b5-4cfd-bcef-10ef39280abe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOHMJUPM%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T181135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9D0DPVjd3Fm43CxDMQ7z%2Bbrh1hdVHkrpqj5B8GHfhbwIgIVMJiam4wwafg%2B6rpODqWQWwl2fuMzy7tfdltYPTRRcq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDKWHI5xn2B4K9qb8JircAxKGRH9qBOz4V%2FY75L5e%2F%2BC25JpN%2FJbWNzaw03eAPGl6yqMidqfJIRNkrHM%2Fv%2BADafieK5iX7OOoNl0FkDnWGEcG2W0xbnT8eLEZE4R0ycwxxxyh%2FZuRDWK%2FPhjneOR1Romua6Y69szAzEVlIY0xiTfQrGFYhb3hyrJjGexHiApZ7loDRxSrCcvvFSyDzu7LQaC1zO2x0lIb99t6pUcja%2B6E61hznSFFkV40BuDNGbrYdsxZz3aWjwByzBJg%2FVpT%2FTx3YFJnAgUnVvUMngFRmw39nXA5AM3NZFzz2iCpJGcMMZPw4zvhEV835OMFou1TG0s0EPU%2BkuXr1SurSfOpgPldp7NQuTKCU9uPotYpjmkwmeUpy0QWBEJ4ZH7661LoOZuBcd2XnWynuBVfs4K%2FGa%2FyG6oKyY7WERE3N68RAKsjX%2BU38BmIBTbBWUfS%2BYTACn8mytcKRKppiLLS%2B7Odih7t9ajXyhywEOYdqnfQ%2Fc9ggOD6g%2FjPI%2FUGujlgWELWK5hW6NSaPJIYnqNCFy9mGZLZCgYOdSydApjIFV1vNuuWT982HhI8PnhLEjyDg6WuT0VpEq2g1XhRdmbVcEdJVT9Iem8QxvJ04IqGP1eRp3wbLyewV1hHv6ZO4JB9MJjm88AGOqUBClCOU%2F7lJCcFGDAwxHV5Joxi%2F9KFzU2QGPhP0dqctgWFXC6pTHun%2B2%2FwvRbPCXAsQkmp4%2B4N%2BaB7L3ErEho%2FwCfYJKxfiu4CgtjSPPxZJbo12XKE%2B7x4o%2FYhJgtLEMi75n2FqxMHk%2FmNfSIrhiOwtzyOoocpLZNiyUGEBeB17nOmjuYT6J%2BYvTB%2FOSXOxR%2BvgOCpwpR9LBZQnm2%2BZc%2B8a6efSGwe&X-Amz-Signature=072c0829239c2c15c51f9153101061aea59c5c700b40121e8417408c33208ea4&X-Amz-SignedHeaders=host&x-id=GetObject)

- warmup.c (from os)
- arraylist.c (from os)
- getting length of a c array
