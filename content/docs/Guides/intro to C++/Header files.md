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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNJN3MNV%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T121558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC6KQhKTyrK3Lty9BSagC7EmZ6NiGgaa%2Bals9B%2B%2F2%2FwdAiB90HgpAusq9ZGjkINOBn89UG3VHe22%2FVFD%2FyEj1DXnzir%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMc6x%2FXABk%2BWdGjc99KtwDB0gthHuxj5drnnbsaZirkrLfy0owvbh0dx0J3AUFNYoGDEjQkpx9agyfC9exlKNXag3BZOo6Ei%2B3AYqGHb%2B5eIM7TjpVl%2FLasmlCYImwOE%2B1ao2kk4e3ihqkBtur%2Fe2Rmvo7ZKVa5zqY2cptm7OMnboG%2FkXJrz1Z%2BgjQEOgY%2BKzZPDRa5y53ch3l%2F6zQLInoSLsyEESrDb1CEZpSlLl19kVkNHEuXolY69yQA9nGqGWuBTQ9i%2BTHnszCH71E8dNyhL8HlQmK0AjyQZkAqCb6rQzE%2FMRkEh1WsHO7IFLV3KG6XC5QnTOp%2FV9OXofCrdrsBBFXl%2FfIRaOWJSKkYgVfFnFUlh6cHf2kHotrX1TImz9fkhxx6SvgOci2kGv2P9bx%2BE7PIyQP1L9%2FdSPPWklSKCDAl6uh0hiZWVX8Te1wH4bLIQNQlblUDapL%2BE7hYU0kazo3UCZRf1DZYpB%2BqjZ4NCtFTeU7dkuK%2FtaFYRzPIdia%2Fnm8iDxbfmzc6oEBrp99pbmZQ%2FD%2F2S%2FCx5hOqa6h4jT%2FtfWZ3w%2BKQKFmHL40vSur5Q5FlNCZ%2BbpxyTrmPWUENdRGphDLYFp5i2NAYJIAeUSW%2FcvxldBorZZcdqNE0btBNV7nyQMQnlqc7rYwm8OcwQY6pgHSQNmWg7r9dbkwfWvLd6xqUOD8qYlCgJtOzpOQFrxwXZLJmMSiAsuYF%2FY53gjZlW32kRea93OSPdjfbPODbA3XByJkZ3Shrf6B0miXPiLwb%2B%2BEt6wZHd0LImHAF4ANA0NRrpOLcOYn7iaZtfMBW6f4Mrz9AGLWDYfO%2Bv9pCwctxtkMQbIOBpGIO2HBp13HjzEQwwxIF7wKmHuYWRde7ay%2F6MDkLLNi&X-Amz-Signature=7d30170427c326d643059ecc108d63bfa31ac051717f823301bcb281314546a4&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
