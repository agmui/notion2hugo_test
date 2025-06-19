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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bab24be3-c0b5-4cfd-bcef-10ef39280abe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6IP7JWV%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T024004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAv%2FeG%2F7AAhjQillO37S4Rqc6A532EMFrLxJVLlDwVevAiEA%2FzLgBoohWjekc8dfAOXqANntK9xj895V1HO0qFg5kxkqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJtag9Vnoa1FG1MEESrcAx7GFhfoqfBqGSvw9t0N2y9rx6YRgegqsJ831UNLC3Fr3T%2BSBqAPwo75I%2Fz%2BE1BXcueEtU98N%2FN50f%2BQSqTBpdVxJnF%2BGY73qHppN839bpyxeY72RrUjYf%2FzpBUEOfrc4UqB%2FWQ7CY8NlqkmndaCfk8N0aCnsrVbg%2BFQowEAgwvDmelE43GsZcfBkuRkEoa3FtFJ2KjIN5ErRGR4G5IgjoG9Cuh6xVhSipycs9QPrRzkXzt%2BsUlxktPiKqVuflMMDe4e5BEAlzA2AfCLV%2BYYb7zrWat7BaMJTqdDUsEGCBazOVS5JYdJRrCNFcXShEyxMSM0LqtLFxxXQRl%2Bqxdm2ELgtTcKCQNNwyLxirKqHXjFTLdYMY7M8eg8kBI%2BcotAkBnEaLKqYz7luMpRT6FqMzYe8xT528UaxU%2Bi%2FyNa6Er%2FAlucqVxxQMQ6%2BdBWlj4n%2BRVb%2FxmVuPxjJ%2BjdC7naOY01MbMwNcB0rOe7sIVq2gr1M6logGxTZ76Opos5lDZs55yS0k7XxRIeDbhBUFvbXbCdu8AnlSY5rv5Apnaa9vzwio4fMK1Waw0C4Yln31ZrGI6b2yAtcSINN1fI3OhbPM1Pyh4joSvFGY3MVGO0%2BLP7%2Bb6SUz066mcu2TGvMOvKzcIGOqUB4HWFCtnGvohMOC%2BVropL%2BpzSHN3rXXVZRL4OugXL1Db1iJ6goM%2Fqwqw%2F2XNfIz%2BWifsyCUpQK%2BlrNMoi2SoK5isiGCryQ6Ilaywl%2FwGZXcPRm6eOWoKWcfdLqIaLMlStp2XIys5RY7Jw1Rix%2Bjp5nmSO%2F%2Ffy4WEkoyn5f4wok1jfVDDD7Lf93ny4LtM9O1gjAV8S5T2tZWcMIsuGb8sQhj3HoOEv&X-Amz-Signature=76e0d5de14e498e3486c737ee0409791c3b1298fc38fdccc083dcc51cf25f1b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

- warmup.c (from os)
- arraylist.c (from os)
- getting length of a c array
