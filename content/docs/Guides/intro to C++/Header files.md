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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Z6AULFW%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T220712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQCNmB0uMe7J8GME8roP4h4MNhaXyEOe1sPy8I9R8xifhQIhAKUtm37RAluwJsRgEL335Ak8rYIz2hhjED6PTAZucszfKv8DCBsQABoMNjM3NDIzMTgzODA1IgxREgMkqLfRLVvJaa4q3ANlZ85pfoyos%2BV0oxJ%2FhqtQilMBkseavXNYHDPQ8NRu9CxPtOdJwESGNvFOSO%2BYOZYbIii1e9ZNpTpiYEAXOfZT66LyhpVHOeSzj1kr7%2BgOyb%2Fy1vj6KxZceJ%2BkaUbsHb07jtUubc0JcRti3UFxivPIR%2FP7tQWp6eytTNGkO8eywGcmSltF%2FFhqT5s8KuUNQdF99Vu7d5DiAn7C8Nhbwjuvd0PaVC9J8wX7Ba8jQCuTkJ0XcdADoVWD0%2FY6SAiDRuD45t8o%2FH4ZX2KGMUplqj2xaw8XK9xKK%2FTPXMK%2Feon7qQmke09QD4PvVFE18VvOKM60azb%2FKCInGoN%2BfoLOP7CRc5%2Bu0H6%2BwIoE%2F5l0Slnj2DTQ7wdupfScif4VIIRl1HG3O6a2fqVma0nmZFnUplLquVDje6Hk2%2FkFpp1He13PtdSg6%2FJ47TZz1fTMu9ApGf36S4SLK9S5%2B%2BkK5FnBDMSd1Tlq1g0C%2FCDVdGaI%2BJ8StpqMVCh6YQDVsekkFXWsALzcOge9ZpFlsOV5QD%2FJBxlebqikc9rQCboL686q%2FN4HyGJlcRvN6apfaui5S5cis%2BAaZ4iNtwjQM4GE7AdB%2FGef55L%2F3gVsMS4DiipX2NJIvaPpL0GT7duz%2FrZnbTD%2BlcjBBjqkAUL6aWRKP3hAcBd4aFVA5DJnXXZIg0vIJlwyDiCEj5cBXRBhenbtz6DRV1ft013RC%2FBT0xTjgYe2TmlzD9T6v2lJCidoqYsLDTAcn%2F2jW7QH%2F%2BS8qoAf58advui60B7XV8s4qzP2ArRB7JEPraAl20wceBtUnkTdZIc9mmn9FHPJ7acNJhhec%2BfGfRFJeq%2B7nDA6%2FCmoA5ptMqiofDXGgFtARqZF&X-Amz-Signature=a813dc16f4c466a24bec61256bb1dd5cec75ee7b50782f2c5cfcc02f2072334c&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
