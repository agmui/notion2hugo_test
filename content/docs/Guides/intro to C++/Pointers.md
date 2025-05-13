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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bab24be3-c0b5-4cfd-bcef-10ef39280abe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIHWTPHI%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T022751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCHxYqkgVwAUjenWGbJbDnAXpagS8cvrcPzozUANNSEwgIgZuUL4uzQju8sBFEqSI3clvISAZG%2Bija5Vt8FjyhB9vAqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFh1RiaySK0PhPPOBircA1w4KyUA6fTzvvyd4fPBleLUpADfe9G7gNlhrGSwfYOfAZO6zvJQKB5Cop2hgQiZk%2FtcpXSs9KK7iCxaGyZFVM7q3cq99QZdXXU8s2H1xm8pfgUiKK2gE8I8L4I46jqQALJRhuHCfJhjatT%2BxS9wgQ0ws58pTPkMvvWf%2F4Y8WF3k2eUOH8smlQOCY5OhUir2VpUZZ2Y8pZ6fEqCrfSoPcNkRX6LOmpQ86tvI740TA6YT4hEso5ptIJoPsLoKfC5D0Ro4rdaMtvVxeIui1Z%2BiRVzGn9INEcbKkhOJxcdaqrAH%2FCfpe%2FSAjddJD8HFrV%2FuzarGKr5d3%2FBa%2F%2Ba6l7WPyk%2BV2BQes6lJFRUBYFDAvwCEm9UIwDQLm%2FDLVMTOmnEhfF37Z%2Bzxxi3Kakx2xzCfOjeJgFMN%2FqQUnPeLBCg1jJA3uyH%2FFD5eIQo6%2F1D1fVbfX3ZGaZFUgNeht6GuWFlD2vkG%2B8gLiKzGjnJgQcGokG0nJ%2BgwnouFt6GuN98foN6%2BD2cwX3rg0Rv22ywFXdo3Nh3iTE8DmchO2hjFbmyLn3XRpam2P9aye%2FVsXcIzWE47aoZNAWGf5NOTqvi3brrn8XP82Pq36uFVnKiUI733IBQBcQEBpT60mftEXdQvMO7GisEGOqUBRVUPDY1e02sJ9kM27ghO7ZDQzrjMgZG3epUxahVqLGgUgxFll3y6qrUymN4ypH0GJk6nbn%2Ffe%2FH63rUsRae8mFocmiesQRzys%2Fg3S%2BtGfAeeCRyW3dr2tdqM2xxZLBUp%2BD3SS%2F2FPlLFFmd8h286U1834lbmSUr4gR%2FoLKTYTWzRTdrZtxSmzxFAG3lcmlJgvDmFq150siFFy4Pa8On%2B%2FQt7Jko4&X-Amz-Signature=4465721c589f90aca81f2c6ab391d1b9b4d3f49fe8315e6401b61b4d6185f226&X-Amz-SignedHeaders=host&x-id=GetObject)

- warmup.c (from os)
- arraylist.c (from os)
- getting length of a c array
