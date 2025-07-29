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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bab24be3-c0b5-4cfd-bcef-10ef39280abe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5GDBQ5C%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T161143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQC%2BRBXli9fDfItEEo%2BtLx49w1b15SeDwzCFVND6bTG2ywIhALiapz8nT9VeC3i%2FW2N4lCEN9FqpdL47n0lR13YepSuHKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYfAty7ZSjKLD9oJwq3AOpaceVo5IV0xv1vikB8xzUUW6KHqnpuVDFsr%2FKL6vkyUmwJFqPQ4aaJvrTvjq%2BF1Txs8hneD7HgpQDr7yPJ8rZcD5x4b82TRcIVeZ3WvGgXJbpOICrCO0O12jyhjbuPQ0GMkkNh%2FfOnDLY2eLwQmA9VWC5D2wV1Wjj7%2Fq17OYJPKtvZfDV9YUiCYdsY07kXXhjM6XC1QP2HK31k3Dy4eXh1imxtN326LQp15nubiDLR00SumvYYoS8Gii7PUO3U7SUoUeDmc9yqW3gwXWfG5Lhs3FodFCREAcAmGDFxSsUPEdz1kdl2mNFBmy4jS8Qdw%2F%2BtLYQoLFKcSt4KIGSNJtdYRaSXTQlcci7T%2BxgmnNcWyZQlxI8BATmdCWbdLo8Diu1vIr2UNt2inJuZWoSKBIYPTtyf0KWSEGPnIWGHR3xO9wklrIByyGJZK%2FLfNJYuEVtsYygXxbprdugvjr0MTj78u7eUP3R%2FgEXMlGTC222%2FOE43bfBDw4An3g83T1Klhf531p3lsAvnJQfCSukmbV7YT3DAzwq0%2FxbI8Mfn2FK4d7AvXNOvuWsI2TjzdBdngqRpW5LV99pPR8hOJSoZsUGtJI2luj%2F%2F1OaJGzR%2BWkBS8%2FAPcBFIzT%2BHgy0MTDYyqPEBjqkAWVaNUgVatzfadvRDiN37EowhbN%2FlVn1LpsLwUEmT4zYgMR7%2FqrzUvJRtrBUhg9yHT3iCFjb27cjApsWzcqTZgYFkpNECZWREG42c2jOWgOMDeobzMaCVc0CtS9lKQmM6TxruYUXC88QmBextswMRufuEnY6gRaTw0qnKTkw%2BETyriblHmgEt0CYZtS89HjSjjJ00X16iDuYdN4zYbsaannLe9Gu&X-Amz-Signature=2710bd9ba86bf439106d9d7d865ee311f124974669ffa0b7d13207bb592cad96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

- warmup.c (from os)
- arraylist.c (from os)
- getting length of a c array
