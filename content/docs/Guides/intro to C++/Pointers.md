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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bab24be3-c0b5-4cfd-bcef-10ef39280abe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EF27U6J%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T181215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2FXhf3zvHHgDSobmAGjm8KhPYTsGJao%2FDmA5epsvi%2BCAiEAumTobLxiJLqFnuCnCOxWwGKD7RvGHfDqvjKeM0TP3bAq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDPSs1hD7Clrx8arLAircA%2BHMjPaKl%2F65bfUgmIwv32Kbe4jbigtOQhI8V320XyUEHyFr%2BCGbf6M1idIu9dtWeA3c%2FerkiGujnkLY7BT7uj3dNNdf5qT3qvr1xBHDpMBj8O9HdCy5huMH9uuUqcm4MtFta2z9PbS2GWf%2FL2%2B20pJDaCp2mXNzSkklV8HuT220pqMZv3Mkd0BEwScwfGJZeAGWesg%2F%2BjreVdiYvcsqwKVAEkO7ZWfHAybsy%2FWd9RfbD%2BhlHQ0URqfo3vkIVQy0qfpuDf73mLwfbfguUvsMgB0ZRuGDpVUciCxNuH%2BRvTX0a99%2BV9GQLMJxZQoYvePhEAt8UIpyeHTNFekZif6A1JGmMBLmP5zQFMgigohWdusTLEt1bkxsQpc1XqeXxXRJYS9jqPAFXkFulOOP4WkceamJ9Sd44kqzSHWQVlBQPHFqh2PJRX%2Fm8USLBIy7012ErRElluqUILHPB50YbgFjk4QOxLqxvDR0gT3UQ74VTDwgQcp%2F14BoKHNq2ZDEVIFOjSeQdTFtqTF4yyXosxeoyqWcjmZ80JP0VOwD5Hosndcs6l7rtKIsDMhjanxN%2FmUXZ7kcO90zBjLIdEO8otFnSV0Cs%2F%2Bby1Gta2KHT4aIg8u4GWEdtHfg60z%2F2xSqMKC57sAGOqUB5h1yl8oeusoduSQdR2x087gyxXGmp78G5qAVbVR66TGqSt3d5sS6CtC%2FdB7n%2Bu8GjYUOxpeJm3VkQ6KJSlUolTCBkpYt18agxT0euWDiebre9C%2FiKP5xK9kB5nrex04WKAOzJ4SxN1zoIoC55PVwycRkUKNjgedByLgJsifV6X45IBkboiiUfrgqqiGwe2cgDEoaqZQ3gB8KELnTEqy7cEbQ2N42&X-Amz-Signature=38a8a3d061863f8b7b14338c95c2db707bcd701000a64e1923439a3d093a4777&X-Amz-SignedHeaders=host&x-id=GetObject)

- warmup.c (from os)
- arraylist.c (from os)
- getting length of a c array
