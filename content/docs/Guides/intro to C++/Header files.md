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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TERVQQTU%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T090718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIFjJ5jM1jRdKyU06fT8Pc3406cBsIn%2Fkux%2BIW97uTsHxAiEAmr78N%2FdOcxsvkffdPmzHifYdbcdNQA6P1fm6Gh1uxPUqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFUt%2BtpN3212t4%2Fn3ircA5g3PqCuzNnvYLd4gWhXOlYlFsDvjQ2kR6ujafROumikHUykvo9LvJtqPcp4tBCQBKObQuz0NShnSjbcDgW81%2FFuxZolrsAy3U%2FSmnaQaggt2GkVc%2FEUPJsi1HN5i4Cj4fCcXAqU8HsFR96eUu0Mbc4bF058cobgIRQcNKyDslQu1ymLyLyoG2bsumU39fGkBCpcYiD2nUkINSd2o2bo1e75cp0KrnllI9JzXIHq6uSiFkaEFG6n%2FdLHJulOG6v61eJYDJhsKIbQ%2FksveJQ3ZenBqza9PkQ4rY3h8uRZ1gg5YW7HHP1FWWHJyYuthXiqHSaZKmb2RG8%2FZilTZNJEmBeuw2Hq3WKtkrZYKkj2bdOzbOdfFrtHpFJpSkoo12sK21x2i6Y26CM0rKaIR5V7OgpOlsnaciiA0T5PuRWDeBKBhU9HyGOxDQBdAGdmO5Dh8tmq8ATppZHEyaM%2FJKrGpJerSO0quL8Ep1TKVDndI7V%2Bwpy3Lg%2FcFrEtGFgLyNaXOxvxoV1cd6wT6DMBPWC4%2Fyx3GOFtHUwg8TexROczbiCXiiHTZBNlNB4BE1H4JnADOnuY8uuWkO8ySYAsoQORtO4zRX0c5SkK%2BqSLM2HtCp6SkRKWtZ3nqGaUPi5BMKns%2Bb4GOqUBotPaOHVF2a%2BhuPQACWesfMQ5kJDLzyMJh8567k14uG24vRHNsDBLs4RQrHpzoBYS%2BijA4QsHlDc8rzF%2FpW7FG8N1GguD9lZzM3DuMBoHw1BKffO%2FF7xq1QX4UFzXVrZ1Dd%2FDjWGaJ86jUBgbFBAAfGtZ5poffOtmATjSJ6gvmgzZjzs486GmJbWoE7f4aVVatiSYSNKJxx12lBr57Bc8uYoT6wEz&X-Amz-Signature=82e7c0522f54b34444dd7ec8cc6db85993f9d40421fb8ed542aff79496f02a53&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
