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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLCHG5HA%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T210147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIEm9e6AZyOT5tTGJmy0vArQa20ZU1UNOOiqfQGtacBSsAiEA1v%2F%2Bn1qbvgLKIuHORWgkeSCaTUdJ%2FAydWloaOyNCdp4q%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDOmXyCsnSvvtk1%2B9LircA3SXRBKNcprlB3UP6sKffkNClwKOovUyC8HbfKTdXM4vsJJcHtLKZ8pNSvZ0nFAZ4dvq0FeYn0nToi%2F3ARLk%2FKrqUHM%2F%2FCcuO9PXVVPtQIWiuQvsiCd0QSXkqRgMOhHOU52ETaN6ugoIrbTufxgOkPP6oIy3zFftjOyGUXKRklMgI0ZIGiARcNsS0DaDa1MQYzDeSBTapeM4yetXod6vuLWlDRHJl5JoiLEe3u4K1wuYjUmDoPJ03uvSqdcBDovH4UJTRbAPuRJvpeloUEDiHRIMCUPx%2FTUFhgbloFilEwVVYbOJAo8%2FCYC545rtsYldzODkASVtu4PPtn6wcWJW5wKJu%2FHWsow6Srvatd02uE0DvWtEnq%2B1rIedJ31Beawl8KcNnqJIH6l2QBFodqv29ppVF0XicEDbn%2FaPS%2BrCMlQsc%2Bq0%2BAjfFjqQ8my%2B4KTsOH4bdDVeB4vPoZr6TO%2Ffm61s2y8AEH1q%2BzAEsOSBtCuPJM8b422mBIGjjmEX1YR59m6fFAVaJCrjfSVlZUVFeuFa4Eq4r3jgeqVBeSEMotrvHdRmWIhJUQnrSZ9Qed48BMVxl4jQDgK%2FuZ1%2FBJnEOWF%2B7m6UuufVxi%2BHzYlFbui6yPt7Fa9vnaE2fWo5MIKIyb0GOqUBfnCl%2B6Qvoys0fY1liVGfjYtZdr7%2Bn2YnAK979QMcmJSVX1wMctdmPy4vFh30AXc6iEzl2hLTifDaaABhUYyEHjwyTJIzphYsBfeegwbl0OxVce39Ss5byRBquOntsJSFnAhLTnH3s8c9HQEhU4qAiStFUDH3644utked0Gac2cp38X10Ar%2FHvMV4S3JsR9inEkPbZgBxiULyqisEmD7TJWt%2F8Ukh&X-Amz-Signature=d26011216c5e18240d6674a147c2a80e19071f0a00bb36bb3ed7bd6e9eac3de7&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
