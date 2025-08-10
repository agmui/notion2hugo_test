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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bab24be3-c0b5-4cfd-bcef-10ef39280abe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662V6QN4QE%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYHgkksUewY8r9GekpsNA%2Bl5MaVrj2rNDp%2B4UTDHsfPAIhAOrPbGrz6Y6rVfuco9SiL7V1qaPE8Y60cVKo%2FcDGZLu0KogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw0qk2zIU%2BJEBY5q%2BIq3AMysm5MMN4wW2SY0gCGmt4cOt0h35AuLOSSxorZR0GDApa%2FW2HvBD0GFQyzd6WNiV2%2FLnIVnAMy%2FYm4i2nmcL6UTPc%2FvBMUjiDT9wnoEYUeYq9Wy%2FitI2J1GN96qsnlxeGIuxNNY8BLYlsOJCx8b2TYEbypDSzOUzEh2dJD%2BjyBi0SwB96q6vUG%2BQzUCShuSkPewkwCKlHlN5C1F0y3Y5aDEAnah7URJ8aRvwlwSG%2BnBV8yBO7sX17iKMe9Zkipvy8TEQMlS9JygEZ1re%2FIikqTuiTx5oJXadt02dzjkSPCMR4axm5UCM02GvIDj5SIXKmcfIyBWDOvM7zsgy0Nwgw3r53ZCTv%2F17Y6hof9IKoMBV345ILnKL7flDNmv1YP8GF%2FcTeuwWRlyQvYNbmwR%2BPsddN2cb80JFCbj0%2F3ccKxsSXD5tN5TVMDbKtPeGWO8yhS8DfrsQ6KXSHMbk476CMQgvOwAj%2FcpUpQCrte0zMWpXJpCe9%2FYqkoXPOEhDiqdaewJWrLDxbp1cPrHaL8ViM2Cez%2BBB5G478J3cVzOL4rj87YzPFbIGPKmbHxKlEnKUdf%2FGogr0VE%2Bsgz%2BPFWzgq7RkfXvCnwzgG76UTMRfazm48%2Bbamrcr9myZf1wTCFu%2BPEBjqkAbjtBuIC4dSRExJ%2FFmwHPAFlB%2Fx8Xe0w8CtMlL3KY82BgbUlr0HEkuTVfHYAFSYHSJVPwgQ9GygBM2W5mO%2BU5ziKbcO8clL7hgNTVwUGpU7WacyBRYIsuoYPSWBETy8G0frF3bLUh4ZqrVLTWzjPC2F12pHaACX%2BBnUoVPypVKxtPjn9v%2BjhcD8J5NOtEe3XzoOvOQ4mJdxYMaaJJZds07TO6%2FSY&X-Amz-Signature=4bf054a199775b4a7d007e7c852fb4289200d50d70761dcfa033ad65ffd54fee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

- warmup.c (from os)
- arraylist.c (from os)
- getting length of a c array
