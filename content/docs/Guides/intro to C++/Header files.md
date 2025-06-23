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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674IWOCFK%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T201030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIEowHaWU3eQVjlx6KefgayOoM58iUJ0Ddkq1rLQAnAmCAiEA7mFk8MZSyJVQxJokwHSiHSv%2FsQKBQ3ZG4qtCE8XJ5Ioq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDGkOI9QHYe1w4cC5gircAzRBezH2Vf4WNP1q5dhekrUcCvuBHm%2FRnQX47jotQuHmh9QkJpMeMWXaGJ7MVHbbsXQN57GY4p0JCpoyAY%2Fnm7hdI1p9DVGmRprKMQoNu%2BaVRALEUuzZMj3W5Zq%2FFpKMM7CVoU3T2f0hHiu84PLzs1b821Hq4KlUUXq6ggW04Hu5PA0qFruEvu4J3vp97S9TZnGRae50aZaNbIX2uhs1wRUHxW0ehxCPvr9Bu4RCxz3JhPDuxMvCTOpDMjiQqdDicjcFeMrOVXekR%2Fymwd4RqwgmAoC9qisSCNUBbIl2e3OCdPKh2eEE%2BoGLKZXRLZrQPA74h7752Gz%2BYcIFfuftpYim%2BbOsempSGgqIGQN%2FhldRuys4xl8x2FjEksLlZ4zdstUKEV2F3O4jXzDppR3GUwW6BFRLtceOTO7Kt4Gm%2F8WwPqeR8Sr9Q50kpC20K3xTHwJw5iycy5bRFC71ECC3nCzQgNW5wKshJHzvk7ImcuOQSU8Je2NDiYNuh8LbqBvFtHYHZISOTcofx8pDE5xSpxc8%2B06%2BCjx2ww3vaMgZJIhlwvDem9ymCGqkhWP%2FK8Nwad4sVI34hQwdM9h2BkwK9QWOs%2FeZzFnZBsgU87JwdC76zMIvEBNLM1Ja%2FI49MNTG5sIGOqUBqR%2BWC0asy2lHqKonOL2kMiyDjce8VqP15YhSKqqPlCNbifJoAl2qc9iOCf%2Fxw54BZiYHiszGybWKTSFCsGotqpLDPtZGrbCD3ISpNbIel8vwZue884K%2F9yQoajEeIbmlUODGzlgCM5lGgVDXOwRNJlDKMu5Ti1G9gF9Mb5636mKxG75zkDaYuCSzKvKYSWXk8p6QTLMNwp1Q1sq9Lgb%2FJPpTmlTm&X-Amz-Signature=a181d99a40b7a376006a4952c3419b632a59da5e7d033850fd33ac4d319d5489&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
