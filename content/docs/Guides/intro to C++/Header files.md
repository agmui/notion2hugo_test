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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNYKDJMI%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T110531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG3GfsmOgwFEGc1N7j0HTytxG6lpyrtolLTC76K9WkMzAiBFBo5H%2F3JDqyS9poCSFSb9TWPv6eqV%2Bt1vHRId9OVLAyr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMTX8OlA3Auh78SB8vKtwDUMgbesxzjPU4a8iYrEsRM20ThUaDgAoEN%2BCZaN18Xcu2aUTcPa3PdAvDqj5T8F%2B4173PESkRZyufmBR3Riqi8hZDGgybZvRX42NQXmMqq8wTXUf6pwqG%2BqzbAhTKSLcQrVmiYX0VE5tshwmgMjFm2iU1b2X9wU5WzeFu%2F5zZbLviHQpSFlOOS%2FaRZDDeUYz%2FLglVxvx%2FBTWJOgf%2BEOlhVvRAfWKXsk%2FexJZl%2FwuMhY1aOSUJ4BihGypIKg8GgFa9YZisdFNzhCeTYxykDTsIq0punQNb4mDVRFDiwGCgJju00CwLijWI0vvBlBqoLLXzw4moakbV8kizCmA7TMqgds%2BTrvNW7yN22wrm4rXfth3aW2JADzMDft6yMfalv%2F1ZnBCCPh68FUMQBWoug7r5m%2B%2FTRJJRUf%2Fd4s4MfgJJS4AtM9EKfo4fnQCxNrvk2Re00rvPsZXYE9BH63oK8jMZtT2VBk9NhnqQUwWJao5ax3w1LV1pqtq5RgprD0FKQm3Sbk8rW0hOqxU%2BnDRuWSWMeeSxGLsf6QqS60YS2QDT%2FOoRFHTPyhHW0ZsDzvIBlxPP1gm44JACpv2b%2BiViVLbp96Zz0c8H%2BtP3JuTTFUKgXyoz2wZn2KtWvqUS6gMwoPqPwgY6pgGROR%2BYSH7hZkvpC7Z2Qqf4F6I8M9s1W1yoxGcRmrMCmw0jsEfjVBDTKmCk77xNF8lFnwBk7XzBmnCo6ATMp3L6edKMAsVtwMTS%2Fx%2FVFRDwTR%2BAEqBczdDQLyGK4xZJIWINtbNSsHXij2poSorn%2BbTMm9uOWBCl2ncYey8ozCsQFQelTsy2UFo4Cj0f5ncQAPQVNu9LG7%2BgvoXQ%2By8cl7eRUgW3FcUQ&X-Amz-Signature=74faf8b8aec93f0893eb286e16b5b688e079d251a2fb3735fd7876db8a2a49a2&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
