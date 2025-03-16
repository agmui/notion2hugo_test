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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bab24be3-c0b5-4cfd-bcef-10ef39280abe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YA5X56Z5%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T160756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPKrDZJQYTcjiDyblEvhfcmWVq8Lyb3fuqz8yWomzMBgIgBgs5vSGajLVSaUc052NVmWIHDlFqNUizttfMuPevXIkq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDO8zI4L%2Fr0o1%2FWkAqCrcA1zA98aERSag83yW8M2GLADsgVw54Ee9OAusjuKQJ2sPataqumkia0naCFGvHUbDyHEUF9bbuJBE%2FAkhodXx%2FLO7b8J2Sl8SXqNYcY18zHA601J1AhACEaaJwkS%2BQfa2j55SZZC8csX2GWZl0Y1nJzzpl%2B75xjE5K%2B1LyH9Jsc4MHj1MrnAJpghZOlaz2Bg246s9yoGXdARr%2BnuRyiuI4Zi2%2Ba3M25rF%2F7vgQDIFCI03%2FIWJAeNjEYyySrbeFI%2BhxkwlxQVB1xGU2nQ2%2BsWSPUbMHIoX1y2a%2BJexaMnEIbTcwT47Fy%2FeEuLo5bRcWg96AGf2Kn6C9Jor7RcHnt2xmutP%2BndJf0xmC%2FwAXROrZI%2FLs6dBNiHvHblMnxNGH53ilmiXcjSfoXkvzr6r0bh8YO3usCqIB%2FHd1%2FkkFxBHdtKCVx3Ki8qXqGZwhygv3%2BykNtSWucFIvM%2BJl7nZQv6MtaANhzCjQfolU%2FIXTbxB%2FDzbIin%2BAL%2BIojM19zb9AKG%2BEEKDYWun8uT8dkJLglPLMoNPnuWsw9PyEbKhlSbJ%2BohlkYRuVJWNRLtlcUR4GJk7vAJb7wB1riaKnoSbgwgop9M2Iq%2BIov1mxNw79V9gJgUuVO5XwoV526Ib9O6tMKze274GOqUBYwB9tFLwTW0KTk21yi1ifzPV7sGsIzx0agZpSz%2BdmRGNt71S7%2B%2F1gQRcd9rfQlFUsOebVz0Q%2FsKxLH56S5sKZXtrxm5BJy8oAXN8KOfVxVHhHDAGJs4kfoKPSkMUI2snmkl%2FHQEZuGlYCcxw4%2FNO7SRdnK1%2F%2BgE4OILNlCRICxOXhwiZr5K4zejMZvCllj5BVGP3wo4RD3JONF0TMU54wxCvRUFc&X-Amz-Signature=c087412c8a6732aa70103c45d7ab6403cf42b63534cdb2a61b3cb2f956ac0ecd&X-Amz-SignedHeaders=host&x-id=GetObject)

- warmup.c (from os)
- arraylist.c (from os)
- getting length of a c array
