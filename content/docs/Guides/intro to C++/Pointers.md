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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bab24be3-c0b5-4cfd-bcef-10ef39280abe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JTZQ3TL%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T220821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIB8fdesXv%2B%2BIkyXwfFgUwvdwfVJ0BDYxHo1qd5L6i%2BUUAiEAg%2FKoD5tlReUfTnxxHSlnIsMZ5GwgIb3bOFeWlHga4kIq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDP9xBTG%2BnZjrjWyFVircA2iDv4dJafMBdDCBZeeh4465kjy1y1Y89bvMAAf6lKBMgx0omksCVRTtTzfV0DgeHCWnYa6z2T%2BKxPT1ewWaSyrffJHWfzH9C%2Bzj8fq8z3ae8Srq8YdrQwzkbCtzTujbYJYf%2FM6oCN4nqN8mE%2BzfZPoNQxgxt4ZQyRUkf83KWXT2K42Nq%2FjJa2VZlC1URKiofxAy5dS56lJ%2FH%2BHw%2BK3Ju4rKYOitbmhzu6wubiqYzPIogfQ7RFNxRi2rvgclzXXVAWZBEU3vHUDH2OzlsXrTThOmE4HTG1Svwx3lmPRxn0KBetKaBEze2abXcIKrovzaSp4UBm%2Fa3%2Barlnb2jr7QBzx5IV58RJRRASPNDmux5hCV%2B5El8LlLWFg2Du21KM2UPTQwzgnGlMTAmcOmyAJ9XKPOj4Ta%2BbdN0WbrzZXn5HmX99Lsy5xBbzjIvS4dFzzet%2FQAuu%2FxsF3AkiGBbSoV2g1CtMCdJw5XNjAYOp2d9bY6k2YrYtQzLz5qn88cd7T0MvvSWjm%2BFhOeIEHR9lf%2FJtZKa2L7FhLuIeo8IwMDMsSCfTFA9LRXUzkMS1tEEnm4mRTtu%2FLIaDiqEv902sWe%2FeCGxenPUyRI8E0fulvoj3lssIH3DKt85wjIkgUgMNj85sIGOqUBaoby%2FLcH4yFX%2FRaCZUK7sH8ERbsn6P%2F%2Fdu7t5VUq%2BgLhBBdjjuvQaFqfuJbR3iA8pqOEjHUxiGVsH%2Ba5K8l7xrayzDidzwbPnTzQ1PH3B43YPmPjsapiP5dxXUwQ7Pjrswf4VfHbo5oClsWPiNH7UnHdXVEtYx6ffV492cv9qNH8yEt21sMJ9hT3U5BhR3KXQmNmjLWbsnj%2FPkjRL72le0b6eGNm&X-Amz-Signature=6b50143c1e623dc9cf98c274a1256c09c1f4a56c982f1e72a89ea451fe241eaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

- warmup.c (from os)
- arraylist.c (from os)
- getting length of a c array
