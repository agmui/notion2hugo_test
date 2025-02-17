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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bab24be3-c0b5-4cfd-bcef-10ef39280abe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664OJR4WY%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T031511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIF4%2BXFP%2FUvlBhVcIm2atTNtz9iM%2ByPu2z0oCXgr6%2FmOnAiEA2llTRy5xpC%2FIeoZNkfD6ZJGAUdkjARaQC4%2FFa8E3WtIq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDBDIiPg0GyrNn0vctCrcA73QQ8hQjKUsKoCrA%2FQidoA4wlsccd1a%2B20Ve3%2BZrEVewG45qETaZ0wIDLM%2FHxLv%2BFMw8jbQXeXpWtvLmUIKs%2FD5W7TRW1e6824BxDfp0QqeGg3EC6jf%2FgxZ1IHD1e0E3G0x0Z7btMFR%2BOfkLvpX5ORpVXDNkRSr13nrRPboUu7cR5suS%2Foi7QBkzLsrilvxf1qBQwABDDG2g%2F3HXfCmsX9BpX6Ra6JMm78djXBCh7tr0fUkDsl3tD6RfOJtvFq5mxy7IBnDw7aRPpfkWxy%2BnR9K3kvlCtC4YIBPCdmTp%2F6aZRf5nXWgeI%2BMlenccgkYESgg4ce8MmVifPbUbkyrgevhUNfFBlLd23h9Vq70RXN0CaAaxz47prnwxNYIzoKaj45gOzhkbEZAlz94UWG1ym%2FX4PfVmWewaEshfhPLaRiDA5SWevjAO%2BAzc9%2BMyD43BiLnc%2FEU4%2FNSS2lmSRWqeYmMXezThVI482XngAg3SsLjUHULwYIwx1VWgjjHPKdGFAyTM%2Bg%2FT6rYtoB1NFyvHqszJyUeovLzyedI%2B2SfQ1%2BCRVTKN0L2sKr99icGGYWAmTEelmb61szn7rOGoZDzZFgslh4%2BRWZ3B9MULu0WuETbDi8sdtZIrwMdjKXgMJnKyr0GOqUBEnVooUJZP4u%2B3QLsMAQlwduF8OZa%2FVZji3nozxaL4ixerYNLZ9KQ%2B2%2Fq1kNGvGMuiGug1BVK4OzqI7EmSYvrta38PKcDuNCZUQHtJXQIR3giZVHpjwSFgEk%2Bg7i27ho87rEvIv3zagmR5NtRGOQ9Nv%2F8qFcNLtdKnBPa9bAa%2FFhclfu8la89G%2FxLqpuDwmwkFsKl61vZP4oTjezsAxaTE0m3d2Kn&X-Amz-Signature=af1af690a4f28bfc0018c31816c4f359abc904a7647eac95b77b4e7414116de3&X-Amz-SignedHeaders=host&x-id=GetObject)

- warmup.c (from os)
- arraylist.c (from os)
- getting length of a c array
