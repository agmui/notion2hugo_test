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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bab24be3-c0b5-4cfd-bcef-10ef39280abe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDIGZGL6%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T190125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSdO701ZbaSyuEaRyb9ypIHttGW1QnC6sgOuVdjGtZvQIgIhAweDl11J8kLFwfoA3cv8M%2FRG7pLrB9IyhPdpD5rgcq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDCteKfgM0MBdyBEIyircA%2Fu61C9o%2FwR3TZYhu0p4ivpF32b8HpanfNjy8FjdFZ7K2xg3eu%2BJOxPIFOBjzvwKK%2BzNRQ7k6hs18SDElDE0d0bMgrFF6QlH%2FI0samd%2FO7bo%2FYZfXT4PIt%2BZnhLkann0TOVNefP61Jc5dbbruzc79TmLChlzJqVOvUbiaAyCzfy40VgxAMjweEiiFPa78Si9KFumcleqhwMPVYfAsfgazXzD1%2FQWFjQAA%2Fs2piguu86kgHQ4UCSoetuVcfioFKLQ7tzmSHjbrCslNpiJOUgbxuRyDcge7wCdpIWuAlm4%2ByZDdfIO%2BMYHTKsn94VxZlqO8Z8v895PJWHbMpg3Ac3RJVf%2FCsuZyAzElyW2dBDoOfbnc0p4TSWtEIedsQoU%2BNOtookGp8M4yW07%2Bn%2Fz7QZ4807MqukmUdCxFc2DND2dUqePpuLKJfn3bPiwCySNyLd7QMk0TX6LrTV16d915URrBhGAfNdWktrLrgRMmp2b8qJgQPNNxy%2BICAsZGUXgY523c5Gki7hmw4jA%2BMQUuIFvKhuY8kVkBdVTXfKaVrdt2MuKsxTgbVJ7%2FXz9P%2FJG9baswl1I2j09zGiwNUnyiRr1rpHS2IGMau%2Fwkg%2B0BYVAzN%2FeAoVZhTnG78YwkCgoMIbfuL0GOqUBdqFfO%2FtQXIOPn%2B2uQerU0nocn7QrAHegdMOSaZUyOQB1zDHfZ4GpGjFr1AKQ307EBhCo0%2F9jPHSS8FC7HIYadcr%2BtNu7Tog0GamZNdEt5DTrWqlDvi5cKfLhnOcI1NZ2C6kXAgHI5U9AbHOtB4JK4V2uzHuDsHu3oOgtEvNGMlbOlNgufr2lFlQN09rJDyDaDxTEdU2ggnCjOYJm3Mp9ZFRgrU0d&X-Amz-Signature=96f666fe10c05d6f84290fb8b714332982f817898b102c3280107654c74f32fa&X-Amz-SignedHeaders=host&x-id=GetObject)

- warmup.c (from os)
- arraylist.c (from os)
- getting length of a c array
