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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AO7Q6CR%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T121631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIHU7h266cqxyhp3dHYb%2Fta0ko3cC0CYApVSC8Q5IJs8kAiEAv16eOxk3qKbGlFO%2FgcJuRsCV41uMpsGTCpUtUfK54YAq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDOWc81gfMxxp08KGcircA9v4uMTDmlDTSsABTKvfA40VfGj4qYpM3a8T0bDlJHd8%2B6hsFCxnR%2Fy%2Bgl9oCaR1LZ0aSHHO46Uq3NJcVhQkrjQkUko7XjnUkRizCIMsyDPvtMc5dMjjPAXGD7wsgZnC3fCUznKUrz%2F98RptD4mTM9vFDehMomH54AbXhoGLSOhut1jZwXsZ9e1MHmtyTc2rfWFoMpUQI5Y1ThQGQHFfOmRBnWHLrtTJk3E3t1CYFjPcZaDRRwL1nCA3qGZVNQWABXIb%2BkIMfMyhC3pygGDWIYBn2R%2BYdCyM%2Bky3fjI0qLsUeA8OfXISFxIsEkG%2BUBWDWfkqI7EpqEFeJPPX24P%2FmJz8aLjoovlB59b6I2fxDusy75Wi4vhFyXuR0Yv%2FMBIoouYgwSPHwZ9naJUl%2FKHNkDoc9hkLM6DMNEvS35mSixzqlIAcn08VEa%2F4i362Jit%2FjGg0OKCDztVETCE4J9JNs4IXGrqbdUW8gKnBFji%2BPz8ndgnSNZ1F73atXC5Igxo01WKCsVH2BuCx4pZp4dE8mATvYCVwpkJKsg3DPAfy22wrKpBLs2JAiTkxrCA6KYmAjevvJNXdgG4MMkEKMh6%2BqV%2BXW5c6k7AuKTVXas99y4BVDXQ1FBHICN2R08DQMITirsMGOqUB1wVo0ANRZOKZM3%2BXxmmRbaIes2ylKj%2BhOZJO7cFAquh8f6yImWupDIMKToi4NTPgkEsWOOTJ2jM4U%2BrA3iF4HPwApEegyRvlBaAxq8gnKig%2BUV1BaXwxD8jJY9BH%2Bst%2B71UJm55KwY4i4ycppRHDPXllq76hraoE4pDRQqje5Xcg0noZfudvEDNj0PThFa1hstYXawDXLatWlc4OjkB1dIhcPV%2Bl&X-Amz-Signature=98467fdac8c4fafab96c9046042a4ec1bfc1d9477c8d0b1fa1cb58ee0f3ac308&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
