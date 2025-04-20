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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIRNF6YD%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T230737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQDPvJWUDN1Afmm20gc4EUGv4w7lxsk%2FmQkCbQlQUnuE0wIgOMR4UGXaj9nLAmNkEJ%2FNgsucHwDR75Cj%2B9O6uSKaxfoqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNA%2BVxzZySiiuiIxbSrcA%2FyI4zBoyuDB%2BBUfgCWycHfjrpagvQp5wnCE%2FRazwELASijW5vl8I%2BykV1a1I%2FySiThPm%2B%2BINtQI8PoQL5irFLhgtFURqy5n3dEpXU4IKaagsD748W0g7jBQWICEPSxx5tpfGbohEy5Rld8OEcTLcZ4FwqWaiK0SxeIHZCrNNAYmRZQ88vxQpRFWBtDavzKYJqCUoRjcbBkNHbE3shCSgmMIZn7PFSBCJ7yNsp7alxvAJgx10HZXMtf%2BT6X9llYtPS%2FbVtILLp5XVadOiW1t0Qt9GpiXwRxpCXXek%2BFWDNnrqgGrbRmSHENKSDFoiFnlZyo4rO9EP%2BsFOXczzXb4NgrbKDoe1bUtq5XyqeTmO8CgYms7fB60DTUYeM75DPF1OduK1gwBVVFtbdnxywrLH80wOOrfepW0J20WP4eS3lmZei8eV3Tamfe8oKRcNyvpVL1uGzTaZ1Yx9CIRtEZC8NCDdwDHtV0lFw%2Bl38N5t9FpDBe1QOSGBccQcKg2USyVKb4j6yLgkvOP6KLlqq48l%2BxbtxRTiwMZte1iyphksmJaML%2FaAKMfqPt3nexgpd5KoxO6sYHg28Cr1UqK%2Bt5x2rGn9VQcrSUWGd%2FZbfFmnKyBqDYyJe7FwlDYzjDcMOrtlcAGOqUB252Q4FF7SdW3C7fVqDQwD3r8sfdB57wy9wLbSDsnesW2DPZcoOPspYo8BQIeLJtmJhkMhVXttKie%2Bl%2B74%2BoqCVRbbvY2bWd0eOEV33isSmBpaNDnX6ffdRWeJ5PeM9C5OgOKtdNPKTsNeCkMhLOUybBoQrFfbVDIWmH5GeTqL38u5xTdUYTrQ7ll3%2FHvfoSqIrfzQaWwYELLorVE%2BHiwaR5SooTQ&X-Amz-Signature=e51c8c4d9a3510e124cc356474d5307701f872d2d654f9091810f42fd7685a14&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
