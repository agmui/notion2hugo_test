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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bab24be3-c0b5-4cfd-bcef-10ef39280abe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466736VXLA4%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T110149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICAwT1YIoQAjCY6ixnxJX6IuYiSMhoZKYzeTpKywO0lIAiBEUJjTB5vXxuh7ouI81DBPdj56a7ENxkc%2BQxrFsKZAjSqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMX%2F1AaY9Y%2FE1JtWgEKtwD9zkEgsM0fJH0OA7Lt9iU5c4Gs%2BRjBesKSGYayXnmjpR4qMNn09%2FXonpWQdQl7AIOW824ci%2Bo0cWWef6IHBW34vUsrzy34TlrBHdArFtIoT7tl9ENAq4Q9RzqtryhVO4g%2Ba92mTDXBMBCsviM%2B29nSSscQtU7xHIVT0EVUeLqWX%2BZuZdUSXA95IsEmp2mn0SVRqOIstsNXIj0%2BDPH7g85Nwq4iE%2FWnGbFgKsSIjGhAUI9rJLAsgyE6rZh4ZGjV4ILdSDek8uWp%2B0yd74AM1Bq61i4SufanmpCreXN3nYUpdNef5N98DAz6tY0uV2dFJK%2BG%2FjSRizD1RADKw7TLxsy2cVsswngofWFcK27c1JtxkhvOXtxIFNpoF%2Bouz2jqlVvkCEhVU0GSmb7J%2Fs5IaDvbeB%2FIT%2BGOt9nqXSXNFXzXY%2FOr%2FkEE4Xj%2B4vdyFSAzsr%2BWxRp0OC9UafrfXPSAjTH7g7PUpu30ASxmLfDHrJtZfy8LVPfAzJfOOjMDRk11DDiRRni4hINC6eXzC7%2BDExz5Aj%2FNbyEVoKvyQMQX1w9V2PISKQvKXyubJYqIfMk4zsD%2BiKAnJeN1epY0zm0TSchkU8FOrOc5zxoLmIRjKybMpJGQA8t0S6RXKhrV4Uw7PuMwAY6pgE3kkUXo0ngerMSOm77YujP60B2zjGq0p5V2wi5zOmg4voSu71hNMmuiJV4%2Bdf%2BK8vgJAGjHHToszaUhcyZhwTFEJDQADhuIYKoeEThZRdTJoa%2Fr78GMOm6XY78pLNo0o%2FqJ7Q4dJbg7mFYuLegGOvJ3JncuvwrIUlWV4cCU24iD%2B6I1LHgc3lDgQu4lwNMdZesQZFM0425F6%2Fo8ihDfu5%2BCUNI8geK&X-Amz-Signature=4dac8f90cbc3f7b252d2472759168b2362ac69a38ea7ffa130e6c8b7ff5ec2d1&X-Amz-SignedHeaders=host&x-id=GetObject)

- warmup.c (from os)
- arraylist.c (from os)
- getting length of a c array
