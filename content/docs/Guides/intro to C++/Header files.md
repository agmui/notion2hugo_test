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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IGYAK3K%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T034723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFFoTTMOxIobp%2BVxdzuitmDJ2AaL7jiUmm6y7Cy8pxnRAiBwdtBtsZVgrrKhjeVMhJUrzApY0lkdEmP6NRjs%2B7dPsCqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzEfrw6r7QSPofGfGKtwDDHLIaCKW9tyPxDLUnttA8tPd%2FOFRWkbMTczdGUVxK%2F93JsqbcpS7PGmme0SKVGc%2B2p%2FU%2Bb%2FpOVRH8QobpQ%2BO6a0jHQJOx4MzxEkISCqactdl%2F1UjbD3gMjh%2B7d0mZNTQT7uiz5dLnacuci3vho4X7p2GAT%2FhbBFPYC1SXKTKKAzAcGNVASWNdFwhiU4lTicUYEqOAbPj1hz5ba3hlwGmPgZ81PyYlo4oa6NVhWOpPw2iaQRXpzeFAMA4hNjQSlq7JMD%2FTsz7hDpOIamniWa9k7514twO1gExM0JM1xhYACxQS4xzaaT4lop3A7EG7gFTb5PwFKtivVBjvnlfDJdGVOmGJI65aS5cjSZC1VwErjOcOqdeKXQpXYWogdyIKEGSlU%2By1kisZqhlZ7j7SplK8xTwqPzeDuo3NHCBgem7k2utIfdrGn0ZLTjr%2BNNptTl6CkQsaqqzT7FeyONXBiHZM76WHIPj5YpGwpxDJsJdm%2Brj4r7FliZfDylaW1gOmLcI3N2slFg5gcoKTw58KcISN%2FGyrNQZ9hq2XPMzWzPJv4lc%2BFPJ%2BZjrUqHUUmAvC1E3UnYIlM4fi0Cxa6hsUSwd%2F0%2BXYWGJgPTqKS%2FYWpymI41nE9MCa6jIRd7BALgw%2B7TGwwY6pgFGD78r6CJ%2FDZTprHSXZKVsZ2mkjDrg49yDWUA1RPp8mtEoMvcG4Bp%2FcdmuI0jvYvYyGFYz2X0Z6K5wy2BwClez4ShAqSEZVLF8dzBYLLufzF2e3eFsA6tq129SI2MCLusXCMrEQtSTWw0XttMLdVS54%2B7XmIwkW6X1fyq5tJmGH%2F%2B%2F5a5%2FR6QtbLaK9nGA%2F%2Bg0jwn6sIOSGAl3ovtAc1caFagU79jp&X-Amz-Signature=dbdae6a21aa13fad4320f325e0593d3584cc50f36a562901779c6ddee4ebcc8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
