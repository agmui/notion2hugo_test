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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQZGWWJ3%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T071153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6lOani8k7gWD1i9N6SlPiSOT9pG10TJn0j2vqO6LQxQIgJDLC%2Fq7Hxml7%2BhLnF3I%2BAA9uxWRSlZ39MYtwDSWGq2wqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIR2ve2FvC6yAguv2SrcA%2BbjJft4pBeioX1LNWw14wOZSRPk1gh%2FHkpC9uLp77JvSRQB1xwuC037xWqhhwBgpFOp%2B6Gdm5v8rOnz1Ov7yVlEz9zzMev43M0BUB2%2FoO%2BqRp7yN6sEZIJK8kCXmRblSQ%2F9ndwM5D4obv9EQbgGekyiIUpdmYprd54SQzuj7oC8uX65RcBYGv5jHh3ndD0E8mRgot2SwbQuGJQexjLCuLdworK%2F0toYTByYykSwOn9LmDFDSr9juoPwF9R3s0Ns7779YTYVtjexQleOniJ%2FtP1mFDH3MNnl2jU6hJ%2Bz7EI%2BK7wJLDsvYugk9qOiyZbwOrGm86Cyb1u%2BrrCURRfFRExEVxfl%2FdU%2FmqILO5wLWxh2wERJlrcsxInRt1UAPMcD9pgZdXapdlVMkY3vj22BIdz2aTpbmJrl%2BV1Mfga3sbhi%2FsG%2BHQVGOTHK8Jav4J%2FZvfMgu6DTb0rtBg6LdQG%2FwaTopjws1bnZFl8WgGEdgFTInx8d5C%2FKIWwDvSj7Cqs7uHD0s858Mcug0zDonGgHcGSSklHGSGHK%2F4Z60MGfgg8xhMj1tpeHEyTXWivi8TSu9iUadE3bW7bQ2pJ0UEzcLm%2FOkjfqPGPXATZ0UJgscNtdgQCf5YnQwjeZUll%2FMJq8iMMGOqUBWfs12%2BuiqxV1tlqsjrRofw8%2FXBuaVPzv7nSEE2hxYdwommEPFVCA6OkBEU81pmr%2FS7IeIM%2FPHhR2AYTBFQiYyt24WRZGCvq0eeEu83BPYMOT6o0BAIGc6ktmnmL72102vzxz87%2BuxPOSDdnhl2zM36%2FIrxBVmP70HCVcMWC%2BVm7w8wPpDtQkO5RSXDztq1GCQp3Y2oapKyHVzy%2FqcDLI2RfdhLW4&X-Amz-Signature=a3b13d18ad432b69e9d38ed22a5c061bb4fce718392b0ae77ab0bad09fc5bb08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
