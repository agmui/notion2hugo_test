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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bab24be3-c0b5-4cfd-bcef-10ef39280abe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LDTR4HR%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T004026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHukYzxrxjK4rL7n4UOw3Y7GbJMCquEioAndsItONJ6MAiB49H5zLJrNNb2lRS25uccAgawd%2FqAgvRzCgXnMl4bGBSr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIM2YOZDFrQ85SMp3YhKtwDqdc2TTmlhHZJ1OUQug2WvFgHBWgyV0PBv8fu36GwoSFKY8HByS5mTx%2F%2BdXjQDejcQ3fwORnGWS6tRqVa53wCQjmxS8d5zeQj1PBXfc6OmzMU96YtUf9HcgY4yWI97BPEPmdj%2FcwrLA%2B4ZfjjQan%2BcnzH8hu2Gato9JpKjPghNIKP4Ujuk1rcZSNutRR%2BemRPywdW5vqyB09P74hFWjsq4aexPYoqQBhpjUfK6dGDyhQ8G9nUjDXU4B1F5kN9CkTnVabo2yQgwbSuCdvRA2WOHWQ0bStT2jQH1LU7wThR45YO4lczFbia8%2FTANkOuSfvY0x1rJ6djO3Pwb4IJS10AQUioXcSXQtsMkxVbHK9fhWT%2B5rNmXsmxZaq%2BvXnhNw5aAvRZGYdpUWkzv05fBz5hWoXQsnMSbe9ZXh1yfuj2PlVgtaImN07Awb94xT6qJqm2Y0stMXvwjtN9fYgf3qu9dBwAj76LayomzYHiWHpoItzbn5kQgETGxggpf7E2%2B2c5rpNc0yC8prLwak%2FojLtYRr3xUU%2FmwgDsKJUYEv7xQgmGJvm5el3CUoMkouLA6KG74%2FLnU6CeHFISTIXolZ%2Fk1ctwD3RIsNXcqibTp7NnAjnU4u507JB5IHICmyswmdL2vwY6pgHaDZ0BxRCJHAMiW5GuewHqDAdsDrVXPCq2NBGJRQudDNPunFiumBM254JkiHbocJvb8tpuamxd1KVqkwcrN7iN8bhruB%2FWLaJFh4MNcPWW14eonNTwhPeSxEc6cP8Rry8ZkHkkOlbV2tiJXWf17KbpJO7pM4CV5b0TpjRPqfCiA3eQF%2BUFQsjx3Ai%2B%2BiUHR4w4UG0VK0YuR3FTkqInp3U5EaLKBc9w&X-Amz-Signature=3248971dd340baa4c77f6a1960e3f7e0a82781f9a6202221ba97beaabb47c92f&X-Amz-SignedHeaders=host&x-id=GetObject)

- warmup.c (from os)
- arraylist.c (from os)
- getting length of a c array
