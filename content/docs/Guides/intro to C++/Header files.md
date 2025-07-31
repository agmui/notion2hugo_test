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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665P7ZGTMQ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T043539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJ6wG0lGSG89WShCvOaeOyryDSsTAj3uLOr9AwQM0XTgIhAJD9RXvYyenD5IHq4INxsX7Fnzy81cM0bKB9r7o20NthKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwryQfWlwh1xrM930Yq3AM%2BorukHIQAAQuiP9gCVBPKErAfAhz6lEWeXl%2Bn8g9wIox9Xfp1maIBt%2BDROVP%2F%2FDZ1DsdB7Fbqv5OironMkwnVz5mb7DO2T2gpOBgMbP6%2B%2BPoNoqyEJ1RZ86p7LfR%2FN%2FvWKrTGY0X2kJYwe7x0I7rawU%2Bt9VoIhU4t2jclLMcWRv5rrN%2B5hbOXnp3h1VRq75TAZEALNAvqznB4X4XaSs9y6PKsn01TDaNjD%2BMFJRzT4kcpBZ0F0duOLNbgwIYwCQiQrn2Jnr0BugkNYTuHKFNHMD5QbX89sHYID3iO%2FgI8%2FRHmeFK5tMiFB25jrkjtmiyZUuFnf1SQjgwQqjKKGTcMKWD2yRIeYe0QxToBlNSZgmzMj8FTRladRP5kKjWRgKhM7ZkBNGC63BunCEuWPax1Mr2DkGmuY9wjJYrGXNMIidkVpUH%2BZZi4Cuh68XNBsbMNv0bJ26IuoXNYTwIQudtsAyd2O8uqx7XOXlPSKdG%2BYNQ73jbaHa7Ijz6xcsES9EmvgBFTxZt%2FHWDe3OcNflScxZamKqSyqq6Eg70XXAc4m93hYxRuCWRrq71wGq2lJul3y3N2%2FYfvKcNfkcoT7aiLwsNR1un6hiRjM%2FiRAPnwR53%2FAP8B3qZHv6nB%2BzCnyqvEBjqkAQbuCnZevsV12tovbMjnvjtXbAQRNsxcLKTatsCvsay5Or0YCLNCopMUv4%2FZGTFFiTV5Fp6SjbUqArkT1xwhXOnpViKOR0co2CHK9Cf%2Bnx8VZObPbZ7kn3lHXoN4YhjXxcllu4yfqpqWcmUn6UIHpdRcrkcaJ4%2FzyiByK%2FwBsIFgHdtDbbjyOOLqaHbV7fQgbNHo5vAmTUCULKzT1kezUp%2Boqw5H&X-Amz-Signature=cf562273e998d735719122c04491497bf403e6862fbbef5146b21657f805c45b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
