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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bab24be3-c0b5-4cfd-bcef-10ef39280abe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5PXJHKY%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T170653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGwJYLvZP7MeI8baC1R7retIBpTrYcQiUyoaOTFFXaKcAiEA01HF5qcH%2FvWrASet%2FDcxdLhuwiyE0bw6rkH7TKxRTLcqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLISapLv%2FAb5FHRuuCrcA6546Ysm8aQ%2FylaDR9%2BPpYS3%2FYkeeVdoI6icigQdKh2yna%2F3smzD6RhU7t14J7VMcpj4uGK0Wbr4BzBb4KwxUDxdvluVdqxqHx3OfSt27I9sUQbfJ1lQOm9RyJbPDSi6eGsEuCiEWQSi3BMvgDL7QhpGFdtDSn8FKZpi%2B3Tmfviqydla2g%2FKhcBG%2BItWGlwWvJBhG8ej0OvYRegkHcCiZ5Gg4Nmc36N3oz05uuWXX1elbo1KVkw1YZakKuMzce7AT24oQgS9QAGJ3FIeYbGKiktnjrcoPO5jD%2FVFJ0SJRdq7d4ddQ9dN2jExu%2BsbafFYH6jYh%2B%2FGCiDpJhB1Ym7opnAZkPZlMYEydl0qrHuCKy13E4vadT9QH5sdugxrTI59afgrs27lpBnv9MoHfESHomWSFpaGpqj65SCvkC0vzGQUBOtP32KFl%2F5agE7EWvmiWNYru%2F966SsEKSktXFQZjJ4%2Fj9SIodAlTL3%2FHj9YUdYHrwJQ4V58AoIE5UMYbXUOZsHgtLjmVZVnR6WmUgmHtHKmBZQEofrdzuKBWr5%2FmB8d98xdewnhcsVn2cKOH6kdbqlxztZ%2B89YyBhpvBFB134AHy3G5MBA6rHIeJhoSOClRfNFH3wIz%2FBdSeyJqMIuhysMGOqUBTgamBZmf3xxPKO%2FfBxdIiZPtWbZMUtILggLuSfZ6Ip8SPc%2B%2Fl42M5LXhbcC9phNxuyJEU%2FCUSQFjW0rtU2%2B6W0p5AcQl6MmPGTTl%2FUZ66rbyCmBVOCF4UN0Y48QjG31%2FxuueZq6fZNgpPrdDIVM0hDkKKzjMCskEyZTzEnfAKqzLM9ZYxaptYzKha1n8iRFQl96we32C%2F1llbTAEHJ0dzYs%2FbQF1&X-Amz-Signature=04d9df439621d4a8511f246499cee5cee3f88c0d5d79ab60acca5a5dba07912b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

- warmup.c (from os)
- arraylist.c (from os)
- getting length of a c array
