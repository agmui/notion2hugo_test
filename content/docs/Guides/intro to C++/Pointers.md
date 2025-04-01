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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bab24be3-c0b5-4cfd-bcef-10ef39280abe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SMDIZXW%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T160857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDJ%2FnTr%2BhtoFu2QosjJFr7WtVU0eGysC2V9J3g0oCAXnQIhAJ3DtCPMKW4X8%2FdNHHj9OWSAPQwFAIpH%2FJ7rP60guUZCKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMjsADZryZYRQQ%2FUwq3ANiqyggO9%2B%2F%2FVvh4%2BEwrARPGCds8zc8FygbFgmKVqKYS3UcvrDU5wdZAJq2r%2FMIqgag9TYN%2FNRZN1RzFoW8Puv%2B4Stkkt2jHS2NvbAmrXyRTSwyABTcZ4GzkW8WPvSg4hkA1OL8BhViCuju0%2BA4D0ImfKPYpoO0M5Mj7lTDTCB6ENKAykL7ZSSibJvchW2jipnN1zVm%2BoPIFiyt%2B7WdknBpDa70W61iLGv0brZRYlUUjnFKS9Bl5f%2F9P0e3Em13ZTkvrKeIrK%2B9wF5vfO%2FQMLGdsePG7dZb%2FrWBnmOvYKCesFL7p%2Fgb%2BGBnhGZDU%2BU%2Fv9BoKU4ieRtGXHlMjW8s4zGjdLu1um%2FTYGNov7efhZWz13tze1s855TvRYstXKZUmRXtnsjV5ecwwqi9e%2B2cCnvEoWGFJXVaoy6hNm8XiaauJI1dyimeIJ%2Bo8wi5MJLmwXPQKxv8jg02heZllD1O6GeFgyclTB%2Bs0xv9SuDmYqT%2Fk2L9fdsnjAd5aNxJJwBkNF8T3BHE%2FlrLJBI66ruGYwltY4wH9aUgj1x9Yula6zKwGcA%2BZHTryZHzcV5ThyqFmJfLM6f%2BSQQ4Q6BUn53iUJ0ooIlx7BOFiW%2B9kvcU5DFpLIuPcuUEbHLuuxsP2DDRh7C%2FBjqkAd5nhlUyCdZcRq3VDKbXOa08xUadmiXwuAeA9QzPd%2FGO36JAIho%2FltyuSO59Wpkr7cTnby0ggq1qgZte8Ci6CnmGQC5VWctZ%2Ba%2B%2FiX0lMJA%2BZnjIJD6cpZGtxt8OkmWjeJAO2xQg9Ig2XUW%2FkR3x2uwdTU1EbHHXTSMTZdZ4u95iYlYPBHX%2B44FN1sirOgFeqRWgDfmkKLn8DJ2lcGihL%2BqpcV%2Fc&X-Amz-Signature=cf853128f80116eb9900d77f44696254ae6b61626ecac4c7bbd2ae4a0ff89ceb&X-Amz-SignedHeaders=host&x-id=GetObject)

- warmup.c (from os)
- arraylist.c (from os)
- getting length of a c array
