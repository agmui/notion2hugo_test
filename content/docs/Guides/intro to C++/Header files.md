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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVCBK6ZH%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T035848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGhZfKPZwMNvsRKpvBxlrfa9isprBDQaRTqBSnfS8pZDAiEA0XCzeVmlYpTbQCc3o%2BG817n94%2FRIoG61LEJglKLfUVAqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPY2mDvpweUHWMT2wyrcA6Ws7vJ0DeZq1luvAwBKUzOySfdRcALqsRxK9DqPSAm7me9le0%2BDSSWAowuyowjdhy2bzXQkLTRP4bt3LL%2FR%2BikUKBJ36A1LhF4%2Fakb1b75QyWiofLruPwTVDORVEYLA%2BuHePHGyWY1PQ3no1PhOeQhPVMY8lyFFYA6mLR67lAKxLP%2BKqTA2qb1cUW%2BRDadnv75MxeM4mob5oCkYTGe8azk51rIAhGVsJzImB%2B7gOcn%2BkwCWHOEzETfp3yDPUJYpc615kl%2FrZTVY45JUW7IKfas17OQSAVQ3Eq2WU6p24A0g0CUJqziomPcyZI7W8M3uAT0GLaCefcmky%2B7jTPgPB7q52UXLxo66wYF8MPROwp7XvrsTLu5liVM%2Bo0pk2j0thT2gg2%2BkwskiUpxcT6JmmH42kk34OhFpqCQwnTP95QRJwIEDhtE7%2F3F92Z0IDi2ksVeTbW8pyzjBiPBVk4AiXYuAj3c3qkLlYTFDStiFdlr21a%2BOEA6aGjKoYSEzZkHOmO8URuE19PAdZGr1CDsTJWHnT4ZheruWT7i72kG38826qop%2Fah4WMjf7ySJDr1Mqf7A6YcOd86N8JYhbDQgL%2B%2FVa9wdqeeCzfMszvnE1ZiBhjrC3kwWNcTmzV%2FNQMOTxpcQGOqUB9LY0J%2FUbqlw%2Fma28j0xPcKUpzx7FHZ%2BNPOwf1CCD3vZ0QAmIkCysU3wiFoI2uS%2BahRlzN17K%2B5CEP4mVF62BBtd4yQ4HyH1D5vpETAWg%2Bthagup1wDpweGJ%2FNWgoRgRgJomxHaHm5EwgXJZx%2BNZuT5799LF9YQqgeRFQNITDAa6pwxPrEi1AJExnN1j%2BYTGr0lwpGFt3yIvrS1dLSSqYMTF%2F%2FLk%2F&X-Amz-Signature=d177f7048ccd4f45bd0a27d1bb4b10b8f212711fdfc100d2b2a31d3897dd48e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
