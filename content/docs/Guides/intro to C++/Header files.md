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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZ6M4SRI%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T004150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICLtQw4BfDkmXw8Mr3tguYbqsYkwmLnPjTgiCJ0qh0QWAiAF8IYtoaVSpNeU5tos%2BjMDYGkSPHthicz%2BaEH83qO%2Fuir%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMEt4H68KWF%2FNbgpqHKtwD53u%2Fi2t46x%2Fe4KwgKBN0NIJSKzkeS2uczT2L4g107YdZLuluQywCezmaDNciyDjZ8DNqMvQdxLfRQjn1wjAxaY3enQXLQos%2BgxjGf9KYM26LLpESedNV8%2FZaWf56wZ%2BCvnA7GY%2BaRMkQUOtCTDvuKvxwf%2FYAr0arDwq69qx0MCCDJEm0WWcMDtIJ8qK32358p2eqUaO38MHN%2BiN%2BTMnOfYvWTbVuJcZQ%2FBz9pxDv8lkfIb3V9UK2qX6q9AjBD%2FkTe8lzK1yAM%2FSqscRuYTxpI9NAx5iNhNza3qVH6ZpDHDXV5BsZsw9YjgqM3z0SgwvNspMTFF3pKXQbXtPqgiOx%2BQ%2F9Nv0FngLTW3%2FMM%2BezKuWWfE4LZNhYqjF3or%2BidUP%2BShTaOnEYwHN06RQ45fS7xdwQFbpqm6%2FXI%2FBJQ7eHOmzv6u8HhMChp4hxzVllnviJCosbDEVOQIYmIEKQQ4In3084ZzGEzyBcK%2FwFmKr5lV1PsF8vjhKs%2BlALr3hKOKeSYdSdtLRKahu4eQaviDl6LRi%2BcgScA9i%2FUtcaPxDNsx2xLSp%2Be7FnxlOgicJmO7j1QjkygaeN3B%2F1t6%2BG81ETALpSAZY9MguZNflcSSnAZkhxpwOB50UTpuE3AdMw4oiOwgY6pgHDFgmLYeBCWhcTgzwbS4QxFWxzqOqz5qhIYNQH%2BtUVcc5qnv2srM0c8gASzR2j0fyhLokvJ5gGqkvb74ewFKfxLyybgu1jFkLqRTGYMCl%2FjW4FwMzTNruYRUhQhGGqGP9VpCl7JmWT9s867hzjGmE9MvG8EtCLxuHM0xVAiNTYGHIUm2hPeDA5OYkFXBDjE7Uv%2B7oCFrb%2BlXEyJKXuoQRTE6EbHT7q&X-Amz-Signature=9e760d441c38f0064b599b90b3152302a678aff70a9049e7cb83406f61df9cf6&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
