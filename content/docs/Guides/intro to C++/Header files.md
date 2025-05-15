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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3JZHRG5%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T050942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCOG6nZq2VMPlBexrcd06UNSysPy0a2BObkoD8aLPAF7QIgHh0YSfXCz9p5VjVa9pCZZf8U7JlrLiz5O8xDVJxBMyEq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDGwOh2Henn3mv0uWtyrcA7jL28rhix7Uka2ZIiY6GdcGOacAg67AffcuyJHnpVVtLnijytdEkxQiNf%2BpDFR9CD9NDolbDGYyHm3DtnBI3vM4li4%2FCetgkOHFmlScn62Mch2kBhHNHrbDcUX4D%2FpzT6%2BvzXOE0DTC%2BV8vxXoFWvYZnucyMoLD0ukUP5WEHVMfUO9fMrjBvgx3OZptmW10XAV%2BBTML%2FZHV4RF75437PW9egHrZBHA2G4yZKwAgH6GBbHxIfPAAmSWqvWcQFLhq4YYdGFoJA%2FtwMVNEvDw0yfdwkskxbtstwAFfFrhKRSpmgfhXmXN7MTTYjONRKZK9N3x7L%2BxLj0ryg0ruH0fg3HpijPLcN5cQ%2FFU63HPcLJvbaQpmWfQybL0Zazyojh4NQ4E7bRzrWQCDLNtYFAnEqhpAQtxcMhdAHCtGN6%2BsyIO9VH1JLs5Tm%2FY4x3MslvdoUxARETF95wRdpW0IyaJHERPqcRcRgDOloAh9JBsQsKUSQaQ6F01jo9pKuxoipohEMH5T%2BRuAvx8hBpMvrwkwwCQDgQoc75zzL%2BsS0HzElzKlvEZYtcPW1BrCMvXBQLDtL91NvkESulozhtXm2suI7eGvs3HoRWxv9eLxQx1ugdSakl56puxCIoj4gfoFMODrlcEGOqUBH95WwWctBzo6dxa2L%2FQB6mmVbGEZG%2FAzPLBzgnWdvc9NvrGJwTt%2Bc1PG8q%2Fi55tg4elzjQp4uaTbIDfXtIqgzsDr%2BXPGvAHWsi7HG7LoYaOQ1r0fs3nCl%2BUZhKEuPCM%2B06AjQaRRU2a5NFDatjkAm4Aexh%2B1tUv6spDuSfOkofP5MA0GKWep9bOLmBjhouYJ1i8GWzzRlcZmY%2B4fIr9cASnN%2Fo4Y&X-Amz-Signature=046d350b7dd7579e0a39e938214c09fde0416abe4750e58a5df67581cdfad95b&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
