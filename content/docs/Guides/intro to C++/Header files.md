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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULOTJCRP%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T121508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEEWDQn2yaAejwt%2FP4jsPn%2FOvN5lNYkt7FcJiizv0lIKAiEAxx2RvYLxLN9SAOTf%2FFQNPizqE%2BKhPIX2MrEgtEbLBukq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDFuiOr2fW5HSx9jFESrcAx%2BxbMvwb3Z9ZhQPR%2Bfpz%2BA9jF9by5zgdMWX2A2O9yuoheQ4lbAzU8NFYZ0hweKIlgVdyuljpm8qch6f0RUt3io36Bt2%2B0YV5FJhBQr6XM3p55nqzay23fceuTtxwevW9TV2Xv6q2V%2FbJLZ9ifIkmTe%2FWGQ134N7Qrfo19FTk7wSQdQIQcaD6saAcyQfR6gcdMhJFNlXP5uxwL9xX3iphR2n7mTVhOoL3SdVFntoOtM9o4oRnq3HrG24bQmLGQlDbIK2pPImtfh9BOTKuPiXNeXoxu7ND%2BrPwkCpp5%2B3EK3tTOd6TtVTXfuFB1WFq3zLkihSmeZTgsN5wu9%2BVdVFD%2FbaQipJeXBmVd1XQbAUDhEs0k%2BtdUmKUYyKbU8RLImrjM1wt8rubmMNlsprs1S8zuc4avIcapCpykofif%2FE28ZuuxWulaILQUMUANArh2s0S9jbwGrmoWdVC3EHChs7B3kTaXiBTcjgZd7gSwY%2B0ySCML7%2FcsF51u4FxBIlEr0zSty274jKFavfcdrhODczIBVXJv6EKKALFSAnlKqIltAMRXfftm%2BeTUpSz8Vr0Fmfd2pmO4lIhU1fNiDRcLMu9gxbWkAAGSVRWvBpuP43nlowLbEr6811xD1JdHacMOWJ1L8GOqUBJBqn6X7r9OfgNfs4OLGOQz8lJdetHPPiXJq2k3fmo%2Bdxy7hoiMpBqzkn8xYua%2Bpok87SehyNa5uGJFiC%2BLs9USIQgeQ%2Bp1JSH0J4SakiW%2B7UPZ5gafQVNN8OqP6DgmNRqtapkHJD1CIKdG4UIu2j%2BPDv9Djn3JqLfkUKUgkb1Uq%2FbAos6trpmikYt1QLDECAmQfMzz3IACWRgfstQWHaKAVHXXi2&X-Amz-Signature=47808ce115799404335bbf6c03e58b9bef80138f0f135ffd2dd274acdeaa5f1a&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
