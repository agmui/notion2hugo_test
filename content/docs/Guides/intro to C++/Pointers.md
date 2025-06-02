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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bab24be3-c0b5-4cfd-bcef-10ef39280abe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQEDZESJ%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T140855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIBZ%2BPh7OcodEAwC0HXe3SsxqgPuqy9wKBEAUVlkRI8TEAiEA8%2BA6AW44SrFFpzqd7YcHHi1GcWuyBarhganMHc7xiEAqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGnpCdddQTjN%2FnK7uSrcAxlC%2FoiCJGIj663kjGOB3iMPBUCENVUw4qzXNf3tFieUBLi2IdN8oEz8eEr2dgFFquH0XT3Ly26SGJ2dygxv4la%2Fx6ea%2F0kkHsIcLvsif2E6s7KQECvx9McRBDmyac6ULpzBKdNGb5SqcYl786WDftdKgsee0GyIHbPf%2BRd4aP%2BUs5F7P%2F8m%2BmZvcCj57n3Hl2sOfU13f5KdLLXOc%2Fr%2FA6eB9fJoHbd16pYpk%2F8ha85FeaOC8DBo14xg%2BN87%2FoEXcl5xhCFDJ7ie6uX%2F1G5S61kIjUJSHulNuktSODpnVCkgKvtufDGJg5o94aumrlgMsKFC7ixsZs4YN7pfdOTc55rJx2nSx09r%2FWUR2BkFyxkiNHqQ22SYQm8KlWDUxXeCHrQNQd854xgy06U6tnvlhEEmBd46JyBF5Yc9KePnEIytkUEcBKH1UfIG9Rk7F52GN6bgjQsdQo2iIVKuIbDHSL4nfr2bG%2FuVul0jJS%2BjNi5jOB%2FHHdITDHO88rR6%2FO15VfQ0pUDkFRQ86gMw7YVATjrdc6Y0m%2FdGRNXZc0vJGAxrjnnXWSYsgWdA0R3Lb1JFZlCdrwSKjlQTzGV9opXj230Ubab6yFrQ1NOY29esoVlP1fqqTXo0z%2BeAvf1PMKy09sEGOqUBo2OsmYK4KIJKNeK%2BLTwWOPReazIXHB%2F9mS7oKtk4nCuNiZypDSUNGzazS0LwnkItXqbDGh80bi13n27MnbRatcqfu32VV86Mo1XJwA0f7kjsoqCp5u%2FS4Fj9oB6AipCQUskXeeq8oYf65nEtlPzHN9jd%2FFF%2FQMxbp2n6GRBEco7XTXlJBW%2FfLlC%2BMiCt9SG76WKFE7SCharZDEW%2BSMPVhhnxQyVQ&X-Amz-Signature=45657cc5a41f996a71af54d3053973dd325ffe2c7408067ad688ac7701f113c5&X-Amz-SignedHeaders=host&x-id=GetObject)

- warmup.c (from os)
- arraylist.c (from os)
- getting length of a c array
