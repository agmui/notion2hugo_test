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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5GUDCN5%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T040952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE0j%2BXAyMwMhfuf30KmlG6crdkixdQfiXggQ9Y%2BfHNsBAiEAxvgx6LRP45%2Fj%2FJHwp3jwx%2FPYXtmbzYyDeu052liB12QqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHVQ0R9LbTVSJTrqYircA8FUSuhQA27gFC0jscB3nLFgAxcJH4MSRFibpFOQRFf%2FzHC9OBp4SJdQxNQ6P7vjWG%2BjH1h%2BI1DQ4n81sXRykG%2FRVy%2BQhbqp5143tLaWo8pNZeAOE1o7Lamr2w2U27WKEFFkzQ5IOH%2FSAtmU%2BujrlnnA6okOam7Umr8hEtbuRS%2FR%2FTSFaxO3RnRU6vz6CXwQs3C4wnpRBhAQ0AShvUGr1Mgz37%2BN6PZcJ7yKV6kD5uMItitf1S0B6mypP5a5dF9IIWWZ5agWuowLqlj3x9AV7Vm996Bp9NxVYgwnZSBKYeeerp9T%2BXl%2FUmTpzsoWDSesCm2TqPxcYLaTzQkIzGafCfZq%2Fe2Dlg44H844IlmYxGRs3xRFD6TlzMsiJhL58rwvXO2JtSGuZq%2FKaUWGuKpyJey%2Fl%2BFIRe22O0HeeRhCx%2BTGodhtsBjcdDK%2FVRdQNf1MgZpR9wPni5KgG9gFgf62oFPKvn8B1KSxVMGORJvzrGzSM1vSXxt4Bb7Rbff8ApMpFq72qqkWg4H8rVKJCh14dAdOfnhSL5AY187djKaZFlWIFcluSAQfa9ST2SvoRx%2B%2FdQkK5nGygs4bjbQvKxsv9EH%2B55H5l0n7P2Pyf8TZ275XzlaDfK9k0l74Bsa6MMXNzr4GOqUBEWznvCr7C%2BKq8ynYGQIjKgYdwdn5SXFEuRbgzbVJfxcysoelLQ1JC1zcUJfKzMdolYSfBI5KOI%2F6mipEwrAM0iERYaT7Sm6llV4BURPx9NAfWsJDjVXwZ0QNTx7Iy1RIPPWkDiMKzec7LG24eE5W8YflC27L7h3Ty1gU3oy1hgGqg5UFIGwj2%2FtbCSUf4WHmGwTI5pQpV4xy%2B7uAiZwRZaaKtsMg&X-Amz-Signature=825df9089e7685e84eb6f3e2fb99b367a17e7a260e009f8165473a200c38589c&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
