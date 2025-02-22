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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bab24be3-c0b5-4cfd-bcef-10ef39280abe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STNUMBHN%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T100552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNMoprAl4djfo5SrZkiUYXDohs%2FusbzhI1bErMaFFougIhAPT2k3LpwBVo%2BHbmBRho%2F2UnR6oRWz4dB6rC5XNsH5xhKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzjzW4ZZxG%2FFe9o37Aq3AP07EgHz144BL1FGRjOeHMGuGQO74Ex1bAKDd2M%2BaCWJyTFRRaO1QoQHOri7UDFCkBk1CAzHx%2Fz4wE5I9FuihB8%2FmDUTNK0FQ%2BUZbDANC4WTGeow%2B0NPxZDoCLLG1NHIBd%2BVPxGTzleQdTP6CxzR56YS%2Fg2NIMTyJATlw%2BihYSCJRLT629uVIi8U%2F%2BOFYWqgcG8ISJv0nRRcw8xnovd2nxq0watbV%2FBnHMR3fp93j2ry41MYC6V%2Be9FHUxElOd4t8tc4mo53Q5zVcXzFYbZIVc3TqOYWylEp5M7wFfXOvWKZ6zPJEYwWqpVsI7NTEWgyOzx%2FYO1P16rqCMhoZUxXuePr%2Beujkzmk6VnC4jGIbbbaoQWU8pdT5Od9GtdSStvSGP1sTVuGqRXLF%2Bkgk%2BJOg7V71du3ds8U6npKWfoj4tacSM%2FLjim3cZQ%2BPnQakxZg%2BL9JXuIiTdW9xFtsTVka218LuvXj%2By0j%2Fgi%2FO977s%2FF7oOTBU4pQ3pnx4YWSih31jGxinraIki42PsXuaflkt0xq3JhcO02X%2Bg%2BaYQj%2BWyo%2FFngiUgpP%2BIDTPsxwJzFZv%2FxF5uaFLa6Sj9r4U9d8N%2BD%2B7Xkr1RzIJMql6NluVB1u1dsBoaVzMSd2m%2F%2FkTCwx%2BW9BjqkAS3zLs7QSzlqsmWz3TcTt2ut6ypzTBVpcPuh5hiyFblLC5rayYvnM4Ds86lMoeXE50tTmrWGqZuWosc1MyVzD%2FuZjNDUjh%2FyO1RO2%2Fl74JCqHuT6tuFM37E1q1hj0TmB%2BkR%2F898aZyy7Wq8VyKaOftNG0Mlfu9mlpTkpnfz2HjMC3E%2F0pWw3sez2WJa0D0iGWeGG9Ony%2BjUiy8uyzgSBKl6Tj%2B8u&X-Amz-Signature=565c1a7e5c4128b944d7b2f6c36b349ece2588b4ec1087050e944fd05c45fbf8&X-Amz-SignedHeaders=host&x-id=GetObject)

- warmup.c (from os)
- arraylist.c (from os)
- getting length of a c array
