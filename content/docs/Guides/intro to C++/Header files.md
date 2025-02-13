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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OUULONT%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T070806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjjmfXveESH7Wx5dwy9AD8fEiaS%2B3uLHfvjkFCyjCdigIgPCoe7AFbWHPqPNwLh3UjTkgOlIXD2vIS5rV46HJl8MUq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDO2nT%2F8rELatpOVVuircA96GMXZQ3mRwY%2BAsJ1lvihYZamxRwQRytXi8Zp3e6bP%2FaV4jBaF9LjLMs6fas5%2BvvljfjvUbOGEfvY0uksdBvM%2B764XYnG%2BCdvP6Yz2PnsDH1%2BKpiRKmf8y0rPTdPQpaJAdatbCL8rayndVctnaa3MPtokIVfQKKVQ2T1AJ5qLjf8Fi%2FtGKtrkf5g8822sp6NUn6eHZZJAOlOou6MaV%2BrU8SJl3GSz5seAo%2BQN%2FuHPUQ7Dx%2FpSsZoCNISkiIwjeY001pq7RvkLuH6NHsUtH6c10dotVPl%2FwYDRDh2SA4r0iVXg3z%2FOAVayNJGIqq62dTrVT1NnwDUMUwCiZ1fkAF2xob9YFBp9AVJJIOS8EQudfqh5S1srqXidQ5%2F46B3%2Bx5XSLxv79Chf9UnxAUPfNvaMqa2Yz4LsFHnShSGJkfNHj8xeKljivDzqqPmJ5yxAY6YyyUtGdgbWuf%2FylJe7XRuAaLxOWMbet4lHIROnL6MWO7SgNEqaY2DRx0XKB5NbyhKIHYXbWqvsADiVH4F%2BF3YKDzqPNT2%2BpsGDntVjgPKMBa5ER3qYqJgJo5zUDrpzK9lccY2mcJwtgps67nchqNST6B8I0RV%2Fd6u2gCR6haFwQ90XPCO5tg9f1GF8dLMJWqtr0GOqUBvROOktHHK32dubLfUECVfbyO3lwJhYG9uF69NZsabFO0aSrkfmChN2Qk9zF6d%2F%2BEiQc4FeL8%2Fb6Z19EIH1GXH4DbsimgDKmYD2fSZ2cwVBccEv3TeILPf61wvKRsmC72H4V%2FKVBM8bs%2BuhwO4Zy1%2BfwvdvJdE3J4rg47CIZkcpl9WB1TO7XYLwg1fpaJOrYPSvEoNr%2Bs%2Faj%2FqXaUdjzPoHVVsQCu&X-Amz-Signature=ae524c0dc587cf0f85009dd7c14a148e025c438f4d849fc8580b8007df51a69a&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
