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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bab24be3-c0b5-4cfd-bcef-10ef39280abe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GWWUPLC%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T051215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnGxVoz703WOptoq1qnCcNYfllDH6IUnsGCwhb%2B86%2FxQIhAOS9n9mQMDsWR5SK9%2FdcWpEjhZtOt5XQRaWTPOhcBS1dKogECOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwTJ6VCebfDvKagKG0q3APSlkOfm8OUK%2BVkX1pt6jYuwZoE3UF2uIULYipQ1brfvlk7KOTg8PXsJaff1NkZwyA3ARo0UJYj21CMZjW1y5G2MavR7jLJXvsKVqprARvpy66LUKvyAmc%2Ftufpe8U7retdWLFhVVSwUnCHTChzf5%2Fg%2Flov%2BK70z%2BdxP%2B0SEssX%2F7Ex0ogmyDaW4v2qa8IRye9Sbd32LkaRfC9Ohbn5Ip%2Fp5s4M4dotENh9inlhuJHTZF7xFWa6Vfz9GnINeoJHYV7H%2BDu3no2dQ4CLhdXoh1jNVMTtfaAF1VIIJChPYyA2J5DqYZz5N0CwPtpuu7%2BC%2BCic33qsoovfK3Y9F1iAIoHpPKRlJPBX2D%2BoY6rfbeN6RS9RFMAamsUFRJEUYQRZq8AuZp5m8ywl9IU84QS2p0tj86PM2zQteCSlQFCtGNTiIdvqHqjyFstdqLlFW6MseF2PNBcNNjAa5%2F5zs8VzDzYnjPIpelQ0Dl4Lyp6JPlgNmI3qjGGMWKtR79eYNKNIHIT4YbhfluCH7Nf5aO5qbUhxlb98tI%2B%2BXmf%2FeV4Z3Lb%2BE9ZQkG2ghJaWGAGlXAo0Kiszy%2FMkeASSO%2B79tEuWrVDOzT1I%2By5gKfBbHh21pXBXRiFVu1gStaAW29eK5TC82pLDBjqkAaTySeTaoqrpE3bRXGyYMBYyCH3gffvmCLPO%2BLRQ4HGg9m%2B56C5UcFZZtRcSLVgTiwGxTVyqKBtXQuvnYUfk9XUoXTHtoZkoW2suP1Yg1PZl0uH%2FX2ueYe%2F5GRKznwfdPOybwdO0LgmAAzdicGt%2F5Cq5R13oS0fcvpi29YXblhNya%2BlrBikSkJZ%2BjN7hwg3dMjwI%2FrXXm7sG%2FPBHahr14as2tR9t&X-Amz-Signature=aecba51db8df04a2ad8991d64ad45d2f021b5402dc094564c526415b3be1da4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

- warmup.c (from os)
- arraylist.c (from os)
- getting length of a c array
