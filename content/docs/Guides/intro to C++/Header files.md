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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZR2HOIAY%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T161038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEnoBRehfbniqHOOvXI8iQJpVyFBqGh5V2forepVAaYDAiEA%2BGNnNKYsHDfLFeK8ir%2BiTXglTyahKiH2X2JoNIyeeu8qiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKahb%2BJ%2BMRY242HMjSrcA2N%2B2S9dz2xdjvq9yToMexZPzl33WqXyC8lL5P9N5QeJXtMn%2BekIdjrbep7M42Rb7WFcP3rSmNB8CooQ18HMq6oduumq1BCTS8UnaYuz1cKn1%2BaCAwvPnj%2BLla9XMpdeq4Vfo7Ne4rzk22AxKric4pkgBW7QUtp1OvDK%2F%2F2xOwBtFfPx0OTSLeg3%2FUs00IZQwtzFEMrQfsHGphMJhCUy%2FNLULN8kcv7Gc9sb%2B4UY1%2Brb8%2BxE1lk6C7Dy93biYh%2BnSOJK5m7vtftjj%2FwaYLjW%2BkhEm5AEZzXoNf5RXY10of5MHfNyOaezpvTscqMNudx6yb1yQaO7omfvpyxtXZaUrJZ8x1uF9GasAC0%2Bu%2FgK5729Bw%2BEvgdhhbZgQ5vgIrDfh%2BC8t6v3fCaUaYG43knU7rBw%2Ba8sO3zRkqJa5wtUbejChBAetnlBagCi8fGqdHM3Co1Aq1PlvqIql5O6mdyP3mtYUKcQyHIejnsCrXBJAymRNREBrU6MLqmoxjSvZnHLc450zlsvm25skHpPPJLP8X3IGG3CfAW8JFEB9Yd6r0yXVCIWrLZTG4v91LCu4PtsJRundygbTXS%2B14BrVDEE0JpmojI%2BBbPCBpmcWGuXldSVoxbh1YaYECumD78dMM7zysIGOqUBYMwcQUofQthLUIDSBkrivQpCQfDY9Lw3w4yqKpIxhyMrnSJeqoS9mQCT9TzPytVVpdk83hwnv5iVeQ7ZfWuKyqszwpIkz1HRSwy7fxcFvO485Cp9HefGWNtf5LP3dh8GwpS7yHYi0ZwzF48rU38h2a7zyTvY8GFC2LrQQGy1sORoaTdTq6X7y%2BEHr8QO5Skfa%2FIDb6YLh86nIeoag4jtvSXVfKeU&X-Amz-Signature=777d0fe73fb8fabda12cea5eb5b7ea79e95033fcd6882c7374696f3e94dfc223&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
