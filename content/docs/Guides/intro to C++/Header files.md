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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RBEAIJN%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T210709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FpVSqQf3XF5m072aTXI68dPCc0SRj1KF97SsYZoYmagIgfuw07ZjEvGpB1uMB0VZuVZJfKBOOkY4PduOsaOEkhnoqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBkw9ebLOQP%2FqqIRgyrcA977b6%2F3D1Sag7GQSJ87RG1O7jgbZ9KbrLoeUCh%2FlN7z2ie54O%2FSSaERnBs74V8XfZaa8g08tbbw%2BFQQVWhGeParp%2F%2BSBbTMAkZvrKC9a8WkoRQ8YRaVN%2BChYdy%2F6F0l8vJTo%2BSzJFkzL3suaF0XATHCVKoeI3LKR95A1bXvheyQUKvSpvpEUGuuAizue0lNzv6r1BrFWOtQCJ5349wb1%2FvMaukEewOpoPMnv5kYTZxu5uryv07SFRLfOaWeoz%2B0hXaxvsc7gAM58GgMOCiQjWVWdAT%2BvYG01EDN8GYnDi1IXGvHQo1MOX8JNGhpJ3X6X2bB3qb7QN0Gp7yphOi%2FqeIg69E9x6XL2lNsHBoOpNYYrfS%2F5fO1CVP5TH2If7KQGq7b5287JRG74MyQvEYcsHIpVaISRFtpGw7qxM30Fm5UlVuFzh2%2BtqSMz%2FgLDu3VSmJqf6Q9xjSPjh%2F62E70Lig0JYDyie6v0dGaZ3VtP6Bk%2FFBVq%2Fo%2BvwVzS%2B3JDookuNd%2Bt1O%2Bcd2CK%2B2cwO4NcQiHWwhHOogWXmG8Oj0eZyOIlGSu02bd0kETwWDNsG4IlgGa9TGMtZwAe3AjUSjMaaRn8GMfmuagX4fgRiaDhHaN1L%2BsxRFwjtx4%2FxYWMOfu7MEGOqUB6b6Mf%2BAQk%2FooK1jH%2FyhKK%2Baa0sx0tTS%2BH3qAi15rvPT7cgSMYw5AahP2%2Fy769Lp23%2BH6Buhgzb5Qvt0Ul8JmBNaXHmctdFaokGfQt19uUexEr%2Fu02TaXKkI8Lqx625d5z6hYZwhyAok8acxD78H%2BU4MiIdXsFG2unORBqxscYtJB9JjKY43U%2FWTTZzgwOORnQF5t%2BcJUqjPnfmFJ%2F2N3jdTk1zAu&X-Amz-Signature=896efc404d4be82bc448fe73380a5bb3c655ab2b45e3f5b0ff6c131e6aaae67b&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
