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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZQEQP5Y%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T160826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIAjGO92AUUveSehcQTHaXmqT4FRLqCI43iPx3Kw8mz%2BkAiEAvmf%2BWDE1jZCLDTapjj6YKpXxmi39xCsiu4X9QuVXL4IqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMNsb5mahG9yQE%2FHCCrcA%2BeJk1YwReswSIbyAkja2J3gR20e0gZTI7p5k1JmuCvxNGKaMM1BTuFJ0gc0NeL0ba3eiq1bopZM5oU%2Fl7XI9u0Z2Z5dPmuBsoXVQqN%2BAeiL7j0Odom9E3GMCM3S7793RJDMGnqk5BSk39gL1k%2BC2WteFYvu2ZDXZu5keymu92Rb17vOmjWcw3Ciu9JURO9cdD%2Fp%2BHqtXrcW69r9i0sIscGBcbzoe2qSSwWBspHtIIiBr7lI%2Br98Zzq7vqZlAIDK%2FYatmSkJderSNiocWOB%2BTRXHdLBSO90xl1eoyyK5mSFiALJii9hWLrx890x%2FJrjpHw7FPowDc%2Fv%2F%2BbGkqCCm4DjOPESJZ4CnWbqMSVBcYA27o%2Fys5pcJX6OdP069iCza0BjcgKYu5%2Fr8vm%2BuBsC2GobR87aEyl8mfJX1eruCxdj55mGFurNpMqUCnRBMYganf4FxNRuoWthe3eHfUnLwv%2Fi4Q7B3TODT%2F4uNjpBq%2FEzga5CdyVPqIHvr0f%2FgPK8rxkfv65LiBczGdNd0T%2F9dDkSPLRKBgZzU%2BgvzZJXBtLKWRhgehwPee%2BZL6ysyj394t5dDD5QhnA8u%2F1tI8z0B4heBiLzuU0hQQ%2BWVJnf3CT6ZrsLieRe5vUNHfUugMMeCj8AGOqUBVS7uips3%2B%2Bii%2BLssVQiIcV2OZehX6H7Oyyn0RBitMNVlGqwRBnMj1t03woWqiVDien57bXryZDmLASPJiVX78eAHVjWZApTLfzc5T%2BjSa54l3PzobJACYwJS16ITKWSMW4lllxpEll29vVtcA8qkXo2eMHXJ3vdvkbKuM4MkxlUYZIbUNk0E45Z6WbnIOeJTYYxuxO0%2FdlT%2BTHuc2alarMp8JDwF&X-Amz-Signature=98166f19714f20b3b1c45080563e7446e9c84deaff129a6139652d1145f432f6&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
