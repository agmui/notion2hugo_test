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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEOJWDDW%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T170819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHWgNLQMWJQ18FTvhJmzGH3UDU0ZzqoDpMgGyV1595%2FAIhAL%2FOZUEasog8xcp98fdcLD3APb8CcTl6Y0JFhdUtayboKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzjsYneRZnEfKknBMIq3AMmJKKoYEMt5h5XCqK5gO3HL34%2BvK9HoCOeuKwJ8BeY0In1%2Fmpbj6VTphKDM22xRfawRNNuBBNXkrpH5xuWYt3tr1utZ7Z7F%2BqmTOwo9c%2BeiSXqCUSeAnozmNT379xteACPOFQKhGanc5yT0SsKjJtowgelogMjAfmfIEkap4foyPGQ6Mm1aWKs%2F%2Fz8qtfp6KugmM2FfcFBd4oy6F9lZwFzzF%2BZXhJJlcuAuFH2DLuvYt%2FlsS1gpY7oUVsYJMGvVe5BKXPKpdxy8OMEeY76up4vY5TFyhWG7xLjIECMZpzalN1AEDnCK2uovecrgKJLsygrT7Q7d2z2u%2FjJ2hPktKJhnLvOEt1hb1zOa2E2sezfynw2bsBPVR6%2F5EH5RhGUbOXDJhQMYF8QEcNDc1RO8rwm7NURgKg7Ryi81TNPAxftaWgYuM3n%2BbjsHlRGkwKbPNevwZF35q46GQiaZMhwwVahkww%2BMTBhB0vvzw%2BVs6zF%2Bmn9JUpHYke2itvCNgF%2F86hTsCTEZkyImUpFFC1lmfm0s1ArYcrDJaXtkTOmx9Fr0WEx%2F%2BQQQEQDB043n8SXqHqrG9dAtRunbKJb1r%2FC0lTLAUb1qm6LL2nSiOMNFRFlZg4qQXxtUH0Or%2B41vzDDuO7DBjqkAb4SpdM5WfuEZKMV7%2B1Xve7%2BX0bs6XDYTrLODAHS2Y1oxFb6%2FunL8ctk9OB65hDXleYndEZTSM0S%2FAtgTiz3G4jZHV5Qrt68iXaWkPkyWvwQT5jbEpPuQbPet2TW5CIFC0MHp0V4N5hyvgr7sOV1S6iA403m%2BoXTHJNKh5I1t6JOm91XVAC4u4qPdI520Cag5N87%2B5xvNWLxBIypzH5WZ6lBcoAh&X-Amz-Signature=d3925ea08b9bcff5b6c834b27ff4d8831fb0c08505d786f7efe9a47694776785&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
