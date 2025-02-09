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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bab24be3-c0b5-4cfd-bcef-10ef39280abe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TELKMV4N%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T170149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDt9g%2Ff5m0ZJQnLgG3uyWUYEhIjLfDe6%2BfFu%2Fe9dYAxKwIhANfV2n5vA6jHLV%2B1MD3AneVguHW0%2Bc%2BzmgzqWEGwJbCjKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxir75irDo6XCYds8cq3AMLY5xvQaYK4XN%2BFvVpSex7nDcl%2BrwmRjp4bSzf5jc6AwvKOI02yBCM3lCfzxwtNdPLIjxMEE4z7T39SvuuiNvb8nDD4u%2FSNRyD%2BvrT0C0eYqJ2GiRmtjhDHscQapggpLXeTlP1BoDsf5I714BYS%2F6jZBSDDMSRi9TLJmZxFz%2FnDYWwJuhYMKnwfXq7O9T1VO6H5IfCBqREj%2FhUGpY%2Bd0IUFv94qntd0GVzapD5%2FRW5U9jxLir%2BVUUBzoqPDLFb%2FycMKub26V5rC8sP5WFoJSh4D0t50eKFQvtBJuy19Qdde18L8D57ynX7s%2F4b6t4PzdolgJoUqH%2FwFlAmdc56fZZKURcCBD7S5K5uY34S9w%2FhA0xqJZW%2BGkr4riX%2FcaE9h02zul0tzxAW1aonN9yun6xd82pwh6R7Tui5LjBpV%2Byc6UfdfBpO%2FoibCRbwiGd5ygUct6kvrJ3eqqlFSBMVOKBe2Nv0vCLRXMFAbhzx5CTLBGIXy69fuq0UFTkzZEZVViuum%2BusZX06Ls3q6Ypvf28s9J4xWGbaapMZX3uEJ8jZLzhuTKj57X8IPOU3Lp%2FfnpHIySV3JxgbaOz8zDOZkMwjTT%2FjhZh1BbTUmGIQv%2FVrRXwgg6J%2Bzzjvv%2FwFDjDihKO9BjqkAaAQS1TA73oKgS76jQIbx7LFCX4nf%2F%2B863NfqMlNWo5Nyw6lGzmUVSFvpL4z%2FLCX%2BFe8zBiPJHFm5VmQSH7AyGFInin40SDUWeWtbsN%2B1y6H9ZLOcbvYyy5FWCXmqD9HTk9LOeRYx6%2FwZQuyHMQsSFZE1LyQmUn2yV%2FOg82qDMfK8kGVLQGudnIctT40TaqQ8ZmdR1iB%2BU7u75PCvW%2B6BGsRve5p&X-Amz-Signature=5906905f739f50d774a1a918c5f8eaaac24c205cf43ba39a47c3fa9a511f59d4&X-Amz-SignedHeaders=host&x-id=GetObject)

- warmup.c (from os)
- arraylist.c (from os)
- getting length of a c array
