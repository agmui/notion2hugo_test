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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bab24be3-c0b5-4cfd-bcef-10ef39280abe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TR7DUAB6%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T050902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSyI4iRaDjTMgVrGZpCtcIGq%2FYOBHLFIp6KE4rdr98lwIgFNtWItUYIC9NhXrS0nyUVgh%2BnocqgsdB0NhZYJv5EKcqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMCUJL0uHJo%2FE%2BtTZSrcA7Taq0rSOq7OjvvnyYS5f8UAs9HwJXvbOxTGBiStge7I7qQPAlPOeJ7TmOxVoCOPVCC6Wn39wmTssnbfSx6ldZZ2hm%2Fk%2FK%2BUICQPOQcx38RlIAzXVAQM%2BbYG1MhxW2OeBr9z%2BVdQy7nnWOAUSHQXwzn28gnssnaUAw5V9E%2FPAQuqlr7eUD7k1ndV%2Fo5Cu87AvzYM8fgVNWHZ3QKV1AVD4iqrZH9aMbikdd%2BgM4RghBqxz8tC9rq%2BKzfhAQi4ixIFPa0FoSiluzhDcw1ULl5rB2AsY7%2B4nQEZGNvHFOzBuCMEPA167TS9CsKrhNBDEGn3O1i3qWfELus5SJcnrUNeJ7jj2T9GXjoQeRRfH%2FRILOumn4zHrlijxa0nWNB3fovtDGz%2BizUy1TQ3NbegN90ZjbtUoJoMNOzrnTa%2FUHM0edVmawiqRRbkjZF7fbcjV4zEWjAw4vbXmoQ%2BewgMM2kVjvkkM2jwfTrdHsFVyb%2Bhc4BoTop9xkgmyDIYQTO1jCix2kYU%2Bf57tKSxzPzvOygnO%2Bucd9xj%2BcAx3YvThrqg%2BzE7c%2Fd%2Ba2qqa1S6f5s4%2BZRp%2FvDKk6SocMixD02A2xs7wNhhnfKW8g3ch0nx4J5XUFfwR6hvSbvj%2FLbrzX%2FGMIfS%2FcIGOqUBizRumVpV0p9ZPprTt9OsEK3nJTchx4xP1OzGCC82WuPLfBfcQS8EJ%2Bza4PKaWhHZGMm%2FhIuY0%2BIpz8BnW679GnGAgi3CTdXWaorEGohnKZHUqPMufx2DiH16NxO%2FAXdlMLzMyE1I%2BJveOdtGD352AG5ngmflOnXNaEPt3MeJYVR%2BbuLlHZVlFTDQtXFrAta1p25ZsmIQd5Giva5nL4f78XNBPSG1&X-Amz-Signature=6b40d98aa30b15d56c5a07f7fe8240630d232e96a089451596d5425e54fdbb9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

- warmup.c (from os)
- arraylist.c (from os)
- getting length of a c array
