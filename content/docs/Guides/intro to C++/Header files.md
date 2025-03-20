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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDQGMEQS%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T081102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQC8S%2BURIh8hjtCPygPVzEzRq7WklC4KBQDfB%2BuAfa6%2FwQIgXJ9e3bVo2Zgcqe1vTbknXOFNQ%2BvwlXnFNnHEPwBZrPgqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEKB50wAEWV1%2FmIIayrcA32LULq0ioGwj1fEovOBYNixo%2B1aQRUcKwyASLyP3hs0Lp64nFKb4X1wXbizzdIeNlIF00H5rLiRZgvKNSA2d%2F7gGPs3PRiw%2BEba2tLH%2Bvmq%2BCf2V550inExDDPGweetHDEr8RW%2FD2Z70wX0jai8OgcIL4zTlBq%2BFpkuzK8bb8uvlX9wV4Pg%2FnlKK3KyA%2FqwnP4Do5mC8ujGREXKSdSacjOupIWUjNZgB9cDM%2FTRl0igsBcVDpMb78twL0CvojniXFWo%2Fkcijy%2FdJpPHHFmI3vfa3yZ1DSvbye9O%2BYtA0CaVpNQrUnhUoShnT9RXlWE%2FCnLDpRXpLGkuuJQqW5RBz5nQok6m%2BKPw0l3DIDlExTOk73y%2BdXggkbPYm6%2FOXy9rxI06kCZWsFrkU1ya3%2BcGCN5faW5fBIYgoEgq4Ihaembl5zwh7kBHn2VDpf8nAuGcbX0zg8SvvLrR9UMLmsl%2F7V0YbVIW4yrPGukYwFXY6vjX%2FlIXCB72IxX4v8kvj3%2Bn0hhQ5BuxH2Ctz%2FXbzhKwlDt5pjM%2B%2Bsw2gGm1IrF4%2F%2FB6NjtIBluJu35n1qF%2Bd3a9Iy%2B4aby0%2FZjTp8poEdvbP0goP%2FDW21qiZ673NZ8eyEEVKdplckbAD%2BZ7dtBFMNCF774GOqUBLEOaBTn4965T0PjBS0%2FWyA6IowKSJG6BR666K2XMBAwEWVs%2BsstvCr14%2FXMb8QTAU3DmWfyp8uBmL%2Bqj7uOnZfB9G9rq26BPALGZndiBnqEp8%2Bv%2By%2BnP9IlmUtA7ArC7vQkAPuPRJZw0iFMbhZyDRHP%2BRv%2FY8RiVn4sBHQNRHk8WoRaIn%2FApkXXHf3pbOPEe8TZab%2FiZ2p6QKfa5ZrIUPDDQJppy&X-Amz-Signature=b83c1f77f1dd24716ed9ce95444722bd7851423bd6cdca04dc1620696075e490&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
