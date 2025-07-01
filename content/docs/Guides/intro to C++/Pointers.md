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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bab24be3-c0b5-4cfd-bcef-10ef39280abe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TV42X6G7%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T110802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAWOlScRcUoiGvJfyRml9Nk7tOUuFd3HxM%2FJoLXE%2Bnd3AiAaZW6o0hD3LsfCG2WMicSkVN%2Ftw%2BSyYBvA7TQ70saPpiqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXaPyjcB%2FfQh9AkwfKtwDnunMALrbNuYR5aBvKZqwSD8vIZRW%2B%2F0STSTr1NEOBcIkG17U8%2FFClUo6ualrPIzeKt1i1JLdBzSKF5uEn4lV4BM6zSUNgRq3QTzIsLAa0ukqfwKojAhbbZaD17luXuRQ7NFx0KWiY2s%2FVMD2IDpp8Y0vKd%2FvfM6PZdDOZdLba6jCeTABzTx8o5Pol2gqwnVTyFg%2B3ibVQaiokM9DWk7%2FFLw%2BdLRH8SceauajFdV1Gby3epUn1SqsFnb%2BiHAaAGAnLLr0AsAUs6DLd3lOLSBfvOIhHtyQMeSNIfvbE%2BwbRQbGbstT9zhxOZElc%2FQ%2FBmCw8yCaiJXk8E6vVfEDiIr4BRQZujX%2BE3%2FrHdUB6fSn1g7wI44qEi1p5MiQtvV84gvrvQm57A3odQ60sSWGp%2B5Pf37OPJ0SCqiL3VaBim2bm%2BYNb2oBl1Oct8acZACLzrS2Pr%2Fpn1gIM%2BeTID6aLCbx6OGYJ2WCJw1B96hsQq0BQLJFOQu5aESp44UAZrlpBSIyFOziAApeyTO8Vyr49VKZMi%2Fm%2BESJ5SQ7f9BH0iWyPL5WxFacXv5oIaOLKJhmnrv%2FDTCmB1l%2Fx4vrSE3F2aQcLmEQ7rS%2FpmXUAk%2BHcD12Jy5mhK2AJ%2FIkInQMQ7Uwtc6OwwY6pgE8ZqbnLX%2BuOcD87OcXYFIWnnaehSESycuuRMTymuFXBXYQKpeusZMCZEqhyOGrI%2FvFE1ip8I7Ss%2FsoAiAoJChQtuwyLrMC%2Fr8PFPXllsELdYxB42vN4Sb5jTZ%2BwohGBouMxT%2BitYZGClpryrUDBhQYRcOtkglk%2FJksu8rtuhJOv%2FONP%2F%2BkdzDQAso617cXJ1HdQ5BBixyA84OsPjKbRYHid2RYp%2FGP&X-Amz-Signature=6783bacd19f6e3e4955455005aa839b380c7ef8765caca29ec861a0084825731&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

- warmup.c (from os)
- arraylist.c (from os)
- getting length of a c array
