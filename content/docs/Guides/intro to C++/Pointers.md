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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bab24be3-c0b5-4cfd-bcef-10ef39280abe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SS7AJ4WK%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T035340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCKCOewtYEYbhed8bbmQaISrzeK6Qzy5vohdto%2B%2BWmh%2BwIhAPazMG1Ultu8u6x0xE1CUYxxA1AkRa2eW7Jb6NjGnnMQKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxbcy4ELIJHNkvfAfcq3APg3smAsTrXGIHmRNrPG0naXOHSgU3Z1Hlnaltzh%2Fg7%2BHTQm4t3fn%2BpCZPLGb12LBxYA4uh24Q5UR4kYth0Surryi2dePfNuefBZfGdyTwYaGF%2BUcFQDiWnrAqCvUd2Q1TZsD4C1ZZn8Cd18Qjpf%2F1QvcZ9cY42KHWNJB8TjVX3v4nhM8CcWVssugty4Ypoh4IHoYBXx6pBqTpcRBmJPbsb9ooauFzVSJRKA4W6Oku7l%2BQuFuZDbtojeKo5vD72Flk8%2F3%2BNyVz%2FIt8tExClE9NxvSxMk5GaI8Ivli1jenDNdoVUkSu%2F03w4omQOfJ3akjG4PfyrM2wlZ2T7zcmAZ7Ru%2FIDvJjAkWAvJA%2BzuOMp9%2FqNgH3ifeeFJ5dGO%2F%2FFEXKurgn4CIxyV30s5sAPtWddWSl3Qf9q1Pa2qtgVSmIruwcLuUE6g%2FhjkTYtNo7rH5yYyHj1We2GXwxVjAmFGr7JmrD3tnoAiv55kqKAOE9GXyeS7htspbFPkISo40xvl3RAWqcQuWweVTV3thVx3UH83YF%2F%2FjBWh7%2BeRrwxTkIqzwECQ4LlUMBavOnRZnpFNJh0VmmxiMWSp0ql9k8dhJtaAzujcnH0ZYF9lfAeWFd%2Bx349eI0%2B7YtokSMeEvzCF6e7BBjqkAUd9TCb2w70Gnv%2B2mI9jJdxoioZUJo9idj7AUqhai%2BdMEZbu6%2BUQjsVdqupK8trX9qaxeuwSyhbskXaKuTH5PtxCmmnLGcJg7e7V%2BFrwmhZlTwl1Qgf7KA%2F1%2Bzm1dTip8y2DtPxQEt3TI37W43tHjnPiRpF65Ru8%2FtqdEIsQbuT49wawK9u4bmFtWI%2FaURo1cqTpeW5WXsPPqf52B1YApzCoc%2Fda&X-Amz-Signature=070d4cb8789d5f8d1110759463902a406e7aee3c9d344e5bdd154127a77e6ebe&X-Amz-SignedHeaders=host&x-id=GetObject)

- warmup.c (from os)
- arraylist.c (from os)
- getting length of a c array
