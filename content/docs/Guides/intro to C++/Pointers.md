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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bab24be3-c0b5-4cfd-bcef-10ef39280abe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UV7U6NBG%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T140735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICtrRWmDurmpGOihOEvFV7RXj8BsFP9t31iFejAzCYOOAiBEHEaFdHDPEwMtr6V8HeBi95vSyLZszbMSNrhTbsm38iqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK3qW9HJhnGaQUmxEKtwDb8tRVUi5Oo7jLYFINlvYBOcUWyG4cCSk7kTy2faVEdeii75Ww1WZrgCcFUY9W0LklZIvgvG%2F2R7vTpNxbPtapzpZSpXoSUG%2FbjDAsbNLWFG7wz7wO3VB8p1g3p8e8q7akip71D1TGPHH6Q%2FYJFIOz0lzc8axb8TdIyZb8CWmeWpgRQGZqkOqV9PB21njvzrUx5JpNGP9QmB0kaIQtDRRLAN4DQcxyNM%2Fu86B6ZNJsknim22WVHxkPmqXxn6hKmJ%2BeLm8AvgU8SC%2FuMQZiD8WRCF5DKTRKTdMQ1w18ybIJOHOTjvOGNrn%2BFKu23fzFdT9vtBQj4BW4IxF6ky%2BzOWo%2FibsYjKQ1YFGmJ1HS8qyM1O56Wa%2B%2BBZvD6x90PcHXUGMIQT0VEW%2BIfWpB6KakDBCJOZwB0fpnENyI1tUEW9fghzGzG9zbgdDtE2ptjwMQlLDMtmYDwwTBQHghqaY1WCFKPowlhp9Hg0FVsGF4bE2AMW5yQCrlvEJgDtO%2B0a7QvgtLtLyQbHS67WgIwneg04dygWAyCsLXb2xtgsQVEH06t8FmNz1E9fMJ7%2FzqTyAc4Qn5weCpI2mjb%2FVx2cvjrtWSYKVSinXO4xjYcGyRD0rt0Ayv7R09emO8I4UDZwwu8rcvQY6pgGCtjzLL7mIUMKUP3m%2FBrqSskGD3Digk83Wffp%2BVspsgUZll4kUK0lDh%2BdsFCXC0%2B7ahw%2BZCs0R88%2B2yrd5HHDk60LcFRWu%2FH9yBtOHSdqluSL1Dinmk9o7Yvzl%2BZxi0IMOmVktSSk1Vr7zK4OlonTpgnB6FFxx%2BNgtQzMIsy35F5vponafpu9b%2F9pUKC4mDcdNsbZ%2BMKhn7lSN%2F%2BZHEXQ329lfNR7K&X-Amz-Signature=6a7f5529e69d3fc91f8912197dd43808e41eef8d933eb68aadc06d52f9c8a280&X-Amz-SignedHeaders=host&x-id=GetObject)

- warmup.c (from os)
- arraylist.c (from os)
- getting length of a c array
