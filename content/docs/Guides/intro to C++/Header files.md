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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WYDZQHI%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T230750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDhQqR3iW%2FEk275k1Q%2BMYQQw2JPDb50iXG0AbFbo%2FirTgIhAIDsNBlneKo96xm61HxyOXRZd%2BD%2BuFeY4Gc65f8S106OKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFnezjJha4Gkn1URIq3APQYhHOZt7Y9o8VwL9no2Jom66pcV%2BpAeHi7pqr27zSy9e45lJJVYNv4%2BbwJCOcS6ocDlb%2BWz0n8ZIu4MZxptxnHi7MWWPCs1ow%2BzLnZRi0m0iKgSk8X1Af%2F5LEqZNzISG5oGmj%2Fw6nu3K5wP6AAKnRV%2FZTMyTgouSMNpIwQaWIJiC0p7y3qK4BxH3D7HSSOgASPh%2B9ph7wH7RPAjnpHtH%2FlYVdAR3aFkAPaShpoynK1CABSKRFoUzGEsficEvbEIvC6oow8FfF3iksbgKNyVSV8aH9azrA3TuG8WF%2BUC27EMkFvmfA3%2BYsrlsNCmU%2FWFApkyN%2BVdm5Bn7ua%2BlxvPcnRt1GUrnIqXbFP9PINEXr54RsJW7jC8IMwvd6L5GrQQrDkgmGLDXy3oFaUlOvxzu6nKfvu70jW5wxEThI9VIICj12%2Bt8GFfuFSPzG40iqrAfk3fMya%2Fxqz2kvoluVfwiUJzGmeYVMF%2BSjj257gpgZr3rQ2C6cKUh%2F1oFEgeXa2Cz0MHg09SH4jKSvC%2F9l%2FnTGqvOTqSrrm80PKfjFgVCe2Hx2XUT2OjH1SbnQaKWsA9kZRjnghXLXZ1Thpi0KJERUflSKGnrNzEAAzer3iQBqe2K5copJSM8lKLJkXDCt1YTBBjqkAc%2FnFiRcGpIDIKKt33fiLTok5KXqDRMzYB6a7YaMtfkKajz5XJ0FLkFRlJFhh%2BVGaF31bI%2Fid1EKptDVC7azfiSWA1Q4YP%2FolDrT7ig2aQ6pxT6dRgtk2Sa1laY05JIVIhBjfwFCHCVOB6dSaHrY4t%2BUXraC72cEbEbrU9zDLU1S8HYhQIMs4loBm784zkKeVscGdTJdwi1eoAMB5meWZLd8e0qD&X-Amz-Signature=7a0a38d4c4a92739253859a9b07a5082aa8c578a8ba12f7846a64f28a354b200&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
