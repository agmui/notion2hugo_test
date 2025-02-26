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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bab24be3-c0b5-4cfd-bcef-10ef39280abe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBTGYJS2%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T181055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQCoT1kRWw0iKchIQYQVCXSS1XrhwmlwEqdDj7MiMFeoYAIhANuGDeHiKkIFItctZjjU%2B9MuZ3IHApOEK5VTzuyN5fRBKv8DCGMQABoMNjM3NDIzMTgzODA1IgwxztKcwxVBouCH7Hsq3AMY77Fv9w%2BsKtZx5wsakqQBlsoQFOeYPAevMFvN33A4CnuvCORiijBUvgCK8F9w4qdW%2Bfxb30B%2BLD2sD10AYRV5dKQEkUVR13wYSyG90Bk%2FQPmA0%2Fd%2BGhisOxqC72rmnCgbfERk33xvCpdvgFdoAdLega6KFot4GzE1iwfnvBOx9sGGLxCORtaVZWWw6NKlGrHiVXAJh8ii0ntiOdplOFBrvMxRjyAR0RP79HbZOXYQXx3SwPRgk9XaQVFzz3L5TBgmyvDjBneunhiFpsiJklzWu3Fu98uGNnCjSINFGT2L6hxQSIUi5dT54ES535iz9aBBfohdHK31r8AAGxh12OPJP%2FpGeFeaqTmDBRfhJCBRSzCVkLkJS8ju1dFdT65VBFw7AV%2B731tS%2Felm56UcQVwzJGcneiWqdiEWf7u8SMYcj6A63YV15vrbj15myE6kUAB9CAj3KQLeeTtcShNyQr9jaMFcHQv9fJVJtYiIsn1M3I58jg5knxo0UXmUtmx4UzALpZrnk4lc%2FjZcMcoc1x%2FLf2A0Xg6HI9lIoJtC8FR9fh8iUFMuEBIwMdOc9tD94Wp5nB4YJMU4LBrMkTM0IEFg0rns2XUbcGmefTOCoOI1EKGTHhC0a9oo9zBZdjDsqP29BjqkAQTCLebewWt9jiG9Ms%2FHS2alxs%2BHkC4ANnno9vwcr4dCF9DfBU6HD81PU1lHStKUrJ6XjJIH0SXDsVn%2BHOVoOP%2BRT8PqIXVuGjwUf3CWurkpP72gKLxeiOctVq6GsuvKShk3HvNR2OP00qo9LpLL83UaPaQttzYF%2B4VsCG7nFFr8o2yLdDdzOm9jSjivMRuyNiWBnZvB06MBcnvJ8sSGHTRSb8L5&X-Amz-Signature=b0366b02f5a082984618e356c4ebd2259662438c1a9b15c0cfe884909a6b2847&X-Amz-SignedHeaders=host&x-id=GetObject)

- warmup.c (from os)
- arraylist.c (from os)
- getting length of a c array
