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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bab24be3-c0b5-4cfd-bcef-10ef39280abe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CARH3SK%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T230742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHA9y7BYF5SQU3RoBWiJuIlN2nQjJanMwzL2xzxjHW7JAiAmVhkjDzJH%2B5ad3uqChOzQVCA8MdULvlZNBE3k4uoCyyqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbwkzEphgSaRymNFNKtwDAK%2BC%2Bjv6j0dqXqCYyjhEfAbEmEd1%2FnBEYA3%2FPDkq%2Fi6NJSE6MJqwN1XoHd4goc7vzqTZbiMrMPbWsVwj7WP%2BlFV%2F71NjXtWDIZNeOgSudPm00zUXMRfdzaIXTBDmlMOgG30ln%2F2thGoxAsx13h3WlfuD6qnlObEU7tNoK9nmx7yigRsYfzV6tjyakQkhbxZI%2F1i0Z2tdxlHLvHUOFkQlrW2FmArW%2Fu0jcJVJWKeVVRSWLXoLvDOrQzCLcK2ZrStesT0qpxvjO4N3Ef2tOyJ1yB%2F%2FuwyZJX%2BAZuqGATvySTbFKog3AsxRqb10QgQWnESRfM9KCygNNkCrPRs7AFZiPDG9pyGv8BDZbwrHFJ28VgKA2dfzlifnL5tiWjMNWm6r7J0xrzykxlRZWSdW%2FbpSNU2vTgdhp%2BIOJ3zh0XgXbjGoKSVb1AU6zi8zvmqRq09ORLdjrL67MrYl53K4uHs6yZt8MHbCN48jFQp%2FAkrgSELuLIhEgnWC5db8vi5nWvMDPmn083j0w5myoAGk7elrEB2aN5do%2FnNf5iw1lzaX4%2Fcs5n2amkJCpX0orP7YOkpASpks0hA3%2FLx3eSSd4TGBeHFs6QXVmMa85EAJqCu2893PDAf2JSQdGcUAKZcwuY3evQY6pgFT8Idf5Fh0b1RmjtjXsIlVZ8Lx1fwVyVIU1KQMg40rtR%2Bjy%2BkaWUbefHkH84z8xPkOix%2BvQqv3tGN0i4ZfOObruefM4IZpLQucByNShALibVON0k7Y9W66gKIMJZR7w2AMiMraGpGIB6x%2FU2YNSYcF9SsukaOHya59BSJKOjEEOVGi01sJFYz1Z253%2B7MeHPXesj9IrIHqdadaivR4BlRJkud6bGi3&X-Amz-Signature=bdcaef3f31bb0e0563944bac98ec3fae2679e0f8f5e603c703a999b4331cfb40&X-Amz-SignedHeaders=host&x-id=GetObject)

- warmup.c (from os)
- arraylist.c (from os)
- getting length of a c array
