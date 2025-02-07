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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bab24be3-c0b5-4cfd-bcef-10ef39280abe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZBLE7UP%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T230709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQDHjbUdBc1inNfg%2BWvFDfBuFKH6Ve8VrSmaPnP2DQlFqwIhAMIU0Bi76OFjfwXuFntqMzLE3kgMYMschbnWA%2FDJNDc8Kv8DCH8QABoMNjM3NDIzMTgzODA1IgyRJ%2FnnC7jmvmPVg6Eq3AOB4SXonDYpCtkRVVZVB2jV8Gmm4W2SDXgSRFNHxs2uE92ZVeAESS1BqJCzJ08qBi2ZeCXC2VY9bMnLGQFoY6HRpyIlVlXe3GNritQQNgB99fsRz%2FlsaNUpYU6HkYID2G41vrXj1JO7xt25IHviX0qqqsLGXdiQb6YDnyrEn7D%2B8ofbkN0K2orK3IqGneBvswp8k7B1%2BGnZlEqm3JpeHUkBhNLb91Ao6FNwD%2Bm5UlBfLCRK4a%2FaYgzen3bLwmDISN6bOrxYtajKBE8jWvWyNiWfYcuR4ppdWkfyonS0p%2B0OtETXU3Hr6IsJQonP773ByQT%2Fuf3PZX%2BlO6DSCk0wyFPNbOrXK5NlCBbZV9xh%2FJFIw2oFs3O6uXWzItqxsdtPf%2F2gUM1cxE9wDdAE5piwXK3k4CVMyeCN9U40gxxYFFhkeld5q0typQjxXCz%2FcaTIUH2ooY6vHbTBcq%2FxyS5AT8ImP1w%2B%2FMsC9xx7VRhJRzQru4Cb8%2Bc1eo6OwI%2BpF91gzKCtp4c1WAjq%2FAvWs%2BOV4%2Fqih4ScPQwMG2TllVZm5%2BRjQl%2Fs2jPjs4l%2FGyM6pHUEpSVT%2BwihMZoTpy2cWUSDSXmyETB75KB%2F7Wqlnl10KOlcip%2Fa3%2BJusuDZIK4%2BDzDJ%2F5m9BjqkAVDwVKpPC4kwiRjtrvSVk0XREcvxxbmEvVn%2BCl5M%2BPwI%2B5nbsxe2zegRd5DzQKSEBmaBM6JZv%2BU%2BQ8RFAd4ms%2FQzGNgVYPdH98OP2OsUM2t0TjvMVoPVkSYZ5yX7WASNW9sr%2Fm6RhXmsWCQk2nNxq47I9Hka3SIBIKfF0HR6SOIi%2F%2FZNQO%2BFF0xK%2BkU5ux0Aswvuh8xbb4FCBMCZdtPLGF4wzli2&X-Amz-Signature=7bda1900274ab29a484227c505895ef43ba2cce53bbec53c78b456a8879579dd&X-Amz-SignedHeaders=host&x-id=GetObject)

- warmup.c (from os)
- arraylist.c (from os)
- getting length of a c array
