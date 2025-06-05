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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XF54CKN%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T034004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQCR4nXCLszAew2uRQHAJijOOgOmprMb8%2BHijBI3mdEWkAIhAOoH%2BBGpdi0Jsiss2%2B550fTz9ym6N6OeS8ljlZEXo7ZzKv8DCD0QABoMNjM3NDIzMTgzODA1IgzDxVdiAwEQTP4S6EIq3AN9OsBwIrQhmN8AycdrwgEsyqhcgrrdd1RZAHqckClGthlKZwWDQlBdno12irK%2BdXAJsA5WXhHzB%2F9aw7lPvVI6ASvqzZfZNGhKZy9VfeWWe%2FJ6g1T9kFvHoPowrWS11XINY5TcKXpmRahitQ0VQI%2B6VQsUmmf2h%2BTRdEt%2FZtyc7tIqKBWsXPe5yaFv67bcmqe8pW3RiJAGHZtPFThhxuNtu92GhXaHyMcCEsZgXAs6bnve7nHn%2Fd1n2m%2BeCyiGllJw0IuKphYybZTsUd8Mb8ymHQGKlYfG3%2BLk%2FD5UWU2sR9OoWG3CZX44P0%2FNLzsY1S3hyOdvWIS0r4cN3BCScuiJKTsFrm%2Bxnzb6I7jZ9KD5qBIQT2sIqsfY%2BRUMnJjL6a%2BDx2zLyunIkUy9dp755tmNf4UNbLvieXSyust8raakLpmqXZ2w551%2BxNl9cC1Pq2zEOr1LxHFwxdD0OvX7qWWPQM4hasi5J7Is9ts%2BUlPo9FTH08lYK3v3QQoKXWZ3jHhK5eV1OF4pQEbpDVWlcSXguU%2FBsJPh1hYERFb7aEp%2F8LEyEXo50BwHH49fjipGrJxeyCMdYCzMuxO0O7ZC2Fl%2F0B71bFkTO%2FDeAw%2F8s8YMOWGpOHxsZY9BTf4B1DC8oITCBjqkAfxkBFk0GGmAzGdqtVODCflgcmdhRQePKAL11vLbENTDSG4RCrN7Zk%2Bar6e22%2FN6QwQ2iIvJbNrcuaj4Z%2F%2Fc9n4D5FyhGddzipcfELo0Z62o6mjDdUXGKJv3is8EuXhcPcG4ovAv0hdhW3%2FvBMqJ%2F8Sf5uvJIZDInQCkBYY2sOlyb2xB6rZUX2kGMdrLQDB1VLoJIJOJwo4fNahQOwgMvwQHbvYe&X-Amz-Signature=16567006db4d73e1cc3c4ad093e52be5e3897c56e67faeec38cadd97f6f1feb8&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
