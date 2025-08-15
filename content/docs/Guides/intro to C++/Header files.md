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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666S6I74EP%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQDaGtHUl02E5PszqoV90kGhc79wpdPg3oOBkKImn8Bh2AIhAIDrP7PL%2F1p87N1d1GyCpjpWXFoirZdfhbSV8s3F%2BaP1Kv8DCGIQABoMNjM3NDIzMTgzODA1Igx84%2FMUTuuy8FxDy1Qq3APgSL4IfODhLhYm8Zx8RZh4GAY1ihC6Kuhv1JWB5aIWcSCVDq8Qn7B3uQ%2FldOZFnI0Mtxn9EfnZwChl4GCOAFqvMfKMAkdpWwofi%2FL2BE%2FBfyTORn0pZ7IepLmKFQs3Lt3R%2BZd4hGL80zPD%2B5B6TbLhzONAljf1vNLfIEdpTg2Fb565XAVOK7iZUbhql15JXKrkybHNzpxIQngiIp5AbKLFPEEVBt4IcDKVihJaL%2BmkyY2GwcESg5OfiE9lc2dGnPdnVl5WsL3bIc5T3Wu0Y9v19wIuvH22rgHWsd%2BAjL3SBkEUMtla7gT9fEl664J3JF3OnPMsVCDYhBK0kvwNZVgfuNU2KaBK3ONyicJahf3p4XuVKg6gZZOjlxXI81Ong5YchTvGXkYUtPddVrr%2B4kvtBtScOUGzFriA6i165mVfxvDz%2BUTlK3tPuSRXNA7HXLZ0a8loSN7dyg73vTGp%2FzrEVskeP%2BA8xrDSwkPN5TXdAnUA6WMl4OcRX0c2GaEvkv6drll6mu8IadLNFCmg27clnhn%2FcJ20%2FSFq023bpMfXACeHXFmbPJ6dtJa912AXRbofWmX0Ypc3ct1aHKkRYk7g4ZcucDbQF%2BOKNMUgFmwr8%2FHZm0JGEOVwNnQ7PzC32v3EBjqkAflw6TyNTICqt%2F1r1v%2F3m8fW7qLVGao%2FCOxv4oGGUeidAx69ErSkrrmSxdRpvMshAaiOyxHoL4OrUQD3irdqayJt0aoNMshlfEfTrEGdvosOiAmgGDZ%2BQ5yGq%2FhticuWkgmXWm245f2d3969w4H5NX9Jrf46MgJEbFaxuZiVtAcqGGOyU3wxHsAJtBnH3AqXZn6cdOTCwoN8t%2BpAae0yd1g49MT4&X-Amz-Signature=7daa4e01855a806933a7dcec614698295c59deeae3911428f99e395a417edfbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
