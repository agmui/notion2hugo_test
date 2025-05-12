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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBY5XMTW%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T161048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCIBiF89P7j0MvuAlVbBft7NQtHzGhPn1uyuZ75zEYVyeMAiBE8lHJOTogxdx5D3GbRMK2RFZ2XMNxx0mnSg0PACqQASqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2tkoJx5y53zwggWUKtwD507zT0jgcSC2DXtYtb%2F2sZ73uTAQfy9klBQk8ABTsQZUyRKCBo43tCpv5Ua3R2xI5gD%2FfVUjaqIh5lvVdv9icT4qAJgW3hnI2byApwdVzNt0JoF6FPIKivefCoZGfaJniK%2BNSsimUOndKGXJg6j1gRCaYto1DqO0RvHA997mQjvXgIKSJ42PVgF82%2BeiC5Hi6wx6%2B9F4XtUSFzAXQTVHPXLPreHs2%2BP0nBHUFdicQc2fdzCCfx6AnDoW3O4rb8bzc0lYuT8LHM5sfajlhKflgp0SvjZzQY2XSPGx6q5LVJWUZc6REIcXkvgSZ3kl1u06XJvXlrXJ5Xq5DZsgnCh4wl2m3gd8Z4Qyrtpl5botDjT71iuxKxEmSF8QByxHr8h7zhzncVxATApfIE%2FQZJ9d7E%2BsrWjmfQnQTA6QFwpNkBwR5ProlNYVJPD1MeOSuvPql0t778OqdOC64QkdSCpn1M7Z8FYZsQtcM52HpW%2BxA6KWmvKC%2Fch7HiyoYDLdZXEaT%2ByZL4v06niRh4pfVUGVE0nsbiKw5uSrRNcLupv%2B2GcqSf4WEVCQehDrD%2Fsr5b5rLH6G3CiDRgdQzB9lLZtFkoUsIwz2VdtkTMV9KBOqXwuiuURivTzM4BQpze8w1J2IwQY6pgEvmXlpuGCMKvg71yPCIFb8p8J2M4L5XGyTI5g7gEpZFezC9I65NT3sKFsoiBt%2Be2JSKYKrwYqxs0rG%2F4zRHarUHLmkx1YIy6mgj3mzbdJAxHJRbsmBp7nNL7TQSHknDSq3sq9PgFaEjM2fELemRMRuZtnIveW%2BX%2Fubx%2FzXxAyQtRDxYnB0296GCbmXxGjGyZEHNZE7dxidZxHoYRQh3Q%2B5MKX1vqPx&X-Amz-Signature=c068c75ea9d27c2191ea79950ec84301371d9428a9050ac7bb3c1e1a176a294c&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
