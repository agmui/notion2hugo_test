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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFFWBDFR%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T110147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIH8djGnzGcvaWck8sPKGvvFkJdNM4MN0XLY67T%2F0fWbWAiA%2BgcLimLrBmxwwxr7cnsqXRckb6rQ5neezjMIab6Qoxir%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIM4DLhrkiCLuTzfN11KtwDNgaZ12%2Bs2PdMHE5mtrjEBoK3%2Fwu4yunVykM1VtCBhRUTEb2LZd72hoTyyflrCaSHhlX8yLmeLdmyeWQMVyuDUInwYzkSwfgQ07jzLQVJx7m%2FopkPbD%2FrnnR5EYWd5mYZiYrzG%2B0cTQtuLkgzUkR41XqJQocG9Bw2i2rt1Qdw0gfmm%2BCBVm4YThCxedplkRgpeV2T9wg3LNs6P9NZ9Ifh1uSe3ytXsUJ%2B1O0pJFkb8qNx5eVIcrXfFEGMJbFb8J%2FRjACy74uQ4d%2BPcMdgyPzlBhC19yghFWdcXLdd2FIYf8ezDFKZRJZcXlVAZuTvBhmze3LqlENzSywkitCgAVQDKINzHYHtH%2F2e1Gwv7sCx4BSrHJDmE96G%2Fb6x1j%2Bj2%2FHMyVfZJgJeelQqRdCVidHXYw4nD78aPlS%2BtHNrTjQL9gLDJ10FgTJryrJpUhJM7ncudGFvcNFUQCfbLgtFmom8uehkEwcwrG0mCCIVWxDJ1PQ2kp9LORl1XkQIEGnBUqDAuJFXhKDXzp0JwjuFJaZckdu5%2B5rwUc7Vz3NmqUeK8pWzpIYDD2mHPO4UgdQ%2Bhs7yuvWGed5%2B4%2BZAScCr8OgPSDImpw61btjPiNb8b30sQbuvmBmFvxzctyxDI%2Bgw6MyHvQY6pgEaVaEJPy1N%2Bco86MFLSmReL9sFhS%2FtfjCE5taGbF%2Biola6uwxIAxNjPl%2F1ypUE6E2CZW7%2BYV0Cg%2FhaMxMfvgKt0PEXMlvy78hwjZ1rlySIznPq8Q5lJqp%2ByprQMnogKWlHfKbmAx3z5is%2BOGIc%2FAUceAMZPpTx6hJl0J%2FDoMEKp9ejq6jbqgpYUfi8wpl8dq8Ik6KVmFSC%2FhW7ln9EBExV332ynYcw&X-Amz-Signature=122c351f62abec89725c91691398aabff8bbf937865218f2196e2c3067967f90&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
