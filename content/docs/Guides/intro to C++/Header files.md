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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRYBGROB%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T070735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDU2z5ArcZevu46ZwhnFHkxk4hT61rGdsR2pwINYjgcfwIhAOLXWLb%2B1lwXk65cb6H9It%2Fj1dSOy19lNVgU8EUqL2yfKv8DCEAQABoMNjM3NDIzMTgzODA1IgwTLRwzHIMIu4d0ufAq3AMKbVQZiRpdCUKE8x8F%2BZg84tmm4%2B634f4F1jnRf%2FcyZjQCsTp2h%2FEnnbgmVsanIFYz5FmJfSpjVPYNI36TsY1T8EIiB19w3SzVt7DNVF%2FQGQkLfmpqlWA6BclrZ5uf3Syah7wpK4p6uI1k6j2hTg41kmAXvnF3Bxi8baruFUGP%2B3wV6YH7hIzSDSTc4bMSa5dGFT1LvPy3h2nOQyFpBBiOoD1NNpZFTRHRlMjte1IceRBewgjmi5LllzgWCDei2YnoBsu66elIdBqzfjgte8a%2BbRsMYPr%2Fgp70T4XvjSU41NB0UQ9hPOiM%2F59z2UDACW6%2Fv0Jb5gkP0sMClaxPHO0J9Vv1bsdSdoYAdjyzHtiKh4U6vsRFhAzXwYco4Oi010FMAMI%2ByM9Xh2zt1R7Li244Pk42R5zdc0H0ZdJ7IziBCF4tmAw9kcwX8iweT1LWAdA4C%2Fcc0WWsAnVeE5Iflzy7wGincsP5cccvJPveb1dRbaqbDLwD%2BI%2BMxL7Eczq2lhlAEQm1d0MKlwE1GZ%2FWPOi2dxB1e7WVHe5Wk6QlEvn9mfaDEOYcAQASs8IEv1HrWJ0KwZgFV%2Fxc7qsehgSjTt9Zj2rMtjcrHG8qTTw1YlbAnvEnk6QXuxCQafudNTD2g7LABjqkASxZYpBvk1YY594wgBm9cuR9XeODFyGOMvhCj0ykgmAmwaUPz%2BdRZv6ekZnVmTHzXZu0W6zu0iPlCpBROp8XeT7dDnhQyDXJ%2B2n5bNJOa43WdOEZteXWC%2FTsS4R%2FQOtTITXCzPo%2BYZnwu41iUzGy7Dc6YQmPZR%2FMb0pnKeup9wPBkGFoHjC1B36HhSf3ZwpcpNqwUXKZfgbnpL3wlUJnNm1D6pic&X-Amz-Signature=f6a088973479252a3d069fd60e2002c6f0fce478e78a15c911c201fb04c5bef5&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
