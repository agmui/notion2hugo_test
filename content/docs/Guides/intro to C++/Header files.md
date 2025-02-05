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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQKS54AQ%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T200946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQC9Q7aeaTmbmABhSnq9kWLyXNyGZS1p87znPCvaj30RGgIgaQIobN663foPeERPhRiSwlvG3umG8B%2FVBLViJp%2BgOjQq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDJ%2FpGjNgP9RQE1D35ircA6m%2BcLRGwbw2xZ1BBZVtX%2Fly5GO7YP6Djj8REFLjYCbUeCPZ%2BQcr%2FAeqBxDCzRVpZc3fuP9h2Wq4O9nhMX%2FtxDEKxAq2V8wXJBXL%2FkXP6talThbht6c094KeXJY7NLI%2BYyNa6yDU670GLm8c0RPEgUsOqCGHpWfGcHxP%2Bky6jruS4WjOqfUP7JKQ8R576cpRoEA%2FT5hHSyC0%2FtvskhXitNJW%2F%2FPsbWSCN6fknc%2BDFX8ck%2FciXBSeQzzwgONIwNMCQ0YJwJcfhYnJEUIiyDNwgT6xrcY1rsuTP2eDNSF29HxNsFTmmFTGXoqbP5tenD5j6U%2FD0422OVGN6435CgVmAA%2BrWIR05vhsYXFAeb7JUJRCBJTlWSgUnbXloMYQksuAOAxC0HsfcQQzXSwH6PR5qKR%2F03rNW49ovr9A00appHuu13cbxVF1pNnlTATd%2FhAM6has5NZJ0%2BQHg5K324HDzDqzw%2FnN5AoSGc1jj0wmU3Ff3%2BR91caUVzwUdXtKafCIZq9qxRP%2FZN%2BC0q%2Fg2BNeMLycBhY9qY6LsigLUi7lkhiYejJtqmlpYUrMkZLg%2FMWChea9z3hcyHKGk%2FbF9qtTwsnl%2BUAMTZTseBeF4HCk0icVpgVDaLpaDyYYfpGmMJK8jr0GOqUBLkw13P5H1EUppbf7pS4GNa2DGnVY4ApqIOnmxeeyFzcxJAK5TX0bMeCuqo7ZY5hsz2NhumuQxXDMdNtj4RAtgRR4Ig%2FLrkN66yJ8VYaYESICE9X2B2bLOF1hWEt6CJ2ipEBBs5R94ggNYfF2XSwuUTS4V5R3GUbqfvKneMV6Fcerr5EGcTjoQYGt%2BAg1uf5XYwnuzm8QVdBzJ5Y05Wg3arCl3BXP&X-Amz-Signature=0dcbd77d469c48ab05e5483a30d4a34ac2bf8f7ddb039fc5db901bc8d02b9506&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
