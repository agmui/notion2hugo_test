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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bab24be3-c0b5-4cfd-bcef-10ef39280abe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXQIBS7C%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T200705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIFUUay5LGUOqpGyAY1lrukrrJfMoUEBdSGTJzdcDURkPAiBhX3ofyyNlJm%2BDW%2FpXjml0P12bf%2FajBOiFQ4TzUjDBhSqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo7X2t5gEHk61EwdJKtwDAzxaDG22Nsi%2Bcl0O8IyTGxLzo69tpgjDnllgb8XktJXQcRKJu2055uSJL5ABr7UMtGnF3Dq7eZjOzud4qSbusnBpCGUVCflWX5rDrs1pZK7%2FH5UP9%2FH8cfguaSGzLL%2Bcv1bCtSCVJ8jO2BkTSmA9AQzVaGnLnJHT5U%2FBEuh2u9xsymq1fDK3ED1asYGTfoPa6kKDumS4VcutKRmLr7fvOy7yO3Qr%2BKkEmNpYNmExUZxpy2e4JpVzexHdKgoa%2B19t394Re0QFpoodHiH8H7AkjKAMhYinqxw9LFE4t5sZ9av3y8ZkIqeLO2SawU46UcaAVYzBonURYZUiEQAbYw9l11m5MV8NtJFETRbzaBQeggfCpPYeqNjfXCJPirBufIerjYFXh9ebDilZJl1Ir7ZudJJrQruOGW6d%2FIyR1EKiM8JwOgqrivztmo8rgdU40pY7DFqBxDCLVGRY4IBS%2FnJup7A0RBI0nw4D2HBqP7cdPMK%2B7Ggt46KLMeJPBJnXnXSvsn6VPiBE9w8O6VO7xGwtto10Q4k7tcT7%2BHqd5q3md1JA%2B33PtWo%2FZT4FFGwRBYS5Z22WAdHCfNg5iboBje2yjKjUK6PdBcV0uxeHsjeyqcl4Cg%2FUN5Asyr4owKswj%2BGevQY6pgEoxzGakX8YcfZRv%2BPuuoru1kJf63DujLs2PBkPznhUgw45dXoPFzILVlcLQhKYsfWnX24ncaLI8WeOGpl94oS6E0cDwAC6UHVf1vBcLICRC4xRUR8MGiFBqS%2F0%2BUsPjgEJcVS4UQ%2FY8%2FwwA4whLWSaEJHQMuGefD34g90koQEftty7N%2FIzq35Tcy4GeWVid4x6li1x7FCymxdjVScc1un3wZQRizE3&X-Amz-Signature=13702ce24885c53c25aea9a2ef418c037f517bbb442b9098da593a59315eafd1&X-Amz-SignedHeaders=host&x-id=GetObject)

- warmup.c (from os)
- arraylist.c (from os)
- getting length of a c array
