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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bab24be3-c0b5-4cfd-bcef-10ef39280abe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S24CMCMO%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T050926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAXvyeokKUFvJDSYMVvmGtsWg9eFiLcRhhRtZAPfYAbgAiBR%2B47%2BwNcMl2%2FBtE7CsWxwaKIYO1Zs%2BMaxn8WKnG1V8iqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkhpFJFXuYcSSskU9KtwDTAXJvYhvHbRrbo3OVLnpMxnMbOg2vjQ%2FbJ2OVpPtkie%2Fh7sdnJ%2BoPWbACwmVakboTMHfryo%2BrM%2FLXu6wEpvBVy6EqIksR59Waav7Gq6Hhy4CLk%2FeekYCSrHgy3shd9QcVnN6HJYbskIIMzSVg4pR%2B%2BIWIm7DB0ABZcswjdBLYbZvh7WTQBTvEAxuO%2FwKbJ2IfrDbjX%2Fm9ysrrCJVQiZDKG9MYn72UQ9CBpM4FdRQTpWBLrSZb7rQ7Ye0sDibpL6kc5Ly%2Fo56WLJzN2RCJzBnP%2FL9086t0AQUXPvUm%2Bk0VWwNLBIfyPTgezxl1%2FV4%2BzTbjZVmY5sURAbU%2B9dnyTKC5YNDtUO4gw%2BGydYLidk%2FMoXLRA5ugSaU4oQSBTfJSwwJS2Bt6QkssMgGLvFfmqydYo3ZDLgbHfWJi5MYrh1h575kPx1fCv%2FG3l8q6W6YvhBBFrb%2Bho2Efkse9Z8%2FI%2BfeDYhs2lXg7kT99iFEy0%2FfB4CXnFOJcEQzzTKrSUsrswTn85dlwtGFSyTapN3r9bqsPWdPUOx9lGyffN4kM9WSdN72XRJguBbTu%2BXtqf%2BEpbnIt7%2F04zIH6L9m03grsMUwkgqMySIzJVSA6dYnOaaotxTlikC%2B8q7PM7K4QIkwzJWwwQY6pgGMKKz8kMzUCI4XDYh7OOOd93fQhFrWNyYmxQ75LOHH3P9%2Fj3T%2FQE%2F76mKqOsTK2AKhWinWbUD4odxBgwzkNnW4bEAJYgsbAWlguKP%2Bk9q0byiIeqE3ptFyJKrxZ%2BBj9dNBzLXYMHgWfxqM1WCqHHnCETwKua%2F9cXsd9a1rZqBVs0N94B5oG13Q8MGVIKLXI206XVqL27knxCwlkXBEkPhUmdwvBJ%2Ba&X-Amz-Signature=dd4c70297d51728bf7ba97995e4face82890e79c1c70c4429a78028f4409c823&X-Amz-SignedHeaders=host&x-id=GetObject)

- warmup.c (from os)
- arraylist.c (from os)
- getting length of a c array
