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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bab24be3-c0b5-4cfd-bcef-10ef39280abe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6XLTG2C%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T181043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCICygOuj%2FgQv7rydqf9%2BFbsrqMG95ndjUud6l4jOFhbnhAiAiZdvTYv9H6HVfvIEtvV47gXJhOckcF4nlf9Qa%2BucJwiqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM45%2Bsvta3fbJrrhf0KtwD3qnAtj%2B6Tkye%2BL2aVX31CWYIted3Azlq1moGEYi7ZmGy%2FVGD0fqh7fFwvpYeU7JcYZGBBuWi8Je4c2SOv2ygm49tBCtQkQckjyYRVQ276voFWAn9EyM5qApE53hVV4CsPtw92whiuVyxhf8rivwFDrLFWk7YNSv9Ydewx1d%2Bb7mEg5SNy9vRRRdSC0B1KyHSNPvvpabn8skW25uFYaSG5Ldx2dGw%2F3c2axl38z3MA8vb%2BuUrIJ%2BaU%2BFxOfZg8kXppO5aDHdbUY0nkvYIdcqzP%2Fd%2BIkwbgLxPRvJAQh5qpOaJ5Dhb3BqP%2Fzq4hpw%2FkDuRiiA6gT3nyF7XEeSvNY4sNUggTL7WPX4GWtPZYc6GLEBB%2Bt3pLyUkrZYmwWNie3Q5AClrU%2FTht1ePmCmHyD0YM7Mg%2FczEu%2FLD1%2BmFiafeLq2owQCWNl6v%2FBhCHW5l7s9nZxdpE5%2FEcGsqv2CAb%2FdmJzMR7ioONCAO5Fn%2F2hdvCQCFDFTYliTdf8gIDQDWVWWOlyVrKSOqWwCCTGqxb3eI8N2iu39TF4KH4QEfJH5jzVdMqQ%2FrpzL%2Fr4xF9xMKz7fR%2FNHMGsZ9h5tmAewERxizmq1QMQKt2yKj4mkg3HllnhlTBwBNT1rpAWFYwJ8w1br2vgY6pgERB%2B%2FH9GowI88CUJ9t8NTRBDaa2uWed2zzWgL26RGqfIQXOZpcv7VqRZlQ7Bc6PEayIgPqGz71uBIUB8xJN5dlpMRdU8%2BkQt3ZctM6RwQqbp6W9A4o%2BkXCTEpr5vh%2FQ9t2p%2FXUd%2FUJ10Rvz2TdmN7kN1atP3zT7jwiV63J3Av3DIDm7bSe9PKGt8l00zt7kk%2Bim%2BZ45ddbuTPJa9cDLxzaOd6a7Fh0&X-Amz-Signature=cceef94ffcb2348c1bb33471a046c32af75c42b533b20e7dcd2b4279df8c0c0c&X-Amz-SignedHeaders=host&x-id=GetObject)

- warmup.c (from os)
- arraylist.c (from os)
- getting length of a c array
