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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bab24be3-c0b5-4cfd-bcef-10ef39280abe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IMQ6X6T%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T003729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIA4ak%2FPlytN2vOCEsOHrkZQbzHZ9%2Bdw4sMBGCXwW68l1AiEAiX5oElJ7rI5tB%2FAPkGP5P2lwlg647X3WdWPPlk4gdl4q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDKG8jPxpRjyLXPwueCrcAxXXp6wHFCAIz25DwVAIc7%2FY1stRygJ9hc4%2BBGiC0BskW5Lq4ktFP31iHPa631fAlYJlIlsTM%2FPc0QgEeAbwXTmwQeF6eA%2FhMY2fHX%2FbYmCxN%2FDyo20dRCvNSQeJSXwJaC67%2Bi0ymKiW8DbQkmlrAVp8dlMPdOTdEFwCssovRDAjav033uB1KCpqRUeo%2FcLXNEGBiBmo5kMUuxiGHo8zwW7iT0jlaB5Eglvf3dh7YBrlytkb5epPofFjojbb4qoqGS3v969Ts7lcfCBwfac3GMGBJ0MgoW3QD4DASmdEpGHBgyz3umPsfMve9UuOdc7lZesmY8YDUUo5zTd%2BcZWS5T0i%2FLCwH55RuvqqA%2F2THl%2BH%2FuSqYLMH4THIL%2F1ikKZPMA8wcGJwNTwzkRZ6xzJaLDAEFu7Q9UnRJajmG8y%2BzPMTP69xidF7ZFoqp9iX5ARaASgdc0IHX49hVmx46QAXtPDNVGuD2lxfpA4nbA21oxrRHmd%2FLUvdpBq0yptAmY3TfL8uCa8VLqMVJuszPyFNlngUfFMDQLQlqyMIWT2507jAjq01T8u8qKYUW7alcr0Ouy7QPoXUaJIw60oOpMt%2Bj566x%2BUtDslpKnshAhvj%2Fq4j0OC7NbtLoVUogJEsMLjZ7L4GOqUBkauenfos5czqTbRSzi7g7lJ26%2F%2FH9bUo2VF1GgKOQipt6KVQhmtZ7VlN%2BhHTqE8S0paaWYkv5qpPmdiKvliGKmsk7F4LSwVyLg1%2FLzdyS81AYAw2LhZBotuudLO3UnMOjOJiJtkGktQNEYoyv%2Fy5AuXmL0E%2Fw1b9GeqwlHIC2Puh1Oz9Vis2Rb59a%2FjawVOg8xWyMCEF8Jm2F03HN9pT3lAyM9S2&X-Amz-Signature=f5e0a5b768e14ae21540d6069c0c5310222f369f39e987bbe4a035e7de5e8642&X-Amz-SignedHeaders=host&x-id=GetObject)

- warmup.c (from os)
- arraylist.c (from os)
- getting length of a c array
