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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bab24be3-c0b5-4cfd-bcef-10ef39280abe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662O7N7D46%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T004334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF9mWabI84jcEfmDHPsUOQot84eR%2BjZBYB%2BuqX90GQMJAiEA93z0yUJcF6KIMJHi7phiuUQgTJM0D%2BpV7LNq6rMV0AoqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBOQm1CaH1ZnqISmdircA7PfaMkBP6Q2fGNvn54p6krQzMru23F9KrpVU84dND4PK%2FxwO5R%2BuZigUKtcCECZV62AUL2OkdvAtJGFmRRubtKpJKHmU4zHnHqYBW7bCFgC7b%2FTSfAvOnBevbAEMB6Gq3ckvnjClH1ZbX8t%2FUXgg4EQQdmmPfLuqL890HmA31czumuMFO1FDeF5CR2DpMs%2BsnL3oigRkQIKDDIWeRcsalF%2BEq6uvA5Q%2FWePA88RTIGe2QmwiOonrzLXcb13tnlE%2B64jDBEN59AmSuood24tQga095j3XyZOYqjdFV32%2BDZp1E8phGwD2ZEAALlNUxc28JqW%2Fv%2Bd5caJZZVA%2Be3j68%2BGBAUedyyNJd0DSY2pHILiVL6gK25EzU03Qm3chU8Y1ci%2Fh%2BH7uWhqNGjhLJ%2FfiPsZXBYMZVT4IMkmz6j%2BoWOB%2BJtmYCngoTArwZ6IUl76KFywYxywrLmJK%2F%2F89ap3Wlp%2BH8NMzJhAG644l8JsqLdVAVRNvDh0Wc3IIU7NGsVbLZcSBpmlV5mEfX30m33LEoF4QJ1C7ZOyMgufNj0Eax3hr3HI0YWLMKdKLtwhjw1YntmB0rI6ICf09iCvrZlFz7MXBctWCDP9SvW6H%2FqXFgQHhsQvK4OE%2FsiEVjfkMMPwu8MGOqUB6kb8UrUFgPsSuddM%2By2DmKjuOCDGo9u1egt%2Fa4%2FDJPt09jk6GlnpKJE76RtUzo5yWBYBLXjrSpR9rewWngl4Amwk4bne9f261jcq2EhisFUG6IZ1F5UsiazmAKEqVtwKp%2BO5zc8AzcKiqNJv68HtgdInRhO%2FLgL%2B6d3c4XAU2S0gmJ3j1deOzrIqq4kQuOQq8%2BdGX46UdDe62VMHzdVch8JS4lIv&X-Amz-Signature=9a9738f039c13345295b25a31b75d12bb2a6107aa7f9cf769460c915fb08ec83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

- warmup.c (from os)
- arraylist.c (from os)
- getting length of a c array
