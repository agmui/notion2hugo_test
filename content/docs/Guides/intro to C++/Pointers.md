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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bab24be3-c0b5-4cfd-bcef-10ef39280abe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674YSTVXR%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T121411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQD5q0N9yW%2F2I72Er9%2FbNOMSgUldbGqAxFYNLfbKzZbVyQIgfl0jWXut%2Br3%2FDDsoOU%2F7csp3DzUdtVGNKSEZ9nciFQUqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAQtFRDxrwszo1W9WircA8svf9XzX0RAIwMyaGJ9iaHC%2FW54rerbajGjZBZQALt7%2FWUoPKxBB9hYhV4OGnFfrnCackasjMc5vHfMy%2Bz4Ku2jf9FQcSHieZg2hVeuQ3YCCZlnPx%2FgiaYWKlyVLnSIZBj%2BiRBODU1TEXASqTSYvKy5B%2FIg0j%2FtpeoJXe2p2XypKTLW4Zh0u0QYCZlHJshY9RIwPV%2B6a1Dfm8%2FIndtzAnWSXrElihNyBQ%2BuwDM5yw3Jq2kNq%2B7OXmJKzem352rBXw%2BnoppLL5iXJBcguyoHVbLeuCi7LHIq33L9ImvtgisETlNP%2FkwnUdnQc0uoPsQU8VR3SU03dlpJoEmswB6lirOsR7lhUa65il5zbJ9HBo3g7Dd4yVV5saYl%2Bs8bRqPpRem05AgDPBQQJ88X3L1jvY8UKOlxdF0IKt06mt1l71%2BYS5jwLfdw3LD1ueE9MXYl3BcPpPH2KiXG4QKf1DOL0kvH4aFZzfNdmCHNOms5lBkejfRYyti2bc5w3woX2ZIbn889Am0YurDCCici5ouVsYcZaEnGgAO%2F2OnjD5eDUfsmqYQ6mCbyEX%2Fkm5Zqn0wqu2Wfp2jrB9tzla%2BaLLkqrJg3Tudwfzy4IvOzA7Cc9zByXyYEo67iZ4jIg0soMP3dxb4GOqUBgPxXoiD%2F%2B63BplOKfzl5hlgevQw4T6gJTd6vf8aFXNBXwN41AhFBNQYgJfAttpeyZXJEDSPmqF2Hr5K1si5Plem%2F0XUYOISG%2FU%2B1rqM2E9hKd9pFVwj1jGGk88vBaLgNrQe9d4kBdMLDmvH0wi7J8P%2F2pZ%2FFxzGn8M88LKAiHNPEJwhgeIvyzsMWI1VkVu5PABq9L34%2BN6%2BEuHV3D4PaM6IybdtP&X-Amz-Signature=84c36993e61c32e8e460fd8138b85f7b285abd430f701ae84b1fed20a89f6bb8&X-Amz-SignedHeaders=host&x-id=GetObject)

- warmup.c (from os)
- arraylist.c (from os)
- getting length of a c array
