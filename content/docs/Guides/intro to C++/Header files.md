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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MRUJ6JQ%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T004209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFbCal0UiusyiSe0ee8K7W7RDn6luZArWReq%2FptKRSYkAiAvb5f56SajVBjbJgk5F7Tn4ytS%2BuzYdvZnQYnDW2s%2B1Cr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMQtW41ShjYUhSyaukKtwDAP%2FSzTLjmFh9UQdea5I%2FWbzMIaACHE3Xe24MBtURakHu8ym%2FAvNrT%2B43T3mfi5WXNdk7qUdml3ynINfrkGpoLFni0VJIAHMBozxoy5KMzbNBwwIZSKJft2FLlZci7PUKkSIzavHYITN3ywZlKfN316aWil1Qz3zJ68ZxAFWn7Hxu0GQJOO6sdZGStPLML5grfyPHeqRIozEsbhE4T6OfF1HpNa5%2FXBN0Nu1PvYhwgaQWm9RxfFQB89%2Bl0aQ0R7KobiTIZSLW1%2FFZ7wNwo%2FPLq5r9EFbu4eeuoSLfXcI31LQRm%2Br7%2FXvh%2Bx2j1IZhjKWIFdQp0yPEPDm4VDMUKl38MJi0jAzJd0JB%2BChhQdR2ORidNfIVByN27VZHu%2B0CphSKpHFe6FqnDPbopQy2Kxx9lMg5Mvjo6rGGSh9odQ%2BJ7laRyKiBqvG55%2BOqXt8ZOryeRu2yhHyAZWj03dr%2Fs9KyFj%2FI0CyVOztoIRX0iTEoj1jqfyawKytn5mJnnGrWwuBBHFqW3V7R2evW6%2F1z%2Fs77MpWoA445GHmBESlD%2FcaWBZZId1hTi%2Bal6TlCU45eg0W5uFJ0nLBSGuVqJk4d8sO3TonUFsvEaflXPENclUoO8xVHt0gAKTlNnAVQZKEwjcPGvwY6pgHfXFso0JS%2BCcklwUueP9kHqHOedwWipuJKDWWPnGdgVVcx%2B9fWCE1qFNS6AUujUzrAOmPBRmGPpDSRpQafK95bjlR0MFhH25ED5GK%2FsdX6YAkXQZKVsiZgH6AHlrBmEo5BXRuaKTD1s%2BPQxKXXRWT4rTAaTLGxgUvSRYBOoTY%2FcV8r%2Bwrs1Gpct1UMW5D9H5Y1GXdll3w23jI1rGAQScRwDVaDAkIV&X-Amz-Signature=c3aa87b2fc39eceb3dea23c378abd8d1fa3ff221aec9011820c8085fda75cd24&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
