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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HTPDN6N%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T230753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIDJm12SHS3%2BniTo06Cv4u%2FuDDOPfyYbzr0LoCyYi6BVdAiEAneLlYMamcCFeh8dMODRhIAHNsKUxjEDYk8fW3pGI8m8qiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMi4XU1gVzen%2FTmEeCrcA7Ncy7bWJMHb%2Fmr7A7XiutPMsTUblg4JnXDzMg2AU52Ko17LrSYSC93CTkf3WXrYUfyE3unrEul%2Bws7gXO0oc7es8Uz80fr79k6R0rTDqrEd1MEW5HOnVAQQo0iJBgnyLeGsCGINmr3OIEJIWgIr516Pj2WK7%2FNJhgi5SW%2FZgjYS%2FcnStGqoDs0Nfb%2FAKozc9N9KChzlrm3Froh%2Furnu6thYqgDKjdCYw7Nt0TXgpYSpRnI8aShS9Qkf1uCWeZ%2BoGDPHprDBm7Aeq2sILQ1SKdSazz9rCIbHZRLVNHjAK84%2F5CX2JWwRpk6Bg7PVPcY4FCmHQ7Rzm%2BXa3C70VL5nYrltFGak0LcHmS7DYmXAH%2F5%2BQVqp4Fms0tBdIQcMCoX1iWsgsrjaEe2YouGUJmknpnRQpmnrFmu6XJUxOw8%2FFdYcdjn8fsuhDj%2Fqvtm9U4lvv%2BR%2Bc1jVcQ%2BP4AYzO6WeRx%2Fi4vut73JnXOayDGzyQUkd7KtCkPyB9ynjtEZ%2BRmgEVBPGZBV8DKe0vfXSmyTuVfMPkeC5QxVhWZsMmN0FBMjgQvRvxLyW4hmlot%2F3CkJTd%2F%2F%2BPnkkEiAB4cVr4ueSKDHr9G9gpVP6Ca7GUigtaQFz3iUDzfzfXU9sbgiDMNXytr8GOqUB0Vmji312Kg8MGI49GBsH%2BQaees1h4RL6d5j5MzbhrAV%2F2g06VOS2gMkC336QqPMVngejt3sWpI02aXsGEjHerIq5Ay6g26cbCXIZcJQTTEwgMNxMDxSiAPa7eulI%2FHUC4Id6tpLnllJnHiiMqgoIpeHAc6BqGz3J6N6dPWFtlFmtZxYmpBmgGvgEPa%2FAzQ9AXE4RqvQesJvyTdfCwjw%2BvZytGXtj&X-Amz-Signature=a68ca2ae6858d8cf185cbf13e7ba003b06478d74368855dcb50d0da80a4526d2&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
