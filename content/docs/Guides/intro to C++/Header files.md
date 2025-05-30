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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6G3NPWA%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T022630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcid2HDKTHUPmvr6KUNPjPlq18ul2TXEozQJUrAApR2wIgS%2BYhxY2nTWiU1El1jd6sFrsVmBqK3ggRZNY2jh%2FD0bgqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK1VqxKZ6hLjlqNaCCrcA9utw38grYji6LtaJ9kC%2FG4x5TzDTmTVG56Ftg8UApcNqRGe23Zg1mtt%2FL9jQk7MZa7M3MIgJP5c5WrTIyansYTYTMD3XS26S5wVV%2FHJ1d2uLBoIhWCKOQ5GCdWkY5q%2FBod%2Fgt%2FCzPrwE2Za%2BREx7caW6MQUapUhKzAPrBohyDdaHf%2FYGj5TzEI2ufmXEV6mTJU3LF%2FZeVezfNx03rSzw4%2F%2BiHW3JB9hYiEJ3sTENbNhiiLP6N3k9YrEFQzt82QpkVt8gT%2FRm9SeZ6v1ISNXfVWCCMETLHETiq2uN8l7PXt9lH8IKBkK7T7f8SUBKG%2BN%2FtOQJ%2FE657%2BKIaf1QfMncuczcvlfFYfxI%2Ff1DfPSBmo1LX2erGvMCKMitZ44jNEW057z5HlZpd1mi6kBhxjKDcgR5QXm2Hs43fvevAXTk9K48I5sQkb%2BVgyfX5i7DmLhdJNScZSev8DCdU763iRSU4lZqEpoaauzmvS86dOW5ok0m44Ok1npRpsWSJ6UJCEShabLwJ8bGYRxLJSq9e1Qug26lYAvKUNaA6Dzvk3Np5flfs6pmgBWzEai4LuLq0P745pXEeBbTsvsH7soVjPOlQmPBFEhovmWTMoV%2FLA3xJCT8wFL8UGxhwU3UHs6MNCC5MEGOqUBZkmc%2BmUIXlKWW8vFxC1cmog2zEEM3t5csFPF5SfMVUt%2BbjqzyTLSjFG5l2CPV3yYeQC1tUMTe9en8EjeT4EcM8O4raQDtlBhSINQpfNmpf4Oy0JKY0PSCIKfXkXmzodNJqglOl9YvxXzxp%2BuUE7MYE%2F%2FjZIVjfC6pA3C6sWvKctB8s%2FanjPOUOEFidw4XD7l37t7JZNAE9BbRyw%2ByJmHg81sn0Jt&X-Amz-Signature=d0e59006ebb980ed54ebae1fbe34d5464f6bcaa45343bcb60d25c2fd4dea2e21&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
