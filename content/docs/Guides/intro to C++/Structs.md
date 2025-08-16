---
sys:
  pageId: "24f83f25-d723-4902-946e-03b6186da61e"
  createdTime: "2024-06-25T02:30:00.000Z"
  lastEditedTime: "2024-07-12T15:58:00.000Z"
  propFilepath: "docs/Guides/intro to C++/Structs.md"
title: "Structs"
date: "2024-07-12T15:58:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 118
toc: false
icon: ""
---

```cpp
struct my_struct {
    /* data */
};
```

Think of structs like a class that is all data no methods. kinda like Java data classes

[when to use structs or classes](https://stackoverflow.com/questions/54585/when-should-you-use-a-class-vs-a-struct-in-c)

## EX:

```cpp
struct person {
	char* name;
	int age;
	float height;
};

int main(){
    char name[5] = "asdf";
	struct person p = {name,1,2}; // initialize a struct
    printf("%s\n", p.name);
}
```

### Other ways to initialize structs

```cpp
struct person p;

char name[5] = "asdf";
p.name = name;
p.age = 1;
p.height = 2;
```

## struct pointer syntax

```cpp
int main(){
    char name[5] = "asdf";
    
	struct person p = {name,0,0};
	struct person* p_ptr = &p;
	printf("%s\n", p_ptr->p);
}
```

<details>
  <summary>{{< markdownify >}}Note:{{< /markdownify >}}</summary>
  
We use the `->` arrow syntax like in classes when struct is a pointer because all a class is is just a struct with some methods bundled in. This is the reason why places like java and python use `this` and `self`. They can be thought of as structs.

</details>



## TODO: Explain how classes == structs 
