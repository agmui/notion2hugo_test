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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bab24be3-c0b5-4cfd-bcef-10ef39280abe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKQJXB63%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIEKWHPUktRplHbpQd7ewlwW9eT%2Fh9uWs8%2FqlhqSYRUPoAiBOGQ9oCwxsqfwkupPgGmo565e8QWBaayIvNWgv75WQWyqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJuyPfm2rh%2Bz8aXU2KtwD3nX6HT2kGJcNDjTLvkqdSZqw5j9CSqxC0Nt5uzl3TQt7c4KIi2BteN82H5Q3cde%2Fk4cFrH1E%2FuVE67oFwqwmB7mwIcLM3BPFTHq0q1Je1Ga51RDtrP7a4Xfkg%2Bx1EohgZu57fbY2dLIPDJTwGI37XkydVFbAn%2Bdj1Kod7ANiuIVOQZ5ivrvvx65zUT5v8nsJE5yq3XoibPRXx%2BCkn13Qh6eVl4khcsH1UAZz1DHYv6zp4Yhc81rSmD2nZkdXZW3zJfLYSCExjg5PKXC7yvp1d1lmi%2BvW2GZLjLlxvT95G6voaGm93y656XgHS5Y8b9fhk1n2pDUAyhDmuzqMx2Y%2FX4NDkI6JNJtZRRXqOLNFZAy0e1hxnDfEk%2BKYKcjTPU4FZP4lNobmNxI%2FhS8igPHC3cJbBXFDR32aa5JtIF1BccYJFA6GSyYzgqOMeWtayZAQDoUptTmJX6dc5N0WSRS4k7AOQN7qqtyqDazfHQbTMuHPGzxyIhG2tUEsP%2FmMPUAg3vi5%2BVVqb9cc5se23V9r3sgq9ja3r2XJsj0sN78Nz%2BRaKwMxK%2Bg1azoqKMFbGsvPGrIAOaLBFQ5JJQzD%2B99q%2FEEW5hhbziIc%2FXUO%2B64%2F%2FbNvb0VFFkyy8G6wZp4wyYaAzAY6pgFhnf%2FKLmkajTPPcPfS3YuiCsl6g%2F8xWcUVm5ga5d7M3ph%2FUu7fk%2B%2FnQO0mxHiiP6XM0RyDKVr2aj2BFvCt0rci7vF5IW%2BsQwc7TQi41fO4JPr8Ef8qXFxxPo61jKsf19gf2m06vo1CjPVo1uNWfyxaposGJ3GywiazNYusalRpJRJ%2BGsnf6mnxMf4T8IuwrEo0Bh3zCyxgZFM%2FHfzUFuFKLWPImHkK&X-Amz-Signature=51a81c1c792892988a1ffb9349fe40bb450ebcc07c603135a1885e2101f5417a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

- warmup.c (from os)
- arraylist.c (from os)
- getting length of a c array
