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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bab24be3-c0b5-4cfd-bcef-10ef39280abe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KL3BPCN%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T133311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpbeVs3GlSr9bNTuffSXksk0tgAlUx8TpD1dph%2BB9DlwIgGfv5MVH4le1DrZAphi%2B%2FFTsgJucD2if4qQR9vFiLgz0q%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDEG%2FhZKFz0QMnO0Z4ircA26HRi0SLRokGQlxJmAwVY8PhG12T2cRE72DjESzoq%2Be2SUSCVYXxMfdFithch7f16tIP4V77PKPwcQyn906TYLvlqrcaOmA9QFWlLIu4Qg1aJki3IB06jbPR0oDcZL%2F5VfjMPG6U50yEemF4jXK%2FIlvSEVz0fwJRJ1%2BY4tRqDiwNYIlK01V1TgEHBA24WdVLdN2V3H88bGezT0%2F63u41NYr%2BoJO2dm44GSYxrfEDY%2BdAohLcC4enkFo3Jz4f4YiWlSAIJcHRCo7uCFkIs5hdrziMqOHQwD2l9fGdis5K21M6x%2BWHNMSP3dGIZf2mI3vdDviZki3QxSM7aYLcw8amYftwuMbNMNcsf0El2qKME96HYxmY7bUQ4TEOtJj77iqq1547yeb6b4vUBR1xMl0EsVu5EIaoQx9asWcbPZoWU6ccmC4IY2AcSfacGe3WRbFT4fQybuNsFSWQN8fqeKxNt%2Bup7MqyLnaSUtQXrYX2t%2BiX6K1L8tHywKfOXSd%2FISMsupDQ11S4XGyVckOznZz%2Fh9FrHeQpB3BuQZHvdizVG493fa%2B2PfnJfUN47Yc79RM6nUID3%2BzajZpeSiq43T2uMi3zf6Q0Uaz6EiLjs7I%2B1aQYjAx7nXq%2BAgW7tcqMJaDvsAGOqUBTp4uDFTfVtZObz7wLLlGYt0cziq9EyUMZ9GSpUG2Sub7%2BTT5S26hfkh0OgPIGGzm0CfetSz9MLPM%2B1IZC8mDgTZ6DMyRy%2BeHAFjU7q2AvqIfr6ENxEf%2B6Ci3S8dbYydJCqBI6RTSoF0qwfuDZ35fG4K4J4hxK6vIaZrvX25O4rDHn2OTvIwcCOT%2F7LspwiI0aaHktLUKTnsYt3p1vYbPreoGqtM1&X-Amz-Signature=0a03f2c3344a9b586b9f0222b96b48dba7065f46188d856adac02da05082caab&X-Amz-SignedHeaders=host&x-id=GetObject)

- warmup.c (from os)
- arraylist.c (from os)
- getting length of a c array
