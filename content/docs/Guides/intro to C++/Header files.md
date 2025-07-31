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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZR5ZILB6%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T061459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvZnDNa0q23%2BHuMnOBnow13qNtIqcvYEp%2F11HC2e31LwIhAMXqdGdFyCkpPMtVsHGAPDebuGxIElEFpupTS2z38e9PKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyuFb3nXol0ycZUeaYq3APG0x9U5kQq2koedZO2ZC0xHAnUXSeX20wAukdZn3ELh0mtetO0IUV5pV%2B4lBNhWGdSXM9ZWGEascZ%2BBCPY8c8TKKspf77yFRngQmwUnV4et2tKGNUs6O8qHop1fZrLKA%2BO5H00bN3n%2FRjzG%2F8pr0qSxtXNytszacgxm%2Fs9jL0RegXIC7042APtfYxbKtDRxR54yth8YvlUebrXC6g2RIYiUi9Y2CwuBdUXWk9xghzvk78TO0ZEJ%2Fo5MikRH5lVMaDfCQscscirnet6PQmI18rPgOqlU4Nj%2Ff52n7LHGSpBeY%2FIFg698yWUjwAflfmhcSbslT48JdEz1G4pDwjOfJhumcLxMXD8rhSS2AnJXa3Vi9ZTM3ZkTI4iw6qYOHLxzQdp8ZFblDK1N43jM%2BAOOMaaoQ4vVE%2FXLKJXbNwXEE2J%2BQzfgwq4iYvuG3dx45z5M5cGGRtKtmPXK9bL2MPAKW%2BUanMb728lDFciN9Qff1irE4gJcc7gyJ%2FrsCCdViyHSZQ19RVO%2BNH7%2B8RfYounsp1huYB2ZBmpDSV%2BZX7nb069V6LpgQydc3WVdYdTHBIGaOtDTAPMdzPDliXIMK9E2Xiw20UJhVBvLs9HILBGzB6CTkRluskwkwVpmRVeuzCw9qvEBjqkAavyoYt31LlG4CdcpegcHLI0QiX5CL5QmKcstDzaYITdvLXZQXj2ebRJMkOikvsIQNZBQMsbXwZBBAN9lp5Nh2ZzdFoUpZAe1SrZA1OM6I2EhY64HyBpcRIRJLQviuCM3vInWQffHliq2VPHsHVBgdUPHF1RMeGAJrQf%2BthOcb2%2BVlGGknbyuOud7NkQYCkFN4h3NzXB3%2Bh8kVxTN33tMGfmYs2d&X-Amz-Signature=c837445b455e9d7395cd51ec1bfb035292c8f9182fe56bbbde720610e1cb872e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
