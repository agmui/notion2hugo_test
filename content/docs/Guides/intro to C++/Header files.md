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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZFINS53%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T171140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD82kZuOthlS8rj8JukxJRhneUj%2FzIqOH5p7ifGGSF8eQIgZX7HUshcrhQFqq7S35e5x6%2BXNbgfNZ39b48cEunWqG8qiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIdycSmdklK6x4bg2yrcA68SXFO6jsTVczc1dmdgVMY71cjV5skayqt6IxsP1u87Sipghazn5y6%2B5DQ9LHhzi01nGIIthgSQN5CEqzdOEVX072kD7YTTM1EqP6rWEbD5M5%2Fww4DAPmGf5Czh6f%2BNcVYaXbVKhRnEtMgAC5fUG1mhy7CmrPNzsvCknSQOFty5ACDpED3UboZuqah9U%2B373q5OR2CYFuKBNLz7MgTh8BoTswgOafpEBLSCHJHbq3gSq81w95g0JIBmqqoUySONoItSeCZLL99Gi6BXBzyy0UtXCDNDUExKSamLZRwO8qIGrTYn3np2LNjwjvxHZgNVpTY5gphhye6gZ2n%2F5qbHDp%2BeOiuYLpc%2B1g7elMtShOARXuwK%2BIUkgacIRyJO1Ddog7sphoss4QLyJ%2B8QOfv6hGF09z7sXaA5h8dVwIZ775nDIV0dCadCmHXxZNpPqmENTwALZ%2BCOOcoEFOMnTKcIJ5zLjgba2O6vq4Dp0KCUbGYE4xIord69P%2Fia%2BgqkVPlAHyVTIdIF1c1P699JUmQ7iM5J%2B9q%2BbtmEPko57QHjjOYDMPEhfV4BiqN8f3uSBTGV6IDPJXZZHxSQF2%2BomTBzreKnuOuNmlwHkFAvULBe%2BKem8MYYWU5wF3SFaTtTMIrQv8MGOqUBBMtFqsF3lTCUmJGi7zbjM5y%2FVTFmGvW5MRnXWwhN3fLeJMURw7FXx8IW6I4dlwiDe%2BWeRgD8jkDOlCkEGmiVWNfo23YPY0ge5vPEfUZhPEpUPy%2B64cORpDo%2FkMS69Qz6q6CYXVLQCXBMIh9FaTAezcOj5yxolKqe%2BjpgcRZuXA601Nv3znn8iPtW9N9wqTSN4ExjGjEIaJut8bcSzqEWgXQY%2F3zi&X-Amz-Signature=5b0dd906a071c3e393112ee8b5c22b3011ad5e883f08064280ebf6330f80b0e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
