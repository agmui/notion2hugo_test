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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRFL7GT7%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T160903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfNmoEoCEFFtAak3jmO95t7Jl3AvOk8Pku92UmOIGkZwIhANoBz1wSsy1aIuc3jwAsWRDnqUF2OLwjjRpoZwsdhNGNKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyqWgcxvckLVHe3pt8q3AMm8%2BE0SDMNPIBgCnewA%2F4r64QGWU2sMVyOehw3u3tPaOxnA4E2pLQTELsYqY8FZl7dkIc0mu4K1b7eYOyHebNBNVLA6Vpz0pwsaE35tpmzk2iz%2BWoNAlEYCO9mzPoGVGiD8BCVf1S7x9y2L7BXyCgaXo7ZHgIEsbTZq1mZbVL5Y2mD1T1LIl0zgzKFtglAPJR7I1tjY7vH5jdOEkmoGvpWWcF6KlPpeoUB9JtP%2BceE2vbQuo9UuOYgn0YwKAVvOz3KIELKJFpa5LnSTWUYiyzDD%2F8WUHoFCg3jg9jCPpbSRJmLrrJ3c2kPaT2xGm%2FUr88Lf2cZhTCttAIECySArjobxUDncfyeIUPW3wKFkysQ%2Ft7xD1SqIz2s0a84CcVSeT9o1r34cwHs%2FAI5gOO7Ulj32GiQgWGP2Ref%2FUZ6dSWtcqZimxsTjz3wRUieAjiwoTPbpsnz5vBO64QI4zfyiTIeqT0l%2BpQXwNbpaAO1YSroRFor3H91o%2B0nOm%2BXl%2FBJGfcFXPq77r0LFdFGyKQWVc5jMvQLMM0ao37%2BFgL8Mk3LqRXN8fnGFsi5AnYQ915KutmV9lAjg7LsDxpSQ2NOqGt7zkxM1M7jKaDcqkaM9s8MRb33bHrELNtqfU2CoTCIi4DDBjqkAQQs7T3Vt8QMEKt0qsvdXAqltGlm3PtUVzqfoOMk1dgl%2BFCaKMN5gz4JfZbigQR1Gf6l1oYn5ldBbOsWmDgKkpBf%2FLYQtKhNTnMaH3YtLwpk4%2F%2BCwTHDUtqIXcl16V8%2FuC7qSMldegj5QkFJHOS1aFsP2mkSX7SBq2FabTzC8SfRe3QwMGvhdpcwJMbNGDudKgyNOe4p%2BejAtrJVE9hO2oB%2BdETg&X-Amz-Signature=0772468837123718d1ce4aa9ebbd703a638c5a91c475ac6a208264aaf6555333&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
