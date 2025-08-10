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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637S3PH4F%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T200940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1zVqh7RGTLau8JQUm09hNpJScWVfg%2FVLiTve1em88KAIgN9cX13c2AI6bvn5%2BbZySyY0B6%2FRh8u60I78uGevqvkwqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMCwiI224di3TnEwzCrcA%2BbVlQO1U0F2UD535rUQiIVF1zCqlJgd4OKeLPyegq0gnuGCRQcYj9wrdvjzmvyDF6%2FkLRU4dhR3rH2fMAPR40oyrgLaEz3UF%2F7kDf7weyEOMhhVaofh7YfemnEIC9lIBdc5akmdEYmlIbhpCCbN02G%2BsUV%2B2VH8x4OClP6qRcfGUstAzlaFk9Vp7M1M%2FDziABRov8M%2FIh8SbCImHDEc3OMmL4dEAd9FlnE93fleNKbw8QZxvQP6Xdw4L0vtb%2F4fonQQzUiJZ9Fe1ySoMZLxwdFpqXN%2FsULP7DERqiVrKappAAG5d4lMnJ1JYzQyLX%2FTFuCyvv3EXlSNToZwrWNJvAjReZjk%2B6c165SD4t%2FNuQiES%2F%2BwIcAHnBjlsaX552wesyuEN31onVqHO1vReWnQ%2BvfUSJ2cJMdXXyPCUaK%2FinzLwCVzZvGFRlZo5Qdq%2FWLMTNNx7aklRJhevJZhgL3X9t3uiCGmTCmNlNXg9VUnYjp01mniZoA7ZvP7XxbqdIN%2Fk51V0y3hiaIrMsHx45TskKTtiKEOlNm1KH%2BbEryP2TCFBHtQncfviPAoHNzx9VgJJGWmul2J0Y1Do6ghzctzblfpdMFfgIlyU6XVKFLQn5UGIBGuz%2FvGIRrEnGeJMNC648QGOqUBMVtCICIhT82ohaLCNPR85uv48xCYZzQZPxmHixxGsnG0fq%2BpF7l%2BER0ujWQX3B79WgWBPORnuDwzIcV%2FIHdsjU9ABJL2vcWQ9tjqU%2FG8ruVO%2FFulYOnwaojbJvyTD8CA3e2PeoVPwSoIq6lwH9fUxsCXU%2B86ylHj5bFy%2BftPBF2b82fTPl479ROhR7ZloEozNLKxKTiMFL7%2FsPaLhPz0pUWAHWub&X-Amz-Signature=dcaa68dd471aef8c02dc93fb1f4c58939913915e1cb93b8c7140b90dab1ee547&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
