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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bab24be3-c0b5-4cfd-bcef-10ef39280abe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJXCMSLV%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T190711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQCr8Yp2jMJo73fxxzFvrMT6NwdA2qfw8X%2Fijkqn3AxwiAIgFrfiPvZpoMr5u13%2Bgl5MDvcoViqM0miSSt91GlbvJusq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDChfmDYQwGVI0aMhtCrcA1ckd79wn7WSx4qyORHcJEBa32gswrhf%2FjuYEfWwnQV8ROqhROkrysYhKD%2Fena6rCgXJ45RhB9CwHMGa%2BSDDB4JgZTxcVMd5%2BxIxZLc%2FgRNnTsOvME1Z1I53AfyMp28I1XBB2w2qegkEhjRpg6T2SaFrlhNMLomvv6zEvNRH72OZvlikZSG7nLdyElAWfgNq3zVfJLzvcAw8qgr7A47e%2BZ2CS%2BVPIIpKQxaTKlLQE2LQ5Umthr%2FqHXP6Y6f4wyAzqFlsndMgOWYUsFI8BZ%2Bd0MIf%2B7Qmkd%2Ff9VorpKVRQ3K7qq5Q4vUGVSU8loYzJ3CFTSEVsU%2FH%2FQY3XKFjTbFiTasL5QBVi18Ylgbb4BX3W%2F6gWpcyxNqiLlykFK2wXStflb9jgxsmW%2FcBDfsGk2b%2FaJbdqtA1aoLOmXa%2FtF9K0Oy6fOJ%2BL67M7hyPQWKchAQ1szn%2Fmal8x3WdbqPpCiV9m1XVg6xqR%2F9pKX981Rdluuq%2BEIKtntg35wyovmk1bAfzkjLoxeaXHF5XxGfuTBhdt%2FMyzH9bFap9r5xyIU8UzaOSP4IgnXhug9lOjcfY36eyJa9ZE9XK3YrTniaEEgUz8O7KcF%2F2PbUGShCi0BuB%2FZhwBmoyBtsL%2FulnzDmgMLC%2FoMMGOqUBTU%2F6oYimI5veJcTHiZrQlqN5mTKbEj7hYdx1Ouv3Y%2FxStRY05hhM83VqnUAjjht%2FBYr%2BVAigPPPUhLPD9cTqYKeMBlmNhtR%2FaCaFF5MZG9I4c8LMlnyopqmZk4hi1zttz2A%2BSZBRShbyLu3XlMlkVf0Yz7YrNkBLbhEaZVtJmGSJPCSrAfps3ffCLHNj8F4kYC1s8s%2BoHDy0n1u5fS38zzPiP8Rh&X-Amz-Signature=7179d30b0d803c3d61870af4bb045a134d93340c8829a6a81856162e7fcf570c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

- warmup.c (from os)
- arraylist.c (from os)
- getting length of a c array
