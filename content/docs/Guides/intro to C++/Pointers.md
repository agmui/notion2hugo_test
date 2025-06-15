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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bab24be3-c0b5-4cfd-bcef-10ef39280abe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XX5DWA6D%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T131854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIC%2B6Tx7gilvZOupE0KhEaHxqepwq439qshK0PjdcQXjFAiEA3eybbB31aPqNLZskPeXOBR3%2BaVpAvlDXheQA2Q1Jcesq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDFkJJRk4hozrvuXfnyrcA7ek9LuP%2Bw7y9Xp0oG9i7273BBbvl3E1Dq4F3gnUZT0XY1oq66%2BFl1md4yRP3J%2FSIeSaqOmnRag%2Fqe%2BUFB5IWiizYmRto2weaJCTCApdQtaszeUjDx0bQYTsB%2BBtfUXJ6FKyxasghfIeyYfbbbvN7%2FnCu2kNZpPeU933JlOXxlkLctubBohirBEnW7IDr3e6CiGhmFTbBh8Exla4T081u9DChBbPSAWCrJpHegsksUcHk%2Fyod0cvBBaqIrKC%2FRSO56gSkVRoN20%2B5i8IjXUed1ngLjt6I1Ac8vHETxk4pqoJimNipOZu9dttnzAI5ymVnwEhOkgCLvGMk9grCxxRG%2FSmTvZZGZzxtQ%2FMNbty1HgBcSPJybHzmZjBsxHDgRioeIWZ6Njj9gqZQiEU%2FwDQDH8s4qfbcpsB9R%2FMkfyxIC0U4Vok9pkhbExVEzQUwwLztm3R%2Bk09t83X4Luf4S2dMtIFTr%2FIUQ0Rkj1h22QGKV5tOYKIEJOO1R430%2FD6ojTtFHPQvcPJKqp%2BlzwCW8oga7lbCRe9Gd9WRbmw0o%2BAk7AeTwcAeiOe3vSoTibbSFpnbA6HBvaybzBu3t1SktdblErbtke0s767KKVVc%2FBBVDVi4Cy3fhtujpvcIyKSMKaFusIGOqUBfF4EK0%2BXrf6ihffvNs3%2FcU5sYXC0ed%2BUjxQ5uNtjEHh%2BB0jFo5XlvNvvklKGJk9BP5bnzu7HWVRurTaKl6zhsl5D2KpMrRSn3DbWVnH14omToFoFSQFDDwjY%2FNPH3duJOcPvhr%2BeQSVMl6NN%2FHLO%2BoY4w6FYif07Wu4s6xBSCbC7YRd7hEAIW68cvNvCMrDe6HxAjXLb69des7PBc1CWafAWPlXh&X-Amz-Signature=b6501f8cdd6b9017bed274d716b2fffdd7da07069d7ebb6844987a9ef9b7501e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

- warmup.c (from os)
- arraylist.c (from os)
- getting length of a c array
