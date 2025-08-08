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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bab24be3-c0b5-4cfd-bcef-10ef39280abe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663L4C6SD3%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIHVz%2F9f8RITbpiIlTwld8IU%2BLj4sj78U4bdJs8SDx0vtAiBaD2XfO9hQur4EPJx2ZFSCJFsi0F9LYRgEjzUXEy%2BnWiqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMO%2Bi3PrF1k8D1hcopKtwDkC9zsKCkn3mHl4VSXLgOX5bVb6CCuuoTYGMfvHVh6sSirohab5LqEz7N0CszUPv0WEU5WgdHlf2Ikmlb%2FDky40sJjNHqFUedNA4IddhRrWP1pkYuyoBFO0dywqzuW7A4XRZKpwPVIyCswT8oWatwvbRd4OY7RyNr9rREBpouPwliWsAxATrH%2FaZx%2BMBIPiuyVMYKP3fkAIsA6FwdTFcCtvr0D%2BIJsbqMokVjjfSG5qLek7NmwgUeTe7xAfBtDnwMUAt0x9yQkDNbGN1EsSxjTbyt7UXCSNpen%2B%2B9IVzDLaNhyvTM0owYcusLX9UVghYCXfiokka6FVhxV%2FjTgen7NguwoenJ%2FpXV8e06%2FkpLMW7LKE8nUAaaMDxqXxdCQP57qIZnpZZBvl49O4RagSy5gk38QaL1NEmDAehVfXyCllVq06ICqaylK%2B6UzoMPcG5nvorc2LXgLM7HmaoGsUpi2h1VooAXeqqgoOmyIkU1AJBtMoahpvmB5mcJmLnXw78%2FP1qqRgKcEoe1xZLLOLQAY3lBfb4Q%2BWQr3EuNre6yirNHRpfHY9ICq1mrOXMIW1RSBJJG8PpWM5a%2BQ56D9volHsP31zBi%2BbZVWoivpZ1LZjobk9fahB7kyVH%2FHN4w07fXxAY6pgHR2nWnx7zU24wFpdqylkG2usrIla7jje%2BpSmAxpNmdoV5YT72qkG8F%2ByX8gzk3bYG2Ol5Z4dIQ3T7AuuUzk6xWwys5uhjEP8D3zDiYvfkeoE4VDAjJ1yRqcCB674%2FA%2FfeqDNW6MVN4nhI8SJQODzx1W9Lg%2BjW3YVETAknloAilDbaoZSdUsA1GQyn5UOwIVesA9rzlbMb9Dt%2Fk0xU1hIahzJpSJuZ%2F&X-Amz-Signature=c2ade2524d36b31eb3c3c310fb6fa1d18584fd65a6b714a59cc7cb101a188fa2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

- warmup.c (from os)
- arraylist.c (from os)
- getting length of a c array
