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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bab24be3-c0b5-4cfd-bcef-10ef39280abe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RC5JRBDH%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T131715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQD4nfyPkwu98T7D34h%2FGypLn6wnQXBGzkS1Y6LFd3GCCAIgCGV44r8IcH96JeEIE4OmNFaCccPZUZQSlZCJJS4WQxUq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDHY6tsdjceMHhM8VzyrcA2YsGOb%2FCtU62f5DimPTsJICS4bHcGauBp2io%2BldOBIvzUAghThH3AZjhLz7tFBXowdfQYe%2FlFUqGWsWVlCNE6RnGBfAXeuPJHeotFatHNOvV%2Bl0eF5ebLjANuz%2Bv2DNJWfH7n7MZHKuOJtw5EnjUzw2aHUFJC6GGXntZElo1kFiIniGcp3Vnh8Q0owoKJsG5UzBh7eLSYjhqPCTLTGXBLm%2BL5ZCztz1GLc4yKpXHYZcCqzL3MoljgLh5JfMLt%2FQUXhWuL%2FRWi%2B0ZIM3AwrmvJI0z76DmZEhB9x5IhD%2BcY0bWo%2FLD6Q%2Fv9zoELeCc6P1yVSBsktdbJMO%2B9tMLdfD%2BVKgqfzbjvyZQ%2Fq3DUc3HdNZZIMY06UNwZeBlHieOlwUNJcZgtb0hGYpeiGmzsUEf0iRwKhSbk67U%2Fn%2BnKeXZwAirL6kawIcR71HE9%2F8VRGB3sotp4FAqI76GaL97q1DVBSSzlaT5tnETXlbe8knoXkhknnA6nizMhs0HBZNPRobGTp4W%2FEkOEjxAo0SzDW2qfC2qtDjIZBm%2FOgvHdPs62qQJfJ%2F14hSwbL14xe0knTwp7dVK921nwxHMgOJseMBt4aLR9ehEpeUiKwQwmTt0HYxDScMJPi4NVkbXZeVMJvZy8EGOqUB7doky3D0R8a9gPrH8Ar0B4RCXv6pCShTfq0KGSDg%2BpoMxVS7rOLj7Gl109X6M5UBg4MSXji%2FdfTkijeQSco3iwx9x7%2Bw1KpzSiLIN0YLlUF%2FW9hR4mqrOojYzzCGOvdQ%2BGLfhh%2FDC%2FH9AvKV3VlpNZ0eg6LoweiAOh6P6zAIv8liAs1N0xSCA1Tfdz3piNefniqpjs6WuZbn4uW3JgxwpRi9Z402&X-Amz-Signature=c1b4f8dc66d3d2fb24a5aa6e6fd9656c2a50ee4daee7a588aa78b2d6164ae5f7&X-Amz-SignedHeaders=host&x-id=GetObject)

- warmup.c (from os)
- arraylist.c (from os)
- getting length of a c array
