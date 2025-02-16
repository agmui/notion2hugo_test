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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bab24be3-c0b5-4cfd-bcef-10ef39280abe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUA7EQV2%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T050710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQCDnQ9HQzJ8OwnfsCarmv2Np3NYSECPAveVLF7I73zVeAIgaDyp4MlcGQCCVd4WLbzh7pxuL0IJ1qlh8deeHio9veQq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDGpty3Sep2LuRgLk4SrcA8yldFChU5obm77bHjHkEFagKBJV%2BT4HwCSCO0l%2F2EEKHM2SlmBesPVNeeDihsYxetGpiaDa4EiLId6eoaBmDwG3IoY2aE85o0g4sFLMcWIc1f98HEK%2FAQwwjqu1DOCkVG5Kz7yIVSJoLbunetC%2Be1DWXrmRZPA5EUeeQYtpngvaSnXWjApNvlrMT6QkQROTmnwzQhonpwY2Bo8q7PamKW%2BA4OOkcmUWts76m3zcAA6Ntiimah3cj1e3N0DtraRbB07AQeEd3Msr3zyBlsCdbMsn%2BID2k8WTr7dDKEKkIoc5qKpwUxNsXqcwDKJ5SRtc6rvt%2FySC5qsxnwo9teasI7tKH%2BDxMw92l90uh9AGFhLTJOWdwwlFzRdMjvhrqu4SXdFzgDlMjcalfTtR5zPg9%2FyRPR9IQxm8%2F8r7Qf8jZa12qQKgdGGTDbjuK78Cgm7ypx1PwOQHs5IIeCbp9PRZhI2EYXjs8DT06txOKmx48isJplhbz1lTOGiWhIVU3ruybDk5thVwgtt68SHD0MfsFd6Fm9SAPZtINXxSk8Tk2clWaFRehAhf%2FEPep39DPNPREzCtnFhPK2Zti0sS0oWYp9QUFwfGyUrSIUvXxxuydLTTROaHHFoYLx4owDX3MMrfxb0GOqUBSKs8PL8Nm7E5hSGITifi8RFu6eAah8K4Tw2M6GyiL5fYb6zL%2BGxWiMKjpFZhrBFsbFm6lYMOGyj%2Bal4SC4hF9MFI1aNZtzk3Wp%2BsLr5WvqRBq37Pd7LYpuFcL74FJ4XQmQViH0rEDgVwsVXPCPZ6M8S762FMtEKF1V8YgooWFVD7VEeHk7t03zmYC86eaOGzuz95LuRMPyuXDwusTOL3GrxU64XQ&X-Amz-Signature=f0c30129e0b52d5262169f16add67b6dcacaa122f7d51e72db129521ef23bf54&X-Amz-SignedHeaders=host&x-id=GetObject)

- warmup.c (from os)
- arraylist.c (from os)
- getting length of a c array
