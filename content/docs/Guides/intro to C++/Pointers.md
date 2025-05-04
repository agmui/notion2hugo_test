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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bab24be3-c0b5-4cfd-bcef-10ef39280abe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673VMOMFF%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T150717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCxJUmBIXqoUiZ58WxI3OHTAKDzX2Iqi%2FRRILBBHNpAjgIgTyHrarzUPqvdD4Dcqiyg0ySAYPJyV8ciQIojcRpCLzAq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDOvhMjRK1OveKqJD5ircA02j2cyQyn2pG7FvylMqr4yb6YvhusLTKwWmzd%2Fp%2BUNWf1XNF9cE1edWD%2FfqYZxNQYRYlC478iQiKL6MiMcGn1p4WCo%2B7TGs96iJlIWc%2BueuhSg1EIq9ObZDm8zrEP0ycAG%2B2S41v0To%2F%2BWc8vhY7%2FcluTeyXbgFeY7vAys1%2F3SeH%2Fq1PkDxQZNsQt2XS8e9yjlR57LQgirZ%2F6NBy2NqR6BWi%2FxYIR5phkbOya4fnI05vzhzl6htNQrjgXA0IWVqJRY8tuf%2F2vPid07VcaaKMUWb%2Bo97tdi7Etk6O6el6u2%2BEr6qKVTOnkHcOs%2FUW3qP3coOR1k9iwHVc%2F7NZCj6EVHy1zCp9tBo6Zf%2FWUaA6SV8hoAnxj8sGu1TYQo7C0gJYzPgAYloLP7dG26w7Y0NoyocsQ1KcL0cBmnbXhXCuLsL3wFFSjk8J3eevNAkwTP9Xgxf72vyDR9hvaeJ9KxQlAk%2FU%2Bs%2FJwI8w8KsLoAOYmgEJo3qCUSW02G%2B07Q9ZxmKStr7JzNsPNMghGVMLb2ZnGABnVIczIjFrwtMPxS7xF2e3eo8c1fzIRffIp1As51862jpddzZXEEsuYcYXa0K91Fuc8EbeTPMRnTUqdV%2F3BJeoHmAEy1sQm%2FcZTFRMNmP3cAGOqUBvUHedYBqiEO11YPx4X9W3Wps%2FjYQuy8oRc9aMMTH9n0xU7qH3GjJQ1LPhI%2BbuREKqcpwgm2%2BSbf81LmPD01Pg%2FoRW6N6%2BhQTcJmFosJtl9w8nhHwafx8PpnU4VLyvUv%2Fe7dfFADYDkerzeuS5eeo1pak1zdMIMWxvBspmoR8nLjHYUs8fVQRuOMLkXw00yTderi1ykDfHchtMhMJ06l8gnYPD05D&X-Amz-Signature=43e242e4de1e9e1b6762a5ec876d4f68493eac36f828fc5417eab7d989a52b71&X-Amz-SignedHeaders=host&x-id=GetObject)

- warmup.c (from os)
- arraylist.c (from os)
- getting length of a c array
