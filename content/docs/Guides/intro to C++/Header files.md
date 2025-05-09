---
sys:
  pageId: "790d67e8-cdf4-4955-a0c2-ca740556451a"
  createdTime: "2024-06-25T02:29:00.000Z"
  lastEditedTime: "2024-07-08T23:43:00.000Z"
  propFilepath: "docs/Guides/intro to C++/Header files.md"
title: "Header files"
date: "2024-07-08T23:43:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 117
toc: false
icon: ""
---

Unlike python or Java C/C++ splits its files

<details>
      <summary>Why do we do this??</summary>
      In C++ we can’t use a function until we have defined it
  </details>

`.h` file (header file) is like we deleted the body of the function

ILoveBen.h

```cpp
int ILoveBen();

```

ILoveBen.cpp

```cpp
#include "ILoveBen.h"
int ILoveBen(){
    return 10;
}

```

main.cpp

```cpp
#include "ILoveBen.h"

int main(){
    printf("%d\\n",ILoveBen());
}

```

## Classes in header files example:

## TODO explain y classes have a :: in .cpp file

Ilk.h:

```cpp

class Ilk
{
private:
    int milk;
    int private_func();

public:
    Ilk(int milk);
    ~Ilk();
    void drink(int galOfPilk);
    int getMilk();
};

```

Ilk.cpp:

```cpp
#include "Ilk.h"


int Ilk::private_func() {
    return 69;
}

Ilk::Ilk(int milk) {
    this->milk = milk;
}
Ilk::~Ilk() {}

void Ilk::drink(int galOfPilk) {
    printf("drinking %dL of PILK\n", galOfPilk);
    printf("%d\n", this->private_func());
}
int Ilk::getMilk() {
    return this->milk;
}

```

main.cpp:

```cpp
#include "Ilk.h"


int main() {
    Ilk *i = new Ilk(420);
    printf("%d\n",i->getMilk());
}


```

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OGYJMAT%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T090915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYGTUMhRMQqOcYvTrvxN8G6PIAxT4KCSlhqQCj%2FY%2B5kQIgcjR5SGfX0EZ8k30g1PQPmCKsXXpkhgIrgD3Be3vZeMkqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2FnPU7EdevGztNWOCrcA%2BacGEIatQY09C6seng%2FQO5HhnW1X3BJEwb9aNdY73A9wONIqSjC6At8umRr6TBy%2B6PwnhX9ZbwQmCY%2BmKc3mmeq6cUq4s4GPpZ2Ioq8dS8WsZ5ACtJDLrOJ9q7SoJNTtOIJIk7ayE5u4%2B%2Ff2ELiku6UD7hIkZZCfVFh0O5gvB43AnNtTTp2uyu4NVoC06V4zvjMgfnRpDjWMTRCnI6oSDwU8nzFXkdmhFC4gIechGAoN%2FDxRmPu1s3V%2BvK14TTVtePAomNBzCpFvukSdA2WSFOxvD5Z%2FNeW20NSnkXKU3sMaDQDlmPd2yiAW93Y1j116J1fUApNFI7Egntsvl9MTOXBlIOO8YrdgIgWnOZ8XY%2FIDehW05buCxIKdFm%2BmcTKFHe3JyUaeALx98VC7GnCseqWf%2FuA6eksZFPulaZQYQefMwHvMT906bEeZNnhnpYDTwRP4HRhgICBOt4J%2Bf2QtVJ1ZhDN3VjNmDqQ78CI7C3w93vaTzh1qXlIwS%2FekJyxohq%2BRoIQfcY3dVznn0P3s%2Bo7oNY6mbdYWVLcYfAIt7Svqxld6vJ%2FDrjrJGt8FJWv3GnDrLwzwgFp0fRHfUBBNFyrsQ0ad2i5G6cYSrDdfK%2FHpeYX%2BPks5GdfGWXjMMn49sAGOqUBLWFke0LPaEo6ML2ksT3ZDK3KRpge2I7R3IbB5rdvmb3oKdTg%2F5wEPiKpZOxGzoRYLZ6b2FFWIeERmW6pxEI46ZIxpqvgKHScMz9l0ejcsWXrIJy9331ynu4gushuo1Luu5AL1FlW%2BKiTLkJvrxaQTO6rus5jIz%2FiwbNBz%2FAnTPrUFJbdY9Mnsdjhz5ynabxJFSO49rzX9ONGgty8wfYo60gZOaIu&X-Amz-Signature=5acadf7d5f13c2689810cdae84ccbc3241b86b444208fb1e297241840943e523&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
