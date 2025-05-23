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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAELNRFT%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T004143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIAPStCuRyRx%2BKHgcvp70XGRZd8MbpXsMhtNkogrvMwjcAiEA1nr%2BGgR9Dii331HlTxfWmk12epamf7Jpbyibgtv8TCcqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHwF9HRHCyzGHEIcjircAyA3Wy8jVyqcKjcnsNPOnh0NeLr3sYV3CxfnrgOQHCZBWIBTf7pjVnaVggNHPOBhyiOkT%2BJgjTFH5CtvbhKrg7VwxRHu1S0vH0Zt%2Boimc423tnnn6fEqiFPVpZvIk53ldb7LcxV00sUSgSsJUzLXiJ6Ku%2FY6w90R3nBgMy6mM6%2B3IUzNAcfidgqbAUhH45RK6RAfIJ7jKD%2BRXEGhnzVfCFlvR5c0MZ4CTMj6SHvm1oL0KH4CVk4TYlSKZyv7M75UOJ%2FqU6xyjxn%2B6MKutEO9DLSR6Nk4zHuH2QyYg1pD0B%2BQMLRbN4%2FLeYi7oT330ggWoIMPRtVEYWQA5FJaq5%2F%2BlDI0v1eVzlcKGsAFYeBTOccxPlZAj21DduCq%2BH%2BfyeOE0cKZe0uI0I9QTt%2FmMcTEINPK9hgiFDlmw09DTKE2A1YF9t50IKk4GkTkItXEn1otouBDSSc%2BdLvX2DePTS7xZ%2FHeUd92P0FunP%2FsWzbLyptPaHUYFqvfw6uDiaVwmZf%2B2TaIZNXF%2FOovlM7o%2FMgjSbJ%2BvlRrNGXpK37cS2Ql1yKG3r9aIfgofprtmAiiCMWCUbKVBuUTRrILaUH%2BEsmpUDEVVsUOLqt3KOEseQCHpe6bpfMQsXNovjUfztb4MLjJvsEGOqUByJinIUBwCVd89%2BcfPfSN0qeP0%2BOSomTsF2DKpKsnO6Ya1aD89lgBI7QX7BehGwxNHpTcULorpdNpeKLErzZODRnCODEFclYrLOe%2BN0v8h5jeESSS2ukNB%2FL46cnyi%2FAlxmp0s9BL9OlZSD0QUem4mZB7Bx0GGWBURYfk82F%2BLAAXuZmktJpavozE7nMKe%2FMpMAbABZbh58F9RxmRo5FrnkKQPMgR&X-Amz-Signature=c28c57a0ba86ba7fdd747a65127c2c1ad2be078a26ad173804b29abb5fc17ae8&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
