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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bab24be3-c0b5-4cfd-bcef-10ef39280abe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GW26DUO%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T051553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQDLvAmv%2BD0g%2F%2Fpt3zar%2FUxbfzqev1AIsfavA56iBR1%2BRAIgBr0Zn2fL0tiO39qwqBGxoTks%2BFEuzVFM8GOsTGLmoWgq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDNyOIGWI6j%2FhM%2Fep7SrcAyaFrZI99bR4AuAjIZaBLtdUU3GcVDpHT%2F5U6LopZ7ju5saKvO2RGyYINhqUthQym5UCJLCU5xgPun50RbVk4XKJYb7V9K7UM9MQcnjDcZLRrpX9Cb8Karfr9MsAGqXx3CmDyfIj6BO4BfXPUoZAYNQGF4%2Bcxxz%2F515seMnMgDQ1F5WBweit5wCZoXl3Eo82j8JeZHkRHpZQ1QKrrBjTUPyEHq3SVx2lstxgnU1ad7vRts%2Btzb2E72igkvszc8kNg6kyNarTwNV%2F%2FKOUxwEy6QNoHykWFdE3eSVlJ41tqVM5A0p7rEaSamz0Ry0pb4gTiLq9uInjFvs7xv3ixYRqimtcN%2B%2BM0EjDqIHNUXgaghiQFb%2B4wJ7GrIAI4yF5M53MjKWiUSu3vYMTa2mgELYQpXiVcdTN9feJ6SnuYm%2BkKCpr4TU7CstKD1a9dVcrxJLaA1exrPJG9NW73iK%2FCzvxar7c8hGMXkrxUL7SHCGmkK%2BR%2BWrlwjF0%2FIX7qYzcIMO%2FJqbyBw2LK8uA9525aLmiSsl%2BaBh0JnbBVbRztX3%2FYNiAYfXpQunJyweR6lQzGITZ%2FfqhoZ0GJV%2FERjrky6%2BBKvXXbkck2w3g%2F%2FQKeJZkvFjRSs8JxklURLvbHJY1MJTu4cMGOqUB6k4UW23BcoYv7hcRake31Oo2dd1EGEg7wN3HN9xu4tVWDpfec%2BJWsAmu6%2FPVM3z4d6HCKo%2FqaeME37SVMBUc%2F%2Blz82c9QjE99RHb%2BIsuJCViu%2BJXBkRtWg5Lg4%2FjQwoB2UPj3%2BAyjNEOOdiBMswO9SEmetKgMwsGfmmGeNeVqphNaovwuPIknAZHql%2Bd9cEXf1v%2BUQZ9uuROx%2B%2FXNYbqdsvZ2r9o&X-Amz-Signature=c9fd980ee19da5c641ff1320e24090deeaed2936742fd1212cb022f6f380a578&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

- warmup.c (from os)
- arraylist.c (from os)
- getting length of a c array
