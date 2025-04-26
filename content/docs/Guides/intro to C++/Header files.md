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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SDIIABQ%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T021811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD94BaneKv9AiF7WjdkUoaoLv6jvDkF4akUlJ4HAwv2rgIgBcCIl3S5gUZRq2%2BTI6AJ9h7VJkAt%2FwckimhKf3bC8WUq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDJOvx8r5OjzXC3qoMircA%2BdiIYke7D8oZS2O0E82W9vIv8xsL1Dg1w2TqkFSLzj%2Fdo%2F81xenBH8E7FHeXN0lgmXU0xhCx1vBcQiFAOXpTZ1I9gif2JwYWCUu5%2FV6%2FaauDZkFoUOJ%2B%2FIGyha2qhArOqdWJexXauFFVakkSPJVaaZJMhy83ZQVGuNLqDPBfr3N%2BaJNH7VcGBH7LbIIm5wJpKLiGxGInEPHfRpP8jGrWKonEncer097I73JAOthkRzVFgGy0nis3Jwj%2B0DYYOpLpmPFc6XabspmBB%2Bwk2bLXRQ4ISiV3g%2ByZrwx531UQbmV46wQ8%2BeksD7YZQEjlbDFGM7XLrMu65L60PwU1yNIFGMsUkuR8crMVHKTHtcpE%2BjKDgjyyoD3AGMtfQgjn%2Fnqp3cV2jJlDPXWy%2B7MlYchQMrTQ0VVAU62ANyeJcHccf8UyC4wiEUaAPlEAP9mWVqGVrPublLi4y5rDBvweyFGARQSQWYXYpnc7E65ZtStlaSpeLN860hmk8COMzkQcDhp6Sm9onvLxBi%2BnJBv%2Fgc%2F8T%2BhwpYf8SsLOClkpKMjWYKovnGzjT4eE5AJwGQy3c23PkgZlUVTkKV0UHx%2FuoCR2Zv0GCI5so9iV722L62LBqgjc9GIe%2Bl7umeCz370MPDzsMAGOqUBZUC5E7l2hjRsmDSCKOROhBrDyfXd95hCqI60ckmRt1WBmFDH6YrsjBA3ndUosKbhW8Qp1obQUkamkmi6tLfckLJ%2FtJLgATibhgeZalpFTLvj6dUPTI87zOnlvPKu5FoE%2Fy4iE3qk%2FwZeFfXA42ItApm%2FNO7zzL5qNmedPtwVByimMVOynIDzypniYp2f9SiMzJOMgQfVe2P8uiphq460ZKvR2muf&X-Amz-Signature=92aba7b6bc72043ef0670d55055bc2e35f406d4b14eb19c4f3f3f09f4dec17b3&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
