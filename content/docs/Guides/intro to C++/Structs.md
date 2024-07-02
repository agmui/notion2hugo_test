---
sys:
  pageId: "24f83f25-d723-4902-946e-03b6186da61e"
  createdTime: "2024-06-25T02:30:00.000Z"
  lastEditedTime: "2024-07-02T15:54:00.000Z"
  propFilepath: "docs/Guides/intro to C++/Structs.md"
title: "Structs"
date: "2024-07-02T15:54:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
toc: false
icon: ""
---

```c++
struct my_struct {
    /* data */
};
```

Think of structs like a class that is all  data no methods. kinda like java data classes

[when to use structs or classes](https://stackoverflow.com/questions/54585/when-should-you-use-a-class-vs-a-struct-in-c)

## EX:

```c++
struct person {
	char* name;
	int age;
	float height;
};

int main(){
    char name[5] = "asdf";
		struct person p = {name,0,0}; // initialize a struct
    printf("%s\n", p.name);
}
```

### Other ways to initialize structs

```c++
struct person p;

char name[5] = "asdf";
p.name = name;
p.age = 1;
p.height = 2;
```

## struct pointer syntax

```c++
int main(){
    char name[5] = "asdf";
		struct person p = {name,0,0};
		struct person* p_ptr = &p;
		printf("%s\n", p_ptr->p);
}
```

Note:

	We use the `->` arrow syntax like in classes when struct is a pointer because all a class is is just a struct with some methods bundled in. This is the reason why places like java and python use `this` and `self`. They can be thought of as structs.
