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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IUPQCY2%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T171044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQCYC9oQAY2UxM2ZRwRkutCQgRSDpVLs4IoEYj1P1f2E7AIgCQEClH2wt9wvBKmAF3pPQwmyd3%2FsKgTCy68p4E0muAwq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDF%2BGMgEEYFpQ7oTDUyrcA%2FuF4drbB%2B8q6MvtBF6T42eBhiDVi43cDlc%2FRUujPnMgxTrs8YHqSFcwXTnAbRLZSghUh0UyxUb1968js6JDxEO1Wp4FuoU7FyPVBuTDZJPsCphpNBkl23Bt6rkaUurPy3NGwSomfx4h1zHyUXSEqDdN28N7oyBKdxIzUDw7wQIJ3cey8jZBAd%2Fzh%2FEYsrdXVbrAKb1x%2BSv3S3y7fcEe9yT5s0uGquAy%2FjAJZ9CxZm6NM3cBkcs3b4aLZ16gU4IC1FpOZObFi85bQ6aCaY4eCsnqTpyP64haij2gSU5uJ4SoEr%2F%2BDd%2FveQfLI8CUr2QbT%2BRFQ4l6aL9kRcglLz9EhVjmqPVzmt%2BZx00UWxlqjAKVuUaTcBx3Cds%2F1PdVcPYCcTBHR4cOUn5ZMaBORffADFEC9csnyzqIjK2r26ecfhleEXEch76yDpSWeoeS1IoYrwCtvFItj%2FgPa85vTvtaCdP9DwIrFSkdkmWUygAlvzbyek4hC63%2BL7ZZ9r2C6%2FUP4yIKu028WE8DunZ9aRSd3289eoY5jOwcaBHyKTmY4lTH3FCFSP2N0hB2EH4NnInCvRnFrp93AuNtk%2F%2By3F17UheoCJ8llZtWItoS%2Flg%2BuzJB1PUxH4lC%2BCC3%2BXFzMP2xicQGOqUBD0kt%2B3ozsTKPxRZhyTwwyzd4%2FHxc71cjTvNDxtoSzQHdWV7pwEYDEesyiNRLbffr80TpEfYUQWra%2FB44m3SUWrFvd%2BG6jeQ3EkovDFSm2GN5jFIoMSS35e1FpzMznzLcEJiq1AsHzRXVWGHnlucfXo%2FeUG4BJFpNSWC3IZSqyTrXkehBtdl55%2BfPioTuqHbzgMJo%2BcMN9r3lPxsoTUxsXa50neJG&X-Amz-Signature=fbd8b097701723e60b741b6bbd2cd6d7b5cd1449d7ab03a3c2f62ede4ba2e885&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
