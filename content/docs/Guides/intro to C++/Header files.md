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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDVFGEZZ%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T210658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxcqDomExFfBUIUxNvDuXLSs79CAMjV1AScxfmdcPL0gIhALxZBGi%2Bj8hJ35SkbnHKBSs31MMFrDjmpxVCb9v5dYmZKv8DCH4QABoMNjM3NDIzMTgzODA1Igz1FFT86hWxrnKu%2FfUq3AM0eQ%2Fvsb3TfqXs2E2xg7%2BV%2FkTASTFzeq2aN3aXjOh8P3aQaSUGFocybqjzVMRyDVRpoXGMzsafy9ayHHgCfEPtx2K4eUtfnE3cVx08HlwXc8mvGKa%2F4tJOOYAPXTjG1LCsw7Qs3%2F%2Fzbv5g2K7D4Psi1ymgH33qDKtCICfEUOqTOQXRpgBcxJsK9kOPt1CjYARsb4ag%2BW9pxFz2ARyZ86bxB1wOaJxXcQdnjY1kPDwY%2FN9%2BWwYpBUwa%2Bs6xRP55FwCAR5%2BvAFN1DI5p2XC%2BE%2B%2BhJHFEJXIyskZr6qNhWD8LadSlx7f9AOe8FVCZLbPCLD5Voyo8wYm9uWLSDz4DSuqr3rmUhiVNYYYthwE2L0fE1qKfuyM6WdHi97lBKvWGNo1Dt6hQqpbkW05l7PsovOqThc5hP%2FIamf5iR2cYdmQ0j37xzISZi3p9E0lFRNh65NCbnaeOJ0xCQ0J%2FElOj0v%2By5skhXgPqK6yp9DBtlWsdiwNGvkBEA6VhvIIfvD6kZuWqIQtj%2FkOkeTwvXcSQbeESJOVAkDLqzqVZevimK2FZQmDW%2F8q%2BsLDoDh9fTIp3Or27z0xPYFocpnc3PcbJkFUejTCa7502Go3aOd8jVpHGwOsez%2FI74vNNo%2BB2zzCO05LCBjqkAXm7odYzOo7qMc4foJ0Qk4XJYFxmRQBpamUkxXLIV14ax0NDycwW0ddKH6SYO8u2t00hlXtJqcMwunzFiXsurGpAeNf6hgaHOvVfjYsgYYZhQ8xputD46ayi0cw6uoBoXhOWfj8x7mI8GXV0T8oqwXewddGaBOlxkYpjvlYvRwhUECQr9EjrqT9OcTnUNboXOsPdrZ%2BLwbuI5X%2BbJWbH8Z8l8i5T&X-Amz-Signature=963ae775aa070559499c5d6ebb1b2de6d495a2c6a25418e11ce5840d215faae7&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
