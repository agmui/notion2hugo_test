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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GEBDQ66%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T210921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQDk8CM3skjK7SQYWH2S%2BseMTfiTrWwM3r%2FyZ%2FYDR%2BL9PQIgKLGRs5nYmn0StqfPWrr2Un%2F5bY1jErQYJRYPkBuTEhQq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDAp%2Fnz5MswgsRE4nNSrcA9r9iGtEk4FT1x5YsnAGuNBOYLqaheVhfl5wZdX0xSRxdUOYRZdtjpt%2FUiNtyJupNm830dWHwH%2FuPBV%2BxskHNNUiGfTqPEcql9C0DLjBRubzZmfQ2h2a7m5J%2BfBH1ojtY9Nxni5sK1Fq6xVF3B4JkwLYXukVgpZQ3LDSIc6B0wQ7qwitGJVsBRyBtI%2F30tJVNLfhWimHx8DH%2FsKLTOtMfgdWYEV5HVrcIDZE2d6LMWOpzxafhHl5kEgIcyNyb4owcpoVJjFYCJwtyf%2F58StkBdkGK0ILcmahoEuh4uWvI5P3fbX2ReI6qf3o8frtCnWmER%2FGV%2F9mDqIUkoeof3I54ymdRu6Q2eG32y9wRYGYYtZUe90bul3d%2F4MqNB0JnV2y84fuQkJehP0ecoM5Rn9DGXpoouG2uDXRsHPyT8RU5UlOtelCwDxTfDkm4qEgRxcf85TwpWPwid2mnWKAKR6USmKJbmFBUVAd5Rcmr4dBtKhIEHa4GHi1gskxbhsVHu1nmdS3JZSUONJAGXZCFfDYi6OrFnpE2kf2TAM%2BqpL6PoHhEOw0cv7NLiLdm2jxTpfRMxYui81V%2B7KxNDPwddLTTKwURjNs47C6fN%2F%2FCywLINL6pjquUacckBYPYG7DMMfAxMQGOqUBrPE1pXSvPvdfo37pTDhdwDuV%2FWA0%2BfOJ3WX7%2BQP9%2FIex9C3xmC9lPXlC7Yha2AyV8Vdd7srAlllfQEkfg5HitsGRXfbDFsVJKFjDEUfnJJ97xICC%2FXMKWuH9KTWH7zMajpZGbJG07rghFb0qLsdhgoHR4HVXGfYhg1ElsUmTIN2CEvBbgsl0fjJkPUACsMlAVeGmpW4VcCOX5fkZmlBMSHkLfH4y&X-Amz-Signature=8ecab3da1bec88c2ac72aea2b254c8388457aad5e15a93af1fd0b6f090274529&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
