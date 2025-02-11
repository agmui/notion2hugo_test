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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bab24be3-c0b5-4cfd-bcef-10ef39280abe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL2QZT7L%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T070746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDk89YrpsOzE3Mpevt5tbwl2gj7ulN9OVkpUolk55%2FI0AiBRljrInj0gH4ivL%2FynhEZJWHQaZ3gcNRjkDeI%2BeWOgvyqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCSH4hJJDcd6ADGChKtwDloZC9fgiscC8Q1MrCjwHli%2BP7mx9hjROZeqqEe2TUy01ocAkrAeclqS3gbDjv9CLYHHXlF9jx%2FVuwM0dl6swdtktcIeRJZqhucv1ad2uKB8PTvN2ESHlu%2BEI0ostCd5PpPwVLXvxIdk2TEzSyq76B0Na6FNREjneM1G59lRcohk75gOkxitIk5N5xDZOWWB3BFNwcJ0Rnv7kX9JdCLtplOpMvXVRpNQS8xcPg0Z%2B0H4vZQcr8JIN3ftxVzjo61lmmfXuM52lIwAdlE4k6V5wtMn6oTjNcZE7Mw9OtKXhduV%2BJ6xCAp4P1iFn6VYEfp8NqaO5GxxnzVEa08ITum2MJYegW0a3t9KFU0Wkjh7oab24DKmA2BcFQKzVIpFjVF0uhvJEIAfbbApXdjwRmSuN3t2ZpLMv%2FpLsOGHUu5hewfQdhOpEsmQqQuL5Wo%2F0eLkV6m%2FjaeD%2Fd8%2FqT69i0NpflC6qLv2v%2BezZOVOtxCaUvxXhnoHpV7DzsPv1L%2BeztAP4L9tOhnoi0q1o5v2ck99vyD%2BrV4WEOYAKA%2Bij32%2BhuV9KhDS0Lep7pQU6FEeHgZ9O3xKhrw%2BDqF22IbVvc0vQnvk48GzwJE9govD7Eckwur%2FmbeWx4XS2qSCCmJcw%2BeOrvQY6pgG8ftvl7uN3c5PjUST6p8bRCAorMmu2bRMe4Ge04bo0dizwofi1YVIWNtd6r9O4SrBaBx4J8vaYmYWDCZZDtXJ4xv9IhJBDaVEpA8yM%2BT4O%2FtIDG8cJPZuCTTGLbFoYz7i2MrVLdLZDHeXktLdfw9lJI7k%2B%2BmFqd0B3sdEGtNDjdAN2IO2KC1AkJhu%2FS0dX3Hx1MNd0P%2BTd1Z5%2FBnvSfaK%2FcRwohOxu&X-Amz-Signature=03c41ac0e205f8f6c98afa21a5aa57644c060b389ce56a2432c403e9537d7c47&X-Amz-SignedHeaders=host&x-id=GetObject)

- warmup.c (from os)
- arraylist.c (from os)
- getting length of a c array
