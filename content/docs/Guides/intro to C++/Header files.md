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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TA5VYIHB%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T160716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSePcBf4veWCSVjJM31WqakBij8jWt3k9hC3IWtDzZXQIgYGaaEzQw6wkc3tNrUuiuiNaTIueOZPtBWCHOPn7gRqUqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL5dyqJ%2BSNLxM34sOCrcA%2BwvGb672jPv4Lj2O5DO2RrlM5kyz0ls3o3ReG64VKB0XqI6Egn38zRVEmldg4YH83W5oFPyGA9uATTFWuniChcIuSri80De7Gjlp4qLVlvVb9QCK6zvO2NXq094tYvpONQxGp8l9G19SgUJABC8t2EQ63R16kiIX%2BkSvrKynE7387X93IihhLg6q4ziFGf0YjBYnyXazFy6YRYnjc2dL8L6W2UaUt936T%2FaKJZyqiSGOv6AjEphA%2FbFvEfb5RWRyfx4IMUNPHPgIZd1%2FGfYzcLIVtQctm%2BB%2BwDwAbyeag54F59yXKZyHsQnjnRR%2BWuOv7WqUXo%2BltOVRVx3FLMAryP%2FZeQbJIeDi1h2qTUPqAd28H2VOjAh5E1VeL7VDr4MNtbZhvywZD9Uw3koqdI6%2FBEC%2BO2LHHrVmzxhCZG4pu95TUeUEqXbaDGL6BbnDgdpKEbStkcB8cqmaHTJ7PFF2bCA2Rxhn8%2BICSTivVHW1Nmm2ZuvyMpZHjxzC6RGTB6OFYE8YzUX%2FXSrjYLQLtBfPdnLh0raJvt%2BD9LLUFQPElg48SzH4f9RZU2NQhckUhSemur0PsC1O%2FNymhPuCqCo9tG8EYgHKy9oPhT95AkTbFlLR7KD34LBF1VH0gmhMOnH%2BLwGOqUBlqvMTQevauXNYM8QAQ5zfXpnSlBQXCRfI6QX4PaT4KTGagmVoObE5wc3I98OCbo%2FUwc5AtUv4dhrD6vwNq6KfhRPYCcPyi8x1RmMXaRsV%2B3QB9X8Xhq8httflqBqWkWMiw5%2F5CNxKmjVSyqAFi1cBi6kGuFi6M0xh8p4ouFx1F7myE2PCaSDDYbI8KcLUE7%2FNVvHbjbGKDSBq8BBeJMPqhNn7P7d&X-Amz-Signature=8bb8448afd974771939196e5c2195a117b7d51a3f5ca9e2c38ee83f852c3830f&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
