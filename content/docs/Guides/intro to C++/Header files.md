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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OQAYCPQ%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T050811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHEx7GIkS8Av2DjvH4jIYpnb6onvZm0wt1OgM63UX93RAiEAzrhE7m1XNoMHCDgeJElIiJBy%2BSx4nzdRXGI5rbTVUkAqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIMm%2BIH%2BlKTnnj3RGCrcA3X5yYigrE0R8llqxpQ66e1btRF6rBnM1Id0wllYwlJWrAhy1PutchKsp%2B5H2s94k6mHHRr9yXrWWxC0VK87TTJ0fJoz6ZWiV28Q2Qqo7Ip9AfNjDAxRjHWamG0%2B%2FPHWTotReJbV3CdOibm7YvM0We59zw%2FNPU4xLGun2eoYzBCCQ9oSINVJbyZQjtmopAbxR7K0gDn%2BgMWk%2BMTK3JDvBMehTj9DL%2BChMmioCw15bOh5W5VaHBjE8Mr%2Bqs%2F08RbUALcwYc1uBFYo%2B6x3BSXyak397psk5dTs66LiQwjW6eIXyt1jfqWHS5o5U8WbpeGrrWubVYFI3H0abQsVdUrRxOfXat83JYRjm8i4ZG2dYwbKH%2BsU6kSN0zCMwYuH0NnNCfwTpfgWvG4EEZCKVg2rfyCw49DxYeMspWmu2qIrkOa4YOBWlVIT4mveuf2vfpjiO2vXCbucyiuNuuP1DZ%2FjehIYu7stq62uj88KFz25BhCPGD1QoE4T8VSow9%2FsptT%2FhukM5S%2BK2Akc8Z2LbHNMiAO5Si8SSF2oNXgpb8%2FJJfQIersAvqo3IslL904NlddPZoKzIhHJ5fqPvsyvzbzqindDjTbS2jGN1CiiTGZJr1sNPCExI0Ppg0qEOV1RMIXf2r0GOqUBUZi2Tl5rA0REx5ykwVZdOGz24CFAiLz%2BgpycJrs%2FQI3p218JGSUjGDGr3SmnXaENFGqNv1JkhT8lB16bHHOVZj107HL6nYwrlABngCufpBuW9jlSrWkpef8byNdUdT%2Bi18TISLwz7PjW7NeP2Fot2pFpTayprH95M6vpOoKCsRDMM%2BPpYo1eJieSnD09uDImPC4O2obF%2BvQV8im8okmaXTAXSU2Q&X-Amz-Signature=6760a6e2edc53fb40060120df316ec11b8377b6d8cef6ce5fac8d300d9bebd2a&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
