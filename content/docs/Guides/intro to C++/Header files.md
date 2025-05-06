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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLH4T5BN%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T140847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuIGEVRzB93q5lO8L3ZjCTSP0pNhPYGAf0NAf6nDY8ZQIgetpfHP%2Fv8xbz3ERBq1CXQCSEeji01JHkBN298y9pE3Yq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDDIQzgJpiD%2Bx%2B2xhFCrcA4JIvHBtjlnYE2NrcNhTuPCleQGBfCtPVA071oEAvHLI73HQrBL7KoeECpubrMz9cfBIH%2FYSIEk%2FBfLwQvC3Gz6H2cAGoY8zdVgmbdG6p7NH1TlyOX3trgt0gZKIBq9rPVe9wHkRDPjtGN%2FwxOkvyF4slcwcmUWDjNeI7MDPU6rvKr%2B4Bp3XbppTOO%2BQ7VbC0elKcWPP9ixrfDggF22uLXllu2QKZxiu%2BHwl2wP3gc0GqbCDaVEV4bNuyMGXBU%2FXJolY4nx3Mkes8q9tWBMBy3qQ5svZeKUOMiANaJPdzWtEgFoyeUKbBhUdU5UcTnezf5r1F%2Bj1UWNYCpL0IBtl8bMBxC5dkICC5n%2FyDtTCnmb7c%2BNzixk92xITpkkMIkMZkuGY7%2BKhtxkteGBuSUNt5W9qpnYxxI3RGp1gOfevYyhKet2dYEoQfP0pVcYugEMx9NtrUuw7rzdBHf3vTFl9%2BCQqLC1DaflcVo99lF7vmzk6t%2BQGmEN2FsRgPNwJeAUO731FSWQWITdRBMI%2Fw7LGhccgpvsSwCVVwoUz8653G6X4sTfcLzHu2fSEi0Z0ucMNu6Tk%2FjkGxkcCr%2Fhfbg7iBvL%2F1MLVvsfnxprhkeZ06tpRBaXnd8pU1B9nfxu5MOCX6MAGOqUBgDmBqCE4jdis%2B70yIOUy%2BH2fFcsiFgNYjAvtHe69P5aTrsHjKXxSQbI0bKWVk84L8qdyuaGNv2C3QiWz3Ff29MFfw3QzVKbq9ZE1QIXHfmEA1v0ibyzS19SKTL233l107rkErP32CrFARBpMTQ709wW5X9anP41Nt%2BbSPesPxAPfSQWeoAQ6z5f5y3kE%2B7ZSQpc6cNsU9DJpSHUtmETswVdlGIAT&X-Amz-Signature=ecc7d8dca06711b84d93feda0a808ae1ebb248835a4a4aed658449fd5bfbe94f&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
