---
sys:
  pageId: "52c4056b-e3ee-4b5c-a521-c7ea915d2f9a"
  createdTime: "2024-06-25T02:28:00.000Z"
  lastEditedTime: "2024-06-26T21:01:00.000Z"
  propFilepath: "docs/Guides/intro to C++/Pointers.md"
title: "Pointers"
date: "2024-06-26T21:01:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
toc: false
icon: ""
---

> NOTE: You will cover this in CSSE132 so this will just be a light overview

Pretend you one get one massive array and you are not allowed to make any new arrays

`array = [0,0,0,0……]`

Now say I want to story a _“person object”_ lets call it where we want to record their age, height, and weight.

Lets just simply put the three numbers right next to each other like this:
``array = [``age,height,weight``,``age,height,weight``,``age,height,weight``,……]`

If I were to get the 3rd person’s information I would have to get

```c++
age = array[6]
height = array[6+1]
weight = array[6+2]
```

effectively the whole 3rd person’s object lives at index 6

Now for example if we have a function that multiplies a persons height and weight 

```c++
void height_times_weight(person){
	...
}
```

to pass this _“person object”_ we could do one of two things

- copy the 3 values (age, height, weight) into the function
- just pass in the index the person is stored at

For option 1 this might work sometimes but what if the person object had 100 things, or 1000, or even more!

That would make our program very slow so it might be much easier to pass in a single value of index.

```c++
array = [0,0,0,0……]

void height_times_weight(person){
	array[person]
	...
}

int main(){
		height_times_weight(6)
}
```

Now we can access anything in person.

This idea of passing index is called pointers.

**Syntax:** **`int* p`**

to create a pointer just put a `*` after the type name

### **EX:**

```c++
int* int_pointer;
float* float_pointer;
char* char_pointer;
Person* person_pointer;
```

in `height_times_weigh()` we would write it like this:

```c++

void height_times_weight(Person* person){
	...
}
```

To get the _“index”_ of something we use the `&` symbol

```c++
Person person = {1,2,3}; 
// this is like storing 1,2,3 somehwere in array
// array = [..., 1,2,3, ...]

Person* person_pointer = &person;
// &person will simply get the index in array where person was created
// like in the example above the thir
```

### Arrays(and getting array length)
