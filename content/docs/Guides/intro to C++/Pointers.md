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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bab24be3-c0b5-4cfd-bcef-10ef39280abe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VA2F7I7R%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T190323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7ckEUtysojM%2B1fzQWGU6uaMJAEAw%2Fmxvvr4oMT8HeYAIgAW%2BiSZcfzpVCLTXynrMPUOidjFhYuxfjkkQj%2F9HgpIEqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCXel%2Ff0mNNRS%2FzjOyrcA7eWUGCDZcESfOjOaEgqTRxGnJNBYwmfrmQ6EBIjb5mLLoopzQCX9DLxjLjt9YPzJMnrbO2JhapcPqwQ1yKaJ9lNqjgoNTRX0OvfR5GT7cG22cvx0CQ9kd2SL6PDIJNt06pmpQzaxI5gfgp6d0HexHGEGoxUXDHOu%2BmpwD8DEoMHAPJOXEoFxu0jU4Tr9N8bm%2BPyRohqE%2F2%2F18ahSoB0DJlXYhbHdOhYkrTLDQ8o%2FXeJW0aDfb%2FzUCraYp701%2FJy2lDbT13I7zoeTRsAErjrfN6d8z8HI%2FJWsRg%2BCnQ86EZWonvhyGsMSF2xRBPVYW9DGydz8wZSnare9GqqZz06zd9J%2Fa4xHCwgZPyAV3WOej6dLNOAjfO6q0LdE2CrfY0pILMQT9DhXr5ZtESlZolb2Jz3DsZh5Us%2BnyoWLH2UME4nl0pq4P8I75%2FJCph%2FdQO6q7LC4uZsdzcDKQ8tucXmAPI6TlnKZIhnpVhgfoDW0Qgj9bXGL78%2Fwcv3NDZYV4sZMhqUzgduV2vTSjvIx61%2Bwues8KoGRPPQp9nwzfhVm0raDE%2F2ioegxHdBu2cD9V2RySmoeXCkN4O0VeesvzeXTEKtVDHJZ6mZijeuRNVVHycIfgspTci0DGQqcRNlMPPZysMGOqUBBSGhGYFvqkMg2XLAX393Li1l3fSiYpNNuC7KRS0%2BB8Yn56d7KlBcRL1uS%2FTkK7XrqljdkM3Wp8ZC4Z%2Fb0rjIgJuDFKVaZ%2BghX%2FO1jm31E9vOKhapVUT1auaaP3pizpOulNEzULlg2Nc6oAHNQmnXE0u44O9zr1rxztMeWm%2BBTkdDqPcMuxwh4o83PpD76F3zc3ZwULsjiBstnXEyD06dzvWLK2R4&X-Amz-Signature=51823f95b8f3c22396d1e329843d4d8a84db2af16030af0f7e23fd5e55fbdb73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

- warmup.c (from os)
- arraylist.c (from os)
- getting length of a c array
