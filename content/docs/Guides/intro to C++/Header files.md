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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WN53H6SN%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T050950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZFFB1dfuB8B%2FVrgEIdJtYa1PNDqGCr9eBdQxAnl%2FO2gIhANdjtm1c%2Fly8BkpM8jwaZ9i3nhqMyiKTaBdAd94gyAbrKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx03JkoIfyh9qYDyw8q3ANU53mMSpTRkVOn0IlTOg2qo7tm7pxaHfS2f1M8YTaTz0H%2FgNhKxikRooTr53bVR58LVapfk7LSYyfWq0k5ZFpaF9ozaecEDNvAfHlIkhkVeqzeM9nkuF8PHbuPL0QGNjGv3xc%2BbrN4T2QKS77q%2B2wlkJEAKqOH1x3GrsAiXoghgRZYHmlDmdJ5xfnM%2BdobC4ls6kXlK4syDuLTWF67NBWY0rAfy1%2BhBCFbgLRkRYGRPfZVWuOPr9%2B%2BuXB4BsPlgWlL0S8GYYcEQ3MZRE1vlL0l%2F23NCCOnCs%2BazAUpkpIXPj20yORSlDlOzMlxCUfV4sSXcHRXwaw%2FVl715sKgBKmjD0eABowyT2uWhcA9eectRtoVpaf0xpMT%2FHCxvSCeTO%2Byyz7StgRQbPiWshnKJeHCAFrl5iIhn17sbo22YnR2ozSE0ET6wQhEqkv6v%2FLyNiXrsJLO29SOk4lgmmqODCB1G6xl6di6%2FDsaMArCFrgCZbfTa40g%2BeSt46vRQasPtwlHd4kccwfU3hvDq4yBTZpA%2Fqk%2FGYcBRiNO3Fs9Y8BvfgqXL6nBLrRBJhp%2Fih0pPUAx65hDNjVUz0ePVVLr3qGf1hzrEG1myISF90fk5xWzj7nczT3VkGZ5%2F9B6NDDYh93CBjqkAVpOz5ppD0GK1mu5hlw8fIXOatpsPPZlTkdCiSlszsU5gBqDTAxvTxSq5YgNQoiwuOfnUA7T0zt9Oox9gQYrJzpf7Nitoru8R3neRPBI%2FKfZQNNTMuEyRg9iA25%2FuVTjjGGKIWOjey3%2Fdni5QXRt5LdV%2FlvCG%2F7SfPamR4VwXzSumk5zcbbfAJCzVgfBLi07%2BzyD9T0qyR9mHuQeJfLWrFN1N6wh&X-Amz-Signature=19dd8fb3774a4e224ac19ece86336cb868e03909a42d9ffd591639ec73d719e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
