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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RODM5UBO%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T140839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCamH0IepXpwlCg9kQJwbJ9HQAFCA8pqXZHUN4xFdMI9wIgFTcDsUJ7IAgi1xcDZo9oKj3aTKE8ppsXXW9t9RJpVMcqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOCqhnO7NC3ItDrRRyrcA1q3LypI2k92skTXT40Td9D3OJxFm6e0kJF7BDUci6E4rgfDd%2FzND3KBd0fsF%2FExSmhKJ6rvxVXLxMiNFYWfNrbwT1LsWU2M508NyhDe9GXrUCpzpoVBC5Tra6oNtftdPq5GHIZH2H0PbDikdPUkDlRqrsWCgLH9gazUUCI3CEkfJdGDQsP48TYONGp4r8q5wZ9TAgnT6ZItNPX8J9I5BPfK3WdoC9l3CorGWU94HuYDEJGmaioL%2BhKoEKsgCtPD%2Frpl0Srfa5%2Fv0H2bHMNdYUQtVCysWsyJcSjHw4W6sa1XIr5Yhjorn5w%2Fu78nNLIXbqA5KyYXfcmuCr5rktbBS4oN%2B2%2BPqyL0YANX8GrrNX3c7%2BySbMh7CMZO7P7d%2BrgU7U2QOo6NHRuJ%2FKixgddOXcEL2zF1ZJUAI5RPlvppyB%2BVohVJuWYwVhy078j0FfmRr0a%2F%2BHWoWww0JlpwkjlbdV%2FdrrjAsBN39EpjyD0JxWFT2Y%2BBjfR4gSvnMRJFHTouxCOZxli3RsFCWTf6iSUg28Nu9D0c1DfTK%2Fiut2brF8%2B6cMLS1oek2D2ssA0eRwSdil7p8uA3I4BOa5yari75uV8KXwo%2BfGrkfsM3xKUc3m5S05PFUEuw0iSuKDEOMMyf378GOqUBStjPn2xwkynoNQoALT7Zv4qw66RJHQ0IE5FjST7rj4Cc%2BuiuY5cytOOOpVemDBQ6omFoxqtVMUrj4uGL9FsCwe%2FQrQHkogb0jJNJkL7tEgLJwqgQEvoAjbWa54dzHdwNk9TAOwlvJHzFC6lfDq%2FPGJ%2BU%2BtJrh7YwtuDhP421Bk1%2B8s9VOs5vgj%2B9WIpGcwK8I4R7D0wgr%2BZHifIHb7GcLyC0Szp0&X-Amz-Signature=da0751a64aaca66d0f2263eb74a985a8e582ff73c1b9434ab05e291e0b6e6e39&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
