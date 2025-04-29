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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652VVTSMU%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T050925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFtwpVILkaOp4ixQYciSQe9z1JADXH93ZbXaCVVebrhwAiEAxldHZgNHkxvA7%2FL7ix%2B3KQS85kY8DJAKkL38BvMiE2oqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFueu6v4jykOjC3DCSrcA993k7Lx8FJYMc8EX05bI6VmdJPMof5rdiDRLsECG8ShR4mhNNgtg7wIUyubLxDLr%2FeTxqEtYk2rfEnupHN6MOSoP2gctG0Ah16oBMPbvjOx1TEctEMZ3norhMU6cZp2zazo0lhpCSuNawkn5nthryAXUWpTrJdu1anJlBu3v6YkYhbQLuoC%2FmGl%2BYZh9cdDjYXkdNG1FODzElx2i%2FRYkp7hia01tkoP30UiYDL%2FRF%2FVTdZNMsba0noMBDGXWtJPpIGer%2B%2F5yZrAz9DxIObnZRqo5Qg5lFmG6rHY4PmSYBM3PqMi6i%2BRcdX%2FSEq8%2B38Y7W29sQusZdwTmj02ZPqjfQzUTflSz%2FlLOP1%2B%2B3%2FVolvUuMr6bYfvKwWAyr%2FnONJXrMviJWi0ZAGgsChhNppIE9FnfZk7DhkPYSL70%2Bcg8IXRgxNZ7n%2FBK9RMlLOxBiokGlISDCLCuLvKt5Q58FOQFzJRZUdAsLQjnKlr1u5MX10SdHon4gAaA6Mkh35i7ehiFzHofpAxvHCXi2ffX%2BCrmXY53vQa7f8hR8wXUaGL%2FqH%2B%2Bt9QJks2g%2BFT7nnCAcJDxOQCl2NFtBlfaSN8NfZCTfkBdJYVtOZzslexBHzvHz812MLGbsWjUO9vjAZTMNK2wcAGOqUBUYIHS2D42XudQCTKohLCF%2BK%2FDdcurX%2BEc6gFTwg3uvTEtG5Y4KCAlJAHNDYPXidJvmk6upRSyobo2Lhjc8AMt21jpb2Izw1CQH5TYsPGuVerEtv%2FwFaaK3NqIPp%2FzQwFY4URkdtYkFg0BlbBO2CuMl2iu%2B17YRtQoO0sWTW%2FL%2F0xi%2Bru3l0AgnJc%2F%2FXS6szm%2FgjXJCNm5RpRap9rg2ZCLcAQJa1R&X-Amz-Signature=0f9fa5b70908d898abef08782ca74eb169957acc6c104e5fe45558a7db077b87&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
