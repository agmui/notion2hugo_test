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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bab24be3-c0b5-4cfd-bcef-10ef39280abe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4IQ7R7M%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T021210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIDHC0FQG2ZYv%2FE%2FqmncS%2BJ22jjhkJyIRB2MzQtJArYpfAiEA3v7XURvahR0A%2Fu2D5Bgp3ikIJBke5a4ql4b9a%2Bszpxwq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDDfJN%2B7exRWQUwYodCrcAwfd8B7Fv6OTfcxef8VdJjxQWTL3q3of3YLzaHvWg73TjtTh%2Bp64NAmZW0h5d0WRRoD1vv3sglIJAVGs97wyqrmbBbeZFR6Slor%2B8cTR0XDPHtqFAd%2Br1qBDjNSD6EOy9iG8v1aC%2FbF2FGIOwzgWnaDZh8OROyvy%2Bh7P04ZmHkjT2H5sJRF7uX1v6rj0EipZ0HlsfqtHQ%2FJUSjY3AdcbDUs3aHq9Vx4YIG%2FRiXzqqZjP9S1TUn7Vk5lzbL9yciDAbt4ZJXQi0kBKjdJnTNxzoM%2FDfFJP5Y%2BiBHcU57LyPHek%2B4zxDaDuE6eofx2dpHkt0BabXAMrXRzU7XlFWu%2FYoP%2FZcOfu3hbLtpiScEvlVwOeZu4g3HjFEyZB4qlLzGcysdLoNrqYn5AtaAV5NKBgcIv6t%2FwTt%2BuCAz27MtwRRWZfXhl507DwV4sFM8L5mIhu2ttu2sa8GiPJpXFE5ppweZyirK6HiZmJe5%2FDNONT4W1Bgi8KiskKAHSYFnPxuRjRZvZ%2FcMmIjcbaJGiVnf16esNX7SLUx3pmDEMU9JBtmyJJMfdBsJGNdyYrx6Rp%2FwTE%2F%2FgWXtv64EHPJQ7Cxo92nOIiJdt64RC6MX5%2BthsF5luaJUAK6E6EJ84Ytk4lML2byr0GOqUBvndKJoEOngOPXUGm8U8NYo%2FWOmTeft2oV35CSFz43l8%2FXJPFHNYGfRIrsKHzXX9RjN1SaKJNzbSIbo7UvFW6z0pqqGPnWMu0FIGiuvuWEgQz5ChQ9jnosDT6ur1DVzMx3fOnNxW2bVP01%2BxO%2BGejyhmfmkKmsoVmg9%2FcMaw6hcZv2Er%2BJecnwwMU8r4V1BuMeioVk%2Fk2PaMg5wY1caD2ejO9UHC7&X-Amz-Signature=cb5f0fdcb3d4c0aea0d1c9f7fb9409574b3e8f89ae0c572113ba8baffaa35e04&X-Amz-SignedHeaders=host&x-id=GetObject)

- warmup.c (from os)
- arraylist.c (from os)
- getting length of a c array
