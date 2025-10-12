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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bab24be3-c0b5-4cfd-bcef-10ef39280abe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEVY3HNM%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQC8itpFykQ9LP0DjMybz%2FtwIrCS0k%2BEW%2FDciDg7ph6svgIgde3lVP3%2B0mgxIXpm4AeUhlx7plY6257emm4L5zm0J%2BEq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDKnBLPVsSN24jQMC9yrcA5DHUlntXAVWVwn53U3C%2FLN82ZKjvmEUQSGVKfyQUlIw4t1dBVAJhMTU6yHPytdOdhAp%2Fx48oS3uBMIIRPKeAfCErJe4T78q%2Fr%2BvXzmmEsaOFB2gmbjIcPL0Xjy%2B9Co%2F9UuBJ00Ma5NFk0gdiBkKZwrWCxlYNOWyQc4fyHixFOZ%2BzO%2BMDg%2Fy8PshHzX8vqLLENywNaC8XY2Jkxgge0YRIuKTj8iHbNKmm9%2BqKgb9JoH9ORps6fbKztl1ZyKUpmkoGbXVB0SE%2FzOEnAzu%2FJVT3GsbxjhLCxf1tT5HIe%2F%2Fg7fleAcc8HexT9b7eF8nsOyEWccOedJWHouLPxkGgj1yWs3Va%2BZ1o1wrR3Wcw7Y5HbhQCGMc%2BuX6rNf9xQVjup2zTXuk7%2BURAgG60RqrsLKrTbRsUCs8%2Blf1dbjPFdjqhq%2BmSAu1erZzK3DphOARJbdZn8n1AQuVXaFMhF9%2B4%2FQeFLc0Lo8YgBmV4oath0XPkude2GrOo0IUJdi%2BwYLZkSN62sCoPA6%2B1NIeReqdQTK06SM8DrRCPvV2TpE%2FrqUcsSE66H%2BXxQVwNJZALbc6PM1DJDhD5A0LyKyUGRcd8YDndJgRJXZb%2F3FAjqOrsDoAQ%2Bqlg%2FxdFWpPhrbQeLXaMPS5q8cGOqUBFpa%2BvdO0Vu6nauJFNV6kbAb3t930Jv9giv5RExWFel5jniAX7jEXDk3%2Ff4KtSPriiON8vdS6iIaTSWS8ge%2Bc4%2Bz3QJYqUzB73zdhRiTEIfIENhgp3PUQ3i5xOLaSVfanWzVKCXw9lFTzL6TdWu5dFXFpquiGLO4YDm9v6s4URyhpkrFgUeEiiiLh7f%2FbgEp%2FVMS7BnvhuYooRZ4xLms7nMEnF7zX&X-Amz-Signature=c8881081bd8b48ceee8a88e1843c61a550179170cca22aa44c83ae54067ca3a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

- warmup.c (from os)
- arraylist.c (from os)
- getting length of a c array
