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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRMPQ7DG%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T061125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGLZvpfYLs1%2Bv7OIqoB8nYvO1xBZIlkc3sOTo35JRAEpAiEAvLPEsDHBiRI4upBKhdDw6ZkiPJ6tzPFImLrV%2BhRXR40q%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDDlITAOXYySUgy1tjyrcA0fiN86x%2Bi6H%2F1pCkwtLSLYL8Qtbyl1Pc5irHrkCE4pK%2Bfnh%2FKVrBDQa%2BZwTHIySopgAo7WiPHY1oe4cYi9zHcxAi0r9OZm%2BaamP8OXu0zvywncoaDicBOScr%2BBsqrqz7J%2FHpssYfBb1hLuspb8y0sR%2BmRl8bTGNN0lXai74HqkCQ9fGd6gDzjejxqZ3FIybU9P7odZvu9i3QZbqvODKzaVWFhSpQp7j%2BLdtcwyAOGdREMXOcw%2BMRu%2BsZTfCD0htP2oAOoJ1p6x5x3QvUCKJJIMtRdG6RdHfEJBpFkl1S%2FHI%2FbSD4S5vv8Kqp21dUYd%2FvFUXScW1nIqg%2BtXoTjVHBGnKqGAzMAATn0nJgnxD2ZA3cKsNi1NQFKhvSJiJCrWhVrodzL0WqweCj%2B67Bj0sdGCdWnvqoKbSzP%2F4E10FoKOY3g%2Bk4u76l%2FW1RiF6KjIy94qzfkwXgJajhAgaoCF%2F7rAlzihtbmD4aoReo%2FphuRZ%2FlBnkxPvJ2aJe2jDGbuRDf40PQKwrhPY%2FiHKYdalUnde2Lch%2B6f7HzmAzD4%2BuazxYSr9jHLudaS%2B9RgJmXj9eIojxDUnY0kDJSahbcSFWp24LiMxMuwfRJ8Lax8X6avrvErv1AJW%2B1iPmeGMhMNqGqr4GOqUBeR0GdC9ju4Nzoq%2BEmWrNgZ9pHbtR3WPWOBZQ4kaeopFihxdrGFqGxPvo7d0Ke4p6Viy2WdJ7d5lNINBpcpKq6qEmAD0KMPn%2FQBKkjXyn6P7mlYgvZhwcvmXawhkfXTk9CHP43TnxW8y0sTrKqqFvFfLuchzO5i7%2BnQg1PImVdLpN2fo%2BbVNXn4Qjqszp6Xh2hGjjIqSV9XblU83Vgx7DsDQ1gyBO&X-Amz-Signature=573a256113347254739fc79bf434f6b73ad995cd0b14517d713f8218cfb8234e&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
