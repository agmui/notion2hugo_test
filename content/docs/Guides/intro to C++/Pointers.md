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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bab24be3-c0b5-4cfd-bcef-10ef39280abe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3MZ2556%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T230804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BTUIqCbBkJazXmTQB8xlAHEelgF7Rv8i3ARlKU4YqCgIhAKmOQ0tFiSHzmS50kGb7N5dFTBTFYtTyPRJcWk5zLUzvKv8DCCAQABoMNjM3NDIzMTgzODA1IgznydA1Df%2F2P7IeKvEq3AMN0%2BEMiIv%2FgGha3Bbd%2FdI%2BuTGq9ep0lEdKoogt%2Ft%2BvV%2Bb0uCumDZfNtEhPHRGrhOvBcP4xvjcdpvE5e3Wcb2e84zaQHbsnls%2B9EwviA11Qu1dWGGfiaoukfkduQpDT6UXv%2ButVGeYUZ2DLwRW7sQ%2BReTAUeC0wc39Gn5FNQ%2BQtltyergjl2ev2Lt8k3Q06zYGodV9MKxoiHnFxHtRT%2FUvuH7cn6scUYE8J310hDoj%2FCu33NIfoTubd6uZZfm%2FsJYTafKnxaTuMd%2B1oIgMKbpJY2n3EARkKcNQZ3bd0%2BR0%2BmxZOSdw6LIrwqWzdkKJISIQiYQjqh1XoUwPLQSU%2FB57gVDBADkaTWYKtF8rWXii3xwQHe1mc2IQrmbayPoAvb48Oz63Vk4T42DBqln9NBJ3OiyU2OXMDEvh%2FeNfFj7ncZtWnP0kj4%2BCTrOtm553rBf3tM8m8leCyN6dogPubhDytNawnqjyg6Nm7B0%2F0O8vDVPpQRjAMbR5cinWzuc18y01XQiJJE6ns0zpFvghmbclJr%2BFI%2FVfLA0K%2Bz5qDsvnQs4Pho5m4nJh008BsbyVK0VJ%2FDzA1ge03ojs%2BlYWuAULUth7Srwn41He8zO%2BKyFJtrDmUEGel08RSqhPksjDz9KrABjqkASOQPbaLvwZlxoT1VJUWZyji6IRbzokG31TcwG6RHRfmX%2FH6c1%2FJWI9DJI%2BCqZiVhwWET3o3%2BluWi1u0R3oC1LGwOJkPASbwIWOD6IoxddY1FWfWt1aZsLzaq9fGTY9yGOc5%2FzC39eGGBI9MjRXzdj9nXjr1Ujv2JNN6dm4UIjyrPyyJKuLwMPt3lhf8FJQrLKAC7OhhTvurl4nohgiCFVhv%2BFt1&X-Amz-Signature=3b44f07e7abb8f574cb598c424b6d0a89ff70786e18cbaaa785928b601fa5907&X-Amz-SignedHeaders=host&x-id=GetObject)

- warmup.c (from os)
- arraylist.c (from os)
- getting length of a c array
