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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJMZQFTU%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T181111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCi572APd9U97PtR3hnYwCsCQW6HPFKYGEqO%2BygbKXhWQIgaD0pOPwrFMDL04farN7xro77ZaR4ciRLSvhRPXtOqXMqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPBo8qUADxkQk0nI4yrcA8hiAgsFzvxH7k%2BbqSgf9PlgroXkxrZaSKATYllqgjhr0M7OpTzIm2aNVDYk4DtR78RHw9vXHaZfbEi20wOz1GNqNdWJiX4wvZIOGhxmgO%2F4UknUX5O3cmkRvcXBHw0wllFIrXyVYfonE1s%2FQEHivlChVHFe53FJuBEZVE%2FiCHxVZs7ojsk951F%2BcXHkFb5crTswMuyUQPpU2DIavd8I5MGKPIaBHLDic7Y%2B%2FFXO0OCglUWAPVQChonVT7xUyjFS2qdnCIGwkZuSureXlE9IPmKxkgQB6g3fS6vxs6bNB44gJW1o%2BL1GnwffRIgR%2BeEpTJyC7%2BDsj%2FI9am06bFa%2B%2Be%2BaOiBrht%2BmlN1wl2cvmchHAqzrsqB6NTWmhqef6YDXrjf8%2FthIu6jma0XIW8B9QyKfhx0%2BnfuDhy9sJXN0ABFqJeZ12MdubkQQHrARco7JEToEsKoFgtSwObQDH0HGN%2BS1xvPN7%2Fmz1HpEbsp%2FO%2Bu3PAwQWt9NyHHzsHrawa6or9fHZvp16E2SxSJ4UFxQbahHesg2fL6mWmdCNvRmOp0Kkgb28Mv5D%2Bdf1236b%2F7uclxLDm9se1ySgNkbyqeLvMbQvjUTNEjvdVMB2Tbx9h05m3xn4NsZZuBNC6yRMNX9hb8GOqUBgrMwWQ5gC6%2FUqdRcFi11qPU1W2sAEFaSm9%2F8fMIMYiA62E%2BRCODev2RManQT%2Fi54v7Y02zFLi4DVLBz136xcFIokl98jncMNtrXh0LY81BicFS3bXHKq60HeINwbm%2FTvrX6NJZk%2BKP0Z4U9N4xHcksKhrBB4ILc0od5t%2BvB06T9uKSQGz1YLHSm8y6WCUK1Kdlj1W8%2BCFZUUQUMN4mpOluAKZOqy&X-Amz-Signature=1b9ff78fc93add03b4f66a5a42d35375c4f484fe19114fd904d1341205d077dc&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
