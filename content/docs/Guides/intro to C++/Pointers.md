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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bab24be3-c0b5-4cfd-bcef-10ef39280abe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BQ4KRJX%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T230827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFAps7LCn0JNvgT3Y%2F5le3HHFa8odmsTVUUZZ3lmXn3hAiEAtBxt31th7GY7dGDedA3I8yYd5CN4u1uTGUFOy%2B%2F0BqsqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOPx%2FbtDreJcjV3pqircA8siuGm2krGuH%2Fi3FgOyFrlbDpZuUUzghiIpz%2BHELgYsj5bsJTnDo%2F1qlRv9P%2FMPctsEbc%2BtFDjgd1ypOto3xRQjRPgLDVq6q1Cyt3poipBXQJO4E%2BELPK0YRiH8g1AL93HhIHB1WFKLthzs00LTe5LCT3xv4%2BJD%2F%2B7i2xt1aZQE%2FMwi%2BNlzKDkhMF%2Fw4yCjTzl0oP1aX8NP56ZZk17n%2BESE9zVRS3mbCnDDPzWcDeSjjgrgX1S%2FjuKspxgyke4ZjI34LDy5%2Fkp6jyEmxHh0m%2BmF9owxUhdn2QYblnrKKomCUQZoZQaSEKTPsGl12h7AWSprX2XKG5Vx7KXmkxi31ZsZ0Omji7IXCHSYG9kdxKkLsfhlMmwMEn%2B1JJEfhgHCuayI4I4YHWsuOrPcsjIrWMzs92g5NT2l7Xr7bB%2F%2BEb4kjrnDeUlTqVUiAaS%2F9AG019%2BP90xUD5Zm1%2B4dxjMTH%2F4gF4XGrQAWZRwPpzUcVJA%2BE70qDW4dRGA3GowRA1V%2F2p1PwSlptkUytbjRygPjfCFzbZsu%2F9slI7wG9Xy0LX2yw5nVQvpfS5vHqdw%2Bzj6rRyB%2FmmqokrTFtrbBbChh3SaUKpzsI%2BMg7GahfkVBS3PZymt%2FTAaho6o1fX6XMJXFncIGOqUB88jHPmfPElwFhf9aJn18k9Pm9cBFuqnTxxrinDWCk0dYwTPDNxedYB1ZbLXF4SM6DCDv8mdqIx0PJLifNddNtqZ863t2qLo3WM%2Fm8AmLiDvw1u4kBVrUcpbzq2AnhPa82hlAIYbJ7SlueGS5lY3d9UmvdlNx%2Bgoshr%2BROheW5yucZCNZGoy1wjWPdbUCCQq3RpKuxKomJyxEUqlqUvG%2F3USOMwD9&X-Amz-Signature=01db9639975600502a7e5875830fdbfad1a404dbe4fe75a9c4a5528f63b9fa53&X-Amz-SignedHeaders=host&x-id=GetObject)

- warmup.c (from os)
- arraylist.c (from os)
- getting length of a c array
