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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bab24be3-c0b5-4cfd-bcef-10ef39280abe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZB4QZPOW%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T091137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIDZUoENC9TdFMzu75laHTQWSclnlZtIXM29kyWMkPhkIAiA6uJIQyJroAcTMZKtFlw0ABFKMf0lv93UZLaI4U%2B9lsyr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMC8bhlSKZk3ZiyRvTKtwDcuqWbg5TFjR1bgkossIz7eASA%2FVjmS0LAH2%2FsF00OugbCDyCQujle5P8bRcNcV4nCn994L0ylb7IoCX2CbKNCEg9J7iXSkUXzo8enyDRMFSnUVVe48WyVPFlgoy9WxaNIHuZP3%2BgNYD%2BWzu2qk6Q1F6TE1O3YZ%2FF04J4gLXcVaFDt4hNTx%2BS%2FihrMs2jBYpUtk1ZQPK%2FuTy9cRJReIDV1gi9haRdPQGLsBt%2BSc%2FvFCt8cEdec68QDFP2L3VlONFAtMoGebe202ZsNAP416Urnx5i12jzdxO2zpCaYS6J77gh6cM0KpLXrpA2LuyXwKHHTmfQHZWFrk0Ww5P%2BCAuZhhoj5dY5cGT9ymqy%2F%2BWpYZEPHLGEW0P4fOqnh8LnibM6%2F9QXnHSELCRpkwYHmqE2laIxD0XEeC86nQOoW6L9tpFk2xqiQQOeixvEJ04SaVy5MRsrRwg47lE0JGQxkqllkLlDs68u9OmHUDxfJ9ZpAqrsqkYhbEUY1kMlU2ZSy%2FvEPICEeJPTS9Ptmqv302m9NlbDCEJziFLH0zrBgpeSc8H%2FAQDhPOVFNbv0HDJj7rZbh4f9Ja9PtWYurDSB9R%2BAnjaQxqQ3XKsOMEuH4Aq%2BUBjHl7A22J%2F3hkV%2BPyIw293uwgY6pgHY2LT1OIFf3Le9k8nqARn%2FgscIPL9Q5oR9ykw9%2FXAba%2Fcry%2Fk2zwGgTKVy8o7DqCwc%2BbrB8drGoHo8dJKir96e4hlLdYIqsF%2FWNPKS%2FkwYGydolsxIaCIUArVKary3uVnHE7bQGvO35DqaE08vw8SJVg22J4HkQa4Eq2pPlEB%2BCfmXg5%2FDQKtsLdyrOo%2Fh2RdKkgdGA7YQg4XTtuDrCmSPVKYztgR0&X-Amz-Signature=c3ef039c09ea12107a16730a018912f2a9eb8336e5afa570ef4095ffdcb10104&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

- warmup.c (from os)
- arraylist.c (from os)
- getting length of a c array
