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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bab24be3-c0b5-4cfd-bcef-10ef39280abe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCYEIKEO%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T040955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDQmG9pPqbzSPzighFQHentsGkSRUnlw6Pv08aUGZQfWAiEAjTmRCg8v7H%2BHtygE%2B8z3pSvCHT0xNQxo27sHxe5c8AIqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDElou%2BirRNpY4qvNNyrcAycy9o1epCv1Pim4rDy%2FJYv3U2Fw%2FGIR8FCEbma30QwwCUoAtyGjjY38FFT7poTJFriXG5RcTZKMeh%2FhitdW4lgLHPDaIwuoCIbzJX0i5cm%2B%2Bzu1PPIFpVIbyn0BsKLy8M0%2FkFiDJzfEJUVVz0B61dyD0df3KVa1QVCewT4Gb2eS0h2Cedf%2Fy4r2DMwiHzbyhnIkmGAVR1zhhUdvT6xRgkrbxy%2FSmSJ8jUhu7B%2B%2BeI%2FQ5eQ6pxUM%2FZjK4wgY17Y4wlmNTqfDH8VOq2IrO%2B%2FKmIL6fjWWO0lknjlo3dzoq4auibCYs25bYJ1zc23ASFX6VThLw9w10vincrYpA52qCZ3YbJeupBc4%2Fwgk8kltoy4ox3%2FLNYon5th9DS3BNnopk9AP4CyW7yl2vJY1fpolgnltgPdtR1XCN7pRfoKdlK2ufTw78569VoFUsP0uamv2jAh0k%2BNph5IVNE2u2kXbjfQOHTTBB1g8kUDpIrzhWuUde6ScgAJOUNixcjySyxjXv4uWF40aJ0BdSkSsDeUFl%2BC8PaDzh4TAH7B8Cpt4uN6EmU8%2FWkol0sw8w%2F6IrwXG%2B1bSJcDO9vHKZuC2nrP6v%2BTr8VLmkwusKxionK6mfOt%2F0cwb8d1rIOHmph%2FNMP3n370GOqUBgCZbZiT%2BJ5HkoW63U7IlHT%2F1%2Fz68TfW%2B%2BnBjS2gD7crv7cV4gjTi1FrHUJYAfHZuKJ%2BV2oqegl%2BXqGU1Fl8yCt0kFCrx1afp99w3y8rV%2Fr%2FysU4fi0eThYyj%2FyOXznzRqYdo4q%2F6sCoa6cUkZ816DY%2BGk%2BHzu0uEVI3h35tAxNPMF4bgoeFTmNZTSSwcsOAMb5X%2BTe4GqyA5v%2FDS%2Fzi0wHPpV0nJ&X-Amz-Signature=a45a9ee792a93541e984cb3f30a7fc4db87dc518fdf1266fb3b5021aadde09d2&X-Amz-SignedHeaders=host&x-id=GetObject)

- warmup.c (from os)
- arraylist.c (from os)
- getting length of a c array
