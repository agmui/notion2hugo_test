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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bab24be3-c0b5-4cfd-bcef-10ef39280abe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FQC6ZQ4%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T220757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIByE6K1Mt%2Bv%2BAqyBaCv0u1uOxUYTbi%2BBUcvpKWJLSC9%2BAiEAp%2F3fqRDNI%2B%2F3BxzNdoX9UphOJGCj4RCd1azyTasp5dcqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNiT7L7uKap9HEmDiSrcAzFbLgH8ckr0WMc%2BWCjni7WxVvKNkTCGVtEd7VBoNNu%2B05Wmn3pSyfex%2BQ9X%2FLc5s9kVgZB%2Bf0uF8aCslSaNPfQNBrwI04terJWocSiokQdnUJ6mUiY89RkmkhAKojjCP8kGu133CTZgNb8Cs92kEjhinMLlZ1Whc3U7mvG1oDCuUj%2FslRuAsWAfffvuJb3HsYrKixuWYn%2B%2FW7%2B2K0vgK2yO2RgfcsD9bjRAWqKLaUmK32ZLyMKNtXvo5a6qRwcsXfOnmPgChiMvxbUM2HqOVoUy%2FdheXmiFNyBHhSd2799X6unMlrP%2BtvZPlDMVWDDmKo%2BJhzy6z57eMeFp3qlWO8%2FtPREIki676Z%2F3RSrUzWcj6WbtGRQI3v%2Fr%2FvGFmfGEF%2FgOPT3euiElDEc1nIrxtegbgLPDDQmPzc3drdF%2FpmJp3tMhvXg%2BlPGdRaxbL1dkaDotbsVte%2FjVc0JPzPEEcygT7M2FYRaoTjX5bo33rmrWNbegSr1hIuEL5EAeEGcSqB0CkzCteMcpKbLXweRWkWc%2F84e1czBghUPeVZWMC21NUmPxKwhlTi956hFO91oTSmFdrOcKsAnqOwHuVUyzgDC2S%2FCcuzMdakofV3uQxYqJWJgbrBT26T0RnLsqMKjL6MEGOqUBRfkHu745KhJPncNo%2FQPkIZtM%2F4qyiDr98xBK3xRaO1v%2Fw8Jiey0nyguuN%2FiNLKMi7Lidz%2BZRqYxLq44eCDTC9kcSfciNu4IdDqKlsUM3NpY7IOBWhK0yDzelELxsHs08a1davI4OxkAEkm0TotUmOIM%2FQ6J0F7zmWbi3CV8sXTsBYacV2%2B7pG5R5HZyLM2msSDO8VQ3aRmoey7J640f3VfWm6n4d&X-Amz-Signature=eaa4ff53d41e1039f8b4ef15070f1c1a0fdc121deea5a8fd72895e815bab40ec&X-Amz-SignedHeaders=host&x-id=GetObject)

- warmup.c (from os)
- arraylist.c (from os)
- getting length of a c array
