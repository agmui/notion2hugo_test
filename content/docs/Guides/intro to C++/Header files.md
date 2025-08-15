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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662J7LXY5K%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDpiEb%2BvemR%2FPDQUCuAxtHj5yA%2BrWRgct%2FeVdJInERV5gIgKQgA8eowa1QJKFxnW8a05ZpZ%2BWJpkmKO8gO9QWg%2B4OAq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDP6jGzTlc5yA0c6u%2FircA8fuMFKSgY%2FAa8kIUFLxeO2usVYX%2BZIP4YcZEDPyQLRUYIMmxije0ExhnxzuS7wpKB%2BfjzX69fOjq9fgl1gn7N%2BsKksx7osmSlXG5gdz91879Spbyb5%2BJVVoIrAc4H0KItEswUpF5rqEHqLgkmkqtbI62gQuWedyuCqhNWU0CH%2FETORo3nnbWC8GAsTRqxq1qfTxx3x9tOneBScG4JPonrRyO%2Bl4y5ogsGFrPj9ExZ0H1LX6g3EV8L2HVGE8vi65enoJtvd62GVY3KWUeDK1ESWi%2BMGEy6mjo0qoV2BAdZbHbPOJqr%2F4YOFzfvGFQFpqRaLyR4YtSCJOsSsR0yDwUJ4%2Br3BHlPfwHWimJmIHs8FTlilkx%2F755teAoFpZ1UfhOu6vCMOqdwDHuEzDg530767%2BPW0EeLCtF6TXu3hfsMatMR4CxIDGlRlzVx958g5LLnDRHXKLGa5xRqH6dSmBqq1vzQUADcKeZcCcE2t%2FDwLThkMEyF8m1JEooYjHAP6dEpiK7aEKjYxmKw%2Byaks6p6KIro275B8RUM0MFPRWMwJOq%2BRkhXUk6dyIUo5dFYHDzTbZSQJa%2BmJHtIeO%2BGRIKQGZeAi3EyxaZoGavLs6c0jwM4Octu%2BXmKb%2BXRT%2BMOWi%2BsQGOqUB0iz2%2FYHfs1okuZIjpNvqUnFj%2Fe2Je0i4j0KUMMJFx%2FOmTxRIpfMVfw4tRysItDNAMAodlcNJ2gZw5Ds%2BeXxsd0POdkN%2BUY7LkDdrOLUk53QV0vd80hvPc%2FvTlOUdg%2Bs8c%2FX8lPiYYJZVnju9lStzT705esCrodQF3VXWOzmE7G7eSa7VOPRJGIV2UG%2BHs22f5jV41l%2FGr1%2F7sUoz1YbheBWAd1PM&X-Amz-Signature=6d46d8e1e68da40eee7c8abc69fb360a67e4b9aa787418a3c1e4dede2c73474c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
