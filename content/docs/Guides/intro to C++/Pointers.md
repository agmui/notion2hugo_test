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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bab24be3-c0b5-4cfd-bcef-10ef39280abe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOGCCCEU%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T024242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQDRgkCxSHFbbWnUBmI1iDIiOnd%2BHT8iqf%2FTi6RfF4UmCQIgJAi3Y6ZA%2FBKLmxlIv4VePolgtA%2FHwJzH244bNI7Ny6MqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLlA%2FB5sV8Hto2QqnCrcAyoIK24R8xAiPcme40sddZjQMEwy25v7tFVIKZ91pkQCRGzuBaLbjp3YOAP18g4vsJVmv7kS%2FWtX4d3LRyLNtHn%2FnpJQj4sqJValrKAvEBRE3tyOhpvRPwWvk%2FzuussCrXHndSx7DA0hyD5IhYCHJziPJFS%2Fd2Y7X3oFuhWJccUG4s0HtNemNnKsLChri54twJ1O432rXqmZ8mYNnzkZn38%2Fs71vJatjpdXBLrJyECvNUaVDMbQX3UeUkWC92cDxl4%2BecZuLuorjovHk6MVYK3TWHIavwmfvv%2BlmhQuZlpykidxWO6iogTJjy%2F57SGYlvsyxCFC%2B1GpwG88BJXpobF%2BeVChzcleOqB7RanRvljuWEXq%2BBs5gElyHLIc4grFEjuK1iB6KuK8bM9Xt8B0s1zg6pGvpKYorgxVZmE9%2Fv1YIMg205zfYOGYTiZwi7VCJNnYmCq1og5ZEZd3a1x1Td8EydaJbLdLxi%2BqT2tyuLMhigM4ERO8mnMJsxazDNmxlTyhUDZeloIBfYsdQzplrmPsVMtwwalhvojvu7fSFNjdKSS5dNfheKXFLCU0Yu3PiAvPtRKHLl5wp%2BHShB330aIzR%2BS%2FRQNXpp9UuhZpyRDgsRyPJ%2B%2FscEpVBsGsGMOD588EGOqUBN3ZXE%2BZMlIAlajOO6sIt61Td07w9hHQIPXiA0Q58%2FD55Dekoul4CdwwcQjP%2Bhv1OQOnIMSRCySlCTbeFyj5pqhp3j6x%2BZU1pRT4bVo7apYRAywZmt8dwr9HCuYfPzCHspfd2zRnM%2BWZ4jq0Fm%2FYSKy1eDWEkAjSGL5zvtw4T%2BhZzTUHR0NmCA2u5JBWu485Ty5b5ZBGsKfpG7zHb40Huoah2A6kU&X-Amz-Signature=a208ad8e20ef6501510de57cc333ad5fd165e3f0bce74941cba593328e07390d&X-Amz-SignedHeaders=host&x-id=GetObject)

- warmup.c (from os)
- arraylist.c (from os)
- getting length of a c array
