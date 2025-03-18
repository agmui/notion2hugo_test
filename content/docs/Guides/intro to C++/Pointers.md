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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bab24be3-c0b5-4cfd-bcef-10ef39280abe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSDLIOVT%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T170726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIDsDZKFgWdhD5Jc%2BD9V5JpTfLJj07gXfhNREvSd3t%2FFpAiEA2EmJvq3EudDo2KtH8BfRvA462CP5gAmPiDuAwXecMKcq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDH459KDhTcjJNA9KRircA7wD2ILFvyYiv0Fl%2Bg6T0uHDjA3e1AcLcSNzsw7DDmDaCaf0iIttI6DUZkUj%2FGs6DpRigBraq7Mqyw0lmKGRDsE4WvKAPMyU9noCpN%2Fvl30GXOq1VzYZyxIcHKtQsdRehfRz%2B%2Fr%2Feb7aabQBZpBaxnfK7dqv9k8AuBh6Ce3TZGKNp2EdhrabqMu8mmbtzRTu%2BY7D74tD8t7LENwokre3YIQofqg4qZU800bWVemCfRHeN8wx%2FWNSO%2FB74nIgLBOpQTgBcMOCaAskMU5uE7wTvmfI2H6vXNKKfkAoVWMzOLvVitcSv%2FQJFJon4zbvNu50HwBBSwgaduDiuiwoZ8zioN10nw1%2BQCKm9xzy0zIIIaiga9%2FfD1G2TgvUmeUAGVk4cG9aAL34Zwj487Qtm4LE%2BIYJH2FEpM7g7ai3u73GV27O5VY9ZKIX8SEf97B%2BNB5b4uzvH4K7DfrG%2FY0ycfPu6T7sTB1cc7LL1%2FSJl5xFhzUBQvuVMOrA%2FuES1qebOpJlz79V5nL7WS0edC2IY0Y1o2RCJ%2FN%2BYO2LSMehm79W0sE525m%2Fb5uVLeQ4goUQHuRNuAkw41fCxIp4tYZRWtUoNZeOzavNpvFvC75n19JRXM%2FwMO1zPBl62pReNCtrMNm05r4GOqUB69P3bpNz8XOMOi2USKgyuObonMWNufyleGYpmi%2FnvBCEF9A3Vre9v3ykrq601bFefpSLLoWNjPkFSG1hteCjzff%2BMyfgIETGumE8C6i%2FZXDnooIwJfoMlXWcjZMPFC5rv9aPCWEExe%2FtGNqfjcVmoxEjAKD%2Fm53lwlmMqMcbIupEX1huyMDi0ZDIR%2BnaGrH0E8phn%2FJW%2FOrgoVhz5753NBStPraB&X-Amz-Signature=912b735465245ae9e20bd9fb4db1dee7ceb01ddb2d7a3f337e3bef7668201bba&X-Amz-SignedHeaders=host&x-id=GetObject)

- warmup.c (from os)
- arraylist.c (from os)
- getting length of a c array
