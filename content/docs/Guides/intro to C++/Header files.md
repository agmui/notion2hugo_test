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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6OR2A24%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T004214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIH9OK3wfpQ5n5rfvOyx67JkxQiOvqMgi2IbvadC37GNFAiBs2bYv9TeTkxhUyiyrZxyrCJFWLrkObx0BQojWmchJjCr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMZ0BxS5MScciYchv1KtwDkO3cV1nLamwViOUxeZELUJsUGsW%2Fo5AtfAI3A2uzr%2BwOPostJyUKKDkmpXP0Qt2q4hiwsTGU2o8URcSbECpm8bHRa1VJffp76ABscQyo4o1TquLzR1q8LDZhTdNmlKvBGh2C2%2Bo%2F2mpQL8GFd5%2Fbgt3Rq%2F%2FuxD1I5cnXZCrqXaCiKIfNV6Nxp0sigtkgRt2EkSIYJw%2F3MisnE%2Bme3dX2vHSCc0Br5m4pTC0yZ2IWsT%2FmUnDpMCZA%2BgVD1bNzIZSBPW204DmRlqBNBij7mKOLfWwvOTHplIsYsjDWSKJ1eKMmctiZBWF8vTE5vCdwF8zgLyLTlBON8TLcq5ceCNAS9ousoEfQThejKDUpDdlNQsAafnZqnTtdJo9UILj3sfEA1qZlsdeUbC47gAvC%2FYxdA9fU%2BNsbXNC4m2wfQNfS8CmR4ru0gccXZZECd7fXihfX1itiEKrdV%2ByJJz6RvqqZLAoLQbyVdsZf68tmSm%2F20s9aQqxL%2FtoaHmnz%2FzK3ywx93mHECKf86SccRH3VHkK0lJ%2BZm68PARsFqQjSsZRF9qvrZjf6phY7av8MNfKypw12IKp%2F2Y4xVOKGLD62kgUesD5lyRE%2FKgY5cmpHJXK%2FQEaFEQ2QXfRjuOZfHJcw68mDwgY6pgGqNVRDuh0b1GduyhT6DOswJqHAvme1SuCv4EUDz5dpHvWVjfcancdW%2FfzUCoMhBaa0VdK2fpKK%2B%2BTGtX3yCQG%2BIKbOU7pzVSLePyzGTx5KGgOdE3xbil6H5lJhQS8J58LcWoX6gOcxUhcmpWunj8twxCBkdQBsJ2dNy%2BuJLe9IeJccGpzZ%2FkHa%2FNprpU6SBHk2xDFkFCZI7bubrm5GBxwjQq765w%2FH&X-Amz-Signature=3b58067e02f66ca6bf731efb8c69ef7b636088350cfd4f85232cad62d9eb613f&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
