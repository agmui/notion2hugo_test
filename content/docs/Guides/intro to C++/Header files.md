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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4DSDBZE%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T150856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIGtWOT4anc8PT%2FWOwctrm0CEJpuUwdGe8FAUV1KYIlS6AiEAsduKv3uTnxRcRdonbejcFMIPHOr36jegpA3u19K1CykqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPk7q8HWbFEOLs0OmSrcA2dlZhtbJ%2Fw9aiI1JtHHaXUnj5eT2cowOnMml%2ByabDUgicIx59cHGMLG9LXOy1IhYfHv%2BQRQfXVmeYe1oA5HBJnU2H5vvsb3I8vsKCdtaF8ujE%2FgyqmxPmtWC9ih2NylJJ%2BOKEMTGbAxSFwfQ4zoakHt7cy1eTIXIoSmhMOK6x87gwEtL6sHyOFF9s9Pw0ttby42ALtvnNiLUgEpwgicFoeUhtd4fpVKnu1gFSWHnw83hc66CZRhY4Z1u42vbAtyb04I91pjHtigeUPGs%2BbY02rz3HJOjM6vv%2FEzfckJGHtpyDfPWKZhoGmem3xuFeMKgxQg1SKLm8b4Wfexu%2F5bZdEDiCp5bMHA8X2rhPxXWbE7A4G%2BAdmtBevm7cGQXPmCRgJhRZltg%2Bh6lO%2F8AE3I4TlqnsqDpyPR9UNANobSyWgTgNOiUVOizqsX2YHmgv44ajREuxZMM4yEhrYvBkqXNFQ4wKq%2BR1tVNsqosuHF0u2vPnkE3RZa8irNXvg%2Fgu1p0sKg0ISEUYarW1VoGXr8sxq1QaOakfaVt2mk85at9QPxm73P5hGZx%2FO9zm1ef09I7t0m7YFUR87KqjzgGUEdrJHlL0WseVRo%2FTK0ryKCdV7%2BN92bFPMl%2BkB4X%2FqEMKfuo8AGOqUBcSku%2Fp5N8Znsr4%2BTLpVlV5oQ2so%2Buipys7%2Fao4GOG7R9OTVTv3SV16r1xZoV6QyiHyvCv%2BvOH8jjCK7N%2FSO0pGGaGDTT4NwquyBacqQujM8Yu3%2FIlV%2FpVTWlG2iVMecY1%2FLp98gmflJ%2FmZVYDoraCJQpd%2B66wFPx%2FPWgG29dhYyl6HTiKR%2FHUdzwEwA5YBHn6%2BADgtqm3K1BRMn7d%2BIs0Yv2DGrH&X-Amz-Signature=b8268859596be5e5616a47acd9db5ec5306fc315989ced6ea348989268d21585&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
