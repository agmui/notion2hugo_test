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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X353QKOR%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T171152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEy4%2FNzsr01ROW9Y%2B2WAjXxaV03QL9DFRV2qbA3JyLJIAiAVqukfEQEYKAZXGQKOagYRvGp89L5BkNd5XWglcW9qyyqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJHQNiIL%2BzZ6aan72KtwDb9CtnXYcfqoVssTM7niJVW6RBcEwer39dXwIL4YmmVmQ6TBj2H6lk5Qc1SrRI1iRZ8kykoffHRprVA%2BqTGJyc1iM4pLoQdxEmlNYZqQknO8SANdsEhNohH4%2BKgKTBR1bwG%2Fa%2B6b4TFlqcTP9Z5sdtNcJ1BR1lnN2x42%2BZEE9k%2F5VLhCxiZugSNzbrKdS78%2F5PFbSHZZ5Q1qZxZRaHDucKXxB8ObfIoFTqeuynf8l1jFNRhNURZKxVSEUha4iFICXrEgqKI825LO3Q2bPoKSiyptTDxrSp8fxAOqdkfvLQ3IsWPHCQEsHEOtYVXMR2hXMRvwTRaeGOPAN4ZMzq8Qk4zI%2B0aaeOaxNqkrEQ7qV3llhmSwgchLF4eY914cS%2Bg7vYarVPlT7%2FA0qN4GlB9b1w%2FBlcXaJAeG5QZjxMJS1OD7c9L29Q3xKn6XZyzJkC6Zqqa3Wvsu0MyYP8FUUCE2hVD23HwrpEqJfg1zVcESr3ksjbE5DOnpyBIjqA3JIAnPR9BxbR%2BYgppifej8vvmG0a3DFxHPcTwKwByf94KA57BynG3ucW5eAeN9pZYxLLdQuTMYWnZG5ynJ9fcmLuvHZCGkk0KXSdo0nyiu7zCrWj%2FDawBPkamncDemo66swvOf5wwY6pgGUtFKnugRnX%2Buo5vCij%2FhTtWPUH2HJHs9YHTuig4tFMiQtBBx8qRI4fD8dPNbbFU7inSTawVCMfNtJQlJKizzx97pEKL05tFcq48vroRcPGbUyd4QslTPJB9tLbrSbxLulFhZ%2BBi0IDLRPYQmAC6KipkQ0xcPFl2KxcuyUW1h6Ni%2FQbLTK4D0H5jwoGGVIyhc62UopJLsOSSfE1CYX3qX4D7%2Fq8si6&X-Amz-Signature=82461927dd230cb45c1032a8343ebe5ecaea863cfeff0ad282840128ed9288e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
