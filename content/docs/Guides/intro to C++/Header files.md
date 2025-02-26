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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKFZJO3V%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T200842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQCgUZzPVV5KgnIBGH5Ie9xOIByW%2B%2F8ZvKl1VgGTTMty9AIgDqrjBP60Z42a5uZxmL0jInHCwd5Af8ZFDLRuOrEv6Roq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDAI9ZVp3qXshwENCdCrcA3wau2lVdINAh9SAJwqOEqxWOhHnFgARwgouh7AG0jc8yPPVT278RST3UJN9kARfmZ6LZ34t4oAP0%2BtYPNKsW%2FhzqOtImX%2F8nDK1pQU9h6C1utDNt4nVukuwe6KB3nd7i0u8AajsEoKWvO0dCQipvdZym%2BCEib1KtzAlSxW6lvNYGM5GaH33B5ZQIUrVvFfw5%2B41vfdzhaibqRYZH8QyP3y7SW7e33rYYd501yzHcIsb5vNKF3%2FtYyEMzrTtMUXesMhp3h2PoI%2BhOF0q2DmvQTA2aAPzkdtXmqSAsxs1GrYnbZI7%2FYWJZqnqJw7XDaViNahaLTFaV3xbd2nm%2F1uhEW7ph7X9N%2BG2tyQGSSpoctgfvBeam%2ByRD75RcmXAg01kq9xe%2Fh77lU2mmzwK2bVZip2a1ujA9xQpRIjSMMHs%2BM8PXoBBFpwLfOHHz%2BTfasWz8745iGd9GztWB3ZcyP5rYDPJnGT9Y3eXEMkBr1kYNrAtRbdA4Jtk7UTm5Ulqd2HfFhWypNoAFWS%2BeMmbFaipAZqBG2uHWwUnAwRaKE%2B%2BSAEyoSWrkDoEJfD9z8KZ7RInLntKJ8S0IRqtJ6JlhHaXYMrSNsGkkaRqMzwtm4k2kIc2W5IPvVwALlS4ua7dMM%2Fj%2Fb0GOqUBS7vMvcn%2F3UHO5JUKPp8pk2yDyy%2FZvtvtXs107u%2FKaStUYVLh%2FdH7AJI9aQBX7OdH%2BlWfgmpDTKKCVJyuf8LeizyT8103yKyI%2BzNFaVZfzIrjtsAcBn5J2y%2Bpso7xWrbZu3Qj81rP9VzOPe4yIvCIdAEP9fTA5wWsIVzu3SIElkMW9m5yVUomi%2FRstrxGhwj8WKUjKs4ZygFQCo6HqtSNVyaKYgjB&X-Amz-Signature=57decc2525332b6046fd0bd69cad2758f269f3726714ca939269fd9a9483583f&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
