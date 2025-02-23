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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bab24be3-c0b5-4cfd-bcef-10ef39280abe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OCSGBZA%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T230701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfbO2yaMQ0Hqb88tfPN%2F8FMTORFBo5fHpkkWmdrj1xuQIgZdTZzBTnoW8BM8XTHePvTSJCX%2BMbSQ7tEZcPSwWqOf8q%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDGKUmfJnzYsGCd9VRCrcAwzPSV1%2Fv9D1R2wX8jLiYj3J%2FpOI%2Fc9LHuPVp9bYP9PLpzPQ64xLoNWTX2ly2TnEGoxVCT6nH6zMu34WaL6vAeL2xxPEqi1x5shurFeMoy78A5rS57KtJ6b7e7s9Xjv2O6ZT1ZcDaUUw63431ynl7ICa9fnlYiPYiAOcfcYSWceVadc0zmkMpX5B%2BHI9UfAg7Tg15c2BgM3CcAUFbmHLml%2FCTjbo2gooPb50TjjtSG4m%2BYmx89pkh12F8pAw8SXSBOluikzs%2Bqaus474hThjH9IK2qHefPIKV8rCUS5d2XXq8WTN5qf7evS0yWPvCSoHYP%2BBvxraEf5pGPl6apO10zQe73SD4U1kA59MsuPOoVgMeZw%2Bw%2FlmbRBMMSH0n%2F3dPznmZi0iUARfKrv6BvSf8cVisIMpBVCjC1dVTcHMBJ%2Bz1YbzbMHLhsBX4c%2FYpkwYa8AWoNi6ZXBId%2BZNtPBOJ7lnsGKNSReSDTMb6c3eDvgoraUfs7ZdMf0i7qV7UUfeUbpUcMi8lb%2BYj0bRZ%2F4m%2FkKJ%2B09A1RCVk7HRpQg3%2FOZKGUj10BIumJ4KspBwu2SWsZAnTSImgImJm0mAKjwdReIBMF4bLOZGZlco70v%2F7lXe8lvTBsKm76rfKmm%2FMPmx7r0GOqUBgzB8rv6L0Z%2BPdtSiUgJKtM1%2FFjREafJSGVBUA0Q7O1sFQ1ZHX0mH1K2crAzvHTGQGIQHUG%2FVA5OTa9hMGN%2BohiKaT2heqVlMkicfigdahgUNC870miaFD%2FpCSd%2FZsyhWT6ya7JK6sVg8Gg%2F9SBL0tGhz6hJfbrjZOs3gRiKY%2BU%2BqTbHLpkwQM3WugWRY9lsl3vVB7TUz9zjwe5PSZ0rTRHsTcZ84&X-Amz-Signature=f89d3fd4ef8cacd22f9b61b7bfa3c2fcc545ca818e6d1b3b447488f1d8d4d295&X-Amz-SignedHeaders=host&x-id=GetObject)

- warmup.c (from os)
- arraylist.c (from os)
- getting length of a c array
