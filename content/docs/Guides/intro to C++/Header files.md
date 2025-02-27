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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6VCQDYN%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T081057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJIMEYCIQDz03AOnB4X7ArtXpcA4QKCPuyiArCu%2BqGUh5d%2BRSbtdgIhAPc%2B0mtYbbDS4O6wTcXWL315vn%2F2NsNXb9E2mrxgTiqPKv8DCG8QABoMNjM3NDIzMTgzODA1IgxIUCXj7yPd%2F2PLz2Qq3AOyevWny7ie4SiuZyUJKrUbCQYI7Hph9q%2Fh1FpFf71xd9mjFihwzDeobHB8xS5GsKEXlGvDGCh7xdrPNyk8KqFxlaJewhwqje29HwOOr8qFmqqUx0LvFcqxe4Ln01GSLSzg24NEkUc5DkM3b7N5h8sPD5F0oeApEulzNqMX6V0cXKGnBEPisQvzMsPCckmoPJOjR04qXuAS8zsKUEZzZYfh9AoNDotU083eI08s0wkTDnhMS8ClVcuwbzD75Dj1FWDjw7UfHGo0WvbnaRHLmy%2Bew55kJJ0UZa2XYoRGMIQmnh10e0g%2F2eKjoXX9S62hVtveLQRugPj4GE2qPFnS8zPcqHtLcDcqlPvTkg7LamJ%2FzrkcxPFajBe4XFwRBb5yRFQ8AsUiFOiP6TOMG28AfmuNw5WC0fiQ1C%2FNK4ZZ%2F2Ax6Q2QRSlmUr3FI5qHBU1P2ygcIdTwkCaxd1pLG%2B9%2FA37wwWXsNttSRLnqdV192MVHc8FDFireVt0%2B9vti%2B3uyAD8CDdovp38Fj6zYY5ubCNqtBljBrB9vksQ586kH%2Fy6N8uDLl%2BCWH2mgS0Fhc9rnVANYr1AmiBl8UEGNnhYp5DW6DfS8H%2FCMxULwzGe6C8dBCcgdM2EWiyoStvJyXDCki4C%2BBjqkAYHALRE9B4o6VWfRbo%2Fywem%2BDRYYxY2b8czwHVhvTs9uOr%2BBy5dewcshoI2CnXOEe9neZoGJM4yyI3c8YcfQPVQ8BeWyM8aT1XXk%2BofSvrroViONPKyS7jVjgP83Jc4lRNsoCf9h4MAmqGRw%2FhS9vA3eIgIaKmBhVJR0nghDjDJy8DFr3W3qTADV9WVBrA7WBLG1rNu7Lukk%2FgwZ5c%2Bn9ovjDEe%2B&X-Amz-Signature=88151aebeb1f463ce5ca7f5aa3e300f17253d1588adc19ece82f82cb8403297a&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
