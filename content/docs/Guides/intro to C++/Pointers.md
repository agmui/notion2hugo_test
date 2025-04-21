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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bab24be3-c0b5-4cfd-bcef-10ef39280abe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JTIH6WL%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T170709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIAt9E38T4Xs15ySYbVMtzNzOG29dqKAvELP0z7uT1GuTAiBj70iwr25h6l8dS5U4PGEoZhMutpq%2BALgLLX77kqRlQiqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMf030q0unEJN33fN7KtwDLdpSF1g2vS12qRvYXBL8Gkkks2oe001uWKZkRmVIaUZrI1AEA2Em2CAzhIE8dn74WCSOHaXxoX9aKQFKpgdWhOzp%2FE2LcoxhXflPnHgS3o4%2Bya913s6kFHsMxDgsiAsvfq7gRw7ifP1J1ur%2Bk%2BaxVMzOegYxZPTQG791ZxUDPtrc2ap79%2BevipYNMGhhhs6o3UeGtHezCaHth2snJ%2BaED8u%2BZOE1pQDQgbFkADqBcuU7NUpJVZOjzkX61d9LrLym5qy3HCjV1ahzLGHTpWffnjIuh2JezdCzwpiub2PyVHVixWagJ9SfC%2BEH8m0s%2BjrTSRqRhb2YXqUj2%2B9gjmnBAJ1QYYZgjbyEjiwZk1ArTtUOiv6r%2FJIrNtG07ajqJi81pgL7tN%2F6Wz5ELSkKnNgRQFMirSCxBl%2FPdInCbCd1YdRrQmcmU5mZBqyL5Of8m89SZIsw%2BOpr3LWsBBQoVw22dH2XJ2jZt9lr6OqzWQt5hhfkPTwK%2B8OB4cNWl2qvec36V%2BXDFvGyTqxEQY7wIACYB8RfMYZICWT7f%2BuxlgsOD41jOSU2woRDCbdRYF1QDkh6%2B8d4Q1iNFTjxUB5jG%2BsYOMowXVlzpxh%2F2Ez%2Fmq%2B6iqUtPfRsTL97kpUS0wEwgO2ZwAY6pgE1mAYPro1LVWOpKL3%2F6vLvqbls9hAvH%2FpuGQQfL%2FvZKCCzPhG7KwPk5pz1WYQw2%2FdDHa34%2F486p5OWopkY2jOCaxO84yE8pytkD%2BxQGqaA38DN4mWaYvRp6d6PWHfFuabuj3nxLMfEUvx4SvUc1vQjMMPxF%2BCar0GbgJ5RFtTcQcHlAFJnKj286TqmwG6pnkCzLVBka6wi6rIX3446soW0%2BL3WXj%2Bd&X-Amz-Signature=6a7147ac07843b36782f4b20a4d490338bdd0881024438f13f9f2db1c2a71ccb&X-Amz-SignedHeaders=host&x-id=GetObject)

- warmup.c (from os)
- arraylist.c (from os)
- getting length of a c array
