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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ARFDEA4%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T132106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYc3YTAamXoH6oAiDUuBWmYHfr%2BdYSGr%2BWDxuok0fW5AIgYo3qEBVvg2G43PTn3KYxy5Z18Tv%2FRx2jM0c4BaIwaosqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPI9LbeLpiyYS1KxTSrcA89QXr60SluyuC88FSEpiJW3QfCmyIOmtyNwsSBXINCEyMMxcElp9xgArejVDlBmQdJOJOkZsijFRyO194Z83nv8S0EqXlwXKvcLlqBiZKyxnrnDaw3i%2Ffzq6XOmT5bHAaF9CQoXmer0k2O1GRBEITeq6bhZ74NS4eZnaYH7%2B%2F7ham2Cyd2Aqu7B0mBonD5kjNdwKv561pdHYl0BYmxpuhXSBAN657ixDsCOmmDpDb6ahoGXtzzt3nm7Gi6xTK9nquOQG%2FJdK6ZWaa1sTt61HkP0VBdk0qgy4SnGoZ0DHx3Dwt2l1klYHHO8hkOLjSJ4LPp2y3Kspwcs2AxdkrOEqCefkd9aefRBdrXuUn0ne9pXyKsYo7S8%2BuqztgBaFosx1r6NTZlt6FMny1R5Fyqm15q2%2Fy9lvKwbOA9g7gPM%2FvmdA66WnK4saHG9njXyXqsrP8CXNi4GQB1YD9sg%2FdMLaEcZl728SWetJvjSNNSdTjLK8Buu2KamKzP7fPVtgFmWAXyREJkc68CeJXlzjWQbT1SW3vN2JVio5gbY4eG4ApJ1RcD7nUR5bt3jC4ISJGPxKiyxIWW1gTpX0VeC4UYa3aH4peLubt%2BIqIBmqLIcAaK9BinonRPjZhTe4O9mMKrv98AGOqUBS4DORVdxHLACmKYeyYbUMbwCxsjuR3aFT%2FqPiMhnH9iT5OhN6YUuQ8R2D6XbrAAXU8u269DS4xwYenSCrYT4HV0EUc3v3Bfd1TIuJKDAhcOpixl7O19PrbCFEnFMaqJZNB0s8hmiDnfG9UJcxBgGQy4Gd%2FaOijAkrADLeBkSOwp5Mu9iENLQ7fk87Kov%2FTuw%2F%2BLE2Yvqt8gRtWAcMYVq2YoGiXL%2B&X-Amz-Signature=a502f25c59327ea3dfb704e028edf0f05df577fb2c893b8db0950656e86a6037&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
