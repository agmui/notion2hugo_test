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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN2R3F5W%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T220732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID1gKOlxMhLH0CQZSopRzTcp4JtyhhfaSUbYZ5CwCgwgAiEA1PZ1fp%2BbrZvHc3d2fLghsw46RsYoui%2BqdXoxCQ2n1PUqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD%2BrWECP5SwcCCOsUircAyT1g5rDUXvGdsmCTNajtdKD3KLrNxm4sPiwhRaGK6L75oSIAcBGcnaVEU1ofyIX7Qh%2BUV6XBPOaXP0vqGgOVTVsQuIr0%2B8DMvhaBk%2FftD8EJi%2B0nRf4W12zYIqo3w5LEpASIWThvvZqFLmf5dRoBYCH0IfyPTbtkKpLHC4qaRV9ItcQYFe5sOxHhYFtEGAjlCRW%2BjE9AF3msUa5NXEIyTQc5G6exW6Xx12075QVQctL%2BwEA5gtEEtd7wgvhJnGoEqfFcNybCC9PQeOdptWNQCT0dqbMUN%2FshfbWZ83VRp7RakVH7EudCNVrCqKXgecMJnOeCT6IwucosjdgiXOYkhd0y5iV5Y8bz%2FfdA%2BkQGQ0bJOCYBuSbOvb3Ao2uJfZdIuh%2BvLoffCjUgZhz17LZvFBVCJHh56wimXCohGbX5bYhTLk78gsM6otOtZjxEg7RYReJ2AOsPQJ4zXqEsZOCu1vz70ZPl0NiQvcng0uVyxBKaah8IISvEX6WpirrnydC7VaF2wT97zYz97sN%2BfHSRXBJrajVoMbtXH%2Bb80HBf8kFa9o7IX9Za7fdhhbHO0HKCclFnGt%2F9bBuyJLw0nWcnL%2FN6%2BTLqxOyaKvzp0GZraGab%2BWQny%2FCO7UBSEm6MNPcnb4GOqUBQM0wLN579aFb9LVjZwDR0O6Bg35Kn%2Fmv2qCAMn%2B7dZ6vLhMDn7c1m%2BLMXudCHtiPLTEDht5E9em0DmvuOWdO6tYBkkbQ1xJgpCr8Jxb4e6KoCF1ixPKgM%2BYESIViXCXldEc6ro8SzfhtSPFFH0cnmyi81blMKFte%2FGhbWQWE471p3SfnZ7gB2P809zHT6dl7ReiW0D%2FJ0L8VNxL3rzUrblDLxbZM&X-Amz-Signature=a694e4e530fbabcd7b660ea8e878ed3d32c8d288fdaef0050d765b2f5ea33aa4&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
