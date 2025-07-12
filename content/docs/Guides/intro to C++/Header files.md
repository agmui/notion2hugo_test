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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJAMKMMA%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T121439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDm74LFo3dQFT3WHOQHqBHlCDMmLzXcrNPGelhz1B3dwIgb41bi%2BImoc4KdxE0afXN74a2IMy4ZA%2Fg6Ot2y17u0hIqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMIBe0QVdRTOAtaTWircA93y74VTF61MNVtTqhMCXmoZjBbFZf1X3PJeXFA%2Fhd7P4chmJSw4tP8XBVVJ9dj8KnV%2FPMfVJIM%2F68WUscUfDeVB092ZDFXAd51TzRjhdHEj50b3t4f7bC0uAtJ6DcSa1yYd95ZoGPKGlr4T1gMNq33RcLXL%2BuLZrz22Wak6Nf%2FVPcMD4mqE3gtXqOGTrslOGlREapaJYsAKwRf0INAKbaPxSDL4PLxQWGkFl1VEbpcGJZK9SfDQ2gMFV3nbmD35I6Xh9TYY5c5JLgW5DnnnklNmV6IAb0S2ZA%2BBwtFMMMjrYhiS5s%2FR6JQhx2Ct0wafVnyeprAdV%2FHOU5X8AQpk8RdgPWDyRz2rbALAQ5lcLrhFhDJobNjT0GWxKBxncnDziyeC9yeifN6TB7XvGeyWmi2gD3WtjbAzdtN0ctGSpoxM30%2BGZunJ9e5I25f2WigbCDeWSVRjVm1gPUVGujM%2BlgS%2FBWuRaRGX6mxyGKYbeyYexpEhZS2u59i602vxeRkEtAa%2BOsNrsmBHh0tLYOO4CMPtizrK5DjxIpK4Y79vcB70TMAC09k3SfsUfHkDRUKlp1OZVn3BLdqA0%2FlFPwBNX%2BZp6hOeiMEswXAYOK%2BYW9EWuSg%2BQiqJ1XucHFCOMO%2F8yMMGOqUBM00J77vOh2ybk%2B8P60jfCZrQ65tOKTcsXgwibSL4XoFNyG9nV1E6%2FehNr9Wn4l7PCVRKCKsgegYOjgFwJ6obIk%2BzJycB1ktlOyakSVETw%2BYIWORKwJL6ELv6OLElzLJNAjOMVATdcmYCXvzxwEWxM3XGHwRGcydmRaFo61bR2KbyCqOhTr%2ForDVlHny6LcvJA32o2D9quZZ6AnaBAPcpqBHtt0cF&X-Amz-Signature=97b045cc1e5eec8831b6361d1f8d2400e29837b309ba047968cb951bfa9bcabd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
