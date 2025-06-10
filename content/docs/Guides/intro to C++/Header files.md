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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VODWXRUB%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T004224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHUczOd1DkF2w4x5rGVfig%2FzUw84C7O0RHBX9ONv45jQAiEAptx4MIEI%2BT2gqJcYSEIqi1uJldCFRoX0odxckMBo3nYqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCpuhdT2Lix8SCcJRircA1vV8kJfyY4%2FCwsIfy7YGGw9iQt6bDZ2OJJiFkSt4ho0CpDUkn2sYxh0BNXhrngPqWEV8VuIYJepGWHediyKWbEcYJV14NsgtYS1EqCld%2F%2BJP1OZs2xnXWuAatmU5kDlCdJ4dCjGLABU8Dzn%2FgOVlwI3%2BIXviCnW2%2BFj1s7yIga2jpblGU4gs1i9EqrrkTk2KhvixPNIDsSnD8HXaA8rWcYX%2FXVTIFJSAnciEe7ceGvfR1DK8i6%2B8Yz86KMGMScbbtVkXt4r1lbZCk0xmVQQRoLbQRNFrrlDm7gGBfZuNrEI%2BFATBOmS2p4%2BDKPD1bYW5ftfLY%2B10awVZmipluqiu54WiC2wOSJpUixzYafw%2BUN3x%2F5sqrto%2F8jC%2FINWio4ggLjIExjQUeKwNAyZBqd1s%2Ff4pTh7vntlny5n9675qrK3nE1ek%2FOtDQiHo7wNbvnOOooHCP8b3Re%2FFi2DLgOSDc6iA%2FbnKTdvd6phpgwZJ2xaJC%2BXIKnOiGUirvXGQFzAOXiM6P2gQ%2BAqqI1WnWIfZnDcJWcR%2FukmV5gH%2B3qrjq8aN5XDiSys14z54UEyEeKluQA%2B8jtpNVDHhiommd43FzcrDSvtlbH6xI10bvsD0ZoNJB4vnaD7YQ7a8aqEMNnwncIGOqUBEuDWKMtxa9jGYw56P5AboyvGuhFWfjV7WaWygvuZQhqATjMVCxKpJaL%2FSqrP7o3uHdv6fDL8QdG5b0PkHhmV7Mo6I05P3i5Za1itjim5eh3cyIcneF2srB0gRpQ3xQlu2kNY%2BHTO4Sp9bNfyYEOxbKCUkMnzeXmcQu0k%2BM6DksAej%2Bds%2FuXdedtov%2F2uFZH%2B2bcg1aqCz4XAEL0B9rLXP0ltiYmb&X-Amz-Signature=01b3011c17019127beb0ab211ab592c1ae4341e5aa1ac7a26d7eff6a89d3fd05&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
