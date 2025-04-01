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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DIGLZCN%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T081216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIB4V7gkznGlOGtk2KyT2qcIbCMH1Z3m4EZyRpAngwDZ6AiAx%2FYrXfd0TrVIYs0vbzZQW7pO22P227902xbGz8E4YUiqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3CjpnTZDRrhLeUpaKtwDiObDw6711hBoyztFYypVI%2Bt6J4uIeQMbVF8CUX7vzV3QZcPUJun9abI%2FdzLu1DED%2B50SRBCIGLRqVQP0BnaJf6SIJureu%2BxWSV7UadRPUgmpFQtRmhMnNmzGdEFcYpbY78%2BOSTmC8jOO3XUU%2BBr%2BcqdKcTWTh9NVX3BE9c%2B%2FKjqW1vHkbEtO0%2BlueJevLPbHCvi9ZMOJ0id%2FYMoMFmrdkfjWv1h0d2lDI%2BC2LKgAwkV5jadriJ2WZVLVQavyJdU7vIkHeBnXTB4uz%2F3VLh3QrlOaDaZmttXT8N1zu3p%2F3ShZEoHGLh8tuJNc%2BtLdlbEB47EbAIOyYiBtBwqFOLFxFvIkXr7KnTm7YbxzoxavESAEG%2BDOv%2Bd3oHXGbdoe2a%2BrNkcxfoN%2BUDFCclOoP00LFGcigouw%2B4buK8K0HOL9UuBfhIahr7JxLzxDpBVSFS7K1z43hpOKZ%2BEPWANI%2FSJiAaGgRviqU8nghRILR9Q6lF9KaKm0m3wnKtMKYIaAhahBCTVU1OkFZjLy5FSb4m6CIDsYg6S%2F1%2BurZotcWzcpY0dFy67z7qD%2B0KxJiHihCw%2B%2BFgI4sPvymgeZjJTeylJu1E7mnCMHKjif2Un4XQyusTg28OgEH1uFXwIhXxIw5bGuvwY6pgHRq0ndFSCUGOF8fe2vCbWGadPSUGAtxo95tWz4sqBS9%2Fk2LKLM0qHT9B7B99uR%2F49aQAd3F78pYMfqE%2BN4%2Fo%2F3o3Q8sQ9E4OZbJpy%2Bq3REeVgve8yjnVGqYZtwam1V%2FFbHff%2FubfYb3GwryL%2BAAWpwNe6s%2BuO1kY896SB03s%2FmMK%2BenA8V1PZa%2BYhc7w9ifr6jdGnqKq7PKY1P7X7dbn16HmO4LCto&X-Amz-Signature=2d7e91175a176e6eed0a166db23fdee852431491b48419d1709666dee6220ba3&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
