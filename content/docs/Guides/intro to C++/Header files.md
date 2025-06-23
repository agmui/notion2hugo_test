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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNRYRKHP%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T190757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIHCcVJshy5VkGCEW%2FrHg9bvdn4i%2BD3K9E03vxQBINtJjAiAqHubK%2FdkCBJWEO1OeYefOcOgVCz6%2BqfuO1PLVphWRGyr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMBwgqpxgeY8kzkBT7KtwDEIMDL7BSX9ccQvw77EXWJbnb4Du1Ls0o6nWKZK%2BKlKpg5QO16HzRdQ4MstC%2Bn5MtSUkqXWnAsGGUHLUa36WSr0%2FQotEccPIzvIk9gLR7iOU31aGkPxlqz6x56%2FoRCWsV2Q2BA6Ags2T3wFFYE%2B6l1WGcRhncENV7YsWUZGovzBxRPeAp2rvYCh1V6vZ0C865eoDjWnPk7JDXLXwSeTlLK5Cl0KrjmvI33LcfcfvJUTgjYxg4tEgb4dwC0Oa9Z2UDtp4fK48g88l7s7HQ9kxu%2Bda9emnKj96Xe1GYJrT72if5FuXv2SowNDQjct1Cm0%2Fb%2FZXZzI6uk2LRtEOpP7TR0CA%2Fi9I55XX1WrHZYQB1XiUyG0iGSD8RRwaf9h2LsluV3DUsCbz7i21zZZCQc3PTpyweV8BWLkW%2BwkraaQbjC5L1QMNQ%2FiIqu0Z2SIEBsAGZ02WCviRdZl01%2FdX8hvC%2FwwhTmB%2FRoZNlVIkyV5%2FW7EKySHk5TFgnM8hFOemkTF3R4wGqzkbCFP8Sc%2Fuvr2FdCsy5AfTpFlu2zWe1kLOQ4T%2BkMSIeM9brJ%2F5gIF7qVqkraDCulTxkQzZfNGGu7T8v6kMmhLmqpsQywTVqE2SE0non6wKlNeZtjFdWHnww9KrmwgY6pgESLa%2B7Cm7OekTt%2Fq8PUxWN7OLPnIfOjouMpgzeqJsjR316RBlsbOqISsP2ZFH1%2FSEpr0lXyc%2BsWeRPgOKpTUamNLVNY1Va%2BA5fpPDvk0YqpzrvH2UpCvr8e2eKpNCtAjP2UqjU%2BTO7u3FK7bzasv8Slu%2F4mzOFawaUAYAGvzIyxvM%2BlvLsEEBzZHZgaMpOLXpQency4b5JOCngPT87WKJJvC3vcuFB&X-Amz-Signature=f6180b3a273e4ea23a63c1280d62f223a62ba6b084ad074257310e3ebf5678a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
