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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6GVQOA6%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T031701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAsPZKwR1m8O4r%2FVZP%2BxEOzdppuXIzt8tQFDpCKxajTTAiAJUn0GvngVHH%2BkGLQXTHzpAH4GVW7pOueNTNcmdYGS8yr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMEuSBUjjQbjWiSUdlKtwDzADMNiAntJmJcshni%2F1sn7WPYlCZmeGsowJtBsUjwGLFeiZu%2FsLM1PlUrhsEmke80RkG8E5GL4X%2BAYd52sHCRlVaNn3asRJHkzPuf3y3qeq2ScMf6cUWB%2FxAhAZJFTk3%2F%2FT41Gkh3HdZ8aTJxxhsBQveFrdN0LbkaGXrFvtPBt3yQ8hhgU4TGzhEHRHscz%2FYhqXI%2BkfsTFFmMhXiOquRTPjIJYJkNmwXYuQRfv2ocCyS8SNIlG2DyWlaIOGHaFi0H7LZAl%2BQfTyY4rLbHJQ87hyTXJWl%2BYj2epZTE7otzk%2F9G6kL1JcvxjTeGcBu3Go7R2QhDErCAQrCBVssJiitTs%2FahSDZESb8PcBjcVCU4A%2FTe1k%2BfFOKQqC8ibLDnR%2BAmbMx661uziTgCaEwmvO0MrCsOkSgSeBSm5V53fy641DBjX6oDNUbVvxnwoN7FLBp0b7zcUlNdW8de%2F2eCSEQCSoEEmNmHuNHfA8cw4QdrBDQlqoyNwr4rMHKTSDCvjcpdsU%2F2EoJ%2Fl8gM6UU2E4fYE9%2BMmk78TdAEYNu9YC3d%2Btg3l%2FzETAdXOWU4kp2zLylHXdGTPjQ99UjJjijXqgEoiq%2FaIv3ab1IOdTAwT6wMVnfIrPl1EOTdlSKc04wqvDuvQY6pgF%2FzX1%2B8eZu3BZTjgT6ZWtZwidRqQ9dQrvjz6BzV%2BVPuodneF%2F8pP9Vz17YEDyMxPdWcZog1FxSO8PnHAAyeIYW79G0bDaRrdCxpMPAJ6P%2Bgaw2q%2FJB%2B%2FKWl43GnbbYfMIsfmfP8bCRXREecVG43JI8xAyaO5Yuxz7FivsRhWWCtUTHBxnxG6Ejrhdd8rYMQEOX9V2%2F9ZI7gLSSMmpJSTvLEqu4SoZ3&X-Amz-Signature=10b35d6f3d00daa7d42040448aa00e4aebcfa2aafa0af10b9306ef073d67698f&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
