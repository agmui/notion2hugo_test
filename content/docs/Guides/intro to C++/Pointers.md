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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bab24be3-c0b5-4cfd-bcef-10ef39280abe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4QEGCOJ%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T210833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG1WdXVwCATngZ%2FzLKURwJj0uDlM8NQnFsrWtV7%2FdZzZAiEAibza6%2BDieJqgvlMAI4AM9POy1RA4frYWthWuL0YtiNUq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDPvPy77XKuCD0WlSfyrcA7m83zSqjXr4M27ilW4prPO4U582SRxXh6v48WzT%2BMUdlPolFSpAL6YPut1HOvcXwNQHf87rLfkxGTdWfWVinjU8NN%2FljbZ0Yd7UwQYYiDS7W5nvtRg%2FcUWvPnug5W4QPAwWaK9wg1a3kufRr8VJtBrGyAkk95sqa6%2FpjyPSTd61voGPewsBYOxtB%2FpIyBrOqQHm%2B22Nkq1qSVahyxNHce4Fg3RAjN3rirG1NuxTkGxpwX%2BW9C8nj6I0hAvFqHHk3UnC2ki4OGiDrdvcWhP45Rs5MQTRc5Z2wlomA1bf92RLSBTInHTGKiv6qLCBEUOhNDi6bv92Lel%2Fkv6v7K7d0QJtfnQUYeMYn6TgAIOZ3Po%2BsmJNhBB9wkTvCDlCD1FEaZYnNOd6oWO%2BdzhWpsWJ2gmOWIevVIrwwtmDT1EFe4JZcvbK8GwnGl3bUEVRtOVKo8zovm70WskDErjKDimnxoGsdhCnBlIyeONIVkH68odw0qo3W9sFFmL8Uo0t%2B5tvKcjtQ0So2oaJAqO9fybAkKsYei%2FvhN5d%2BDJhXGjp35NPwEStfAo68PNC3S5rcsvfBPtVKwO0e4STuuL%2F%2BS9QPMHjnx5dd7W%2FMIx1iDgfyPLcKC47kZ6SiHMS7rfsMIyJx8IGOqUB0junPwlHiuwyLLwgBKYpNxHm4u5hR5cXoCQ%2BSOoDC3ww8A9LApSLMPtqxiUGaFOj4kXIuQNE01QnBIzZg65v%2F91bgmmL4SAsl6J86zJK0U%2FmZZMZABudUoKQpjhNb8PyHPl3sU3Nhi3Jen7%2BFYZAimjQS94zGu%2Fvw%2B9Oilk6%2BVNkBi6c0iVEG36WWLGtET29el%2FPFGGP9JlPBWsrzVoiSWt7l4A%2F&X-Amz-Signature=c73e8820e71dc826665406c4914b8c4fa55d65064cb2360a43268b3745018762&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

- warmup.c (from os)
- arraylist.c (from os)
- getting length of a c array
