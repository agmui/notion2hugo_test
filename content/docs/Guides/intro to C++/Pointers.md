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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bab24be3-c0b5-4cfd-bcef-10ef39280abe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDBM54OF%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQCpIqgrkSoQeciyM1N1oCDNt0eQRsBE11okp16XjsIM2wIhAOm1A%2BwzvZ9ubJ3Gu82aZ%2BEu1KZJ%2FdoeaOnh7wLwyie8KogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyGiGTIF%2FBlUV3o%2Bn0q3AP6liuvn0k7TYloHoOOwW1jvbjzw8l3Nq9VD8fCzjh05iTxY9qEzGwtCgcoCbqt60p0Zk4%2FPhZttCMd2uNpA4jP88PzRYcbMerroebDP%2BIIivh82ObFg%2FRmm0H8jntIOlrZGVl1wphMHS%2BkPfACna2hZA3swYDoD7AVvWbBgUUIzePf4pMtt4Ox%2ByGGyHxI5i%2BXA5SE4NZ9nJIVMGlAJkHfqurax6VDnM5ta61j7IDvwfGTB43M%2BSQpWsqF1yVoRl3Sr4016kSMmmz7r87zhgxqK50r2DUuz0VNi9WBLFflg%2Fn34IZVc4p99zV4mbfppcR3AxTEJqTi23Q3e1yggtySYZxAdSZxKowtrIVeObvBgSJWF4l3TQh7RV0vYc2nAgq00xkbUznhopGbmtij0gTPoeXHm0oyk1JJWejss7zzncLYBSiV4NZu7vZItBnS9Nf6xstyXD6oAYptMs68vDuFLwp%2BLW2kPbGfGI48sX6%2BtEC93Pg5ld8QyLQqK%2BLUwXBF4sYvzWPhSW1f6xk5vLNQq0%2FydlGTlkr0%2Bz4gWQaMjv2WWYhz9jqeQHQQk5ril7avEjXlp5z487oVmmNeBSDFoEcoRtc0Jwpq5HZsWl%2BMFzJOJfj3bwV2DtX2QTDsmNfKBjqkAQz7t1tURdvmKEG6lb737Us56okoR7flhhkl2ihiJKadjSkHd9qBtt4tGqH1paFNBBDxSGGOD2ULMmB04S%2Bcqt0B1QszGYqN5zjh4eLuk6UQ8m2uN5KpPSN6Qd%2FF%2BXEMdkDisIaXqp3yYZr%2BsUgP4pN3r%2Bzxku4NysQnFBRRmfMwr5HAPMqYFy500uSmD5trG9qD8z2E1MKeV5woSrzL5hXmsTQV&X-Amz-Signature=e314465f609073a64d8fab44c37f69595f79da166f2d53a81166a3be200d2206&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

- warmup.c (from os)
- arraylist.c (from os)
- getting length of a c array
