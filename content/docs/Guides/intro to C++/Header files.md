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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFTYTORV%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T110116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIEFRAMwAM6iUDkGb27E4N9v0A967IjObq44l%2BFFUBObqAiAsw%2BfcW4tgbAxJRqDe6XjzAarSwqTGm%2F%2BrCIPy5RR5DyqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVQCFcr8DEs8AvHa8KtwDpi25uEDPuUkklj2OFQSwTbI3dyKxCni1owxDcptleFB6K7M2DZeetqxPWG%2Bb7h9UQBD679NrkxILfxJzxPb8HKRldd5WlBtSCdnkLXu7J2h8MbHebOPrb0cyttuynQEGyGm%2BtBnlMIyvm7uWilIU0lFwC9DVurCDcCbyes%2B7WQZ3TQ%2BUuZB3ii0wlM6H%2BZ4u26%2F7u2yViz%2FcpFCqWoy8O00wsJCs1f5TYmICY%2FoqdXXlD6To2bc1YT640YGstfcFCqudZELIRSfOHzi0VQ2WB1aRFt%2BtI%2BhRBfxvuGgJa%2B6ejat42eodlF1tIB8159LYTVGDQObdYebX1WJz32798vyfM%2B1S7wHBbPsheni2Lo4%2Fzood3ZRFFEnzzFB0ES4sxJzo2fQw%2Fcba8atYqvxkK3MLxOjiRV3UJ8Fs%2FpBJ5xNvz5S3ze0RmcCLocCADhzxitwRcLlOw5pyK%2BMKcHjgsnLpyr1pRuSM87SPha1lXULA3i4ItuJzhOd014IVdYgJXEFMX7feWa4gwJ2bTKhR3dC9D6zEkCdm3aEKec5Y%2Bvcv6F4HjkujvVq7CT5CqU9N4hEMySscvRvbDdKODQDdP9EhhVkPyn9clIZa6c%2FYrZGS2g%2FySyR%2FLFJXD4YwmpCcvQY6pgGfwV%2FfcfYMPbg9PKNHn4kic49t8G84XRp0YHHUubWoN1ZSREv7rqilTsOSRFBs%2FFv1piM%2FoqL%2BjOcgqZkuBdKuHQb0dJ2XPjve1w%2FooSJguQpQ7d5pLiSGfdMXkHK3P20OluFQNG%2FJG5ODr9DfqjDefZZmksspwoZnxxeABTYk%2B2RLvEpi9ZWwNunuOPN2nMDmbMmzUag3jjTeXprMHBL6R8MX4sVN&X-Amz-Signature=4c4a260808926f52d2ad9bcb2a1f2019cf4ac8ca75fc5bf791bf2baa43b309b9&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
