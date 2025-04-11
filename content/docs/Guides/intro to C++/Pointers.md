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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bab24be3-c0b5-4cfd-bcef-10ef39280abe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AT5HGXS%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T131907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIQDydww8r2eLw2PQcQTnGqFCVcefFL5IUDoR6R7SOEDSbQIgYu4ju%2FfnpPvbjzEKVLoCRNHg8nNtyeS8J%2FaJgMtA07oqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNjY2Ox746UR4G70DyrcA9%2F1zMZrtBoklORK6Ec%2Bh3ykR4yZmT%2F1d%2BPB9kFFsmbYJd%2BkjTvujj%2FIlT2HJnB6GH8bzzlaHjtTY59Lmg7u9kuehZ2f3b%2BxSt1nqh8hL%2FJNYzQ4A4sTgVD40aUbT6oxr5vYCYC1wCiY%2FgKY6U6ap6caAML9jPonwoYp56cGxEQHvKeb9acvsp6rj5f0fvL9i0Yihx83t0VcJGz2MV0jwcAUXRKiEVYCbjzE7QXHUsGKyk2CfeHR7h3Pb8ukzZyT1WI%2FnI5Gx6JAoj0TTNb9oGnlUHPrWJ8WzuJ3AXlVxv3Txo%2FEOoNcS86XoBcemHBF8IoU0%2FOvNjmpEqCKnMRuayepKLZuEdgNU0WyTooVtZXgmrlx8kdh7uwCSPnMRWKTq3BRBQcIEdYaefRG0skxKwwDlmb9dC9RifpBqFgDICHcJvvQ5rxugeIOG0penTdKwFgISskI92DsGXsKJNCapjvpNpGkQjLgLJSYwlU3tawmEXU2a3BKlJNGfV4FcAeb88VDcM0h3WwOIZ%2FCgq8CGYNN%2FLkvG5Tb%2BITqG6Bmr%2FWxHfVQU2UUk81TayldifV80Px7ac56K6vruADugw4PzGHKz2JxAsL2Mca20fDX4eba8ajkKG%2BlDjOlDpegMMKc5L8GOqUBgtf1JuZZk28bznmLmqHSkA3eKNSRiBp2bXdXsNkLBQ2s5tsDvN6KlyYMgQnhK%2Bgk4xxgEM8ezNZoYlhVoy8EfoL6NzV2LziW0SOaAOMtPuIutyGBOdR%2Fa2xa52yLx9PJHlgr2Dsnp%2FNYrkBuCqMlbs%2BxYPf8mj%2BUsI6Av1lRuNVpjY24zEYcS7kufjs1NtHMy6VYvmhlW5ND6moo7oewbMsx61vU&X-Amz-Signature=88e28fc4987570eff7463aa3a704bf2e295f4c8633a7cf7a15379fa679b31bf8&X-Amz-SignedHeaders=host&x-id=GetObject)

- warmup.c (from os)
- arraylist.c (from os)
- getting length of a c array
