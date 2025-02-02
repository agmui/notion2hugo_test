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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7QEDCWD%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T100459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDCxCNEV1BImtjRJ24fp2l3uFwsNvzbnBXoktvi%2BDCMJAiEAmKEn7DRXdj2CRzaawcfFpDSqEPozxL7JxNoT8fZR974qiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOXpiYV9ywcRIZXyeircA0CnVB803TSaJgY6nJRj9l4%2FGefn%2FTXVDBxlpKaStGMhMKTKS%2BpVOOofqOlg0xOUiAp9TSkxPX9PQRt31LlBHHPVHrp6gMbjJM4fza45U%2FZSzap2MKri5orGgMcfWldnqQJWYfifl6SXrooZp65tkEBSGU0tKIwCFgv7b%2Fjd4EKTZbP9lapbYAhnY7NgothhvG5qNjReW5KXrxD%2FZF7RZGM5oLb6kdEHpAMv2Vlbf7dIcmIPA7EtEqqk%2Fj3bB%2Bm3gk7D9KaZftw2RjimkuwSky5uk%2Bi%2F%2BJsvIY50xc93ZxM%2BhoVKF0EZzqBDVYcgp02HmycRWnzu9S8n1aR2FE8GaD6pw8%2Bqu%2FVCNTQ9yVa0uGjnmSMVoh1TFaxFOdOt5xHUQ9qF89f2fGwK6s6ZtSErCyCfL%2BhpnSFzwhiT4HbTu9Of21OPLlZJznkovN1ZsiJjFGuHYOvfgF40cVa%2Fqo9N%2FY1mPO5H%2BssgD7ICIWo8ZZHi6%2BDo2ggMtNV6bdth34aza09BcQ2tHyE3kJKG474DnIL16%2BfuNryUEfGV5zBuFX%2BwI8u0XGtHsKUscpesjTZQoSiMw17B8s1tjwXXUvRrWVPi28OYPniuJIUkZIiG8%2B8XNlNYDVOYn0TvzqRnMJqd%2FLwGOqUBno%2BkPUfdNg2IRrDcBTdaVhhjsK9fxv5W2Cz1S0hclsXpt8WQi%2Fx6pGZjf%2FGYtgHdnbkjkLPlpzMhOb5X7gWDfdCU%2FEDopRGCfK3JLUb35XakEtAckjxXgGb3Rr6nYDbAu4G1YxtXJaQmozXLX%2FFnS7pE8C8j5coYSrqRydcLan2vwjbBWR%2Bk%2BZPXgsaYUTGPh4wRX5BTFRQxfJ6fj6T7p3Ke2TlO&X-Amz-Signature=f1daff8e9442e3688252a9f7ff0ab6c1e5090e29dc0b8a9156e35b48f79ec629&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
