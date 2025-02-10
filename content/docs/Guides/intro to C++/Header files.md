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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XUZ626B%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T210713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BzaSbC7luyPYMiQqH6%2BOufDm216p%2BBs%2FBWcGxCCNr%2FgIgbTQS7pvBH6uZzlGPaK8HPoiiJQdsip2hFMI2Z4GVcysqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAGqtZ1zmtnlDoHtlSrcA3%2BBd9VOebKf%2BbHnPRVo8ZCNuzw13i5Y0z5k%2FLOwTgQrUNC3x7zzVLsEbNabxPo8vtnzGyRkMuzD0F2Kj95bQBAcbX5iSsRx7c8x1rlgL6snkI9TgyzJiYXHG%2FnnpfYMtr9nAAtRkwXvv5H1C3ajmj9kwUZLGGZ0Yv%2BQlk32FHuUsTgOLiINW70K4RsbnUAh4itqwia2srtirX16mXLn4rgwwIbCgRqpYFLN2e6JSE6%2FTbATAlgWxXTB3U5tX3SD1nTQSrOO740QACi2Jssetoo%2BydqHgpm1lJZGdEqn5vS9vfoNpIK3j1r3QiB%2FbisLbaoXit0T4AkezAYF86zPt2%2Fh9WhCbncjlT8%2BDGRGkCLcfLB2miOOjP7eEhGDf1ac1C54sc08w%2FLZ8kym5D6MlbPu47Osd2ce3z0t7C2xdTmzKd4Gh1zaJAy4kdQeu5CvTSIvsN2wSdMGQXWtkHo49%2BhH1HhCqZLSDalXGdl5YxDFGecIs2u0vgFl6hMuoRmofSHD%2BpkuKzZT1Sz%2BSrltupYgxHcvQCkMgJpRQXsKfnVsC%2BqAds%2BujdORhBUx2pPKDNcQlAreR2FxCRn3z%2BRbmlpgY%2BJD5%2FNb3FtZ0b0YBZ4DqbjxxfAD%2BDXt1zDzMOPNqb0GOqUBcqL5PKmvSOnJR3jnAMAaw8mZD4aovQtUa7fZcclX5AnAOBaw%2Fu5eYY1y7pABAZ3TuKIKDt3WAxo6R70QvBC3pb%2FEmdWhcYEp96Xm%2BEAIBpjHqayrdrAR8xt1yqK58w242sW6w8xNSyyuqvm9cGPgXgcAni9U4G%2BlJQrlG7KjYRyzo9N4UgzPEQ4NnrnHYPtBnheT8WO3SbGZczIny8RL%2B6FqO0Ax&X-Amz-Signature=f63da74cc5ebe22cb978f03d44c91f693ecb8708d327723fa849590c00a4dd3a&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
