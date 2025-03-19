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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bab24be3-c0b5-4cfd-bcef-10ef39280abe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNIZ4H2D%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T200849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDZmRR5ZcePfEviM4Zws%2FZlcvq7u0XLhRtQsqVj%2FKwoPwIgGS4RW%2FHrxhNJTELZsn1dr53n7se37uqpueSImW%2FA4QIq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDOsLVYx7ff6d1z%2BaLyrcA9KcXrFZo2xIEVvoajE5cdYtug8AkTk84ylw4uwq8%2B2gwwKflcF2wkPJTJSyw7EU%2Ff3aKkO4PHnMk1JYlAi9730q35Gyn2G5COozN1aonZWr%2BhC4FA%2FntCrVN9RLWn%2BRkMzxHp9%2FAZJAI2X9rW1V7ErNz5xKdG0d%2BC1BfKHrxGrVnhtEJZC%2Bx4oTsPesoR%2BHdTlSxDGWdYZmzOtgPG9TThtJIaAn44Ou4UiDDyzHADc%2FIHkTdpwaC6Wu4B%2B6H54P7KS%2BDgvFe%2FkslvZr5UZ7dDorXEizq%2B71WP%2Bdxec3hoaatSyNGIAjAg6UtSjDPVveYprGgzLEPBtIzoHePNTnF5N50AyWRyOS4jJljH6fBCRBneyC30ZkwHXpO0oR9vUt3ByW2VgPIysLnna%2FVHxYOZHwTpW3K%2FEz5lrerVYwTdqOThi5%2FMRQRYO%2F0oxdzdBAmyP9yejFezd0XpcF2BjvBGwUJ0zUBKslM3OkybcTkKeV22TWTpbZc%2FI64%2F6VL%2BA%2B9pN7A3rUt9yfAv%2B6FsNnTJ6KNNeYpPTUg0IZLHz93ep8H4pCI0leIs1nvoxaMl4MMt3aXJ6iJhwsdYvF08wH3hXcrjgpt%2BDRG3dN9zENcWFDOQpHXhoaBDcWb7qFMOS8674GOqUBByzAWO1nt%2BTSTpCGzqKIZmyDhZj%2BJKpzGeH2vbt%2BeGI93pIgYuyKr6sW4zHrZKZzNML7C7HzcHXkLDitlCkbxLrdqrDSbPVnIBGDos1q%2FEMh6ZLMMO9hAF4eqc0kMXTAw9CLI8OX9pYD9M4%2Bzfb0a8QHEkhDG7%2F7Sagen1%2Fxki2m%2FFvAvKlvSETrXxB4DJG0%2FNNdQ26USNoBhGjAulYuKEHHmoxk&X-Amz-Signature=067ed35cbfcf89c55deb6df9cdbcd5b4386b38409fa44adb6a3fd2c839ebfeed&X-Amz-SignedHeaders=host&x-id=GetObject)

- warmup.c (from os)
- arraylist.c (from os)
- getting length of a c array
