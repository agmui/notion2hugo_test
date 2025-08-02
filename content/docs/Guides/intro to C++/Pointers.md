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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bab24be3-c0b5-4cfd-bcef-10ef39280abe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNZ7NCEJ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA0fwxBBrVRiZbflDMAvSdPIAg44eCSMXOR9BfyeEYnbAiEA56astVg%2BW0kOzNpcQtfFr5fO3y%2F1DtI7EeRkQenCvukq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDFxI7BC%2Fgz3xSxzZ9ircAyixyFoP%2BZ852d8Pie6pFQWRkl5aHI%2BtSPKrECrl3WJrUNefh7ptzTy2ESFlGgVCPA%2FYDQ38nUS0vhlg7ix9dVHZgRm%2BazldRuwcBPoScXKpMLmuPH9pHIRXA4%2FlOjyf8tjeVP7YqtSIqXxYEa%2FquQykWP8nYk5kSNzMPumI0Ze4Z7hCT9x8rsWvdxzn9CsX8iGrp7evrx%2FYki%2FDgJyitZodePu6hPMr9%2FaZg0Hkz8K8jxbLnPb6tbu52r6Cgj4rC5q4SbExpyTnXQRLY2xRSJxXWfYFbRruqSkfuvLXe9QNlL%2FTZGOHERi7cthVYDS%2BbJo5MACGtALy1IEv5CKYIeGrEtqegCbGlkdgpArbdDgxkEB6lK8wa6vFeHJaBgJJ0%2BNGqbKNPaTTHZ%2BSVjF1Kvp19djjC20moceiMq%2FjBbmPgHUegCM2WsOxFn4er%2FMq6P33Xw6OdDDKts8JFv3n5lgw7mav%2BnWzVqX%2B5eTOysyMATPUY40bYzTS9zHNu0TE%2F2%2Btz62ZLQT3PnG8SU%2FzT8BceDwqQCt4YtIxw%2FYc3yJbMrwO2LTQtHwIXqGmGn%2B5aSfwFn3jwb0zGVgR0yOO%2BvqjTC6UDv0a8X2mCZE1ymiIwd7SQtjvTuKYOdRCMJuBusQGOqUBekRWiWsGXQwgxQ%2FUuHrSPZ%2F5a5M9a%2BvUHGVrEtisFQFbiE6QRGex0K5VUwf%2FgzxDVkU7TxYZIaJvk8Z0Ap%2F4IRQLtGFtvQA02w1GLzvUY7BephfDmjC1dsPSpxgmylftRJliMP2JQzgemv67e19lfaroqxZ2kvI2ot6cYJ0x8QO9FVdvsb4BEaVt9UxfRKrjc5VGiiP%2B9%2FjDNmpA%2FOsFeplDz%2Bbt&X-Amz-Signature=f2e30874b78ebbd40e3b3efff13eb935c9a7010e6b4bdb2d1ab0fc15ff4c181d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

- warmup.c (from os)
- arraylist.c (from os)
- getting length of a c array
