---
sys:
  pageId: "097e6377-fc82-4107-944a-004e9e161ded"
  createdTime: "2024-06-25T02:28:00.000Z"
  lastEditedTime: "2024-07-12T15:57:00.000Z"
  propFilepath: "docs/Guides/intro to C++/Pass by ref.md"
title: "Pass by ref"
date: "2024-07-12T15:57:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 114
toc: false
icon: ""
---

Say we had a Person object that has age, height, and weight and passes it into `height_times_weight`:

```cpp

void height_times_weight(Person* person_ptr){
	Person person_obj = *person_ptr;
	int age = person_obj.age;
	...
}


int main(){
	Person person(1,2,3);
	height_times_weight(&person);
}
```

However, In C++ we could also do this:

```cpp
void height_times_weight(Person &person){
	int age = person.age;
	...
}

int main(){
	Person person(1,2,3);
	height_times_weight(person);
}
```

**The two examples do exactly the same thing**

Think of the `Person &person` in `height_times_weigh()` as automatically putting a `&` whenever we call it like how it is above.

This saves us from writing the `&` but also saves us from dereferencing it while in `height_times_weight`.
