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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bab24be3-c0b5-4cfd-bcef-10ef39280abe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XV54Z3V5%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGYxdJry0BkLo0DDH%2BoRdbAHHGw9MOAoSkPif79J8vbVAiA94QUI58PPViXVgMONGNnPzSp5JkSNk%2FeLcc7yz3n%2BQCqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjNgLMk8mG5cUT4zLKtwDv%2FHgkxCUAnXjIsGiDOjm5MSLNUPraoyA%2FzpYGjRrWaHo3aRfV470GC7vDKada9S7XDri71DiJnIqT%2F8GO197w5ZY7dfUh%2BQbl5pQGqV1zlmPk%2B8hhpFrwZnHiiM6OybvKfP%2FiAH6E5%2Fwq3yt8hIZWNZsHbSVIoVcEZjpA0GNSMdlj3ONEJ80EjaL4gHXvWkg2no%2FvO501zrq4wU1DxB6cbBrfMUA3bB5sZyxyJt1FcT%2F3KBmJQLolyIkcF%2FKnDJwtS%2FpveEyp9Wb%2FE8yz1VF6bGr6WEuJHrPCj9n70HxG9A72LtGdGgVBE9wjIq7DTa3Z0zbO0FFk09ZpV08x7WLJYDH60RuFxCwChlBXsmCN%2FZvay77maeG%2Bs5SRLcEr54zs%2FWOw3rLnbAO4LV1Kw2t2ezaUEelDsHboaq9YNF55lS1LtVWwUBhtrRs%2B9RgIKz5ONCzQwT0JpcGUEoPEn2HscEGOxWYAHikByPtccNUv7SxucPisUHWUGiJbcZTyVVoGO%2FEp6VtJAYj0W7sPffYI0po6x3UZQ3wGCjLXahBYyutfwdrWFKJBBPhmEQdf9ZdXJ9jZItGvw8DKFb8x5l3mJL7kBSe%2B7dh402vIlGQ8ZF3sZfExw%2F66Xq06MgwhNaH0gY6pgGxYab8Jo7yHeJM47E%2BK%2FszbIR2LSyW4XxrVOMmts92ZzMmS2toVgGLFMrdHT%2F7QYNDSSCd9xMXE83pFBiSDxyTtO3FZ1Eoou7bOVEuQZEDssQikPwbNp21gjAGQpFp0ipG2N%2F8vJjG72wn%2FT7aNXZKmjIC1prKqe7jdvktZyrh0HGR%2FU2z21DM0hWQCBfQVKNwbfDF8tuzbPZp%2FI1hzLwyo9JlYHYP&X-Amz-Signature=e21529b548deae75118a50d70fbde7221d0fd82e6023905311e25426e0be401e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

- warmup.c (from os)
- arraylist.c (from os)
- getting length of a c array
