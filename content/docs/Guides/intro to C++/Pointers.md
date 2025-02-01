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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bab24be3-c0b5-4cfd-bcef-10ef39280abe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ6AMMT3%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T031301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHY0FEYT1vm1hPKWUazFxo1Pnsol3o6bw3qifstHbmDjAiEA4HbuLaR99280S9WzLZxLKHYDZjCP8dChUu9p5mzbkqQqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPh4YYLQHyCmU66AuyrcA2A8WTnRW0yZXdd3nTEenLy%2BjR0M2Lk1YH836ps9aGn1Tk6%2B4xvTJy80tQzhNcOAg3vS%2BCSSD4Qsxv2tjLNyMh4Ke5WB89dq40FAFt8AKmWNN8ywAo2uIoQPg9O%2FAyIWUd%2Bu31jvK64VQn1ip0KPteCtk%2BM%2B7uuNGpyMCFsJYSk%2FsrhCVPEVUdwy9FpcD%2Bvd2sXSfId3GBev5MC7Y%2FBrwOHBaiZkwmkrGrPE2t7ahjyuHMxXfHxP1X4UoCwoX2Vw04F54LnY3gXdtizFBNAq98oLrTSixLjmkj5sx44KX4dyUIDtBRDEh25Ft6Hrpaj%2B8xNaTXKSJ%2ByUK5ayXGuP%2FDsPmCIQ%2BQ9o4CHNJr2kfbSVshw93KoAS78GI%2Fj1%2F3zoiW0Xm9L54XQG4bCqj%2BPaWuERi8NcGNTXVpkRYK%2FrvonWgCz1fPWLQAnDROSjNvnl%2F80RjtCeaGpWHkczrpXrZ6VAysgqMYxkenRggQY4oYsDrMDnvCBgeAqeOfUqD8kMYnGVhwGxhc%2FCJDZv5YTihASiVL5mxLD90foVMOndrFLP4Q6GkYisqlnEYjRVEjuky7WQEmbRtXpEn7hW%2BfCP7dyVUxZglvOn0YJqfJ%2BHa0j9HYw3%2FPZJIqQflQLtMJnu9bwGOqUBT738lgqpqIqkSB5jZeWPkjlHg1vL9lwG%2BkYFwmiVursOcvma%2F%2F48Sxl5mdpsy5%2BBIGKYA6FHV8xgS8idk6ipjW2uzm2aFiMVf9%2B%2FKvrBDH1%2BxkY4jMkX%2BfYTv1hxE%2FkS2B1H%2FIqj%2FQW4duaXtASRZLe5HlsP7UkyqeyEZl15sUyI6aVYKyTiEA9w9MKjeUnRrPaUhvICOPDl%2FDDxqxBLL%2B4MA%2Bgy&X-Amz-Signature=8248128fdfc009b1d0b9cda4ef6b03f4e1d295ca6c7a1e5f66f48cd4639792bb&X-Amz-SignedHeaders=host&x-id=GetObject)

- warmup.c (from os)
- arraylist.c (from os)
- getting length of a c array
