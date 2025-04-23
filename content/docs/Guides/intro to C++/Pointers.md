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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bab24be3-c0b5-4cfd-bcef-10ef39280abe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHGZHOTK%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T190118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIEoDK8Uly9P6GmmVMXwiGmSD0P7i07j7QR3biVjfi5D6AiA61Uq2QzHZiNhBpa6Okdyp7sXJ7vMFbf8px6rLzuqPACqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPCouGjyOuh%2BlPkidKtwDdijwZfX7oz6G5YKTsxSl7RDlO5qmG6tcdRvs64yRRQUDMUEaVnrq5bAC8KOTL4jnDdDv7ueD8mAXtw5c6Y3vZF0b4pHI%2FxS12sIiU52ZkhmOLsbyBoyC%2FPP3nm4FjpwfAXhZsLM2GxJkeiywzPYQ1Mez2%2FOtBI6ffVhfuVgSUJ1Ed49RdwzNSWueQK2VbbTBvclXPDY8quy1%2FASo1gBgEfewIdgKiYfwnem8F9NKPMXIWL%2BW7YPFk3vbDivofjVpSFUuy4hW9M1A9v%2BZBWd3MILFS7jwfUqQ7QqoP0H%2BaVe6QKbHjsefLGucncRjAcE9vEuEY1V60FE%2Bu6i3U1aoJJ3Wlt5yKKKrQcSDgGWzI5sDpGcMz%2BzeR0pQ5wZ32fgbT6LiWxYdeq3e7df1E8ClAKEnv1x5rpjsLHQixVH7L6GKKt%2B7i%2F%2BZ0c6EbwglEuO2PEkJo01eB2qyAHEyrx4V5S77T%2BhXhG4OafjJZ6Gvm6533oMY6kGlpe%2Ba9iuJ%2BSHV09bnm%2FLUfiafQdCF16APWCN1knsX1wcrnhsHLlTqSXXFEZf9I9CvEcSPwnYCv1%2BkXKConUo%2FrNXJGC0130ne9ulksdCKzBn4TDTINg%2FlI2QMaIUjYa0tanMESmkwidekwAY6pgEnLBh5ivOg32RlaXy40X6FQmhviTDobHS5Xf2mhhFP%2F%2F0YctlE4A5lZuLDm%2BHfZVdTqIOQShEEeVEANcR%2Fo2GI3NrQ0AgErfr30C7ji6%2ByVTMvQ43hDUOh0Xt6S3FT%2F9uJNl%2FdxhBPa%2BoNS8wYMJXrx6fYE3CKaSIOaXaTuGCbctPMG8inA8p3U%2FfU1WE5009eSzzaoa1MPfzXymO%2BqqiCwWuWv63K&X-Amz-Signature=17170d95f26b9de9c441872c9551a5cd8cc428b4c3760febed6104e0ee3f24a3&X-Amz-SignedHeaders=host&x-id=GetObject)

- warmup.c (from os)
- arraylist.c (from os)
- getting length of a c array
