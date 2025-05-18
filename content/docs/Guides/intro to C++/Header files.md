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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZY5KQSYC%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T061132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGpv0aU%2BryZBB0bmYOx5M94GUCnetnNIlFU9ypHTdxWBAiEAmz13pE42tmLebZclVqYZ977mwd4saUx9FQo9dFm2QAMq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDDsH0M29kR2opmaNfyrcA8PPlezsmxOYlhc8ROVE6vQRskxawXFfiIhc4rHE4axZF0nuWcwW2MWsXPOdzyGVhkcTaFif7Rmu30EhL9Z8ovtVABNhi%2B%2BQn4ShzIi%2FPHqeMRCwboNmgDYKpsIt9veNXB6%2Bn%2B59jiuMD%2F78vhzftCCwmqO3zFD0GoAES5rhn6n%2B%2BSr7f9XMxeVBKG7EeWQrxtbSXX2AcqAfaHkWdfMpvHYck6LPTqAWCuPFrbyFXT7X9Oc6esWzipocsCb4e%2FTyZBIanuMqZCEev7ke8CKM5VMemF24W5tbFyA1Ladx2i2IO%2BLExaVnOx93yVegdI8asLATau6tG02v%2FQ2foQqQpz8DkKgInRHNeDBO1tz10aC5Rtd3jQ3GN3SWDbtVH5%2FuWD976xviJarML%2FLmBH3B2rdiEx8PZSX1iYCBhkknsz6GClJCNA%2BiAHoXPRKBwIgKoU1VT9R8O6AdDSqxu0pPMKfjNQruf9DQF6uZjIvgRDKrnXjZuA8NHWV6Dce%2FmpO07eS6irpG%2Bj5XACLFbuFIQBfoy38He2RKXd07rLUetJQzboHsJhTFzDZWr%2BpxhvuK32qT6bil7nx4g%2Fb94WIMPV%2FTPpxHrXn1fXxMBVuZdlyiCdt9NdJnbF5mNdh8MOqzpcEGOqUBrt%2BQR1ysWwo9uJKCTLfiQiZt6BLA526BFDVPJfyLupvcicdYDMr8XwX0Pxc8ZMqN8iXn7nhNn1Vp%2Fw7jgi64LDvPiP%2FqN2GmMFILTF5mtd8hVk5FiapRI70vJcXKH1pmIwnqcjgVw351YezkfNopcAyZ0aRN1G1vSvN2mnShTVypmMuLQB3wy4y5QzsJMMM9jm2TN7vq37DHuda4TAaaauarghS2&X-Amz-Signature=6e717d81ee6f170f820c0192a99194f8e95b55e985c2cbedc374e3605a92c769&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
