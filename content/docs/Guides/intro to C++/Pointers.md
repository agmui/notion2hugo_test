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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bab24be3-c0b5-4cfd-bcef-10ef39280abe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZQEYRH2%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T200828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH4jGckxsDyYqurbH0DtgpRkqx6YBYptLsI4QB8E%2BTdnAiEAz%2BlYfA%2F3AHV%2B0FjH9lXliti4gtPg0janc1NMDPi%2BkxkqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKBdyEalYCFcNmDptyrcA54s334RMZeiV5hOM8%2FLcq4X4mf7lhZfuyg4WI4olhIL85VDMzdRwryopMyFhSD%2Fmp%2F%2FDtpHeN4LpBWrRGvhTVG%2FALDoucz4GDDZ%2FAUn0aHDgaMX1FQR967vO3Mtf8V9Tq5kQU1FkDO2gbp60sSVlxf%2FpJ3Zudkx2AMzywpuqCSPvm59%2Bk2ZIZTjOV9vxgW8SXDij3kBhdhHKsa19z0seTiu89xZRwFw8oIp%2FfxWKletV5AkU79j2PLs%2FMcy5xdRNp0hEkPneRw73QowXe42gCPSL2QZNk9H2zhGwiKs%2Fu8a%2B1xvhoGwz0dCas6gAwvwHZpXhC%2F6xbnSWf5vu51zc1SnOpACOd9%2Ftw0sL%2FK26x2lU8VQ58qTxrJnfOHbOVjOOLubn1mlJY1me0FQnMfZyt4q%2BijB9%2B64YfSWINzrcOn0VCwFS3x7nXnK4RP7Rc%2FEbypRm4j%2Ffgc6z6hqmoXOuq64%2FXy7YqNNatLsh0FtDeCHrRbl7Gr2ZlCG%2Btgaz2iDciYLQBWuKkulLq5NQmcrS7jkM4Lozw4W3KXDk4GsH%2F4%2BM1maY5WgHBdCezSs6UZkhYUtQLaN8fikF2L4D1HQfq%2FEU3OBZIQx74eGC%2FECHJJ3cWYVpSuvdTXdupWgMMvIrr0GOqUBmSA7DxwUy6irbxPGjGG%2BCeoqiAX5F6makz6IsxvtPp1JUNe%2FMbeF2eKyD7hGP6eUJsenp3xUxfoVs5unaxxwn3TCmLhLlfi9e9xozfeX2iepsMVf41y%2B5htabWFWBlBG%2BfifGOoVLbiEX9SQJoNVdMfa3737f9IOGmVWqebxH4tKSNZGDJI23wt9VXAIJFtIwPTByNNDLNEktLNk2gMGaobdNQto&X-Amz-Signature=194a85bea4ade8bc46b3abf86cbc06679b38a12400d387508e6cc5a57dd450d9&X-Amz-SignedHeaders=host&x-id=GetObject)

- warmup.c (from os)
- arraylist.c (from os)
- getting length of a c array
