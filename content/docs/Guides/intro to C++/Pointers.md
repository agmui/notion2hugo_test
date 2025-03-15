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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bab24be3-c0b5-4cfd-bcef-10ef39280abe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BGGQC3H%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T220112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCi5pqd19ax9Cx0JFEvbNhQ37t%2BV0Bw5BC4%2FL%2B248EVwwIgV0mOteY39QbXyZlLcZZgJpqSNQXw%2FndWmDeBuHRvNbUq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDG8791dDzhIO5bYvhSrcA%2FeJ0TfvVAiiy7KFd1wLgjKGjCsg3wIzOLE%2Fvk5%2F2lpjCSM50XbvCuiDJ5o115Vuj6vzGk1NHJrNggkOEGNH%2FYXY19o%2BWjWub55%2BhnmKk8uReINi2orGTh5yl0LEAizGm3vBuelTYEsZUeJxZGr6dp0G3xVsIXNREWVDOroOVP9%2B3xjCNl2%2Bc%2B2rxM3uk0lpoQnMQmKc%2FK8hzsFz7l2WnEfribVoC1o7WNbSIiVlM8zb%2BeoWU4KhilncQ3kKfVAPvTglX5JKDZtB9j41%2BNGYsS5%2F%2FAaifmiALbU3gBYKXf6trh%2FsNOTThcZeC2%2FugjyEnRPfwhnTSvue30GIXrHXyMOPaJmjnqCXcf6nIvdPZVSswdJex14oRcisbNsQMg9A0VjyzzXGFLjowogLFc2eV8jhYJRubDzZTNVZGT26g7ttAcytuI0ehFDVVKV%2BGDxqmkwEW9FJgyw1xeKd7hW4AGxN6eGRB6zFHCl4CRswXzKqK%2BC%2ByPab84%2F8JaEhRMlMzjuho7sjD%2F94bI4G3R0RbSIxH4x0juJo5eQI4pCv3gvtqgSuJGCVTMlNuJ5SuD7tyd8C4HMfELLy7kDrwseIg7OxyEFvPfIkbNm5BNF27NN90NqlYkxeeuqROOVJMNzi174GOqUBd%2FTUM7vNG1gBLEOZrSLNl1L%2BzBlKxWjIttaTITz7%2FuguoZmOwu88mSQmVIItgcVco6xjHHz8SjlN9OFab1EZ4V%2FKznj7cuBvP6pGmVFEfYRcdqnJ0m4YRh6ATfDMoa5mtGGzOutGY%2BVHl4Dfy3oq%2Fe6EfP4bC4fay2Mo5IJWCprRmNn3ck6KDCfno8pjrKr3h7TWzFGKxSDzWyP9DuaoUpbD479V&X-Amz-Signature=4236d1e39cd1d283ed8f77312c525ff51da914102cbed2c9036277ff012ef15d&X-Amz-SignedHeaders=host&x-id=GetObject)

- warmup.c (from os)
- arraylist.c (from os)
- getting length of a c array
