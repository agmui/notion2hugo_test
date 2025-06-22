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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STXKDAUB%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T034629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBBWe2MKGU0%2FF88mjElEcCSZj8uLz%2Fxf%2Bc7bJLtXhs9eAiEAm5NCjMjPV0qnsEgcsaNst7jrGEDMZc%2BvewXL7xkmxTMqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOynRh1wLZjC24GLYCrcA7E7vFhmuLi%2FRBs8pyClyo5z5w7uhPlHFDlhcrVNXZSAE%2BvxLOnEyLVWgCJoFUXxxkT8PdzgLVlA0QnV%2BBWROV%2BcKRvHTYoC8voXMZWnb9P3xVs1BLLVOwuSRaQXZPkRfrsrOEnk66XFZYbQFDbmibRo8jnIr8YMUwTTescWGvzZpIfdhLxYmvu%2BFlwM3wf4Flv9B1fOS%2FsYaoi26hceFivFEuXO3A5w3hgaQKJl6vlM6m%2BQo8VRm7N%2Fi%2FWcGeZwmX%2BTbHldOzqOg7Zav2t2KiZ8g8ictQU2PMOaNDcik70YQhu1NsFJOP3ZXx8YYnclNOy1mDTleRveEFx1AwMzEAmxuJCgzLtjsRckibUqczQAW%2FJ7LOrETVr%2FBnPKQ%2FdGFV6Kpd6eh5i3A0wS5dsbMbzt4cMm5w36hKJDGYQBeprC4y9yFeo7SkQgs6m2iJGP5TDR%2FPauvunN7S6la8KKoO3zw1wIbE8HLUQWVSgmplkcG6h2aFj06TsatXh0qbBnI3r3Tt80e69nix%2Fi688Vn6bUxLXw5KIsKKJ6ombSmljc8QcF3Dx7dK5molauc3HnyFJdChkHRQO%2FryIZt94otdbRI8EprObK4vUL6gWcLcmHYTUR4cFplgYbkCCRMImI3cIGOqUBhDc2Zhqj8vGlMHxIlIeo952y9grR4yNDj5Ug1KwrQF4XxfVdbrpzQTROKd475cv8VmDWikY9YADXYpr3IS%2BEFTomfeYliePa6HVxbL4WXid625hvHH%2F3IkADR69jYJbMujSxorIslq%2BLobFl8WSHL%2FXWk1dmcSK%2Br%2B9j3sOcESf34nxgl30ejjKKaoVpjDTmfJO3OCbELnWnDAYGrmjTuKDcYvjh&X-Amz-Signature=4b202a642e883b9269c759e46d428d60ebcca4926e2d63802e812928a435200c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
