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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3XLWRO2%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T181122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGthflkkHgQZFa8S71SDhwcegiR83lY1Z%2BfVhZri5DEwIhAJk3TDp3SXu5pG6s%2FKbtYH4pM26I8JETtJdgSVO0RAjjKv8DCBoQABoMNjM3NDIzMTgzODA1Igzg%2BR3M1sFPo9PK%2FUQq3AMIEEtwaOVKzCDNnak%2BeBKIf5veWplb728k3ppdDpYwYU9lUgkqgd3uKY2wNWdGiHy1Ov72r76aWtzOwDjGCzphpsqj7JOfNoe8CnO9SuDIOINzQtVY0UXbxItyEGRYnVnxaTOLOAuSyS754Jh3bF0BU86bzRAoZb2%2BlgAnn%2Fm5fFWdNgl%2Ft59RwuzWmwVXqUA9Ngw8oz0iiHlz%2FIzg0YZ%2BVC51kI70xZy5KI3dhna6%2BpgpZA4WuBtPWu26OJQcOKqXeDK1fnfcUCd79yC6Yozc7D3SNVIvz8ypaaWRmhfxg7lIp%2B%2F2bPSIpiVfDMA5BDevElK5JQYtFzSHi9gO8jysrJTrv%2Fe3qTVoijAwAU78nOdh3PWg61c2QrJFnwpk4WzF47i%2F9iADImEv2au%2B3pNZ9uTE3aGGHkLh0xuOCkFcjEYPhw6aRvy5Ckj%2BexBRMAmxF61U3cRWfPT1%2FvMGNv0KMkIEJFoWpyP%2FjlDtXFEezQRVb5T8ixGK93EnCf3eEM8AXJ3GQDVtJn7Z6LJSluEAqlr7MrCBGlvcssTjTrPE3wJzqzg%2B0OIrW%2FofGaP9HXOSGdki%2Bma2exYV7FVWtorblC880BCuZ%2FNrU6NLyb0WJId%2BwoQRQjj%2BWPeQ3TDFhKK%2BBjqkAeYU75fTlZXtwz%2B1y5tOmpcrhXasqZzqQGl%2BH2%2BS5Y5qNP5sq6bR3kNobhi3pd6%2B6w7Qklif6Vxbz4EBg8nkFYtUK2ybe%2Fiow75VeZIOHM029HjNwLNyqkopisnp3dPzaKj%2FtxGPAfZUt2NaZyH%2B3TehPBIsA6COcAfa7a8anaVsapvMKqdL6QDGfBNZssObCF4Ibce1GX1syzz5zeiCeKtNg9QX&X-Amz-Signature=907bbc7ce48659977fc78063ae0ec6682f7bb98fae80c56efc486c1d1e68e30d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
