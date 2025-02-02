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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDQFZ4C7%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T170117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdZP7BQ%2BCRahXLmXVvHVPwupYr7kCMjt%2BjcW3mdpe4PAIgU3l0txPgGfoOUrDmtg%2F%2B2s%2FOLP7yc0H6c4eKSoqih2AqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN5KTiw45rVicP7m%2BircA7%2B%2FMkfVEjO0Hei8bnssffgUEUgDXIIMJWamgSdgG6vVNpag11vvSqJebkqcbahXVvI1WIqWsXKKCamR7pNYBHTrlhTr0QtbSo5hcT%2BnxSTVEc09ZbmjeGv4kHHsRBYNlUlp4DZrBYOa8%2BnQ69uqSMq1KUgvB5kXRqsdQTD5IHdzSEDDwcxX7QcIyfwYe68MV4%2FLgryaJwN6niHoiiw%2FBxsbG2n73vQTBEj6fcMEe8mlYHetkJ18h%2FtX0dQ0Q8trBwOsCXPTL07RYVnElvsN8fkGE0kEsDgvx%2Bs948e0O2VVUc3eW31OJrSJsMWvh4h6urnfW3DRE%2FfK%2FvxL%2BQ3Y57T2QRsfx2LdZM%2BuSJNrOaKmW5Jwj%2F%2BtP3LeoaeL25VSd0ZoqaekYHVjMdEjQzlNiBcrFoMOI5%2BiCH7ZLl%2Fm8K2dewFuufC2kMu%2Bvns6Qf4mV7pqau%2BSUNRc10Mk8R9vs53PVdwm4OjrQGM7YYERAU5g5ffGUc0FR1wb8J4NNGnuu7YT54QB%2BK%2Fvghu1PL%2BA3p7dF6BVcHg9M8Kwno3Uwe0%2FRuEDf45TpJd9y4wTs9sWtz2VS51hzbLRvif0I6dBXN6SMGThxdb0dQiljiPA%2F7jbguWC4T3%2FZEPsZ%2BSYMKC9%2FbwGOqUBVhf5SzNob5A4%2Buyk3q3Cr0Qz%2B6Wve%2FAOwLD37ZhVtO7TjEvl8jcPnb8r6C4xUPrISxRDgaxIuuqtbNCp5ewAPEc3%2B3oohCFHGmHhUJWbiWsQ0WAD2NJdK8PY6YL3JC20A%2FAMW4IgGJJEN1cO5wXxScJYSpSlnxhjm%2BO%2BjovBU212ih%2BOpSOQkgX39TJAR8S0fyNt55yVlgL0Vuh2DIoeFG48mvuY&X-Amz-Signature=fec8b0afacb25b738a95fb1d03c7623650f66bd59b52226dfd8271f6114ffc88&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
