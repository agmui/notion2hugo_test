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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bab24be3-c0b5-4cfd-bcef-10ef39280abe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJK33EZD%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T180821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDj35Tehbg%2Br%2F6KDANc5aKHOoYAMPofqmyTTq1Lxd8%2FZgIgJJzI%2FTbdgGrsx2Af2KGQ1PpaqRQ%2BO4CNE9qCE15PWhAqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAvqkzU0wjYJxb6jPSrcA88F1L%2B36lOC1j65oHySbuOV%2BZuQWXE5NTnTUG%2FTuMbFJb6R4D1h44nkg9053HBLCCl7BgKmy7lhCP5D976Ayev8jATzFpGLIo7raCffmspbLGdMksW34ARv3Q3HqFXoNsnjvSrtEB8Cj%2BpI7cgABV6%2BWKn%2FSCQu3A9t%2Fla0nC5egI6LgGaQXW9fbRg%2BcvWkNS0xejfN7AF36FuCeCT6vgPEt60xXl5ImN4eiXGkInNIJ%2BPPcJfH%2FJc5XzX81nOrQ3VVJsFalPGuNbN74Eeh8HwVeSM7TQV4%2FIISSzL08cfWa3dSIIvgSRUdqxl1H3Q6wFG8G3eppO6OrEgKyPJyurKyLCTJAhRCr5OJrC0w79fxlnmAQc%2BoGsgur41NBIEjJ%2Brj47f7hVkwYnlOx8Do1CNLG9tVySwJPxrN9Htn%2Fgvda2RTN%2BXkeNurpSjwtn5rZQkVzHkktLLL%2BmXHyeXxXvLiog0%2FBPx0DvCrcF32%2Fq1xLJMY3jI%2Fh9VjDxmqJwqIFVHkhjDgdulXImFXIHmVb2qdddsGEbg6VWsouECzI6J%2FJQOFMc%2F5ksJ26q%2BiKOTfGQcVTolEA99d9dhn7CZNugB5IiVqQoNhSzEucONLznrsVAaIyOmq6dssAke4MNCSrr0GOqUB0p5KSsEtTD38roW%2BlxtCHMrDV16wXD5U5KQhQFZFJytK4sIAPIubRxN%2Fffey5ACmYuaccffb2oyQ7PM77NfAddgB%2F%2FLOZkQX2V9vYHFV3cm%2Bdud0sL2SoFNYNXpc7EPX5NV6BEjzu8IXOkYdx6ISyMjjuMikMPGbPKvtjPOwiCMBshV%2FDbeRRsWPROgr3WU8umPoehswwkyojrKDErpBx1VOTWyu&X-Amz-Signature=1abd7cac73f6ebfe21e66b6184291bfaa9d694128dbd8063a75ec9d5aca5779c&X-Amz-SignedHeaders=host&x-id=GetObject)

- warmup.c (from os)
- arraylist.c (from os)
- getting length of a c array
