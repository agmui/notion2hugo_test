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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFOYAS7J%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T033353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FMGhgJGxy5XkrVIkTkC3xzqvp1EJmOCr1%2B3J2VUiwpQIhANSIuiGhBUYl3bH%2FewJweoNfwKIVTJltqR2DrzyPDO7EKv8DCGoQABoMNjM3NDIzMTgzODA1Igwz3%2FbHomo6tB%2FiUdEq3APo0pahWsxfquF6dr1l%2Fn5ZEuBgYSpNndk2HP0OfrHABlMB5b%2BbUsYnmJVZTRQBf3kbzmpb3Dxrr3RK6GFS4SXozVc42pE3EAlxOBFeAhfYFvPD1JkMqXBqv4G5r7jRmQtLF3LjgOC9uUu%2FGbNpeGrrE%2BuCYPA%2FHm%2B3MfpUyee5yWOzSoi%2BBtp7BG6WyD25S0UcTQL3ZE9leeAaJoyTX%2F0SfGdq1D%2BwFWLZ4WDEru%2FzOXVlUK%2BJUXpUKe191u7Eu8LJ8H%2FF0%2Bnxpzzeg7dUfhG6OChvwy2ge31iFWWkz5ljQC9%2B6jyuJelybmB2ktu%2FMmq2nJ0INtBqqhOyqYrdjYXCqosQIR7CXZ8ylrBhqyy0jxLlLHNAyHfm7YnYSJ%2FiI0mBwBILJpEu8c0rME8ta0jw5m%2BojQc8966UjyPZ6cvsafFDevzqIdX3eVECn9kYigvTVWUSdGB70TLQFhth90cDUJzM%2B0xnyLTk7tRDyHETiXMR2CarwIPC2ccVRK2d1Xye%2FDIyKIWysTbQ7kJzbVZT7KduUi60QOOvBrXki6QhAUMcprDsNjyZfRp9q7d4%2Bk7YxyH6ydN7GhPMYPeAG8GmRxUyiiP7cZ3m2avDQDpg1s2M28p8l6pWuVjIDzC%2FobvABjqkAcCy7jhNpFyIsGQQm0WZ2jJSbx07H1MwE3ezm9V3AWeFJpz7Bn0uBUSSCQijJBA%2BSS9oc2Lu%2BGcRapzwpHdEknpjI7mfQyDSmuGysXxH8SqHwQZe5n5jJtq1i6IKN6EzWUgCTKep4EJ84DxyNoKLk7HpvdfMUcS0evm9PK8QkdnHz0z9hBmWULe0HMSeeNIoJaBM0yzigMZaTmjPbaVAyrZCjjzW&X-Amz-Signature=db4e7bb0291c2ea86a7345d1e6b8858fcd4958384af4febdc94dd01ef6098602&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
