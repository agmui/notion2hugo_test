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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W73RTUI4%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T030759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDMBBFLVcRdYTZjJ1TCQouaeLyZ19QlRnqhrjHOPNQbdgIgPs0IeA58mYNi1Ax0qeecGTB08FD0KyAF6yi9cA61l1oqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHktrxTdUuN1DWCvUSrcA0jihNJirSCXrMmtj1PQBdu9z2jjiMCMGh8ZixKoBRTPot225yfISBifpNAh0y8RQNHW2mz%2BjjHXLxkI%2FSUZ%2B2B9VQc2FdN2lB2PzMUv0jP3ym1gqJUmaYEslM%2FhbEEoWPu8rBBicu0vHJzlyfByqmYDI%2FfTz9vrfq793giHzG8Dj17VK%2BgFKJOwXw9SvE3xX6oKGLuPCFZJxwl3SvzIHmJPrEKqZgoE7QH8X7KSRsFAsglefYmgv0KHiC3LOuORSnYE9%2FGadJJJXjk9Y7Gw%2FX0FM44P7coe785iqCUNOQnFkJq9uMecJ7CGx9cIQYs%2Bet4Fst2jpkoH2UWGf2qFBMMqI5XIr1vXvKKvob8gWYqOFajkaBHaVSwjuPAUFXECxhhkCUshPAZxFKxj%2Bgd1aioK%2BscubrsuzKFObstbNCCBvrgbli4Ni6dlE79AJZh81KHmMNdyNI3RDPUBMbdCcUBDSA7cqqvIZIzzqht1yzhwS8%2B%2F2jUGY8x7smta12wsRujGmwcaz74%2FvigCqpMjs8ZKo4ziRofuTtbQs6CjY%2B9FFGg4M2lMvJSIhBRmmGcYN2Gf09wJdg33g9rR8CKhcOGAcLhetpP8%2Be%2Bhv5apUSIJvBPEx8FU%2BS5QkwrUMPn5uL4GOqUBg1nn4G8%2B%2F5T6jRSfLofuwOuaGUY%2FVSGf62rOFM%2FJYHJCoPzNfjleazf5yiPTkwSn8jIopvFcY5pQk%2BeMn13pKhkHarHEhRucnUPqTptMe8%2F8nzGPpZtoGYNkQx1%2FP7AVu1AfUR%2FBqV6kI29YshsUOclB%2BR6mRwvtwuOj5HyS03%2FnwJEtsqtOQHwLEg8qmTxPcdTbr1WqXp4UqfsHzh4HfxVgdq46&X-Amz-Signature=be1fb353d891aa52da8d9dd88c26a1533cf99f409829f8edc1c83e1f757815de&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
