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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2VHHS73%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T150821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQDbOvgVVZZir5Lnz8ahF%2BXaKOfxIYtS1VHD5GhhFM1oIQIgQodTJnrYehTNAzpmk4TMVCy6RVAve0MLi95iehfyd2Uq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDGH94g19aLMikzxPLyrcA7ZqrCp7bIROmaTMQhcC4tcsHvSeDqQiZQiVsyCDtxL7%2BRnq9ndW6QWouvbc9%2FEu%2B6aR0G5%2FjOQg%2FVazHTpXLV8ue5QAa7wrHqQncMLomsCU3aO8COWE9QGo2q3GHdl6wbnIBGNn%2B63KSk%2FT%2Bst3Uf9njVFTe9JZQq9JnuQJWb8jGc%2FM%2B5Wwyh9%2FOTDsNt5j3APxBZgsgbLqxMC5GYCJxGoCHuzT3IW3BGewlxt0y2kiu8aEbVQyp1544mFR8sNsgSN9jht7eaN%2FWD8vh6vmLhgU5tUejk%2FRtQCII8RgZ2VS8uuRWQcmcoWT30vDG3LT7FgO63W02ys1jDKlqt9gwKpw0ErFSVYrgnqODhoMOtwyyhV%2FE2IPbLWDOy78k0%2BizHx6wNVGM6EG4SusUqhXLCW5NRVIYHHTZY7qi0HZ0bavJLBde9M%2Fbvahwj%2FMTpCTnYVOCh2cklgGXCLVANm8yTG0iRE6DGX5xV0XPRH5JrmHXCZacPpvmx9XFV50lwH56gL7zXOF4gGz1BtKxppnQsNtdm29ibDBloFMn5rpYaRvf3P4VPSaC2iP40BsD2ApGEPiHZ8Wtpfyp6vNzUNYld5wuJ1VyTga8vxoo8h7WyOQRTdFfo60C53tTrZxMNGz970GOqUBDSRcqGtbXNtEE0OIlNPRp2vMP08GUYasVVH64vIBRzEA4ZUh7FysNgnaMfb8io2%2BWBn2327eGqEaMxhm6Twg7E1KDiu9cdl%2FDEKKjJT4P52X5L%2Fifc%2FyDZLqNQuLw15JUZAYks4cWFPFcnp3IGg13UI5KOCXHNnL2SRk5fw79bcgcv6NAyVMZDdMGScopRsgDlLMRMtwvLvboBc4odY2%2FpPFyHOX&X-Amz-Signature=8527fcfffeb78ecc85a181b88d9939fb42782f5d2d2104cead9767a49420326d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
