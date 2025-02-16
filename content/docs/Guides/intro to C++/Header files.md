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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZVY3ZNK%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T170157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCeaaemFzLzgzdBtYCgLpEEBQsVhUf2v%2BoeDAhta3AaRwIgUwih2izMASSAK%2FdCCdaMzIhYsMD5UcDjaGpqK7Fv8XYq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDJz7r3uif1zIOC9YQSrcA6DpkCOcT6XoySy%2Bcb0%2F4uBvoxZwl%2FqlO1Vm%2Bw%2BGHtI2dIe9hyDliBJzkISEsA1%2BSuJnF22f%2BgmIXdXNuaghkxwUI%2FRT0JjgYF1YRkvhOz795r2Bg1qXT6dfC%2FP%2BZXFw0ADFqz1wBEoCA6pDVjAmGSw0b3xmCNmmqOwbu6jlWqBbTxbDMFzl1cuUFxh68U%2Bs9vzxoeda0f8EEO0%2FazXf9CDoM13zIXa2Z%2FDstpKuokmuRnq%2FRG8dIDxx53dQy4kyHP6Q6ePgA5Q%2BFVZVydyko8LUczSntXpbYAdjgyHDldYktA%2Fr6GwC%2BQkegLmWDU6Eoj2zx5aTNPWBgmmdIJBHEyu9azxpAjoxYKp1UDg7ecN7BngKL2H%2Fqyy5Wn%2FQL1W22V4HI915J0j0R8ww4nkzwsE4CRtVwuYCbaxmXEcL0N%2BE8T5aO7FMAwBmp2AJlMmGdqtaDgJMZr483g40ugAyAXvZrWYRnKGeQNWbTTbFU7hS6Gj3muFYW%2BiOnONdkfTvqX%2B8helTOW1buM11nT3i504P5dxgLvzvtx6S5rV53iudNafvq1Q79Ojw%2FD9xdpBLaIBXbo%2BcUqZnNiLwRlq6%2FFbvf4fMfCpLBtzgUJFyAS6aTY4W%2FXNaVybOQww6MJ%2Bix70GOqUBz98tyvlFWRS4kbUxujUKFjfaH3rO7ttn9wEXYDVQmmHjP%2BR03cqJmfiPCev79PMK%2F36aCQT4Z%2Fa7tN2ms9Zvy0b4%2FH6Tsns2aAmy729vUEDLLXM%2BmFuMjIQEaTwJROyls5dmI2K7SR2vnUCMpXr83kKzOimIbbr5FwOvZexLxNLVf12z1POZx%2FWyz%2BzgCZpNctUBbrxz%2F4CFR%2BrN2Jd9SzQByNAx&X-Amz-Signature=98fcbaa25389186bc5602bd10a4f64e5aa317045590df8442da0fc67b8f60c30&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
