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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bab24be3-c0b5-4cfd-bcef-10ef39280abe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WFWLYEV%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIEuz%2FmA%2FXrBk0mrLenVAacx1TTHT2aa14k%2BMYUKE0R0tAiBrbsWfp1J8nxVww6%2BanPAyKJ9ez6ID%2F2IR%2BDteTbRSByqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBy35VOHIEjnkLhmjKtwDY6QxYhyHgApt4g07RnFeL4ecIbVSG9Lm9ISQB56elpwJvicrGihYYskXZkIrA1BVr4K9jbx0gTuPzm6duW2rRDIH3LBfUIvCJZD9CEuOLhWKyCIrxjKfZWEMewznZgH65621sdgHioH7EbWkEBJm%2FEJ%2BZCR9GDsbnRYTNfixW3evEmprO6YY2s2cN5xMq2yMazHI6gF5WEwvDLVffK545tVxKi8Ou8fOYCirYTxHxdsq7tr4yv2MfK2wtnd318oQxXfIczMlO9n3y3M2OcdCMZslo3nI5WpWaMy9x8R37NZ6bL04cHo1xdGkRyriF8XKhfXnU0Irdsj6TFSnSto1XqvXRUcclQMVHU9tWhUxm6TT8%2FtF1h5FMHgxECh2RBGPWsJ3ye%2Bq76r647cDM2hoAfi8l9ajrFnzgKncdgerDPG%2BX4XgkWX5hvFAEnq5PVpYMH6jFXBDvCZw%2F8d8XvjWYzK8pFGJTVreJE1Fjgz4t93VKZOnU1Dx6ncykOrXGVkz0wLeCscoIi%2BbTtshLmIkI6XXY%2BFuZVApWBH%2BBf7hfxNa%2F%2BOhtjyyO6MDp9XmepQvZHx64Q16WK5rn%2F%2FI4RcVWIt8T6ELCxZMPdlC%2FayscmxCyeOqyXQ77gko%2B2YwycTbxAY6pgFuRCZFwAbYKY9ZdbJKa1r57ntE%2FJ%2BWEpkhF8xUbWsjq96DrAaOd3j%2B2XZy8FJM34o9PP6iHULoQjd%2Fv93%2FUS3KAagIZHyalTLMtxDs4opjB4IGgO1Qzp2DpLkqdjoJYPrRduUL89zlhiYoVS2qRIFLGdrVD73O8VZ%2Beo5vKVbcZ0Ecj7QVlO17nSSdG4DSVi2d3fwQQ5AGVF%2BWvUkfl4zO1W8d%2BiVr&X-Amz-Signature=126b8befe7f49a25bc7cd13a69fa3355f623107b733bda8872c8798639237855&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

- warmup.c (from os)
- arraylist.c (from os)
- getting length of a c array
