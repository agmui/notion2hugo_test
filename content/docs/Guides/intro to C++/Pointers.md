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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bab24be3-c0b5-4cfd-bcef-10ef39280abe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPI3V7BX%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T061216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBenFYbRVl5Rk4MSQrluIX9q3V1C%2FEWyWkReQdxbTam3AiEAs0VL4c8XhGYzCPa%2BMwT%2BSTrnjBx56zOgzYM9RQIdhNAqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2Fsgrwfxeq7f3jQRSrcA0OJuwauj1qcRW38bWFJrv6OTkKUDEPSvY3oWZW8p87lrj3EOo0BN9o9hPPOzW4K8DNzrj8pCt9%2Fo7vvmogNkNUMvmzXA8BvuTxvAkQBNckUrbhPixJXBWltRT23qSwWhZfpgi5JuC5bhMB8UjXQBz4DaXdV%2FAYENaIdp%2FDEg2kaPeb9zW%2FveHzMupKtrh%2BH%2FUUQvEJYbj8rmCHHW1xOSNssjrjoH3B78yMm4ViTuZLgtFTUoL%2FE9AColfIpKUJZ3XU7PC59NVnqO0UIrJqJ%2F89wle626SD63Y5lBZfzfXiio8N60QsdxVBkVCPAank81465gyGsEnWhs6ylowyn6q%2BH9%2FCXhfWEGOMQ%2FVYKXtBOpza9t08951985691FAu87vnZDC42b2m0BF%2FKhx6Di8fYJtRXh4%2BppRd2F2KWEFcVk6nlwBBt0bCqgg6kZ9JRUGtCDZIReb82n8KcEXI8p8Chnlwni3R3i5IpXZQj351v04PuFD5IREavhsafLpqvzwaVAPIrsBslNi5W9UNCofCCNvh4NpK10qm%2BfFi49EsZAlM2nwgTYEBi%2Fb5Xw6FLi%2F64s3lOnPXwg%2Fkk5%2BD1AyW7GN9rh6OcqQpmg2AOOIzpwvNff91Cbs2A6tEoMOjjg78GOqUB8kO2OoQRZCF2jbxCUv7fhho89rd0tDr%2BU7ep18d7h%2FMojGQ0CqXy0ZtfSiPTNvgot1WphrGQw1Bvlv7db%2F9GyC3c1OvrCcwEPmiHweI1a2kNyHF3ZIhkcJcqXGZ7%2BjVRUzvv7rPzttuke7cVlfn91a7bj3BPhgu732dFw1fUXk%2BkXWKj6TmlKM5aUY2EOYiIbkezoyH5Nq%2BzAidtybYv7R%2FvZ8wF&X-Amz-Signature=483283b3748b21c4c1660ad268e82aa94f7e4ef94502dbf489383508ae0a2348&X-Amz-SignedHeaders=host&x-id=GetObject)

- warmup.c (from os)
- arraylist.c (from os)
- getting length of a c array
