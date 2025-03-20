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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bab24be3-c0b5-4cfd-bcef-10ef39280abe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRTY4XWX%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T061144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIGE5iI%2FCKdUJNYiVdq9jdE6YYTx5VD7h31Pf19frKdG5AiBntQr4EvtQcjO%2F1VgWnDLiRmhytZl3cflzHHJEo71VECqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQKyXwBfBuPe0UlrJKtwDu7xf5huqAWHMiD6Vcu98B3N92WUrRwq0fyGE%2B5yIh%2FRHgZ%2BtmnvcU4N64xEmH9aXg9%2FHUVWD%2FXLdPjnRqxmVuaWHtMLqvu4VqJKFYUcZ%2FyS%2BWml0aM0d4oy1hzAH5D8dvKLUqR3SKjZBC9EQSHYgjZYRw3HjdCQWmcRx%2Fk5zRd8yFYdYn%2BNIwBnpib%2BBTQgQNGN7dhAD%2FKTxQSketnvZZzHk6sOC73JJRftxyE5IazTV5NNSnKupQVUBfIWNVOEsH1QCG7xIRadaU4W%2BEQOFk2ZKY%2BqbOGqq9C3dYwWJzTA8z6byd%2BExP0tsE5s5cpmESPPK2Nw23kQ77zke6Ow%2FbA4jn6UybWVpFyRKFQ84b6B9S3%2FXn0HskvH%2BxS35CLw7U82Qsls%2BexFxcLKqsl5eBpuqAJjPjXtvuvOcFMYpvRrMIUVMYkVSe8cF9lIF%2BSkmgrE6bu6DL9juHpLUadmhk8Kwajj5Jy8sFaM6SYsJXwM%2FXslEvojrY55YSc7MnFn8If41TZRGAn7Xdef2%2Beu2KOqzh55Rp%2BnKU%2FUIwlzQFNrfX%2FDYKrg3RNSezn%2FDlbZqW6agw9CiyXkw5SF2r2OQO9EB6ihhLH5VBzzoOjglZT01PRHRPncTeTpwufgwz8fuvgY6pgF2XtLp4NaOTXwMkguKjF704VEj9flFyGmMuZMm%2BlJAERpdd8vs8sz3HXdCwkb%2B5j5%2FRJ4A3PGTqFQTzIUkcp%2F%2BpcAV8CWOYxfhC6VHeHBlBdtxYTg3Cl5lh6%2BQjOGlStHon0vMqdJpHDesMhGd5TB31Js1C2LmISGO3OPqYB6IKBNXwtqlkGlT7wmT2pCUyeu3ESPGM6amD6EKBi02JgJMiJvv3mqZ&X-Amz-Signature=054ec0a47ec23a93a08d49849ac877f81e939656d29ca96503e0cbeaf3c3a5f4&X-Amz-SignedHeaders=host&x-id=GetObject)

- warmup.c (from os)
- arraylist.c (from os)
- getting length of a c array
