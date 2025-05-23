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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZGGQJDF%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T061245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQDRWLA%2F4byyBHuGPwhtzZK91eNy0Q1fXs1WaenNCjauiwIhAMCk9tSu6DPT5qfcNNGkRKBZuXVJ8qh1ddVlWEJorPHYKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx7%2B%2B%2B%2BrUO8JBcj67cq3AOLRfVIzhwZmkheNtt2mbAqd3CRAIVjnqElp56NeNh1GgWXdPVzogK9d8MHW8k07kvwT2M7BipkyZ4btlusFU%2FRLTXK0K%2FYKbR%2BlifnlThxRkqvqbOwakEXh7UAe3tQGjMbXBV0vhlI3YRDR%2BZY7iAG8vFIP1k4X2h%2BZNIHVVgfWJHIhavZXGM41uHW5pk2f2iQYorwrxQG0aWk%2BmoI533IDj2O%2Boszbt3gf4XhlO1gqMiONxM24woh5nSPDmXeZOtMVStcSBQjZbMLf%2BYSk0a8vK0GTEKmOcmW297ttffMeoAusMl5MpYlJwDkgReMdrpDgx91z2eCLwxjD%2BuU0S7h%2F7bvwBpXury%2Bgq8rUgTQea0%2FcPCxLHOhczssKFESM4liJQzl8WeGC6S3aBcHUiPn1UnxX2WCo3zvW1bwO%2BYO029VeIS%2FrElvVAT34Oshp%2BpuMVkVYERkosWYSee%2FK5uYRCakcmx%2Bw5K83k37ZYG3FG7Zw3tkOVGwolcCpIhZKhpWtt8PmFAvOqp4fD07oIJmJ19bzcFJtRtEqUjuKgwdoukk3OnAWeNnkTn%2FJcap%2B%2BqfDdGwDkZDx40mdjDK%2FWL8lCbqvm0UADLOE5z0DyiwZmJ2Oosj29bVu3u3rDC7wr%2FBBjqkATt5ksIcaJQaXxf2S%2BoGpzkfbDN4pYTN0sFznV7BcFbhgJ3GSCVa5KiVWyhKVxDFF3VPpKmFktYcknf1bgnc7m4PI6GsYr4nhcZcbRxb%2BwSfBvvr6je1m03ApNsIY72iNYbv61LLQjIjj96fNLbeWQGETt%2BDcKobtGHF1t6S5PG5BSQptX04slnvjez58KRa%2F%2B6%2BtZW4AmiYf1Q%2FjcmkliLKeXXr&X-Amz-Signature=ddc08f1d234a3ddf37cc18f7126d97a535c1c5a22361eb7e8f561e54f35bd563&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
